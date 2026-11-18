import { useCallback, useEffect, useMemo, useState } from 'react';
import { CrashScene } from './components/CrashScene';
import { ControlPanel } from './components/ControlPanel';
import { HistoryPanel } from './components/HistoryPanel';
import { ModelInfo } from './components/ModelInfo';
import { ResultPanel } from './components/ResultPanel';
import { SimulationEngine } from './physics/Simulation';
import type { CrashConfig, CrashResult, ImpactData, Telemetry } from './physics/types';

const INITIAL_TELEMETRY: Telemetry = {
  phase: 'idle',
  speedKmh: 0,
  x: 0,
  z: 0,
  yawDeg: 0,
  elapsed: 0,
  damagePct: 0,
};

export default function App() {
  const engine = useMemo(() => new SimulationEngine(), []);
  const [config, setConfig] = useState<CrashConfig>(engine.getConfig());
  const [telemetry, setTelemetry] = useState<Telemetry>(INITIAL_TELEMETRY);
  const [lastResult, setLastResult] = useState<CrashResult | null>(null);
  const [history, setHistory] = useState<CrashResult[]>([]);
  const [impact, setImpact] = useState<ImpactData | null>(null);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    engine.onResult = (r) => {
      setLastResult(r);
      setHistory((h) => [r, ...h].slice(0, 8));
      setRunning(false);
      setPaused(false);
    };
    engine.onImpact = (i) => setImpact(i);
    return () => {
      engine.onResult = undefined;
      engine.onImpact = undefined;
    };
  }, [engine]);

  useEffect(() => {
    const id = window.setInterval(() => setTelemetry(engine.getTelemetry()), 100);
    return () => window.clearInterval(id);
  }, [engine]);

  const updateConfig = useCallback(
    (patch: Partial<CrashConfig>) => {
      engine.setConfig(patch);
      setConfig(engine.getConfig());
    },
    [engine],
  );

  const handleRun = useCallback(() => {
    setLastResult(null);
    setImpact(null);
    setPaused(false);
    engine.run();
    setRunning(true);
    setTelemetry(engine.getTelemetry());
  }, [engine]);

  const handleReset = useCallback(() => {
    engine.reset();
    setRunning(false);
    setPaused(false);
    setImpact(null);
    setTelemetry(engine.getTelemetry());
  }, [engine]);

  const handleTogglePause = useCallback(() => {
    engine.togglePause();
    setPaused(engine.paused);
  }, [engine]);

  const handleToggleSlow = useCallback(() => {
    setSlow((s) => {
      const next = !s;
      engine.setTimeScale(next ? 0.25 : 1);
      return next;
    });
  }, [engine]);

  return (
    <div className="app">
      <header className="topbar">
        <h1>CAR CRASH LAB</h1>
        <span className="tagline">Real-time 3D impact simulator · momentum · energy · damage</span>
      </header>

      <main className="layout">
        <section className="viewport">
          <CrashScene engine={engine} obstacleType={config.obstacleType} />
        </section>

        <aside className="sidebar">
          <ControlPanel
            config={config}
            onChange={updateConfig}
            onRun={handleRun}
            onReset={handleReset}
            onTogglePause={handleTogglePause}
            onToggleSlow={handleToggleSlow}
            running={running}
            paused={paused}
            slow={slow}
            locked={running}
            telemetry={telemetry}
          />
          <ResultPanel result={lastResult} impact={impact} telemetry={telemetry} running={running} />
          <HistoryPanel runs={history} />
          <ModelInfo />
        </aside>
      </main>
    </div>
  );
}