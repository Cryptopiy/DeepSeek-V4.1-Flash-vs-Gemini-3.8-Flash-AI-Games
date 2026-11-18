import { clamp } from './util'
import { fbm } from './rng'

export interface RoadDef {
  ax: number
  ay: number
  bx: number
  by: number
  w: number
}

export interface TerrainData {
  N: number
  worldSize: number
  cell: number
  half: number
  shoreV: number
  terrain: Float32Array
  isSea: Uint8Array
  isRoad: Uint8Array
  isObstacle: Uint8Array
  summit: { x: number; z: number }
  maxElevation: number
  minElevation: number
}

export const GRID_N = 128
export const WORLD_SIZE = 256
export const SHORE_V = 0.3
export const SEED = 20250914

export const ROADS: RoadDef[] = [
  { ax: 0.05, ay: 0.375, bx: 0.95, by: 0.35, w: 0.02 },
  { ax: 0.5, ay: 0.3, bx: 0.5, by: 0.965, w: 0.018 },
  { ax: 0.05, ay: 0.62, bx: 0.95, by: 0.6, w: 0.016 },
  { ax: 0.18, ay: 0.94, bx: 0.82, by: 0.46, w: 0.014 },
]

function gauss(du: number, dv: number, s: number): number {
  return Math.exp(-(du * du + dv * dv) / (2 * s * s))
}

function distToSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
): number {
  const dx = bx - ax
  const dy = by - ay
  const len2 = dx * dx + dy * dy
  let t = len2 > 0 ? ((px - ax) * dx + (py - ay) * dy) / len2 : 0
  t = clamp(t, 0, 1)
  const cx = ax + dx * t
  const cy = ay + dy * t
  return Math.hypot(px - cx, py - cy)
}

export function roadDistance(u: number, v: number): number {
  let best = Infinity
  for (let r = 0; r < ROADS.length; r++) {
    const rd = ROADS[r]
    const d = distToSegment(u, v, rd.ax, rd.ay, rd.bx, rd.by)
    if (d < best) best = d
  }
  return best
}

export function isRoadAt(u: number, v: number): boolean {
  for (let r = 0; r < ROADS.length; r++) {
    const rd = ROADS[r]
    if (distToSegment(u, v, rd.ax, rd.ay, rd.bx, rd.by) < rd.w) return true
  }
  return false
}

export function buildTerrain(): TerrainData {
  const N = GRID_N
  const worldSize = WORLD_SIZE
  const cell = worldSize / (N - 1)
  const half = worldSize / 2

  const terrain = new Float32Array(N * N)
  const isSea = new Uint8Array(N * N)
  const isRoad = new Uint8Array(N * N)
  const isObstacle = new Uint8Array(N * N)

  let maxElevation = -Infinity
  let minElevation = Infinity
  let summit = { x: 0, z: 0 }

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const k = j * N + i
      const u = i / (N - 1)
      const v = j / (N - 1)

      const sea = v < SHORE_V
      isSea[k] = sea ? 1 : 0

      let e: number
      if (sea) {
        e = -(SHORE_V - v) * 62
      } else {
        e = (v - SHORE_V) * 15
      }

      e += 20 * gauss(u - 0.68, v - 0.8, 0.11)
      e += 11 * gauss(u - 0.28, v - 0.74, 0.09)
      e += 5 * gauss(u - 0.88, v - 0.52, 0.08)

      e -= 4.5 * gauss(u - 0.44, v - 0.52, 0.055)
      e -= 3.0 * gauss(u - 0.74, v - 0.47, 0.06)

      const land = clamp((v - SHORE_V) / 0.06, 0, 1)
      e += (fbm(u * 6, v * 6, SEED) - 0.5) * 3.0 * land
      e += (fbm(u * 18, v * 18, SEED + 99) - 0.5) * 0.8 * land

      if (isRoadAt(u, v)) {
        isRoad[k] = 1
        e -= 1.1
      }

      if (sea) e = Math.min(e, -0.6)
      if (!sea && v < SHORE_V + 0.04 && e < 0.08) e = 0.08

      terrain[k] = e

      if (!sea) {
        if (e > maxElevation) {
          maxElevation = e
          summit = { x: -half + i * cell, z: -half + j * cell }
        }
        if (e < minElevation) minElevation = e
      }
    }
  }

  return {
    N,
    worldSize,
    cell,
    half,
    shoreV: SHORE_V,
    terrain,
    isSea,
    isRoad,
    isObstacle,
    summit,
    maxElevation,
    minElevation,
  }
}

export function terrainColor(
  e: number,
  road: boolean,
  sea: boolean,
): [number, number, number] {
  if (road) return [0.32, 0.32, 0.36]

  if (sea || e < 0) {
    const t = clamp(-e / 14, 0, 1)
    return [0.16 - 0.14 * t, 0.42 - 0.34 * t, 0.5 - 0.3 * t]
  }

  let c: [number, number, number]
  if (e < 1.2) c = [0.8, 0.74, 0.52]
  else if (e < 4) c = [0.36, 0.56, 0.3]
  else if (e < 8) c = [0.44, 0.6, 0.3]
  else if (e < 13) c = [0.58, 0.57, 0.32]
  else if (e < 18) c = [0.52, 0.44, 0.3]
  else if (e < 24) c = [0.6, 0.56, 0.5]
  else c = [0.86, 0.88, 0.9]

  const band = Math.floor(e / 2)
  const shade = band % 2 === 0 ? 1.0 : 0.92
  return [c[0] * shade, c[1] * shade, c[2] * shade]
}