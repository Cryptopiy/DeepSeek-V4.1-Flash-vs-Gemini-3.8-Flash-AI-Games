import type { Box } from './types';

export interface Hit {
  nx: number;
  nz: number;
  depth: number;
}

export function circleBox(cx: number, cz: number, r: number, b: Box): Hit | null {
  const closestX = Math.max(b.minX, Math.min(cx, b.maxX));
  const closestZ = Math.max(b.minZ, Math.min(cz, b.maxZ));
  const dx = cx - closestX;
  const dz = cz - closestZ;
  const d2 = dx * dx + dz * dz;

  if (d2 > r * r) return null;

  if (d2 > 1e-6) {
    const d = Math.sqrt(d2);
    return { nx: dx / d, nz: dz / d, depth: r - d };
  }

  const left = cx - b.minX;
  const right = b.maxX - cx;
  const back = cz - b.minZ;
  const front = b.maxZ - cz;
  const m = Math.min(left, right, back, front);
  if (m === left) return { nx: -1, nz: 0, depth: r + left };
  if (m === right) return { nx: 1, nz: 0, depth: r + right };
  if (m === back) return { nx: 0, nz: -1, depth: r + back };
  return { nx: 0, nz: 1, depth: r + front };
}

export function circleCircle(
  ax: number,
  az: number,
  ar: number,
  bx: number,
  bz: number,
  br: number
): Hit | null {
  const dx = ax - bx;
  const dz = az - bz;
  const d = Math.hypot(dx, dz);
  const rr = ar + br;
  if (d >= rr) return null;
  if (d < 1e-6) return { nx: 1, nz: 0, depth: rr };
  return { nx: dx / d, nz: dz / d, depth: rr - d };
}

export function pointInBox(x: number, z: number, b: Box, margin = 0): boolean {
  return (
    x >= b.minX - margin && x <= b.maxX + margin && z >= b.minZ - margin && z <= b.maxZ + margin
  );
}