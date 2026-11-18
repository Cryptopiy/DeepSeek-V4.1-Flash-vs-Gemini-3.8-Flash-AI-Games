import { getObstacle } from './obstacles';
import type {
  CrashConfig,
  CrashResult,
  DamageSeverity,
  DamageZones,
  DebrisParticle,
  ImpactData,
  ObstacleDef,
  Phase,
  Telemetry,
  Vec3,
} from './types';
import { clamp, mulberry32, normalizeDeg } from '../utils/math';

export const KPH_TO_MPS = 1 / 3.6;
export const MPS_TO_KPH = 3.6;

// --- Physical constants ---------------------------------------------------
const G = 9.81; // m/s^2
const GROUND_MU = 0.8; // tyre/ground friction for the sliding phase
const AIR_DRAG = 0.02; // per second linear drag
const CAR_LENGTH = 4.6; // m (used for visual yaw torque estimate)

// Reference dissipated energy that maps to 100 % damage.
// Chosen as the normal-direction kinetic energy of a 2000 kg car at 100 km/h.
const E_REF = 0.5 * 2000 * Math.pow(100 * KPH_TO_MPS, 2); // ≈ 0.772 MJ

const START_X = -35; // car spawn point on the track
const OBSTACLE_X = 0; // obstacle centre
const MAX_POST_TIME = 12; // hard cap on the post-impact settling window (s)
const MAX_DEBRIS = 64;
const FIXED_DT = 1 / 120;

function collide1D(m1: number, v1: number, m2: number, v2: number, e: number): [number, number] {
  const total = m1 + m2;
  const v1p = ((m1 - e * m2) * v1 + (1 + e) * m2 * v2) / total;
  const v2p = ((m2 - e * m1) * v2 + (1 + e) * m1 * v1) / total;
  return [v1p, v2p];
}

function severityOf(damagePct: number): DamageSeverity {
  if (damagePct < 20) return 'Minor';
  if (damagePct < 50) return 'Moderate';
  if (damagePct < 80) return 'Severe';
  return 'Catastrophic';
}

const DEBRIS_COLORS = ['#8b9099', '#c8452f', '#555b63', '#f0d060', '#3b4048'];

interface CarState {
  pos: Vec3;
  vel: Vec3;
  yaw: number;
  yawRate: number;
  roll: number;
  rollRate: number;
  pitch: number;
  pitchRate: number;
  speed: number;
}

interface ObstacleState {
  pos: Vec3;
  vel: Vec3;
  yaw: number;
  angVel: number;
}

/**
 * Simplified 3D rigid-body crash engine.
 *
 * The car drives along +X. The obstacle is yawed by the collision angle, so the
 * impact normal n = (cos a, 0, -sin a) and the tangential axis t = (sin a, 0, cos a)
 * are derived from real 3D geometry. A 1D momentum collision is resolved along the
 * normal and the tangential component is scrubbed by friction. The resulting velocity
 * vector, plus an impulse-derived yaw rate, drives a full 3D post-impact motion that is
 * integrated over time (translate + rotate + slide + settle).
 */
export class SimulationEngine {
  private config: CrashConfig = {
    speedKmh: 100,
    massKg: 1500,
    angleDeg: 0,
    obstacleType: 'concrete',
  };
  private obstacleDef: ObstacleDef = getObstacle('concrete');

  phase: Phase = 'idle';
  paused = false;
  timeScale = 1;
  shake = 0;

  car: CarState = this.makeCar();
  obstacle: ObstacleState = this.makeObstacle();
  debris: DebrisParticle[] = [];
  impact: ImpactData | null = null;
  lastResult: CrashResult | null = null;

  onResult?: (r: CrashResult) => void;
  onImpact?: (i: ImpactData) => void;

  private elapsed = 0;
  private postTime = 0;
  private acc = 0;
  private serial = 1;
  private rand: () => number = mulberry32(1);

  constructor() {
    this.reset();
  }

  private makeCar(): CarState {
    return {
      pos: { x: START_X, y: 0, z: 0 },
      vel: { x: 0, y: 0, z: 0 },
      yaw: 0,
      yawRate: 0,
      roll: 0,
      rollRate: 0,
      pitch: 0,
      pitchRate: 0,
      speed: 0,
    };
  }

  private makeObstacle(): ObstacleState {
    return {
      pos: { x: OBSTACLE_X, y: 0, z: 0 },
      vel: { x: 0, y: 0, z: 0 },
      yaw: 0,
      angVel: 0,
    };
  }

  getConfig(): CrashConfig {
    return { ...this.config };
  }

