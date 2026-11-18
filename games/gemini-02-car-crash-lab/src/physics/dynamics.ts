import { OBSTACLES, VEHICLE_SPECS } from './constants';
import { CrashResult, LiveTelemetry, ObstacleId, SimulationParams, SimulationStatus } from '../types/simulation';
import { calculateCrashForces } from './forceCalculator';
import { evaluateVehicleDamage } from './damageModel';

export interface RigidBody2D {
  x: number;
  z: number;
  vx: number;
  vz: number;
  angle: number; // in radians
  omega: number; // angular velocity rad/s
  mass: number;
  inertia: number;
}

export class CrashSimulationEngine {
  public status: SimulationStatus = 'IDLE';
  public params: SimulationParams;
  
  // Car state
  public car: RigidBody2D;
  public carPitch: number = 0; // Front suspension dive/rebound
  public carPitchVelocity: number = 0;
  public carRoll: number = 0;
  
  // Obstacle state
  public obstacle: RigidBody2D;
  public obstacleInitialAngle: number = 0;

  // Impact tracking
  public hasCollided: boolean = false;
  public impactSpeedMs: number = 0;
  public impactTimeS: number = 0;
  public postImpactSpeedMs: number = 0;
  public peakDecelG: number = 0;
  public lastImpactResult: CrashResult | null = null;
  public runCounter: number = 0;

  // Simulation time
  public elapsedTimeS: number = 0;
  public settledTimerS: number = 0;

  // Event callbacks
  public onImpact?: (speedKmh: number, contactX: number, contactZ: number, normalX: number, normalZ: number) => void;
  public onSettled?: (result: CrashResult) => void;

  constructor(params: SimulationParams) {
    this.params = { ...params };
    this.car = this.createInitialCar();
    this.obstacle = this.createInitialObstacle();
  }

  public updateParams(newParams: Partial<SimulationParams>) {
    this.params = { ...this.params, ...newParams };
    if (this.status === 'IDLE') {
      this.reset();
    }
  }

  private createInitialCar(): RigidBody2D {
    const mass = this.params.massKg;
    const inertia = mass * VEHICLE_SPECS.inertiaFactor;
    return {
      x: 0,
      z: VEHICLE_SPECS.trackStartZ,
      vx: 0,
      vz: 0,
      angle: 0,
      omega: 0,
      mass,
      inertia
    };
  }

  private createInitialObstacle(): RigidBody2D {
    const obsDef = OBSTACLES[this.params.obstacleId];
    const angleRad = (this.params.angleDeg * Math.PI) / 180;
    this.obstacleInitialAngle = angleRad;
    const inertia = (1 / 12) * obsDef.massKg * (obsDef.width * obsDef.width + obsDef.depth * obsDef.depth);
    return {
      x: 0,
      z: VEHICLE_SPECS.impactZoneZ,
      vx: 0,
      vz: 0,
      angle: angleRad,
      omega: 0,
      mass: obsDef.massKg,
      inertia
    };
  }

  public reset() {
    this.status = 'IDLE';
    this.car = this.createInitialCar();
    this.obstacle = this.createInitialObstacle();
    this.carPitch = 0;
    this.carPitchVelocity = 0;
    this.carRoll = 0;
    this.hasCollided = false;
    this.impactSpeedMs = 0;
    this.impactTimeS = 0;
    this.postImpactSpeedMs = 0;
    this.peakDecelG = 0;
    this.elapsedTimeS = 0;
    this.settledTimerS = 0;
  }

  public start() {
    if (this.status !== 'IDLE') {
      this.reset();
    }
    this.status = 'ACCELERATING';
  }

  public step(dt: number) {
    if (this.status === 'IDLE' || this.status === 'SETTLED') {
      return;
    }

    // Cap dt to prevent physics simulation tunneling
    const maxSubStep = 0.016;
    let remainingDt = Math.min(dt, 0.05);

    while (remainingDt > 0) {
      const subDt = Math.min(remainingDt, maxSubStep);
      this.physicsSubStep(subDt);
      remainingDt -= subDt;
    }
  }

