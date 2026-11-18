export type ObstacleId = 'concrete_wall' | 'heavy_barrier' | 'lightweight_barrier';

export interface ObstacleDefinition {
  id: ObstacleId;
  name: string;
  category: string;
  description: string;
  massKg: number; // 100,000+ for immovable, 2000 for heavy, 250 for light
  isFixed: boolean;
  restitution: number; // 0.05 to 0.4
  friction: number; // ground sliding friction coefficient
  width: number;
  height: number;
  depth: number;
  color: string;
}

export type SimulationStatus = 'IDLE' | 'ACCELERATING' | 'IMPACT' | 'POST_IMPACT' | 'SETTLED';

export type CameraMode = 'cinematic' | 'orbit' | 'trackside' | 'chase' | 'top_down';

export type DamageSeverity = 'Minor' | 'Moderate' | 'Severe' | 'Catastrophic';

export interface DamageZones {
  frontCenter: number;
  frontLeft: number;
  frontRight: number;
  leftSide: number;
  rightSide: number;
}

export interface SimulationParams {
  speedKmh: number;        // 10 to 200 km/h
  massKg: number;          // 700 to 3000 kg
  angleDeg: number;        // -60 to +60 degrees
  obstacleId: ObstacleId;
  timeScale: number;       // 0.2, 0.5, 1.0
  soundEnabled: boolean;
}

export interface LiveTelemetry {
  speedKmh: number;
  speedMs: number;
  position: { x: number; y: number; z: number };
  headingDeg: number;
  longitudinalG: number;
  lateralG: number;
  totalG: number;
  distanceToImpactM: number;
  timeElapsedS: number;
  status: SimulationStatus;
  obstaclePosition?: { x: number; y: number; z: number };
  obstacleHeadingDeg?: number;
}

export interface CrashResult {
  id: string;
  runNumber: number;
  timestamp: Date;
  configuredSpeedKmh: number;
  impactSpeedKmh: number;
  impactSpeedMs: number;
  vehicleMassKg: number;
  collisionAngleDeg: number;
  obstacleId: ObstacleId;
  obstacleName: string;
  
  // Dynamics & Forces
  impulseNs: number;
  estimatedImpactForceKn: number;
  estimatedImpactForceTons: number;
  peakGForce: number;
  assumedPulseDurationMs: number;
  assumedCrumpleDistanceM: number;
  
  // Energy
  initialKineticEnergyKj: number;
  postImpactKineticEnergyKj: number;
  energyDissipatedKj: number;
  
  // Damage
  damagePercentage: number;
  damageSeverity: DamageSeverity;
  primaryDamageZone: string;
  damageZones: DamageZones;
  
  // Final resting position
  finalPosition: { x: number; y: number; z: number };
  finalDistanceToImpactM: number;
  finalRotationDeg: number;
  obstacleDisplacementM: number;
}
