import * as React from 'react'
import type { Simulation } from '../sim/Simulation'

export type VisualUpdate = (dt: number) => void

export class VisualBus {
  private fns: VisualUpdate[] = []

  add(fn: VisualUpdate): () => void {
    this.fns.push(fn)
    return () => {
      this.fns = this.fns.filter((f) => f !== fn)
    }
  }

  run(dt: number): void {
    for (let i = 0; i < this.fns.length; i++) this.fns[i](dt)
  }
}

export interface SimContextValue {
  sim: Simulation
  bus: VisualBus
}

export const SimContext = React.createContext<SimContextValue | null>(null)

export function useSim(): SimContextValue {
  const ctx = React.useContext(SimContext)
  if (!ctx) throw new Error('SimContext is not available')
  return ctx
}