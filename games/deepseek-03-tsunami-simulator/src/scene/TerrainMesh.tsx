import { useMemo } from 'react'
import { buildTerrainGeometry } from './geometry'
import { useSim } from './SimContext'

export function TerrainMesh({ overlay }: { overlay: boolean }) {
  const { sim } = useSim()
  const geo = useMemo(() => buildTerrainGeometry(sim, sim.isRoad), [sim])

  return (
    <group>
      <mesh geometry={geo} receiveShadow castShadow={false}>
        <meshStandardMaterial vertexColors roughness={0.95} metalness={0} />
      </mesh>
      {overlay && (
        <mesh geometry={geo} position={[0, 0.15, 0]}>
          <meshBasicMaterial color="#101418" wireframe transparent opacity={0.12} />
        </mesh>
      )}
    </group>
  )
}