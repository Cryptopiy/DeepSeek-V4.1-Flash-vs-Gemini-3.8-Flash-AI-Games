import type { Box, Vec2 } from './types';
import { circleBox, circleCircle } from './Collision';
import type { Vehicle } from './entities/Vehicle';

export function vehicleCircles(v: Vehicle): Vec2[] {
  const f = v.forward();
  return [
    { x: v.position.x + f.x * v.circleOffset, z: v.position.z + f.z * v.circleOffset },
    { x: v.position.x - f.x * v.circleOffset, z: v.position.z - f.z * v.circleOffset }
  ];
}

export function resolveVehicleWorld(v: Vehicle, boxes: Box[]): boolean {
  const f = v.forward();
  let hit = false;

  for (let iter = 0; iter < 3; iter++) {
    let any = false;
    for (const off of [v.circleOffset, -v.circleOffset]) {
      let cx = v.position.x + f.x * off;
      let cz = v.position.z + f.z * off;
      for (const b of boxes) {
        const h = circleBox(cx, cz, v.circleRadius, b);
        if (h) {
          const dx = h.nx * h.depth;
          const dz = h.nz * h.depth;
          v.position.x += dx;
          v.position.z += dz;
          cx += dx;
          cz += dz;
          any = true;
          hit = true;
        }
      }
    }
    if (!any) break;
  }

  if (hit) {
    v.speed *= 0.25;
    if (Math.abs(v.speed) < 0.25) v.speed = 0;
  }
  return hit;
}

export function resolveVehiclePair(a: Vehicle, b: Vehicle): boolean {
  const ca = vehicleCircles(a);
  const cb = vehicleCircles(b);
  let best: { nx: number; nz: number; depth: number } | null = null;

  for (const p of ca) {
    for (const q of cb) {
      const h = circleCircle(p.x, p.z, a.circleRadius, q.x, q.z, b.circleRadius);
      if (h && (!best || h.depth > best.depth)) best = h;
    }
  }

  if (!best) return false;

  const aStatic = a.kind === 'parked' || (a.kind === 'mission' && !a.controlled);
  const bStatic = b.kind === 'parked' || (b.kind === 'mission' && !b.controlled);

  if (aStatic && bStatic) return true;

  const push = best.depth + 0.01;
  if (aStatic) {
    b.position.x -= best.nx * push;
    b.position.z -= best.nz * push;
    b.speed *= 0.4;
  } else if (bStatic) {
    a.position.x += best.nx * push;
    a.position.z += best.nz * push;
    a.speed *= 0.4;
  } else {
    const half = push / 2;
    a.position.x += best.nx * half;
    a.position.z += best.nz * half;
    b.position.x -= best.nx * half;
    b.position.z -= best.nz * half;
    a.speed *= 0.6;
    b.speed *= 0.6;
  }
  return true;
}

export function resolveCircle(
  x: number,
  z: number,
  r: number,
  boxes: Box[],
  vehicles: Vehicle[]
): Vec2 {
  let px = x;
  let pz = z;

  for (let iter = 0; iter < 3; iter++) {
    let any = false;
    for (const b of boxes) {
      const h = circleBox(px, pz, r, b);
      if (h) {
        px += h.nx * h.depth;
        pz += h.nz * h.depth;
        any = true;
      }
    }
    for (const v of vehicles) {
      const circles = vehicleCircles(v);
      for (const c of circles) {
        const h = circleCircle(px, pz, r, c.x, c.z, v.circleRadius);
        if (h) {
          px += h.nx * h.depth;
          pz += h.nz * h.depth;
          any = true;
        }
      }
    }
    if (!any) break;
  }

  return { x: px, z: pz };
}