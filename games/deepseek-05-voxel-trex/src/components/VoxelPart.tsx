import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { Voxel } from '../voxel/voxelBuilder'
import { VOXEL_GEOMETRY, voxelMaterial } from '../voxel/materials'

const dummy = new THREE.Object3D()
const scratch = new THREE.Color()

/**
 * Renders one body part as a single InstancedMesh. The whole dinosaur uses a
 * handful of these (one per articulated group) rather than one mesh per voxel.
 */
export function VoxelPart({ voxels }: { voxels: Voxel[] }) {
  const ref = useRef<THREE.InstancedMesh>(null)

  useEffect(() => {
    const mesh = ref.current
    if (!mesh) return
    for (let i = 0; i < voxels.length; i++) {
      const v = voxels[i]
      dummy.position.set(v.x, v.y, v.z)
      dummy.rotation.set(0, 0, 0)
      dummy.scale.set(1, 1, 1)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      mesh.setColorAt(i, scratch.set(v.color))
    }
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingSphere()
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [voxels])

  return (
    <instancedMesh
      ref={ref}
      args={[VOXEL_GEOMETRY, voxelMaterial, voxels.length]}
      castShadow
      receiveShadow
    />
  )
}