  private physicsSubStep(dt: number) {
    this.elapsedTimeS += dt;
    const targetSpeedMs = (this.params.speedKmh * 1000) / 3600;

    // --- PHASE 1: ACCELERATION / APPROACH ---
    if (this.status === 'ACCELERATING') {
      const accelRate = 7.5; // m/s^2 smooth launch
      if (this.car.vz < targetSpeedMs) {
        this.car.vz = Math.min(targetSpeedMs, this.car.vz + accelRate * dt);
        // Suspension pitch squat during acceleration
        this.carPitch = -0.015 * (this.car.vz / targetSpeedMs);
      } else {
        this.car.vz = targetSpeedMs;
        this.carPitch = 0;
      }
      this.car.z += this.car.vz * dt;

      // Check collision with obstacle
      this.checkCollision();
      return;
    }

    // --- PHASE 2 & 3: IMPACT & POST-IMPACT SLIDE ---
    if (this.status === 'IMPACT' || this.status === 'POST_IMPACT') {
      // Simulate Car Kinematics
      this.car.x += this.car.vx * dt;
      this.car.z += this.car.vz * dt;
      this.car.angle += this.car.omega * dt;

      // Suspension pitch & roll oscillation post impact
      const springK = 65.0;
      const dampingC = 8.5;
      const pitchAcc = -springK * this.carPitch - dampingC * this.carPitchVelocity;
      this.carPitchVelocity += pitchAcc * dt;
      this.carPitch += this.carPitchVelocity * dt;

      // Lateral roll based on angular spin
      this.carRoll = -Math.sin(this.car.omega) * 0.08;

      // Tire & ground friction (coulomb + viscous drag)
      const speed = Math.sqrt(this.car.vx * this.car.vx + this.car.vz * this.car.vz);
      if (speed > 0.001) {
        // Friction coefficient for locked/sliding tires on dry asphalt ~0.75
        const tireFrictionCoeff = 0.78;
        const decel = tireFrictionCoeff * 9.81;
        const newSpeed = Math.max(0, speed - decel * dt);
        const ratio = newSpeed / speed;
        this.car.vx *= ratio;
        this.car.vz *= ratio;
      } else {
        this.car.vx = 0;
        this.car.vz = 0;
      }

      // Angular rotational friction from tire scrub
      const rotDamping = 4.2;
      if (Math.abs(this.car.omega) > 0.001) {
        const sign = Math.sign(this.car.omega);
        const newOmega = Math.max(0, Math.abs(this.car.omega) - rotDamping * dt) * sign;
        this.car.omega = newOmega;
      } else {
        this.car.omega = 0;
      }

      // Simulate Obstacle Kinematics (if not fixed)
      const obsDef = OBSTACLES[this.params.obstacleId];
      if (!obsDef.isFixed) {
        this.obstacle.x += this.obstacle.vx * dt;
        this.obstacle.z += this.obstacle.vz * dt;
        this.obstacle.angle += this.obstacle.omega * dt;

        const obsSpeed = Math.sqrt(this.obstacle.vx * this.obstacle.vx + this.obstacle.vz * this.obstacle.vz);
        if (obsSpeed > 0.001) {
          const obsDecel = obsDef.friction * 9.81;
          const newObsSpeed = Math.max(0, obsSpeed - obsDecel * dt);
          const obsRatio = newObsSpeed / obsSpeed;
          this.obstacle.vx *= obsRatio;
          this.obstacle.vz *= obsRatio;
        } else {
          this.obstacle.vx = 0;
          this.obstacle.vz = 0;
        }

        // Obstacle rotational friction
        if (Math.abs(this.obstacle.omega) > 0.001) {
          const obsRotDamping = 3.8;
          const sign = Math.sign(this.obstacle.omega);
          this.obstacle.omega = Math.max(0, Math.abs(this.obstacle.omega) - obsRotDamping * dt) * sign;
        } else {
          this.obstacle.omega = 0;
        }
      }

      // Secondary bumper-barrier separation / spring guard to prevent interpenetration
      this.resolveSecondaryOverlap();

      // Check for settling
      const currentSpeed = Math.sqrt(this.car.vx * this.car.vx + this.car.vz * this.car.vz);
      const isCarStopped = currentSpeed < 0.12 && Math.abs(this.car.omega) < 0.04;
      const isObsStopped = obsDef.isFixed || (Math.sqrt(this.obstacle.vx * this.obstacle.vx + this.obstacle.vz * this.obstacle.vz) < 0.1);

      if (isCarStopped && isObsStopped) {
        this.settledTimerS += dt;
        if (this.settledTimerS >= 0.5) {
          this.finalizeCrash();
        }
      } else {
        this.settledTimerS = 0;
      }

      // Timeout failsafe: settle after 4.5 seconds post impact
      if (this.elapsedTimeS - this.impactTimeS > 4.5) {
        this.finalizeCrash();
      }
    }
  }

