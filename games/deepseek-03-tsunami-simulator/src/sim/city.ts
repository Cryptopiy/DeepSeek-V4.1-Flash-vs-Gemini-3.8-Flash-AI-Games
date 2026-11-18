import { Building, Person, Vehicle } from './types'
import { isRoadAt, ROADS, SEED, TerrainData } from './terrain'
import { mulberry32 } from './rng'
import { clamp } from './util'

const BUILDING_PALETTE: [number, number, number][] = [
  [0.78, 0.77, 0.74],
  [0.72, 0.68, 0.62],
  [0.62, 0.66, 0.72],
  [0.8, 0.72, 0.6],
  [0.68, 0.6, 0.56],
  [0.55, 0.62, 0.66],
]

const VEHICLE_COLORS = [
  '#d94f4f',
  '#3b7dd8',
  '#e0b23c',
  '#4caf6a',
  '#c9c9c9',
  '#8a5cc7',
  '#e0783a',
  '#2f3b45',
]

const PEOPLE_COLORS = ['#f2d24b', '#ef6a6a', '#63c2f0', '#8ce07a', '#f0a6d0', '#e8e8e8']

function toWorld(t: TerrainData, u: number, v: number): { x: number; z: number } {
  const span = (t.N - 1) * t.cell
  return { x: -t.half + u * span, z: -t.half + v * span }
}

function toUV(t: TerrainData, x: number, z: number): { u: number; v: number } {
  const span = (t.N - 1) * t.cell
  return { u: (x + t.half) / span, v: (z + t.half) / span }
}

export function sampleTerrainWorld(t: TerrainData, x: number, z: number): number {
  const { N, cell, half, terrain } = t
  const gx = (x + half) / cell
  const gz = (z + half) / cell
  let i0 = Math.floor(gx)
  let j0 = Math.floor(gz)
  i0 = clamp(i0, 0, N - 2)
  j0 = clamp(j0, 0, N - 2)
  const tx = clamp(gx - i0, 0, 1)
  const tz = clamp(gz - j0, 0, 1)
  const a = terrain[j0 * N + i0]
  const b = terrain[j0 * N + i0 + 1]
  const c = terrain[(j0 + 1) * N + i0]
  const d = terrain[(j0 + 1) * N + i0 + 1]
  const top = a + (b - a) * tx
  const bottom = c + (d - c) * tx
  return top + (bottom - top) * tz
}

function isRoadWorld(t: TerrainData, x: number, z: number): boolean {
  const { u, v } = toUV(t, x, z)
  return isRoadAt(u, v)
}

function obstacleNear(t: TerrainData, x: number, z: number, radius: number): boolean {
  const { N, cell, half, isObstacle } = t
  const r = Math.ceil(radius / cell)
  const ci = Math.round((x + half) / cell)
  const cj = Math.round((z + half) / cell)
  for (let j = cj - r; j <= cj + r; j++) {
    for (let i = ci - r; i <= ci + r; i++) {
      if (i < 0 || j < 0 || i >= N || j >= N) continue
      if (isObstacle[j * N + i]) return true
    }
  }
  return false
}

export interface CityData {
  buildings: Building[]
  vehicles: Vehicle[]
  people: Person[]
}

