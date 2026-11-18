import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { FlowSample } from '../sim/types'
import { useSim } from './SimContext'

const COUNT = 900

export function FlowParticles() {
  const { sim, bus } = useSim()
  const positions = useMemo(() => new Float32Array(COUNT * 3), [])
  const life = useMemo(() => new Float32Array(COUNT), [])

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.computeBoundingSphere()
    return g
  }, [positions])

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.7,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    [],
  )

  useEffect(() => {
    const flow: FlowSample = { x: 0, z: 0 }
    const { N, cell, half, depth, terrain, isSea, isObstacle } = sim

    const respawn = (idx: number) => {
      let placed = false
      for (let attempt = 0; attempt < 24; attempt++) {
        const k = Math.floor(Math.random() * N * N)
        if (isObstacle[k]) continue
        if (depth[k] < 0.18) continue
        const i = k % N
        const j = Math.floor(k / N)
        const x = -half + i * cell
        const z = -half + j * cell
        positions[idx * 3] = x
        positions[idx * 3 + 1] = terrain[k] + depth[k] - 0.04
        positions[idx * 3 + 2] = z
        life[idx] = 1.2 + Math.random() * 2.4
        placed = true
        break
      }
      if (!placed) {
        const i = Math.floor(Math.random() * N)
        const j = Math.floor(Math.random() * N * 0.28)
        const k = j * N + i
        positions[idx * 3] = -half + i * cell
        positions[idx * 3 + 1] = -1
        positions[idx * 3 + 2] = -half + j * cell
        life[idx] = 0.5
        void isSea
      }
    }

    for (let i = 0; i < COUNT; i++) respawn(i)

    const update = (dt: number) => {
      if (dt <= 0) return
      for (let i = 0; i < COUNT; i++) {
        life[i] -= dt
        const x = positions[i * 3]
        const z = positions[i * 3 + 2]
        const d = sim.sampleDepth(x, z)
        if (life[i] <= 0 || d < 0.1) {
          respawn(i)
          continue
        }
        sim.sampleFlow(x, z, flow)
        positions[i * 3] = x + flow.x * dt
        positions[i * 3 + 2] = z + flow.z * dt
        positions[i * 3 + 1] = sim.sampleTerrain(x, z) + d - 0.04
      }
      geo.attributes.position.needsUpdate = true
    }

    return bus.add(update)
  }, [sim, bus, geo, positions, life])

  return <points geometry={geo} material={material} frustumCulled={false} renderOrder={3} />
}