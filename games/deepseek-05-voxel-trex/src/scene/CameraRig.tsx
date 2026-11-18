import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { cameraApi } from './cameraApi'

export const DEFAULT_TARGET: [number, number, number] = [0, 8, -3]
export const DEFAULT_POSITION: [number, number, number] = [30, 18, 32]

export function CameraRig() {
  const ref = useRef<any>(null)

  useEffect(() => {
    cameraApi.reset = () => {
      const controls = ref.current
      if (!controls) return
      controls.target.set(DEFAULT_TARGET[0], DEFAULT_TARGET[1], DEFAULT_TARGET[2])
      controls.object.position.set(
        DEFAULT_POSITION[0],
        DEFAULT_POSITION[1],
        DEFAULT_POSITION[2],
      )
      controls.update()
    }
  }, [])

  return (
    <OrbitControls
      ref={ref}
      makeDefault
      target={DEFAULT_TARGET}
      enableDamping
      dampingFactor={0.08}
      enablePan={false}
      minDistance={14}
      maxDistance={85}
      minPolarAngle={0.15}
      maxPolarAngle={Math.PI * 0.495}
    />
  )
}