import { OrbitControls } from '@react-three/drei'
import type { MutableRefObject } from 'react'
import type { Simulation } from '../sim/Simulation'
import { Buildings } from './Buildings'
import { FlowParticles } from './FlowParticles'
import { People } from './People'
import { useSim } from './SimContext'
import { SimulationRunner } from './SimulationRunner'
import { SkyDome } from './SkyDome'
import { TerrainMesh } from './TerrainMesh'
import { Vehicles } from './Vehicles'
import { WaterMesh } from './WaterMesh'

export function Scene({
  overlay,
  speedRef,
  onStats,
}: {
  overlay: boolean
  speedRef: MutableRefObject<number>
  onStats: (stats: Simulation['stats']) => void
}) {
  const { sim, bus } = useSim()

  return (
    <>
      <color attach="background" args={['#8fb2cc']} />
      <fog attach="fog" args={['#8fb2cc', 340, 1350]} />

      <hemisphereLight args={['#cfe8ff', '#3f4a2c', 0.55]} />
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[150, 210, 90]}
        intensity={1.25}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={900}
        shadow-camera-left={-220}
        shadow-camera-right={220}
        shadow-camera-top={220}
        shadow-camera-bottom={-220}
        shadow-bias={-0.0006}
      />

      <SkyDome />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, -1200]}>
        <planeGeometry args={[5200, 2600]} />
        <meshStandardMaterial color="#14405f" roughness={0.35} metalness={0.15} />
      </mesh>

      <TerrainMesh overlay={overlay} />
      <WaterMesh />
      <Buildings />
      <Vehicles />
      <People />
      <FlowParticles />

      <SimulationRunner sim={sim} bus={bus} speedRef={speedRef} onStats={onStats} />

      <OrbitControls
        target={[0, 6, 20]}
        minDistance={70}
        maxDistance={520}
        maxPolarAngle={1.45}
        enableDamping
        dampingFactor={0.07}
      />
    </>
  )
}