  getObstacleDef(): ObstacleDef {
    return this.obstacleDef;
  }

  setConfig(patch: Partial<CrashConfig>): void {
    this.config = { ...this.config, ...patch };
    this.obstacleDef = getObstacle(this.config.obstacleType);
    if (this.phase === 'idle') {
      this.placeObstacle();
    }
  }

  setTimeScale(scale: number): void {
    this.timeScale = scale;
  }

  private placeObstacle(): void {
    this.obstacle.pos = { x: OBSTACLE_X, y: 0, z: 0 };
    this.obstacle.vel = { x: 0, y: 0, z: 0 };
    this.obstacle.yaw = (this.config.angleDeg * Math.PI) / 180;
    this.obstacle.angVel = 0;
  }

  /** Full deterministic reset back to the pre-run idle scene. */
  reset(): void {
    this.phase = 'idle';
    this.paused = false;
    this.shake = 0;
    this.elapsed = 0;
    this.postTime = 0;
    this.acc = 0;
    this.impact = null;
    this.debris = [];
    this.car = this.makeCar();
    this.placeObstacle();
  }

  /** Launch a fresh crash using the current configuration. */
  run(): void {
    this.reset();
    const v = clamp(this.config.speedKmh, 10, 200) * KPH_TO_MPS;
    this.car.vel = { x: v, y: 0, z: 0 };
    this.car.speed = v;
    const seed =
      Math.round(this.config.speedKmh) * 131 +
      Math.round(this.config.massKg) * 7 +
      Math.round(this.config.angleDeg) * 17 +
      this.config.obstacleType.length * 1013;
    this.rand = mulberry32(seed);
    this.phase = 'running';
  }

  togglePause(): void {
    if (this.phase === 'running' || this.phase === 'impact') {
      this.paused = !this.paused;
    }
  }

  getTelemetry(): Telemetry {
    return {
      phase: this.phase,
      speedKmh: this.car.speed * MPS_TO_KPH,
      x: this.car.pos.x,
      z: this.car.pos.z,
      yawDeg: normalizeDeg((this.car.yaw * 180) / Math.PI),
      elapsed: this.elapsed,
      damagePct: this.impact ? this.impact.damagePct : 0,
    };
  }

  /** Advance the simulation; called every render frame. */
  update(dt: number): void {
    const scaled = Math.min(dt, 0.1) * this.timeScale;
    if (this.paused) return;
    this.updateDebris(Math.max(0, scaled));

    if (this.phase !== 'running' && this.phase !== 'impact') {
      this.acc = 0;
      return;
    }
    this.acc += scaled;
    let guard = 0;
    while (this.acc >= FIXED_DT && guard < 12) {
      this.step(FIXED_DT);
      this.acc -= FIXED_DT;
      guard++;
    }
  }

  private step(h: number): void {
    if (this.phase === 'running') {
      this.stepApproach(h);
    } else if (this.phase === 'impact') {
      this.stepPost(h);
    }
    this.shake = Math.max(0, this.shake - h * 1.1);
    this.elapsed += h;
  }

  private stepApproach(h: number): void {
    const c = this.car;
    c.pos.x += c.vel.x * h;
    c.pos.z += c.vel.z * h;

    const a = this.obstacle.yaw;
    const cosA = Math.cos(a);
    const sinA = Math.sin(a);

    // Contact normal and tangent axes from the real obstacle orientation.
    const nx = cosA;
    const nz = -sinA;
    const tx = sinA;
    const tz = cosA;

    const def = this.obstacleDef;
    const frontX = c.pos.x + CAR_LENGTH / 2;
    const front = { x: frontX - OBSTACLE_X, z: c.pos.z };

    // Transform the car's front point into the obstacle's local frame and test the box.
    const localX = front.x * cosA - front.z * sinA;
    const localZ = front.x * sinA + front.z * cosA;
    const hit = localX >= -def.size[0] / 2 && Math.abs(localZ) <= def.size[2] / 2;

    if (hit) {
      this.handleImpact(nx, nz, tx, tz);
    } else if (c.pos.x > 55 || Math.abs(c.pos.z) > 30) {
      // Safety net: car left the test area without hitting anything.
      this.finish();
    }
  }

