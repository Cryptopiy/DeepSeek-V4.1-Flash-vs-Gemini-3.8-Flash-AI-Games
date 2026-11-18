import { SimGrid } from './types'

export const WATER_RATE = 0.3
export const FLOW_MAX = 9
const EPS = 0.0005

let surfaceBuf: Float32Array | null = null
let deltaBuf: Float32Array | null = null
let desiredBuf: Float32Array | null = null
let scaleBuf: Float32Array | null = null

function ensureBuffers(n: number): void {
  if (!surfaceBuf || surfaceBuf.length !== n) {
    surfaceBuf = new Float32Array(n)
    deltaBuf = new Float32Array(n)
    desiredBuf = new Float32Array(n)
    scaleBuf = new Float32Array(n)
  }
}

export function resetWaterBuffers(): void {
  surfaceBuf = null
  deltaBuf = null
  desiredBuf = null
  scaleBuf = null
}

export function computeSurfaceHeight(sim: SimGrid, x: number, z: number): number {
  const t = sim.sampleTerrain(x, z)
  const d = sim.sampleDepth(x, z)
  return t + d
}

export function stepWater(sim: SimGrid, dt: number, seaLevel: number): void {
  const { N, cell, terrain, depth, isSea, isObstacle } = sim
  const n = N * N
  ensureBuffers(n)
  const surface = surfaceBuf as Float32Array
  const delta = deltaBuf as Float32Array
  const desired = desiredBuf as Float32Array
  const scale = scaleBuf as Float32Array

  for (let k = 0; k < n; k++) {
    const d = depth[k]
    surface[k] = terrain[k] + (d > 0 ? d : 0)
    delta[k] = 0
    desired[k] = 0
    sim.flowX[k] = 0
    sim.flowZ[k] = 0
  }

  for (let j = 0; j < N; j++) {
    const row = j * N
    for (let i = 0; i < N - 1; i++) {
      const a = row + i
      const b = a + 1
      if (isObstacle[a] || isObstacle[b]) continue
      const h = surface[a] - surface[b]
      if (h > EPS) desired[a] += h * WATER_RATE
      else if (h < -EPS) desired[b] += -h * WATER_RATE
    }
  }
  for (let j = 0; j < N - 1; j++) {
    const row = j * N
    const next = row + N
    for (let i = 0; i < N; i++) {
      const a = row + i
      const b = next + i
      if (isObstacle[a] || isObstacle[b]) continue
      const h = surface[a] - surface[b]
      if (h > EPS) desired[a] += h * WATER_RATE
      else if (h < -EPS) desired[b] += -h * WATER_RATE
    }
  }

  for (let k = 0; k < n; k++) {
    if (isSea[k]) {
      scale[k] = 1
      continue
    }
    const d = depth[k]
    const des = desired[k]
    scale[k] = d > 0 && des > 0 ? Math.min(1, (d * 0.9) / des) : 0
  }

  for (let j = 0; j < N; j++) {
    const row = j * N
    for (let i = 0; i < N - 1; i++) {
      const a = row + i
      const b = a + 1
      if (isObstacle[a] || isObstacle[b]) continue
      const h = surface[a] - surface[b]
      if (h > EPS) {
        const t = h * WATER_RATE * scale[a]
        delta[a] -= t
        delta[b] += t
        sim.flowX[a] -= t
        sim.flowX[b] += t
      } else if (h < -EPS) {
        const t = -h * WATER_RATE * scale[b]
        delta[b] -= t
        delta[a] += t
        sim.flowX[b] -= t
        sim.flowX[a] += t
      }
    }
  }
  for (let j = 0; j < N - 1; j++) {
    const row = j * N
    const next = row + N
    for (let i = 0; i < N; i++) {
      const a = row + i
      const b = next + i
      if (isObstacle[a] || isObstacle[b]) continue
      const h = surface[a] - surface[b]
      if (h > EPS) {
        const t = h * WATER_RATE * scale[a]
        delta[a] -= t
        delta[b] += t
        sim.flowZ[a] -= t
        sim.flowZ[b] += t
      } else if (h < -EPS) {
        const t = -h * WATER_RATE * scale[b]
        delta[b] -= t
        delta[a] += t
        sim.flowZ[b] -= t
        sim.flowZ[a] += t
      }
    }
  }

  for (let k = 0; k < n; k++) {
    let d = depth[k] + delta[k]
    if (!Number.isFinite(d) || d < 0) d = 0
    if (isObstacle[k]) d = 0
    depth[k] = d
  }

  for (let k = 0; k < n; k++) {
    if (isSea[k]) {
      const d = seaLevel - terrain[k]
      depth[k] = d > 0 ? d : 0
    }
  }

  const invDt = dt > 0 ? 1 / dt : 0
  for (let k = 0; k < n; k++) {
    if (isSea[k] || isObstacle[k]) {
      sim.flowX[k] = 0
      sim.flowZ[k] = 0
      continue
    }
    const dd = depth[k] > 0.02 ? depth[k] : 0.02
    let vx = sim.flowX[k] * cell * invDt / dd
    let vz = sim.flowZ[k] * cell * invDt / dd
    if (!Number.isFinite(vx)) vx = 0
    if (!Number.isFinite(vz)) vz = 0
    const sp = Math.hypot(vx, vz)
    if (sp > FLOW_MAX) {
      const s = FLOW_MAX / sp
      vx *= s
      vz *= s
    }
    sim.flowX[k] = vx
    sim.flowZ[k] = vz
  }
}