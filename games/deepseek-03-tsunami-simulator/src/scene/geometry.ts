import * as THREE from 'three'
import { terrainColor } from '../sim/terrain'
import { SimGrid } from '../sim/types'

export function createGridGeometry(N: number, cell: number, half: number): THREE.BufferGeometry {
  const positions = new Float32Array(N * N * 3)
  const index: number[] = []

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const k = (j * N + i) * 3
      positions[k] = -half + i * cell
      positions[k + 1] = 0
      positions[k + 2] = -half + j * cell
    }
  }

  for (let j = 0; j < N - 1; j++) {
    for (let i = 0; i < N - 1; i++) {
      const a = j * N + i
      const b = j * N + i + 1
      const c = (j + 1) * N + i
      const d = (j + 1) * N + i + 1
      index.push(a, c, b, b, c, d)
    }
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setIndex(index)
  return geo
}

export function buildTerrainGeometry(sim: SimGrid, isRoad: Uint8Array): THREE.BufferGeometry {
  const { N, cell, half, terrain, isSea } = sim
  const geo = createGridGeometry(N, cell, half)
  const pos = geo.attributes.position.array as Float32Array
  const colors = new Float32Array(N * N * 3)

  for (let k = 0; k < N * N; k++) {
    const e = terrain[k]
    pos[k * 3 + 1] = e
    const c = terrainColor(e, isRoad[k] === 1, isSea[k] === 1)
    colors[k * 3] = c[0]
    colors[k * 3 + 1] = c[1]
    colors[k * 3 + 2] = c[2]
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  geo.computeBoundingSphere()
  return geo
}

export function buildWaterGeometry(sim: SimGrid): {
  geo: THREE.BufferGeometry
  depths: Float32Array
} {
  const { N, cell, half } = sim
  const geo = createGridGeometry(N, cell, half)
  const depths = new Float32Array(N * N)
  geo.setAttribute('depth', new THREE.BufferAttribute(depths, 1))
  geo.computeBoundingSphere()
  return { geo, depths }
}

export function updateWaterGeometry(
  sim: SimGrid,
  geo: THREE.BufferGeometry,
  depths: Float32Array,
): void {
  const { N, terrain, depth } = sim
  const pos = geo.attributes.position.array as Float32Array
  const n = N * N
  for (let k = 0; k < n; k++) {
    const d = depth[k]
    depths[k] = d
    let y: number
    if (d > 0.02) {
      y = terrain[k] + d
    } else {
      y = terrain[k] - 0.06
    }
    pos[k * 3 + 1] = y
  }
  geo.attributes.position.needsUpdate = true
  geo.attributes.depth.needsUpdate = true
}