  private handleImpact(nx: number, nz: number, tx: number, tz: number): void {
    const c = this.car;
    const def = this.obstacleDef;
    const m1 = clamp(this.config.massKg, 700, 3000);

    const impactSpeed = Math.hypot(c.vel.x, c.vel.z);
    const vn = c.vel.x * nx + c.vel.z * nz;
    if (vn <= 0) return; // already separating

    const vt = c.vel.x * tx + c.vel.z * tz;
    const v2n = this.obstacle.vel.x * nx + this.obstacle.vel.z * nz;

    const [v1p, v2p] = collide1D(m1, vn, def.mass, v2n, def.restitution);
    const impulse = m1 * (vn - v1p);
    const vtp = vt * (1 - def.friction);

    // Reconstruct the 3D post-impact velocity vector.
    c.vel.x = v1p * nx + vtp * tx;
    c.vel.z = v1p * nz + vtp * tz;
    c.speed = Math.hypot(c.vel.x, c.vel.z);

    // Give the obstacle the resulting momentum along the normal.
    this.obstacle.vel.x = v2p * nx;
    this.obstacle.vel.z = v2p * nz;
    this.obstacle.angVel = clamp(-vt * 0.04, -0.8, 0.8);

    // --- Energy accounting (only the normal component dissipates in this model) ---
    const keBeforeNormal = 0.5 * m1 * vn * vn + 0.5 * def.mass * v2n * v2n;
    const keAfterNormal = 0.5 * m1 * v1p * v1p + 0.5 * def.mass * v2p * v2p;
    const dissipated = Math.max(0, keBeforeNormal - keAfterNormal);
    // Stiffer obstacles (higher rigidity) convert more energy into structural damage.
    const stiffness = 0.75 + 0.25 * def.rigidity;
    const rawDamage = clamp((100 * dissipated * stiffness) / E_REF, 0, 100);

    const keBeforeFull = 0.5 * m1 * impactSpeed * impactSpeed;
    const keAfterFull = 0.5 * m1 * (v1p * v1p + vtp * vtp) + 0.5 * def.mass * (v2p * v2p);

    // --- Damage zones from the actual collision geometry ---
    const angleMag = Math.abs(this.config.angleDeg);
    const zones: DamageZones = { front: rawDamage, rear: 0, left: 0, right: 0 };
    if (angleMag > 15) {
      const side = rawDamage * clamp((angleMag - 15) / 45, 0, 1) * 0.75;
      if (this.config.angleDeg > 0) zones.right = side;
      else zones.left = side;
    }

    // Impulse-derived rotation, so the car visibly spins/rolls from the real contact.
    c.yawRate += ((vt - vtp) / CAR_LENGTH) * 2.5;
    c.yawRate = clamp(c.yawRate, -4, 4);
    c.rollRate += clamp(-vt * 0.06, -1.6, 1.6);
    c.pitchRate += clamp(-vn * 0.03, -1.0, 1.0);

    const point: Vec3 = {
      x: c.pos.x + CAR_LENGTH / 2,
      y: 0.65,
      z: c.pos.z,
    };

    const impact: ImpactData = {
      forceN: impulse / def.impactDuration,
      impulseNs: impulse,
      damagePct: rawDamage,
      zones,
      normalSpeedKmh: vn * MPS_TO_KPH,
      impactSpeedKmh: impactSpeed * MPS_TO_KPH,
      energyBeforeJ: keBeforeFull,
      energyAfterJ: keAfterFull,
      point,
      obstacleName: def.name,
      impactDuration: def.impactDuration,
    };

    this.impact = impact;
    this.spawnDebris(point, nx, nz, tx, tz, rawDamage);
    this.shake = clamp(dissipated / 1_500_000 + 0.05, 0, 0.8);
    this.postTime = 0;
    this.phase = 'impact';

    this.onImpact?.(impact);
  }

