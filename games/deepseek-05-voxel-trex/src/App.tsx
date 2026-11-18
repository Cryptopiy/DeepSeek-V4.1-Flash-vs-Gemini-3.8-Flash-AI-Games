import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { TRex } from './components/TRex'
import { UI } from './components/UI'
import { Scene } from './scene/Scene'
import { CameraRig } from './scene/CameraRig'
import { VOXEL_COUNT } from './voxel/buildTrex'
import type { AnimState } from './types'

export default function App() {
  const [anim, setAnim] = useState<AnimState>('idle')

  return (
    <div className="app">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [30, 18, 32], fov: 35, near: 0.1, far: 500 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene />
          <TRex anim={anim} />
        </Suspense>
        <CameraRig />
      </Canvas>

      <UI anim={anim} setAnim={setAnim} voxelCount={VOXEL_COUNT} />
    </div>
  )
}