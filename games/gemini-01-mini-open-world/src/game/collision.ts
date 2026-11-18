import { Building, Prop, Vehicle, Player, Pedestrian } from './types';

export interface CollisionResult {
  collided: boolean;
  normalX: number;
  normalZ: number;
  depth: number;
}

// Circle vs AABB collision detection & pushout
export function checkCircleAABB(
  cx: number,
  cz: number,
  radius: number,
  minX: number,
  maxX: number,
  minZ: number,
  maxZ: number
): CollisionResult {
  // Find closest point on AABB to circle center
  const closestX = Math.max(minX, Math.min(cx, maxX));
  const closestZ = Math.max(minZ, Math.min(cz, maxZ));

  const dx = cx - closestX;
  const dz = cz - closestZ;
  const distSq = dx * dx + dz * dz;

  if (distSq < radius * radius) {
    const dist = Math.sqrt(distSq);
    if (dist > 0.0001) {
      return {
        collided: true,
        normalX: dx / dist,
        normalZ: dz / dist,
        depth: radius - dist,
      };
    } else {
      // Circle center is inside AABB: push out toward nearest edge
      const toMinX = cx - minX;
      const toMaxX = maxX - cx;
      const toMinZ = cz - minZ;
      const toMaxZ = maxZ - cz;

      const minEdge = Math.min(toMinX, toMaxX, toMinZ, toMaxZ);
      if (minEdge === toMinX) return { collided: true, normalX: -1, normalZ: 0, depth: radius + toMinX };
      if (minEdge === toMaxX) return { collided: true, normalX: 1, normalZ: 0, depth: radius + toMaxX };
      if (minEdge === toMinZ) return { collided: true, normalX: 0, normalZ: -1, depth: radius + toMinZ };
      return { collided: true, normalX: 0, normalZ: 1, depth: radius + toMaxZ };
    }
  }

  return { collided: false, normalX: 0, normalZ: 0, depth: 0 };
}

// Resolve Player collision against all Buildings
export function resolvePlayerBuildingCollisions(player: Player, buildings: Building[]): void {
  const pRadius = 0.55;

  for (const b of buildings) {
    const minX = b.x - b.width / 2;
    const maxX = b.x + b.width / 2;
    const minZ = b.z - b.depth / 2;
    const maxZ = b.z + b.depth / 2;

    // Quick broadphase check
    if (
      player.x + pRadius < minX ||
      player.x - pRadius > maxX ||
      player.z + pRadius < minZ ||
      player.z - pRadius > maxZ
    ) {
      continue;
    }

    const res = checkCircleAABB(player.x, player.z, pRadius, minX, maxX, minZ, maxZ);
    if (res.collided) {
      player.x += res.normalX * res.depth;
      player.z += res.normalZ * res.depth;
      // Zero out velocity against wall normal
      const dot = player.vx * res.normalX + player.vz * res.normalZ;
      if (dot < 0) {
        player.vx -= dot * res.normalX;
        player.vz -= dot * res.normalZ;
      }
    }
  }
}

// Resolve Player collision against Props (trees, light poles, dumpsters)
export function resolvePlayerPropCollisions(player: Player, props: Prop[]): void {
  const pRadius = 0.55;

  for (const p of props) {
    const dx = player.x - p.x;
    const dz = player.z - p.z;
    const distSq = dx * dx + dz * dz;
    const minDist = pRadius + p.radius;

    if (distSq < minDist * minDist) {
      const dist = Math.sqrt(distSq);
      if (dist > 0.0001) {
        const nx = dx / dist;
        const nz = dz / dist;
        const push = minDist - dist;
        player.x += nx * push;
        player.z += nz * push;
      }
    }
  }
}

// Get 3 multi-collision sample circles along a vehicle's longitudinal axis
export function getVehicleCollisionCircles(veh: Vehicle) {
  const sin = Math.sin(veh.rotation);
  const cos = Math.cos(veh.rotation);
  const halfLen = veh.length * 0.32;
  const radius = veh.width * 0.48;

  return [
    { x: veh.x - sin * halfLen, z: veh.z - cos * halfLen, radius }, // Rear
    { x: veh.x, z: veh.z, radius },                                 // Center
    { x: veh.x + sin * halfLen, z: veh.z + cos * halfLen, radius }, // Front
  ];
}

// Resolve Player collision against Vehicles (Player on foot cannot walk through cars)
export function resolvePlayerVehicleCollisions(player: Player, vehicles: Vehicle[]): void {
  if (player.state === 'driving') return;
  const pRadius = 0.55;

  for (const v of vehicles) {
    const circles = getVehicleCollisionCircles(v);
    for (const c of circles) {
      const dx = player.x - c.x;
      const dz = player.z - c.z;
      const distSq = dx * dx + dz * dz;
      const minDist = pRadius + c.radius;

      if (distSq < minDist * minDist) {
        const dist = Math.sqrt(distSq);
        if (dist > 0.0001) {
          const nx = dx / dist;
          const nz = dz / dist;
          const push = minDist - dist;
          player.x += nx * push;
          player.z += nz * push;
        }
      }
    }
  }
}

// Resolve Vehicle collision against Buildings
export interface VehicleCollisionEvent {
  vehicleId: string;
  impactSpeed: number;
  hitX: number;
  hitZ: number;
  isBuilding: boolean;
  isVehicle: boolean;
}

