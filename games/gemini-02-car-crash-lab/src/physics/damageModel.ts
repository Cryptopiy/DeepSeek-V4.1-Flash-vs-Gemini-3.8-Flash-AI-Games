import { DamageSeverity, DamageZones, ObstacleId } from '../types/simulation';

export interface DamageEvaluation {
  damagePercentage: number;
  damageSeverity: DamageSeverity;
  primaryDamageZone: string;
  damageZones: DamageZones;
}

export function evaluateVehicleDamage(
  impactSpeedKmh: number,
  vehicleMassKg: number,
  collisionAngleDeg: number,
  obstacleId: ObstacleId,
  energyDissipatedKj: number
): DamageEvaluation {
  // Obstacle stiffness coefficient
  let obstacleStiffness = 1.0;
  if (obstacleId === 'heavy_barrier') {
    obstacleStiffness = 0.72;
  } else if (obstacleId === 'lightweight_barrier') {
    obstacleStiffness = 0.34;
  }

  // Normal angle factor: cos(angle)
  const angleRad = (collisionAngleDeg * Math.PI) / 180;
  const cosAngle = Math.max(0.2, Math.cos(angleRad));
  const sinAngle = Math.sin(angleRad);

  // Reference energy threshold for modern vehicle structure:
  // 1500 kg at 60 km/h (~16.67 m/s) into rigid wall has KE = ~208 kJ.
  // We calibrate ~200 kJ into rigid wall to yield ~45% damage (moderate crumple zone collapse).
  // Catastrophic (>=85%) occurs around 100-110 km/h (~700 kJ).
  const massRatio = vehicleMassKg / 1500;
  // Kinetic energy scaled by obstacle stiffness and angle
  const effectiveEnergy = energyDissipatedKj * obstacleStiffness * Math.pow(cosAngle, 0.75);

  // Base damage formula based on absorbed crash energy
  let baseDamage = (effectiveEnergy / 450) * 80;
  
  // Add mass momentum inertia penalty (heavier cars have more momentum to stop within similar crumple zone)
  if (massRatio > 1.0) {
    baseDamage *= Math.pow(massRatio, 0.3);
  }

  // Clamping to 0-100%
  const damagePercentage = Math.min(100, Math.max(4, Math.round(baseDamage)));

  // Severity rating
  let damageSeverity: DamageSeverity = 'Minor';
  if (damagePercentage >= 80) {
    damageSeverity = 'Catastrophic';
  } else if (damagePercentage >= 50) {
    damageSeverity = 'Severe';
  } else if (damagePercentage >= 20) {
    damageSeverity = 'Moderate';
  } else {
    damageSeverity = 'Minor';
  }

  // Calculate zone distribution based on collision angle
  // If angle is positive (>5 deg), vehicle rotated right or barrier angled right -> front-right hits first
  // If angle is negative (<-5 deg), front-left hits first
  let frontCenterRatio = 0.8;
  let frontLeftRatio = 0.5;
  let frontRightRatio = 0.5;
  let leftSideRatio = 0.1;
  let rightSideRatio = 0.1;

  let primaryDamageZone = 'Front Center Bumper';

  if (collisionAngleDeg > 10) {
    primaryDamageZone = 'Front-Right Quarter / Wheel Arch';
    frontRightRatio = 1.0;
    frontCenterRatio = 0.6;
    frontLeftRatio = 0.25;
    rightSideRatio = Math.min(0.8, 0.2 + Math.abs(sinAngle) * 0.7);
    leftSideRatio = 0.05;
  } else if (collisionAngleDeg < -10) {
    primaryDamageZone = 'Front-Left Quarter / Wheel Arch';
    frontLeftRatio = 1.0;
    frontCenterRatio = 0.6;
    frontRightRatio = 0.25;
    leftSideRatio = Math.min(0.8, 0.2 + Math.abs(sinAngle) * 0.7);
    rightSideRatio = 0.05;
  } else {
    primaryDamageZone = 'Frontal Crumple Structure';
    frontCenterRatio = 1.0;
    frontLeftRatio = 0.75;
    frontRightRatio = 0.75;
    leftSideRatio = 0.1;
    rightSideRatio = 0.1;
  }

  const damageZones: DamageZones = {
    frontCenter: Math.min(100, Math.round(damagePercentage * frontCenterRatio)),
    frontLeft: Math.min(100, Math.round(damagePercentage * frontLeftRatio)),
    frontRight: Math.min(100, Math.round(damagePercentage * frontRightRatio)),
    leftSide: Math.min(100, Math.round(damagePercentage * leftSideRatio)),
    rightSide: Math.min(100, Math.round(damagePercentage * rightSideRatio))
  };

  return {
    damagePercentage,
    damageSeverity,
    primaryDamageZone,
    damageZones
  };
}
