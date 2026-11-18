import type { ObstacleDef, ObstacleTypeId } from './types';

/**
 * Obstacle presets.
 *
 * The behaviour of a crash is driven by:
 *  - `mass`         : how much momentum the obstacle can absorb / carry away.
 *  - `restitution`  : fraction of normal approach velocity returned as rebound.
 *  - `friction`     : how much the tangential (sliding) component is scrubbed off.
 *  - `impactDuration`: assumed contact time used only to turn the impulse into an
 *                      *estimated* average force (F ≈ J / Δt).
 *
 * The concrete wall uses a mass three orders of magnitude above the car so it is
 * effectively immovable without special-casing the maths.
 */
export const OBSTACLES: Record<ObstacleTypeId, ObstacleDef> = {
  concrete: {
    id: 'concrete',
    name: 'Concrete Wall',
    mass: 1_000_000,
    restitution: 0.08,
    friction: 0.7,
    rigidity: 1.0,
    impactDuration: 0.05,
    color: '#9aa3ad',
    size: [0.8, 2.6, 9],
    movable: false,
  },
  heavy: {
    id: 'heavy',
    name: 'Heavy Barrier',
    mass: 12_000,
    restitution: 0.18,
    friction: 0.5,
    rigidity: 0.8,
    impactDuration: 0.09,
    color: '#e08a2b',
    size: [1.0, 2.2, 8],
    movable: true,
  },
  light: {
    id: 'light',
    name: 'Light Barrier',
    mass: 350,
    restitution: 0.5,
    friction: 0.3,
    rigidity: 0.4,
    impactDuration: 0.16,
    color: '#f2d23c',
    size: [0.9, 1.9, 7],
    movable: true,
  },
};

export function getObstacle(id: ObstacleTypeId): ObstacleDef {
  return OBSTACLES[id];
}

export const OBSTACLE_LIST: ObstacleDef[] = [OBSTACLES.concrete, OBSTACLES.heavy, OBSTACLES.light];