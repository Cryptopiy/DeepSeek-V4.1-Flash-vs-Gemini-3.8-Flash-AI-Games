import { ObstacleDefinition, ObstacleId } from '../types/simulation';

export const OBSTACLES: Record<ObstacleId, ObstacleDefinition> = {
  concrete_wall: {
    id: 'concrete_wall',
    name: 'Reinforced Concrete Wall',
    category: 'Rigid / Fixed',
    description: 'Immovable steel-reinforced concrete barrier. Absorbs virtually zero kinetic energy through motion, reflecting maximum force into the vehicle structure.',
    massKg: 500000, // Immovable anchor
    isFixed: true,
    restitution: 0.08, // Very low rebound
    friction: 0.95, // High surface shear
    width: 6.0,
    height: 2.2,
    depth: 1.5,
    color: '#475569'
  },
  heavy_barrier: {
    id: 'heavy_barrier',
    name: 'Heavy Concrete Highway Barrier',
    category: 'Movable Heavy',
    description: 'Pre-cast 2,000 kg Jersey-style highway barrier. Slides backward upon severe impact, dissipating momentum through ground friction.',
    massKg: 2000,
    isFixed: false,
    restitution: 0.18,
    friction: 0.70, // Ground sliding friction
    width: 4.2,
    height: 1.4,
    depth: 1.1,
    color: '#64748b'
  },
  lightweight_barrier: {
    id: 'lightweight_barrier',
    name: 'Plastic Water/Sand Drum Barricade',
    category: 'Displaceable Light',
    description: 'Lightweight 220 kg safety barricade. Readily displaces and deflects on impact, substantially reducing vehicle cabin deceleration.',
    massKg: 220,
    isFixed: false,
    restitution: 0.35,
    friction: 0.35, // Slides easily
    width: 2.6,
    height: 1.2,
    depth: 0.9,
    color: '#f97316'
  }
};

export const VEHICLE_SPECS = {
  length: 4.5,
  width: 1.9,
  height: 1.45,
  wheelbase: 2.7,
  // Moment of inertia factor: I = (1/12) * M * (L^2 + W^2)
  inertiaFactor: (4.5 * 4.5 + 1.9 * 1.9) / 12, // ~1.988
  // Standard test track dimensions in meters
  trackStartZ: -45.0,
  impactZoneZ: 0.0,
  trackEndZ: 30.0,
  trackWidth: 14.0,
  // Standard crash pulse duration assumption (Euro NCAP / NHTSA baseline in seconds)
  baselinePulseDurationS: 0.095
};
