import { useRef } from 'react'
import type { MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import { Simulation } from '../sim/Simulation'
import { VisualBus } from './SimContext'

export function SimulationRunner({
  sim,
  bus,
  speedRef,
  onStats,
}: {
  sim: Simulation
  bus: VisualBus
  speedRef: MutableRefObject<number>
  onStats: (stats: Simulation['stats']) => void
}) {
  const statAcc = useRef(0)

  useFrame((_, delta) => {
    const simulated = sim.advance(delta, speedRef.current)
    bus.run(simulated)
    statAcc.current += delta
    if (statAcc.current >= 0.2) {
      statAcc.current = 0
      onStats({ ...sim.stats })
    }
  })

  return null
}