export function resolveVehicleBuildingCollisions(
  veh: Vehicle,
  buildings: Building[],
  onCollision?: (e: VehicleCollisionEvent) => void
): void {
  const circles = getVehicleCollisionCircles(veh);

  for (const b of buildings) {
    const minX = b.x - b.width / 2;
    const maxX = b.x + b.width / 2;
    const minZ = b.z - b.depth / 2;
    const maxZ = b.z + b.depth / 2;

    // Fast reject
    const vRadius = veh.length * 0.6;
    if (
      veh.x + vRadius < minX ||
      veh.x - vRadius > maxX ||
      veh.z + vRadius < minZ ||
      veh.z - vRadius > maxZ
    ) {
      continue;
    }

    for (const c of circles) {
      const res = checkCircleAABB(c.x, c.z, c.radius, minX, maxX, minZ, maxZ);
      if (res.collided) {
        // Push vehicle away from building
        veh.x += res.normalX * res.depth;
        veh.z += res.normalZ * res.depth;

        // Bounce back if moving into building
        const forwardX = Math.sin(veh.rotation);
        const forwardZ = Math.cos(veh.rotation);
        const headingDotNormal = forwardX * res.normalX + forwardZ * res.normalZ;

        const impactSpeed = Math.abs(veh.speed);
        if (impactSpeed > 2.0 && veh.collisionCooldown <= 0) {
          veh.collisionCooldown = 0.3;
          // Rebound velocity
          veh.speed = -veh.speed * 0.35;
          if (onCollision) {
            onCollision({
              vehicleId: veh.id,
              impactSpeed,
              hitX: c.x,
              hitZ: c.z,
              isBuilding: true,
              isVehicle: false,
            });
          }
        } else {
          veh.speed *= 0.6;
        }
        break;
      }
    }
  }
}

// Resolve Vehicle vs Vehicle Collisions
export function resolveVehicleVehicleCollisions(
  vehicles: Vehicle[],
  onCollision?: (e: VehicleCollisionEvent) => void
): void {
  for (let i = 0; i < vehicles.length; i++) {
    const v1 = vehicles[i];
    const c1s = getVehicleCollisionCircles(v1);

    for (let j = i + 1; j < vehicles.length; j++) {
      const v2 = vehicles[j];
      const c2s = getVehicleCollisionCircles(v2);

      // Fast distance check
      const dX = v1.x - v2.x;
      const dZ = v1.z - v2.z;
      const combinedMax = (v1.length + v2.length) * 0.6;
      if (dX * dX + dZ * dZ > combinedMax * combinedMax) continue;

      let hasCollision = false;
      let totalNormX = 0;
      let totalNormZ = 0;
      let maxDepth = 0;

      for (const c1 of c1s) {
        for (const c2 of c2s) {
          const dx = c1.x - c2.x;
          const dz = c1.z - c2.z;
          const distSq = dx * dx + dz * dz;
          const minDist = c1.radius + c2.radius;

          if (distSq < minDist * minDist) {
            const dist = Math.sqrt(distSq);
            if (dist > 0.0001) {
              hasCollision = true;
              const depth = minDist - dist;
              if (depth > maxDepth) {
                maxDepth = depth;
                totalNormX = dx / dist;
                totalNormZ = dz / dist;
              }
            }
          }
        }
      }

      if (hasCollision && maxDepth > 0) {
        // Push both apart
        const halfDepth = maxDepth * 0.55;
        if (!v1.isParked || v1.driver !== null) {
          v1.x += totalNormX * halfDepth;
          v1.z += totalNormZ * halfDepth;
        }
        if (!v2.isParked || v2.driver !== null) {
          v2.x -= totalNormX * halfDepth;
          v2.z -= totalNormZ * halfDepth;
        }

        // Relative impact speed
        const relSpeed = Math.abs(v1.speed - v2.speed);
        if (relSpeed > 2.5 && (v1.collisionCooldown <= 0 || v2.collisionCooldown <= 0)) {
          v1.collisionCooldown = 0.3;
          v2.collisionCooldown = 0.3;

          v1.speed = -v1.speed * 0.3;
          v2.speed = -v2.speed * 0.3;

          if (onCollision) {
            onCollision({
              vehicleId: v1.id,
              impactSpeed: relSpeed,
              hitX: (v1.x + v2.x) / 2,
              hitZ: (v1.z + v2.z) / 2,
              isBuilding: false,
              isVehicle: true,
            });
          }
        }
      }
    }
  }
}

// Vehicle vs Pedestrian Collision
export interface PedestrianHitEvent {
  pedestrianId: string;
  vehicleId: string;
  isPlayerVehicle: boolean;
  hitX: number;
  hitZ: number;
}

export function resolveVehiclePedestrianCollisions(
  vehicles: Vehicle[],
  pedestrians: Pedestrian[],
  onPedestrianHit?: (e: PedestrianHitEvent) => void
): void {
  const pRadius = 0.5;

  for (const v of vehicles) {
    if (Math.abs(v.speed) < 2.0) continue; // Only moving cars hit pedestrians

    const circles = getVehicleCollisionCircles(v);
    for (const ped of pedestrians) {
      if (ped.state === 'knocked') continue;

      for (const c of circles) {
        const dx = ped.x - c.x;
        const dz = ped.z - c.z;
        const distSq = dx * dx + dz * dz;
        const minDist = pRadius + c.radius;

        if (distSq < minDist * minDist) {
          // Hit pedestrian!
          ped.state = 'knocked';
          ped.knockedTimer = 4.0;
          ped.fleeTimer = 0;

          // Push pedestrian in vehicle direction
          const pushX = Math.sin(v.rotation) * 4.0;
          const pushZ = Math.cos(v.rotation) * 4.0;
          ped.x += pushX;
          ped.z += pushZ;

          if (onPedestrianHit) {
            onPedestrianHit({
              pedestrianId: ped.id,
              vehicleId: v.id,
              isPlayerVehicle: v.driver === 'player',
              hitX: ped.x,
              hitZ: ped.z,
            });
          }
          break;
        }
      }
    }
  }
}
