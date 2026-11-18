// Shared domain types for the Car Crash Lab simulation.

export type ObstacleTypeId = 'concrete' | 'heavy' | 'light';

/** Physical + visual description of an obstacle. */
export interface ObstacleDef {
  id: ObstacleTypeId;
  name: string;
  /** Effective mass in kilograms. A very large value approximates an immovable wall. */
  mass: number;
  /** Coefficient of restitution (0 = fully inelastic, 1 = perfectly elastic). */
  restitution: number;
  /** Tangential friction coefficient applied to the sliding component. */
  friction: number;
  /** Qualitative stiffness 0..1, used to bias damage (concrete = 1). */
  rigidity: number;
  /** Assumed impact duration (seconds) used to convert impulse into an average force. */
  impactDuration: number;
  /** Display colour. */
  color: string;
  /** Box size [x, y, z] in metres (x = thickness across the crash normal). */
  size: [number, number, number];
  /** Whether the obstacle can be pushed. */
  movable: boolean;
}

export interface CrashConfig {
  speedKmh: number;
  massKg: number;
  angleDeg: number;
  obstacleType: ObstacleTypeId;
}

export interface DamageZones {
  front: number;
  rear: number;
  left: number;
  right: number;
}

export type DamageSeverity = 'Minor' | 'Moderate' | 'Severe' | 'Catastrophic';

export interface CrashResult {
  id: number;
  initialSpeedKmh: number;
  impactSpeedKmh: number;
  massKg: number;
  angleDeg: number;
  obstacleType: ObstacleTypeId;
  obstacleName: string;
  impactForceN: number;
  damagePct: number;
  severity: DamageSeverity;
  finalX: number;
  finalY: number;
  finalZ: number;
  finalYawDeg: number;
  energyBeforeJ: number;
  energyAfterJ: number;
  normalComponentKmh: number;
}

export type Phase = 'idle' | 'running' | 'impact' | 'settled';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface DebrisParticle {
  pos: Vec3;
  vel: Vec3;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  spin: number;
}

export interface ImpactData {
  forceN: number;
  impulseNs: number;
  damagePct: number;
  zones: DamageZones;
  normalSpeedKmh: number;
  impactSpeedKmh: number;
  energyBeforeJ: number;
  energyAfterJ: number;
  point: Vec3;
  obstacleName: string;
  impactDuration: number;
}

export interface Telemetry {
  phase: Phase;
  speedKmh: number;
  x: number;
  z: number;
  yawDeg: number;
  elapsed: number;
  damagePct: number;
}