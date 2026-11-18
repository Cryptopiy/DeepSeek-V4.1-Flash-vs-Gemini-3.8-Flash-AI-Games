import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CameraMode, CrashResult, LiveTelemetry, SimulationParams, SimulationStatus } from './types/simulation';
import { CrashSimulationEngine } from './physics/dynamics';
import { SceneManager } from './scene/SceneManager';
import { SoundFX } from './audio/SoundFX';
import { ControlPanel } from './components/ControlPanel';
import { TelemetryHUD } from './components/TelemetryHUD';
import { ResultsPanel } from './components/ResultsPanel';
import { HistoryTable } from './components/HistoryTable';
import { PhysicsModal } from './components/PhysicsModal';
import { CameraControls } from './components/CameraControls';
import { ShieldAlert, Info } from 'lucide-react';

export const App: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneManagerRef = useRef<SceneManager | null>(null);
  const simEngineRef = useRef<CrashSimulationEngine | null>(null);
  const soundFXRef = useRef<SoundFX | null>(null);

  // User parameters
  const [params, setParams] = useState<SimulationParams>({
    speedKmh: 60,
    massKg: 1500,
    angleDeg: 0,
    obstacleId: 'concrete_wall',
    timeScale: 1.0,
    soundEnabled: true
  });

  // UI state
  const [cameraMode, setCameraMode] = useState<CameraMode>('cinematic');
  const [status, setStatus] = useState<SimulationStatus>('IDLE');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [telemetry, setTelemetry] = useState<LiveTelemetry>({
    speedKmh: 0,
    speedMs: 0,
    position: { x: 0, y: 0, z: -45 },
    headingDeg: 0,
    longitudinalG: 0,
    lateralG: 0,
    totalG: 0,
    distanceToImpactM: 45,
    timeElapsedS: 0,
    status: 'IDLE'
  });

  const [currentResult, setCurrentResult] = useState<CrashResult | null>(null);
  const [history, setHistory] = useState<CrashResult[]>([]);
  const [isPhysicsModalOpen, setIsPhysicsModalOpen] = useState<boolean>(false);
  const [showResultsPanel, setShowResultsPanel] = useState<boolean>(false);

  // Initialize Scene, Physics, Audio
  useEffect(() => {
    if (!mountRef.current) return;

    const sceneManager = new SceneManager(mountRef.current);
    sceneManagerRef.current = sceneManager;

    const simEngine = new CrashSimulationEngine(params);
    simEngineRef.current = simEngine;

    const soundFX = new SoundFX();
    soundFX.enabled = params.soundEnabled;
    soundFXRef.current = soundFX;

    // Connect callbacks
    simEngine.onImpact = (speedKmh, contactX, contactZ, nx, nz) => {
      sceneManager.triggerImpactEffects(speedKmh, contactX, contactZ, nx, nz);
      soundFX.playCrashImpact(speedKmh, 1.2);
    };

    simEngine.onSettled = (result) => {
      setCurrentResult(result);
      setShowResultsPanel(true);
      setHistory((prev) => [result, ...prev]);

      // Apply 3D vertex crumple deformation
      sceneManager.vehicle.applyDamage(
        result.damageZones,
        result.damagePercentage,
        result.collisionAngleDeg
      );
    };

    // Animation & Physics Loop
    let lastTime = performance.now();
    let animId: number;

    const loop = (currentTime: number) => {
      animId = requestAnimationFrame(loop);

      const rawDt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      const dt = Math.min(rawDt, 0.05);

      if (!isPaused && simEngine.status !== 'IDLE' && simEngine.status !== 'SETTLED') {
        const scaledDt = dt * params.timeScale;
        simEngine.step(scaledDt);

        // Sound engine pitch updates during approach
        if (simEngine.status === 'ACCELERATING') {
          const ratio = Math.min(1.0, simEngine.car.vz / (params.speedKmh / 3.6));
          soundFX.updateEnginePitch(ratio);
        } else if (simEngine.status === 'POST_IMPACT') {
          soundFX.playTireSkid();
        }
      }

      // Sync 3D Graphics
      sceneManager.syncWithPhysics(simEngine, dt);
      sceneManager.render();

      // Update UI Telemetry
      const live = simEngine.getLiveTelemetry();
      setTelemetry(live);
      setStatus(simEngine.status);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      sceneManager.destroy();
      soundFX.stopEngine();
    };
  }, []); // Run once on mount

  // Sync param updates to physics and 3D scene
  const handleUpdateParams = useCallback((newParams: Partial<SimulationParams>) => {
    setParams((prev) => {
      const updated = { ...prev, ...newParams };
      if (simEngineRef.current) {
        simEngineRef.current.updateParams(updated);
      }
      if (soundFXRef.current && newParams.soundEnabled !== undefined) {
        soundFXRef.current.enabled = newParams.soundEnabled;
      }
      if (sceneManagerRef.current) {
        if (newParams.obstacleId !== undefined || newParams.angleDeg !== undefined) {
          sceneManagerRef.current.setObstacle(
            updated.obstacleId,
            updated.angleDeg
          );
        }
      }
      return updated;
    });
  }, []);

  const handleCameraModeChange = (mode: CameraMode) => {
    setCameraMode(mode);
    if (sceneManagerRef.current) {
      sceneManagerRef.current.setCameraMode(mode);
    }
  };

  const handleRunCrash = () => {
    if (!simEngineRef.current || !sceneManagerRef.current) return;
    setIsPaused(false);
    setShowResultsPanel(false);

    // Reset visual scene to pristine state before starting
    sceneManagerRef.current.reset(params.obstacleId, params.angleDeg);

    // Start audio
    if (soundFXRef.current) {
      soundFXRef.current.startEngine();
    }

    // Launch physics
    simEngineRef.current.start();
  };

  const handleReset = () => {
    if (!simEngineRef.current || !sceneManagerRef.current) return;
    setIsPaused(false);
    simEngineRef.current.reset();
    sceneManagerRef.current.reset(params.obstacleId, params.angleDeg);

    if (soundFXRef.current) {
      soundFXRef.current.stopEngine();
    }

    setStatus('IDLE');
    setShowResultsPanel(false);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleSelectHistoryRun = (run: CrashResult) => {
    setCurrentResult(run);
    setShowResultsPanel(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Application Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80 shadow-lg pointer-events-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <h1 className="text-xs sm:text-sm font-bold font-tech tracking-wider text-slate-100 uppercase">
              3D CAR CRASH LABORATORY <span className="text-amber-400 font-mono text-xs">// DYNAMICS LAB</span>
            </h1>
          </div>
        </div>

        {/* Camera Mode Switcher */}
        <CameraControls currentMode={cameraMode} onSelectMode={handleCameraModeChange} />
      </div>

      {/* Main Overlay UI: Left Sidebar (Controls) & Right (Results / History) */}
      <div className="absolute inset-0 p-4 pt-16 pb-24 pointer-events-none flex justify-between items-start gap-4 z-10">
        {/* Left Side: Parameters & Execution Controls */}
        <div className="pointer-events-auto">
          <ControlPanel
            params={params}
            status={status}
            isPaused={isPaused}
            onUpdateParams={handleUpdateParams}
            onRunCrash={handleRunCrash}
            onReset={handleReset}
            onTogglePause={handleTogglePause}
            onOpenPhysicsModal={() => setIsPhysicsModalOpen(true)}
          />
        </div>

        {/* Right Side: Results Panel & Experiment History Log */}
        <div className="flex flex-col gap-4 pointer-events-auto items-end max-w-md w-full">
          {showResultsPanel && currentResult && (
            <ResultsPanel
              result={currentResult}
              onReset={handleReset}
              onClose={() => setShowResultsPanel(false)}
            />
          )}

          <div className="w-full">
            <HistoryTable
              history={history}
              onSelectRun={handleSelectHistoryRun}
              onClearHistory={() => setHistory([])}
              selectedRunId={currentResult?.id}
            />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry HUD */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex justify-center z-20">
        <div className="w-full max-w-4xl">
          <TelemetryHUD telemetry={telemetry} params={params} />
        </div>
      </div>

      {/* Physics Model Modal */}
      <PhysicsModal
        isOpen={isPhysicsModalOpen}
        onClose={() => setIsPhysicsModalOpen(false)}
      />
    </div>
  );
};
