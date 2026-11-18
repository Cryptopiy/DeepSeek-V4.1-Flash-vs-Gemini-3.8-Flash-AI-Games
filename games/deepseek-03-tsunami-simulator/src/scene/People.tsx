import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useSim } from './SimContext'

export function People() {
  const { sim, bus } = useSim()
  const refs = useRef<(THREE.Group | null)[]>([])

  useEffect(() => {
    return bus.add(() => {
      for (let i = 0; i < sim.people.length; i++) {
        const p = sim.people[i]
        const g = refs.current[i]
        if (!g) continue
        g.position.set(p.x, p.y, p.z)
        g.rotation.y = p.caught ? sim.time * 2 + i : i * 0.7
      }
    })
  }, [sim, bus])

  return (
    <group>
      {sim.people.map((p, i) => (
        <group
          key={p.id}
          ref={(el) => {
            refs.current[i] = el
          }}
        >
          <mesh position={[0, 0.85, 0]} castShadow>
            <capsuleGeometry args={[0.25, 0.9, 4, 8]} />
            <meshStandardMaterial color={p.color} roughness={0.7} />
          </mesh>
          <mesh position={[0, 1.62, 0]} castShadow>
            <sphereGeometry args={[0.24, 12, 10]} />
            <meshStandardMaterial color="#e8c9a0" roughness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  )
}