export function buildCity(t: TerrainData): CityData {
  const rng = mulberry32(SEED + 7411)
  const buildings: Building[] = []
  const vehicles: Vehicle[] = []
  const people: Person[] = []

  let tries = 0
  while (buildings.length < 34 && tries < 8000) {
    tries++
    const u = 0.06 + rng() * 0.88
    const v = t.shoreV + 0.05 + rng() * 0.88
    if (v > 0.96) continue

    const w = 6 + rng() * 9
    const d = 6 + rng() * 9
    const rot = (rng() - 0.5) * 0.25
    const p = toWorld(t, u, v)

    const elev = sampleTerrainWorld(t, p.x, p.z)
    if (elev < 1.5 || elev > 13) continue

    const hw = w / 2
    const hd = d / 2
    let minE = Infinity
    let maxE = -Infinity
    let hitsRoad = false
    for (let jj = -1; jj <= 1; jj++) {
      for (let ii = -1; ii <= 1; ii++) {
        const sx = p.x + ii * hw
        const sz = p.z + jj * hd
        if (isRoadWorld(t, sx, sz)) hitsRoad = true
        const ee = sampleTerrainWorld(t, sx, sz)
        if (ee < minE) minE = ee
        if (ee > maxE) maxE = ee
      }
    }
    if (hitsRoad) continue
    if (maxE - minE > 1.8) continue

    let clear = true
    for (const b of buildings) {
      const sep = (Math.max(b.w, b.d) + Math.max(w, d)) * 0.5 + 2.5
      if (Math.hypot(b.x - p.x, b.z - p.z) < sep) {
        clear = false
        break
      }
    }
    if (!clear) continue

    const h = 4 + rng() * 11
    const color = BUILDING_PALETTE[Math.floor(rng() * BUILDING_PALETTE.length)]
    buildings.push({
      id: buildings.length,
      x: p.x,
      z: p.z,
      w,
      d,
      h,
      rot,
      baseY: minE - 1.2,
      color,
    })

    const i0 = clamp(Math.floor((p.x - hw + t.half) / t.cell), 0, t.N - 1)
    const i1 = clamp(Math.ceil((p.x + hw + t.half) / t.cell), 0, t.N - 1)
    const j0 = clamp(Math.floor((p.z - hd + t.half) / t.cell), 0, t.N - 1)
    const j1 = clamp(Math.ceil((p.z + hd + t.half) / t.cell), 0, t.N - 1)
    for (let jj = j0; jj <= j1; jj++) {
      for (let ii = i0; ii <= i1; ii++) t.isObstacle[jj * t.N + ii] = 1
    }
  }

  const makeVehicle = (x: number, z: number, rot: number, kind: Vehicle['kind']): Vehicle | null => {
    if (obstacleNear(t, x, z, 3)) return null
    const e = sampleTerrainWorld(t, x, z)
    if (e > 16) return null
    let w = 1.9
    let l = 4.4
    let h = 1.5
    let mass = 1200
    if (kind === 'truck') {
      w = 2.5
      l = 7.5
      h = 2.8
      mass = 3600
    } else if (kind === 'bus') {
      w = 2.6
      l = 10
      h = 3.0
      mass = 5200
    }
    return {
      id: vehicles.length,
      x,
      z,
      y: e,
      rot,
      vx: 0,
      vz: 0,
      angVel: 0,
      w,
      l,
      h,
      mass,
      radius: Math.max(l, w) * 0.5,
      color: VEHICLE_COLORS[Math.floor(rng() * VEHICLE_COLORS.length)],
      kind,
      initial: { x, z, y: e, rot },
    }
  }

  tries = 0
  while (vehicles.length < 18 && tries < 6000) {
    tries++
    const road = ROADS[Math.floor(rng() * ROADS.length)]
    const tt = rng()
    const u = road.ax + (road.bx - road.ax) * tt
    const v = road.ay + (road.by - road.ay) * tt
    const p = toWorld(t, u, v)
    const du = road.bx - road.ax
    const dv = road.by - road.ay
    const rot = Math.atan2(-dv, du)
    const r = rng()
    const kind: Vehicle['kind'] = r < 0.12 ? 'truck' : r < 0.2 ? 'bus' : 'car'
    const veh = makeVehicle(p.x, p.z, rot, kind)
    if (veh) vehicles.push(veh)
  }

  tries = 0
  while (vehicles.length < 24 && tries < 4000) {
    tries++
    const u = 0.1 + rng() * 0.8
    const v = t.shoreV + 0.03 + rng() * 0.14
    const p = toWorld(t, u, v)
    const veh = makeVehicle(p.x, p.z, rng() * Math.PI * 2, 'car')
    if (veh) vehicles.push(veh)
  }

  tries = 0
  while (people.length < 26 && tries < 4000) {
    tries++
    const u = 0.05 + rng() * 0.9
    const v = t.shoreV + 0.02 + rng() * 0.85
    const p = toWorld(t, u, v)
    if (obstacleNear(t, p.x, p.z, 2.5)) continue
    const e = sampleTerrainWorld(t, p.x, p.z)
    if (e > 15) continue
    people.push({
      id: people.length,
      x: p.x,
      z: p.z,
      y: e,
      vx: 0,
      vz: 0,
      speed: 1.4 + rng() * 0.7,
      color: PEOPLE_COLORS[Math.floor(rng() * PEOPLE_COLORS.length)],
      state: 'idle',
      caught: false,
      targetX: t.summit.x,
      targetZ: t.summit.z,
      initial: { x: p.x, z: p.z },
    })
  }

  return { buildings, vehicles, people }
}