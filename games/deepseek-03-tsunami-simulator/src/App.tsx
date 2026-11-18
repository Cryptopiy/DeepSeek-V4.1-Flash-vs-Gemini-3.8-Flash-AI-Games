import { Canvas } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import { Scene } from './scene/Scene'
import { SimContext, VisualBus } from './scene/SimContext'
import { Simulation } from './sim/Simulation'
import type { SimStats } from './sim/types'
import { ControlPanel } from './ui/ControlPanel'
import { ElevationLegend } from './ui/ElevationLegend'
import { Hud } from './ui/Hud'

export default function App() {
  const sim = useMemo(() => new Simulation(), [])
  const bus = useMemo(() => new VisualBus(), [])

  const [stats, setStats] = useState<SimStats>(() => ({ ...sim.stats }))
  const [waveHeight, setWaveHeight] = useState(6)
  const [running, setRunning] = useState(false)
  const [paused, setPaused] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [overlay, setOverlay] = useState(false)

  const speedRef = useRef(1)
  speedRef.current = speed

  const handleWave = (v: number) => {
    setWaveHeight(v)
    sim.setWaveHeight(v)
  }

  const handleStart = () => {
    sim.start()
    setRunning(true)
    setPaused(false)
    setStats({ ...sim.stats })
  }

  const handleReset = () => {
    sim.reset()
    setRunning(false)
    setPaused(false)
    setStats({ ...sim.stats })
  }

  const handlePause = () => {
    const next = !paused
    setPaused(next)
    sim.paused = next
  }

  return (
    <div className="app">
      <SimContext.Provider value={{ sim, bus }}>
        <Canvas
          shadows
          dpr={[1, 1.75]}
          camera={{ position: [-70, 150, -265], fov: 50, near: 0.5, far: 6000 }}
          gl={{ antialias: true }}
        >
          <Scene overlay={overlay} speedRef={speedRef} onStats={setStats} />
        </Canvas>
      </SimContext.Provider>

      <ControlPanel
        waveHeight={waveHeight}
        onWaveHeight={handleWave}
        running={running}
        paused={paused}
        speed={speed}
        onSpeed={setSpeed}
        overlay={overlay}
        onOverlay={setOverlay}
        onStart={handleStart}
        onReset={handleReset}
        onTogglePause={handlePause}
      />

      <Hud stats={stats} running={running} paused={paused} waveHeight={waveHeight} />
      <ElevationLegend />
    </div>
  )
}