  private checkCollision() {
    const carHalfLength = VEHICLE_SPECS.length / 2;
    const carHalfWidth = VEHICLE_SPECS.width / 2;
    
    // Front bumper corners in world coordinates
    const frontCenterZ = this.car.z + carHalfLength;
    const frontCenterX = this.car.x;

    const obsDef = OBSTACLES[this.params.obstacleId];
    const obsAngle = this.obstacle.angle; // rotated around Y
    const normal = {
      x: -Math.sin(obsAngle),
      z: -Math.cos(obsAngle)
    };

    // Obstacle front plane: point on plane is (obstacle.x, obstacle.z - (obsDef.depth / 2) * cos(obsAngle))
    const planePointZ = this.obstacle.z - (obsDef.depth / 2) * Math.cos(obsAngle);
    const planePointX = this.obstacle.x + (obsDef.depth / 2) * Math.sin(obsAngle);

    // Front corners of car:
    // Left corner: (-carHalfWidth, frontCenterZ)
    // Right corner: (+carHalfWidth, frontCenterZ)
    const corners = [
      { x: frontCenterX - carHalfWidth, z: frontCenterZ },
      { x: frontCenterX, z: frontCenterZ },
      { x: frontCenterX + carHalfWidth, z: frontCenterZ }
    ];

    let collided = false;
    let contactPoint = { x: 0, z: 0 };
    let minDistance = 999;

    for (const c of corners) {
      // Signed distance to obstacle front face: (c - planePoint) . normal
      const dist = (c.x - planePointX) * normal.x + (c.z - planePointZ) * normal.z;
      if (dist <= 0) {
        collided = true;
        if (dist < minDistance) {
          minDistance = dist;
          contactPoint = { x: c.x, z: c.z };
        }
      }
    }

    if (collided && !this.hasCollided) {
      this.handleImpact(contactPoint, normal);
    }
  }

