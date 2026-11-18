import { VEHICLE_SPECS } from './constants';

export interface ForceCalculationResult {
  impulseNs: number;
  estimatedImpactForceKn: number;
  estimatedImpactForceTons: number;
  peakGForce: number;
  assumedPulseDurationMs: number;
  assumedCrumpleDistanceM: number;
  initialKineticEnergyKj: number;
  postImpactKineticEnergyKj: number;
  energyDissipatedKj: number;
}

export function calculateCrashForces(
  vehicleMassKg: number,
  impactSpeedMs: number,
  postImpactSpeedMs: number,
  angularVelocityRadS: number,
  obstacleMassKg: number,
  isObstacleFixed: boolean,
  obstacleDisplacementM: number
): ForceCalculationResult {
  // Initial Kinetic Energy (translational only before impact)
  const initialKineticEnergyJ = 0.5 * vehicleMassKg * (impactSpeedMs * impactSpeedMs);
  
  // Moment of inertia for car yaw
  const inertiaCar = vehicleMassKg * VEHICLE_SPECS.inertiaFactor;
  
  // Post-impact vehicle kinetic energy (linear + rotational)
  const postVehicleLinearKeJ = 0.5 * vehicleMassKg * (postImpactSpeedMs * postImpactSpeedMs);
  const postVehicleRotKeJ = 0.5 * inertiaCar * (angularVelocityRadS * angularVelocityRadS);
  const postImpactKineticEnergyJ = postVehicleLinearKeJ + postVehicleRotKeJ;

  // Kinetic energy dissipated into structural deformation, heat, and sound
  const energyDissipatedJ = Math.max(0, initialKineticEnergyJ - postImpactKineticEnergyJ);

  // Impulse: change in momentum along collision vector
  // Approximate effective impulse from velocity change:
  // delta_v = impactSpeedMs - postImpactSpeedMs (considering vector reversal)
  // For restitution rebound, delta_v can exceed impactSpeedMs slightly
  const deltaV = Math.sqrt(
    Math.max(0, impactSpeedMs * impactSpeedMs - postImpactSpeedMs * postImpactSpeedMs)
  ) + postImpactSpeedMs * 0.4;
  
  const impulseNs = vehicleMassKg * Math.max(deltaV, impactSpeedMs * 0.85);

  // Pulse duration estimation:
  // Rigid barrier has shorter pulse (~0.080 - 0.095s); movable barrier yields slightly longer pulse (~0.12 - 0.16s)
  let effectivePulseDurationS = VEHICLE_SPECS.baselinePulseDurationS;
  if (!isObstacleFixed) {
    // If obstacle is displaceable, pulse is prolonged proportionally to displacement
    const prolongation = Math.min(0.08, obstacleDisplacementM * 0.04);
    effectivePulseDurationS += prolongation;
  }
  
  // Average impact force: F_avg = J / delta_t
  const avgForceN = impulseNs / effectivePulseDurationS;
  // Peak force in typical sinusoidal/triangular vehicle deceleration profile is approx 1.7 - 2.0x avg force
  const peakForceN = avgForceN * 1.85;
  const estimatedImpactForceKn = Math.round((peakForceN / 1000) * 10) / 10;
  const estimatedImpactForceTons = Math.round((peakForceN / 9806.65) * 10) / 10;

  // Peak G-Force experienced by vehicle chassis
  const peakDecelMs2 = peakForceN / vehicleMassKg;
  const peakGForce = Math.round((peakDecelMs2 / 9.81) * 10) / 10;

  // Assumed crumple distance from work-energy theorem: W = F_avg * d
  const assumedCrumpleDistanceM = avgForceN > 0
    ? Math.min(1.8, Math.max(0.05, Math.round((energyDissipatedJ / avgForceN) * 100) / 100))
    : 0.1;

  return {
    impulseNs: Math.round(impulseNs),
    estimatedImpactForceKn,
    estimatedImpactForceTons,
    peakGForce,
    assumedPulseDurationMs: Math.round(effectivePulseDurationS * 1000),
    assumedCrumpleDistanceM,
    initialKineticEnergyKj: Math.round(initialKineticEnergyJ / 100) / 10,
    postImpactKineticEnergyKj: Math.round(postImpactKineticEnergyJ / 100) / 10,
    energyDissipatedKj: Math.round(energyDissipatedJ / 100) / 10
  };
}
