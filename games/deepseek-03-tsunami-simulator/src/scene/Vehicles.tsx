import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useSim } from './SimContext'

function VehicleModel({
  color,
  kind,
  l,
  w,
  h,
}: {
  color: string
  kind: string
  l: number
  w: number
  h: number
}) {
  const wheelR = h * 0.24
  const wheelGeo = useMemo(
    () => new THREE.CylinderGeometry(wheelR, wheelR, w * 0.18, 10),
    [wheelR, w],
  )
  const wheelMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#1a1a1c' }), [])

  const bodyTop = kind === 'car' ? h * 0.6 : h * 0.55
  const cabinLength = kind === 'car' ? l * 0.5 : l * 0.32
  const cabinOffset = kind === 'car' ? 0 : -l * 0.18

  const wheelPositions: [number, number][] = [
    [l * 0.32, w * 0.5],
    [l * 0.32, -w * 0.5],
    [-l * 0.32, w * 0.5],
    [-l * 0.32, -w * 0.5],
  ]

  return (
    <group>
      <mesh position={[0, bodyTop, 0]} castShadow>
        <boxGeometry args={[l * 0.92, h * 0.5, w]} />
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.35} />
      </mesh>
      <mesh position={[cabinOffset, bodyTop + h * 0.35, 0]} castShadow>
        <boxGeometry args={[cabinLength, h * 0.42, w * 0.84]} />
        <meshStandardMaterial color="#0f1b26" roughness={0.15} metalness={0.5} />
      </mesh>
      {wheelPositions.map((p, i) => (
        <mesh
          key={i}
          geometry={wheelGeo}
          material={wheelMat}
          position={[p[0], wheelR, p[1]]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        />
      ))}
    </group>
  )
}

export function Vehicles() {
  const { sim, bus } = useSim()
  const refs = useRef<(THREE.Group | null)[]>([])

  useEffect(() => {
    return bus.add(() => {
      for (let i = 0; i < sim.vehicles.length; i++) {
        const v = sim.vehicles[i]
        const g = refs.current[i]
        if (!g) continue
        g.position.set(v.x, v.y, v.z)
        g.rotation.y = v.rot
      }
    })
  }, [sim, bus])

  return (
    <group>
      {sim.vehicles.map((v, i) => (
        <group
          key={v.id}
          ref={(el) => {
            refs.current[i] = el
          }}
        >
          <VehicleModel color={v.color} kind={v.kind} l={v.l} w={v.w} h={v.h} />
        </group>
      ))}
    </group>
  )
}