  private stepPost(h: number): void {
    const c = this.car;
    this.postTime += h;

    // Ground friction decelerates the sliding car.
    const speed = Math.hypot(c.vel.x, c.vel.z);
    if (speed > 0.01) {
      const dv = Math.min(GROUND_MU * G * h, speed);
      c.vel.x -= (c.vel.x / speed) * dv;
      c.vel.z -= (c.vel.z / speed) * dv;
    }
    const drag = 1 - AIR_DRAG * h;
    c.vel.x *= drag;
    c.vel.z *= drag;

    c.pos.x += c.vel.x * h;
    c.pos.z += c.vel.z * h;

    // Rotational motion with damping (yaw persists, roll/pitch spring back).
    c.yaw += c.yawRate * h;
    c.yawRate *= Math.exp(-2.5 * h);
    if (Math.abs(c.yawRate) < 0.02) c.yawRate = 0;

    c.roll += c.rollRate * h;
    c.rollRate += (-10 * c.roll - 4 * c.rollRate) * h;
    c.pitch += c.pitchRate * h;
    c.pitchRate += (-10 * c.pitch - 4 * c.pitchRate) * h;

    c.speed = Math.hypot(c.vel.x, c.vel.z);
    c.pos.x = clamp(c.pos.x, -80, 80);
    c.pos.z = clamp(c.pos.z, -40, 40);

    // Obstacle sliding.
    const o = this.obstacle;
    const os = Math.hypot(o.vel.x, o.vel.z);
    if (os > 0.01) {
      const dv = Math.min(GROUND_MU * 1.2 * G * h, os);
      o.vel.x -= (o.vel.x / os) * dv;
      o.vel.z -= (o.vel.z / os) * dv;
    }
    o.pos.x += o.vel.x * h;
    o.pos.z += o.vel.z * h;
    o.yaw += o.angVel * h;
    o.angVel *= Math.exp(-3 * h);
    o.pos.x = clamp(o.pos.x, -15, 60);

    const settled =
      this.postTime > MAX_POST_TIME ||
      (this.postTime > 0.5 && c.speed < 0.35 && Math.abs(c.yawRate) < 0.08 && os < 0.3);
    if (settled) this.finish();
  }

  private finish(): void {
    const c = this.car;
    c.vel = { x: 0, y: 0, z: 0 };
    c.speed = 0;
    c.yawRate = 0;
    c.rollRate = 0;
    c.pitchRate = 0;
    this.obstacle.vel = { x: 0, y: 0, z: 0 };
    this.obstacle.angVel = 0;

    const i = this.impact;
    if (!i) {
      this.phase = 'idle';
      return;
    }

    const result: CrashResult = {
      id: this.serial++,
      initialSpeedKmh: this.config.speedKmh,
      impactSpeedKmh: i.impactSpeedKmh,
      massKg: this.config.massKg,
      angleDeg: this.config.angleDeg,
      obstacleType: this.obstacleDef.id,
      obstacleName: this.obstacleDef.name,
      impactForceN: i.forceN,
      damagePct: i.damagePct,
      severity: severityOf(i.damagePct),
      finalX: c.pos.x,
      finalY: c.pos.y,
      finalZ: c.pos.z,
      finalYawDeg: normalizeDeg((c.yaw * 180) / Math.PI),
      energyBeforeJ: i.energyBeforeJ,
      energyAfterJ: i.energyAfterJ,
      normalComponentKmh: i.normalSpeedKmh,
    };

    this.lastResult = result;
    this.phase = 'settled';
    this.onResult?.(result);
  }

  private spawnDebris(point: Vec3, nx: number, nz: number, tx: number, tz: number, damage: number): void {
    const count = Math.round(clamp((damage / 100) * 44 + 5, 5, 48));
    for (let i = 0; i < count; i++) {
      const out = 0.4 + this.rand() * 0.7;
      const lat = (this.rand() - 0.5) * 2;
      const speed = (3 + this.rand() * 10) * (0.4 + damage / 100);
      const particle: DebrisParticle = {
        pos: {
          x: point.x + (this.rand() - 0.5) * 1.2,
          y: 0.4 + this.rand() * 1.4,
          z: point.z + (this.rand() - 0.5) * 1.8,
        },
        vel: {
          x: (-nx * out + tx * lat) * speed + this.car.vel.x * 0.25,
          y: 2 + this.rand() * 6,
          z: (-nz * out + tz * lat) * speed + this.car.vel.z * 0.25,
        },
        life: 1.5 + this.rand() * 2,
        maxLife: 3.5,
        size: 0.12 + this.rand() * 0.22,
        color: DEBRIS_COLORS[Math.floor(this.rand() * DEBRIS_COLORS.length)],
        spin: (this.rand() - 0.5) * 12,
      };
      this.debris.push(particle);
    }
    while (this.debris.length > MAX_DEBRIS) this.debris.shift();
  }

  private updateDebris(dt: number): void {
    if (this.debris.length === 0) return;
    const alive: DebrisParticle[] = [];
    for (const d of this.debris) {
      d.vel.y -= G * dt;
      d.pos.x += d.vel.x * dt;
      d.pos.y += d.vel.y * dt;
      d.pos.z += d.vel.z * dt;
      if (d.pos.y < 0.06) {
        d.pos.y = 0.06;
        d.vel.y = -d.vel.y * 0.35;
        d.vel.x *= 0.7;
        d.vel.z *= 0.7;
      }
      d.life -= dt;
      if (d.life > 0) alive.push(d);
    }
    this.debris = alive;
  }
}