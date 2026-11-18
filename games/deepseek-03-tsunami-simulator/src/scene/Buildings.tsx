import { useMemo } from 'react'
import * as THREE from 'three'
import { useSim } from './SimContext'

export function Buildings() {
  const { sim } = useSim()

  const instanced = useMemo(() => {
    const count = sim.buildings.length
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ roughness: 0.82, metalness: 0.05 })
    const mesh = new THREE.InstancedMesh(geometry, material, count)
    mesh.castShadow = true
    mesh.receiveShadow = true

    const dummy = new THREE.Object3D()
    const color = new THREE.Color()
    for (let i = 0; i < count; i++) {
      const b = sim.buildings[i]
      dummy.position.set(b.x, b.baseY + b.h / 2, b.z)
      dummy.rotation.set(0, b.rot, 0)
      dummy.scale.set(b.w, b.h, b.d)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      color.setRGB(b.color[0], b.color[1], b.color[2])
      mesh.setColorAt(i, color)
    }
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
    return mesh
  }, [sim])

  return <primitive object={instanced} />
}