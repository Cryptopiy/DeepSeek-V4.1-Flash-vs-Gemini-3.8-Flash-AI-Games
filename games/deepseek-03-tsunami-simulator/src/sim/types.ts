export type SimState = 'calm' | 'running'

export interface FlowSample {
  x: number
  z: number
}

export interface Building {
  id: number
  x: number
  z: number
  w: number
  d: number
  h: number
  rot: number
  baseY: number
  color: [number, number, number]
}

export interface Vehicle {
  id: number
  x: number
  z: number
  y: number
  rot: number
  vx: number
  vz: number
  angVel: number
  w: number
  l: number
  h: number
  mass: number
  radius: number
  color: string
  kind: 'car' | 'truck' | 'bus'
  initial: { x: number; z: number; y: number; rot: number }
}

export type PersonState = 'idle' | 'fleeing' | 'safe' | 'swept'

export interface Person {
  id: number
  x: number
  z: number
  y: number
  vx: number
  vz: number
  speed: number
  color: string
  state: PersonState
  caught: boolean
  targetX: number
  targetZ: number
  initial: { x: number; z: number }
}

export interface SimStats {
  floodedPercent: number
  peakFloodedPercent: number
  maxDepth: number
  floodedBuildings: number
  totalBuildings: number
  displacedVehicles: number
  totalVehicles: number
  caughtPeople: number
  totalPeople: number
  elapsed: number
}

export interface SimGrid {
  N: number
  cell: number
  half: number
  terrain: Float32Array
  depth: Float32Array
  flowX: Float32Array
  flowZ: Float32Array
  isSea: Uint8Array
  isRoad: Uint8Array
  isObstacle: Uint8Array
  buildings: Building[]
  vehicles: Vehicle[]
  people: Person[]
  time: number
  stats: SimStats
  sampleTerrain(x: number, z: number): number
  sampleDepth(x: number, z: number): number
  sampleFlow(x: number, z: number, out: FlowSample): void
  isObstacleAt(x: number, z: number): boolean
}