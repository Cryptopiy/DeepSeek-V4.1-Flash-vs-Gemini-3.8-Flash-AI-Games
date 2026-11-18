import { SimGrid } from './types'

export const FLOOD_THRESHOLD = 0.08

export function computeStats(sim: SimGrid): void {
  const { N, depth, isSea, isObstacle, stats } = sim
  const n = N * N
  let land = 0
  let flooded = 0
  let maxDepth = 0

  for (let k = 0; k < n; k++) {
    if (isSea[k]) continue
    if (isObstacle[k]) continue
    land++
    const d = depth[k]
    if (d > maxDepth) maxDepth = d
    if (d > FLOOD_THRESHOLD) flooded++
  }

  const percent = land > 0 ? (flooded / land) * 100 : 0
  stats.floodedPercent = percent
  if (percent > stats.peakFloodedPercent) stats.peakFloodedPercent = percent
  stats.maxDepth = maxDepth
  stats.totalBuildings = sim.buildings.length
  stats.totalVehicles = sim.vehicles.length
  stats.totalPeople = sim.people.length

  let floodedBuildings = 0
  for (const b of sim.buildings) {
    if (sim.sampleDepth(b.x, b.z) > 0.3) floodedBuildings++
  }
  stats.floodedBuildings = floodedBuildings

  let displaced = 0
  for (const v of sim.vehicles) {
    const dx = v.x - v.initial.x
    const dz = v.z - v.initial.z
    if (dx * dx + dz * dz > 6.25) displaced++
  }
  stats.displacedVehicles = displaced

  let caught = 0
  for (const p of sim.people) {
    if (p.caught) caught++
  }
  stats.caughtPeople = caught

  stats.elapsed = sim.time
}