  private handleImpact(contactPoint: { x: number; z: number }, normal: { x: number; z: number }) {
    this.hasCollided = true;
    this.status = 'IMPACT';
    this.impactTimeS = this.elapsedTimeS;
    this.impactSpeedMs = Math.sqrt(this.car.vx * this.car.vx + this.car.vz * this.car.vz);

    const obsDef = OBSTACLES[this.params.obstacleId];

    // Contact vector relative to car center of mass
    const rCar = {
      x: contactPoint.x - this.car.x,
      z: contactPoint.z - this.car.z
    };

    // Contact vector relative to obstacle center of mass
    const rObs = {
      x: contactPoint.x - this.obstacle.x,
      z: contactPoint.z - this.obstacle.z
    };

    // Collision normal vector (normalized)
    const lenN = Math.hypot(normal.x, normal.z) || 1;
    const nx = normal.x / lenN;
    const nz = normal.z / lenN;

    // Tangent vector
    const tx = -nz;
    const tz = nx;

    // 2D Cross product in XZ plane: (r x n)_y = rx * nz - rz * nx
    const rCarCrossN = rCar.x * nz - rCar.z * nx;
    const rObsCrossN = rObs.x * nz - rObs.z * nx;

    const rCarCrossT = rCar.x * tz - rCar.z * tx;
    const rObsCrossT = rObs.x * tz - rObs.z * tx;

    // Relative velocity at contact point
    const vCarContact = {
      x: this.car.vx - this.car.omega * rCar.z,
      z: this.car.vz + this.car.omega * rCar.x
    };
    const vObsContact = obsDef.isFixed
      ? { x: 0, z: 0 }
      : {
          x: this.obstacle.vx - this.obstacle.omega * rObs.z,
          z: this.obstacle.vz + this.obstacle.omega * rObs.x
        };

    const vRel = {
      x: vCarContact.x - vObsContact.x,
      z: vCarContact.z - vObsContact.z
    };

    const vRelN = vRel.x * nx + vRel.z * nz;
    const vRelT = vRel.x * tx + vRel.z * tz;

    // Only compute impulse if bodies are moving towards each other
    if (vRelN < 0) {
      const restitution = obsDef.restitution;

      // Effective mass for normal impulse
      const invMassCar = 1 / this.car.mass;
      const invMassObs = obsDef.isFixed ? 0 : 1 / this.obstacle.mass;
      const invInertiaCar = 1 / this.car.inertia;
      const invInertiaObs = obsDef.isFixed ? 0 : 1 / this.obstacle.inertia;

      const kn = invMassCar + invMassObs + (rCarCrossN * rCarCrossN) * invInertiaCar + (rObsCrossN * rObsCrossN) * invInertiaObs;
      const jn = -(1 + restitution) * vRelN / kn;

      // Tangential friction impulse
      const kt = invMassCar + invMassObs + (rCarCrossT * rCarCrossT) * invInertiaCar + (rObsCrossT * rObsCrossT) * invInertiaObs;
      const maxFriction = 0.38; // Friction between crushed metal and obstacle surface
      const jtMax = jn * maxFriction;
      const jtRaw = -vRelT / kt;
      const jt = Math.max(-jtMax, Math.min(jtMax, jtRaw));

      // Combined impulse vector applied to car
      const jx = jn * nx + jt * tx;
      const jz = jn * nz + jt * tz;

      // Update Car Velocities
      this.car.vx += jx * invMassCar;
      this.car.vz += jz * invMassCar;
      this.car.omega += (rCar.x * jz - rCar.z * jx) * invInertiaCar;

      // Update Obstacle Velocities
      if (!obsDef.isFixed) {
        this.obstacle.vx -= jx * invMassObs;
        this.obstacle.vz -= jz * invMassObs;
        this.obstacle.omega -= (rObs.x * jz - rObs.z * jx) * invInertiaObs;
      }

      // Pitch dive on violent front impact
      this.carPitch = 0.08;
      this.carPitchVelocity = -1.2;

      this.postImpactSpeedMs = Math.sqrt(this.car.vx * this.car.vx + this.car.vz * this.car.vz);

      // Trigger visual & audio impact event
      if (this.onImpact) {
        const speedKmh = Math.round(this.impactSpeedMs * 3.6);
        this.onImpact(speedKmh, contactPoint.x, contactPoint.z, nx, nz);
      }
    }

    // Switch to post-impact slide
    setTimeout(() => {
      if (this.status === 'IMPACT') {
        this.status = 'POST_IMPACT';
      }
    }, 40);
  }

  private resolveSecondaryOverlap() {
    const obsDef = OBSTACLES[this.params.obstacleId];
    const carHalfLength = VEHICLE_SPECS.length / 2;
    const frontZ = this.car.z + carHalfLength * Math.cos(this.car.angle);
    const frontX = this.car.x + carHalfLength * Math.sin(this.car.angle);

    const obsAngle = this.obstacle.angle;
    const planePointZ = this.obstacle.z - (obsDef.depth / 2) * Math.cos(obsAngle);
    const planePointX = this.obstacle.x + (obsDef.depth / 2) * Math.sin(obsAngle);
    const normal = {
      x: -Math.sin(obsAngle),
      z: -Math.cos(obsAngle)
    };

    const dist = (frontX - planePointX) * normal.x + (frontZ - planePointZ) * normal.z;
    if (dist < -0.05) {
      // Repel penetration
      const penetration = -dist;
      const repelDist = penetration * 0.4;
      this.car.x += normal.x * repelDist;
      this.car.z += normal.z * repelDist;
      if (!obsDef.isFixed) {
        this.obstacle.x -= normal.x * repelDist * 0.5;
        this.obstacle.z -= normal.z * repelDist * 0.5;
      }
    }
  }

