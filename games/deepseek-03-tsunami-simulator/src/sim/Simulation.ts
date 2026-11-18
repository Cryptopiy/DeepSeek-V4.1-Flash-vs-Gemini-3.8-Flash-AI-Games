import { buildCity } from './city'
import { updatePeople, updateVehicles } from './objects'
import { computeStats } from './statistics'
import { buildTerrain, TerrainData } from './terrain'
import { Building, FlowSample, Person, SimGrid, SimState, SimStats, Vehicle } from './types'
import { clamp, smoothstep01 } from './util'
import { resetWaterBuffers, stepWater } from './water'

export const RISE_DURATION = 2.5
export const HOLD_DURATION = 7.5
export const FALL_DURATION = 24
const FIXED_DT = 1 / 60

function createStats(): SimStats {
  return {
    floodedPercent: 0,
    peakFloodedPercent: 0,
    maxDepth: 0,
    floodedBuildings: 0,
    totalBuildings: 0,
    displacedVehicles: 0,
    totalVehicles: 0,
    caughtPeople: 0,
    totalPeople: 0,
    elapsed: 0,
  }
}

export class Simulation implements SimGrid {
  N: number
  cell: number
  half: number
  shoreV: number
  worldSize: number
  terrain: Float32Array
  depth: Float32Array
  flowX: Float32Array
  flowZ: Float32Array
  isSea: Uint8Array
  isRoad: Uint8Array
  isObstacle: Uint8Array
  summit: { x: number; z: number }
  maxElevation: number
  buildings: Building[] = []
  vehicles: Vehicle[] = []
  people: Person[] = []
  waveHeight = 6
  time = 0
  paused = false
  state: SimState = 'calm'
  stats: SimStats = createStats()
  private accStats = 0

  constructor() {
    const t: TerrainData = buildTerrain()
    this.N = t.N
    this.cell = t.cell
    this.half = t.half
    this.shoreV = t.shoreV
    this.worldSize = t.worldSize
    this.terrain = t.terrain
    this.isSea = t.isSea
    this.isRoad = t.isRoad
    this.isObstacle = t.isObstacle
    this.summit = t.summit
    this.maxElevation = t.maxElevation

    const n = this.N * this.N
    this.depth = new Float32Array(n)
    this.flowX = new Float32Array(n)
    this.flowZ = new Float32Array(n)

    const city = buildCity(t)
    this.buildings = city.buildings
    this.vehicles = city.vehicles
    this.people = city.people

    resetWaterBuffers()
    this.reset()
  }

  setWaveHeight(h: number): void {
    this.waveHeight = clamp(h, 1, 20)
  }

  start(): void {
    this.reset()
    this.time = 0
    this.state = 'running'
    this.paused = false
  }

  reset(): void {
    const { N, terrain, isSea, depth, flowX, flowZ } = this
    const n = N * N
    this.time = 0
    this.state = 'calm'
    this.accStats = 0

    for (let k = 0; k < n; k++) {
      depth[k] = isSea[k] ? Math.max(0, -terrain[k]) : 0
      flowX[k] = 0
      flowZ[k] = 0
    }

    for (const v of this.vehicles) {
      v.x = v.initial.x
      v.z = v.initial.z
      v.y = v.initial.y
      v.rot = v.initial.rot
      v.vx = 0
      v.vz = 0
      v.angVel = 0
    }

    for (const p of this.people) {
      p.x = p.initial.x
      p.z = p.initial.z
      p.y = this.sampleTerrain(p.initial.x, p.initial.z)
      p.vx = 0
      p.vz = 0
      p.state = 'idle'
      p.caught = false
    }

    this.stats = createStats()
    this.stats.totalBuildings = this.buildings.length
    this.stats.totalVehicles = this.vehicles.length
    this.stats.totalPeople = this.people.length
    computeStats(this)
  }

  seaLevelAt(t: number): number {
    const H = this.waveHeight
    if (t <= 0) return 0
    if (t < RISE_DURATION) return H * smoothstep01(t / RISE_DURATION)
    if (t < RISE_DURATION + HOLD_DURATION) return H
    const ft = (t - RISE_DURATION - HOLD_DURATION) / FALL_DURATION
    if (ft < 1) return H * (1 - smoothstep01(ft))
    return 0
  }

  step(dt: number): void {
    if (this.paused || this.state !== 'running') return
    if (!Number.isFinite(dt) || dt <= 0) return
    this.time += dt
    const seaLevel = this.seaLevelAt(this.time)
    stepWater(this, dt, seaLevel)
    updateVehicles(this, dt)
    updatePeople(this, dt)

    this.accStats += dt
    if (this.accStats >= 0.1) {
      this.accStats = 0
      computeStats(this)
    }
  }

  advance(frameDelta: number, speed: number): number {
    if (this.paused || this.state !== 'running') return 0
    let dt = frameDelta * speed
    if (!Number.isFinite(dt) || dt < 0) dt = 0
    if (dt > FIXED_DT * 10) dt = FIXED_DT * 10
    let steps = Math.round(dt / FIXED_DT)
    if (steps > 10) steps = 10
    for (let s = 0; s < steps; s++) this.step(FIXED_DT)
    return steps * FIXED_DT
  }

  sampleTerrain(x: number, z: number): number {
    const { N, cell, half, terrain } = this
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

  sampleDepth(x: number, z: number): number {
    const { N, cell, half, depth } = this
    const gx = (x + half) / cell
    const gz = (z + half) / cell
    let i0 = Math.floor(gx)
    let j0 = Math.floor(gz)
    i0 = clamp(i0, 0, N - 2)
    j0 = clamp(j0, 0, N - 2)
    const tx = clamp(gx - i0, 0, 1)
    const tz = clamp(gz - j0, 0, 1)
    const a = depth[j0 * N + i0]
    const b = depth[j0 * N + i0 + 1]
    const c = depth[(j0 + 1) * N + i0]
    const d = depth[(j0 + 1) * N + i0 + 1]
    const top = a + (b - a) * tx
    const bottom = c + (d - c) * tx
    const v = top + (bottom - top) * tz
    return v > 0 ? v : 0
  }

  sampleFlow(x: number, z: number, out: FlowSample): void {
    const { N, cell, half, flowX, flowZ } = this
    const gx = (x + half) / cell
    const gz = (z + half) / cell
    let i0 = Math.floor(gx)
    let j0 = Math.floor(gz)
    i0 = clamp(i0, 0, N - 2)
    j0 = clamp(j0, 0, N - 2)
    const tx = clamp(gx - i0, 0, 1)
    const tz = clamp(gz - j0, 0, 1)
    const idx = j0 * N + i0
    const a = flowX[idx]
    const b = flowX[idx + 1]
    const c = flowX[idx + N]
    const d = flowX[idx + N + 1]
    const top = a + (b - a) * tx
    const bottom = c + (d - c) * tx
    out.x = top + (bottom - top) * tz

    const a2 = flowZ[idx]
    const b2 = flowZ[idx + 1]
    const c2 = flowZ[idx + N]
    const d2 = flowZ[idx + N + 1]
    const top2 = a2 + (b2 - a2) * tx
    const bottom2 = c2 + (d2 - c2) * tx
    out.z = top2 + (bottom2 - top2) * tz

    if (!Number.isFinite(out.x)) out.x = 0
    if (!Number.isFinite(out.z)) out.z = 0
  }

  isObstacleAt(x: number, z: number): boolean {
    const { N, cell, half, isObstacle } = this
    const i = clamp(Math.round((x + half) / cell), 0, N - 1)
    const j = clamp(Math.round((z + half) / cell), 0, N - 1)
    return isObstacle[j * N + i] === 1
  }
}