  private finalizeCrash() {
    this.status = 'SETTLED';
    this.runCounter += 1;

    const obsDef = OBSTACLES[this.params.obstacleId];
    const impactSpeedKmh = Math.round(this.impactSpeedMs * 3.6);

    const obstacleDisplacementM = Math.hypot(
      this.obstacle.x - 0,
      this.obstacle.z - VEHICLE_SPECS.impactZoneZ
    );

    // Calculate Forces & Energy
    const forces = calculateCrashForces(
      this.car.mass,
      this.impactSpeedMs,
      this.postImpactSpeedMs,
      this.car.omega,
      this.obstacle.mass,
      obsDef.isFixed,
      obstacleDisplacementM
    );

    // Calculate Damage
    const damage = evaluateVehicleDamage(
      impactSpeedKmh,
      this.car.mass,
      this.params.angleDeg,
      this.params.obstacleId,
      forces.energyDissipatedKj
    );

    const finalDistanceM = Math.round(Math.hypot(this.car.x, this.car.z - VEHICLE_SPECS.impactZoneZ) * 10) / 10;
    const finalRotDeg = Math.round((this.car.angle * 180) / Math.PI);

    const result: CrashResult = {
      id: `CRASH-${Date.now()}-${this.runCounter}`,
      runNumber: this.runCounter,
      timestamp: new Date(),
      configuredSpeedKmh: this.params.speedKmh,
      impactSpeedKmh,
      impactSpeedMs: Math.round(this.impactSpeedMs * 10) / 10,
      vehicleMassKg: this.car.mass,
      collisionAngleDeg: this.params.angleDeg,
      obstacleId: this.params.obstacleId,
      obstacleName: obsDef.name,
      impulseNs: forces.impulseNs,
      estimatedImpactForceKn: forces.estimatedImpactForceKn,
      estimatedImpactForceTons: forces.estimatedImpactForceTons,
      peakGForce: forces.peakGForce,
      assumedPulseDurationMs: forces.assumedPulseDurationMs,
      assumedCrumpleDistanceM: forces.assumedCrumpleDistanceM,
      initialKineticEnergyKj: forces.initialKineticEnergyKj,
      postImpactKineticEnergyKj: forces.postImpactKineticEnergyKj,
      energyDissipatedKj: forces.energyDissipatedKj,
      damagePercentage: damage.damagePercentage,
      damageSeverity: damage.damageSeverity,
      primaryDamageZone: damage.primaryDamageZone,
      damageZones: damage.damageZones,
      finalPosition: {
        x: Math.round(this.car.x * 100) / 100,
        y: 0,
        z: Math.round(this.car.z * 100) / 100
      },
      finalDistanceToImpactM: finalDistanceM,
      finalRotationDeg: finalRotDeg,
      obstacleDisplacementM: Math.round(obstacleDisplacementM * 100) / 100
    };

    this.lastImpactResult = result;
    if (this.onSettled) {
      this.onSettled(result);
    }
  }

  public getLiveTelemetry(): LiveTelemetry {
    const speedMs = Math.sqrt(this.car.vx * this.car.vx + this.car.vz * this.car.vz);
    const speedKmh = Math.round(speedMs * 3.6);
    const distToImpact = Math.round((VEHICLE_SPECS.impactZoneZ - (this.car.z + VEHICLE_SPECS.length / 2)) * 10) / 10;
    const headingDeg = Math.round((this.car.angle * 180) / Math.PI);

    // Approximate instantaneous G forces
    let longG = 0;
    let latG = 0;
    if (this.status === 'ACCELERATING') {
      longG = 0.76;
    } else if (this.status === 'IMPACT') {
      longG = -this.peakDecelG || -18.5;
      latG = Math.abs(this.car.omega) * 3.5;
    } else if (this.status === 'POST_IMPACT') {
      longG = -0.78;
      latG = Math.abs(this.car.omega) * 1.8;
    }

    const totalG = Math.round(Math.hypot(longG, latG) * 10) / 10;

    return {
      speedKmh,
      speedMs: Math.round(speedMs * 10) / 10,
      position: {
        x: Math.round(this.car.x * 100) / 100,
        y: 0,
        z: Math.round(this.car.z * 100) / 100
      },
      headingDeg,
      longitudinalG: Math.round(longG * 10) / 10,
      lateralG: Math.round(latG * 10) / 10,
      totalG,
      distanceToImpactM: Math.max(0, distToImpact),
      timeElapsedS: Math.round(this.elapsedTimeS * 100) / 100,
      status: this.status,
      obstaclePosition: {
        x: Math.round(this.obstacle.x * 100) / 100,
        y: 0,
        z: Math.round(this.obstacle.z * 100) / 100
      },
      obstacleHeadingDeg: Math.round((this.obstacle.angle * 180) / Math.PI)
    };
  }
}
