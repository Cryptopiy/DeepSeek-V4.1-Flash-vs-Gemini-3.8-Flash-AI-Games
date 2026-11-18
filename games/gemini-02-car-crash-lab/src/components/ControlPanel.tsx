import React from 'react';
import { Play, RotateCcw, Pause, Volume2, VolumeX, BookOpen, Sliders, Shield, Scale, Gauge, Compass } from 'lucide-react';
import { ObstacleId, SimulationParams, SimulationStatus } from '../types/simulation';
import { OBSTACLES } from '../physics/constants';

interface ControlPanelProps {
  params: SimulationParams;
  status: SimulationStatus;
  isPaused: boolean;
  onUpdateParams: (newParams: Partial<SimulationParams>) => void;
  onRunCrash: () => void;
  onReset: () => void;
  onTogglePause: () => void;
  onOpenPhysicsModal: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  params,
  status,
  isPaused,
  onUpdateParams,
  onRunCrash,
  onReset,
  onTogglePause,
  onOpenPhysicsModal
}) => {
  const isSimulating = status === 'ACCELERATING' || status === 'IMPACT' || status === 'POST_IMPACT';

  const speedPresets = [30, 60, 100, 160];
  const massPresets = [
    { label: 'Compact', mass: 950 },
    { label: 'Sedan', mass: 1500 },
    { label: 'SUV', mass: 2200 },
    { label: 'Heavy EV', mass: 2800 }
  ];
  const anglePresets = [-45, -15, 0, 15, 45];
  const timeScales = [
    { label: '1.0x', val: 1.0 },
    { label: '0.5x Slow', val: 0.5 },
    { label: '0.2x Crash Cam', val: 0.2 }
  ];

  return (
    <div className="glass-panel p-5 border border-slate-700/80 bg-slate-900/90 text-slate-100 rounded-2xl shadow-2xl max-w-sm w-full font-sans pointer-events-auto space-y-4 max-h-[92vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-amber-400" />
          <h2 className="text-sm font-bold font-tech tracking-wider text-slate-100 uppercase">
            TEST PARAMETERS
          </h2>
        </div>
        <div className="flex items-center gap-1.5">
          {/* Sound Toggle */}
          <button
            onClick={() => onUpdateParams({ soundEnabled: !params.soundEnabled })}
            title={params.soundEnabled ? 'Mute Audio' : 'Enable Audio'}
            className={`p-1.5 rounded-lg border transition ${
              params.soundEnabled
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            {params.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Physics Model Doc */}
          <button
            onClick={onOpenPhysicsModal}
            title="Physics Model & Equations"
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-xs text-slate-300 font-tech transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODEL</span>
          </button>
        </div>
      </div>

      {/* 1. Vehicle Speed Control */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-tech font-bold uppercase">VEHICLE SPEED</span>
          </div>
          <div className="font-mono text-sm font-bold text-amber-400">
            {params.speedKmh} <span className="text-xs text-slate-400">km/h</span>
            <span className="text-xs text-slate-500 ml-1">({(params.speedKmh / 3.6).toFixed(1)} m/s)</span>
          </div>
        </div>

        <input
          type="range"
          min="10"
          max="200"
          step="5"
          value={params.speedKmh}
          disabled={isSimulating}
          onChange={(e) => onUpdateParams({ speedKmh: Number(e.target.value) })}
          className="w-full accent-amber-500"
        />

        <div className="flex gap-1 justify-between pt-1">
          {speedPresets.map((speed) => (
            <button
              key={speed}
              disabled={isSimulating}
              onClick={() => onUpdateParams({ speedKmh: speed })}
              className={`px-2 py-0.5 text-[11px] font-mono rounded border transition ${
                params.speedKmh === speed
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {speed}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Vehicle Mass Control */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-tech font-bold uppercase">VEHICLE MASS</span>
          </div>
          <div className="font-mono text-sm font-bold text-cyan-400">
            {params.massKg} <span className="text-xs text-slate-400">kg</span>
          </div>
        </div>

        <input
          type="range"
          min="700"
          max="3000"
          step="50"
          value={params.massKg}
          disabled={isSimulating}
          onChange={(e) => onUpdateParams({ massKg: Number(e.target.value) })}
          className="w-full accent-cyan-500"
        />

        <div className="grid grid-cols-4 gap-1 pt-1">
          {massPresets.map((p) => (
            <button
              key={p.mass}
              disabled={isSimulating}
              onClick={() => onUpdateParams({ massKg: p.mass })}
              className={`px-1.5 py-0.5 text-[10px] font-mono rounded border truncate transition text-center ${
                params.massKg === p.mass
                  ? 'bg-cyan-500/20 border-cyan-500/60 text-cyan-300 font-bold'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Collision Angle Control */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-tech font-bold uppercase">IMPACT ANGLE</span>
          </div>
          <div className="font-mono text-sm font-bold text-emerald-400">
            {params.angleDeg > 0 ? `+${params.angleDeg}` : params.angleDeg}°
            <span className="text-xs text-slate-500 ml-1">
              {params.angleDeg === 0 ? '(Head-on)' : params.angleDeg > 0 ? '(Right-offset)' : '(Left-offset)'}
            </span>
          </div>
        </div>

        <input
          type="range"
          min="-60"
          max="60"
          step="5"
          value={params.angleDeg}
          disabled={isSimulating}
          onChange={(e) => onUpdateParams({ angleDeg: Number(e.target.value) })}
          className="w-full accent-emerald-500"
        />

        <div className="flex gap-1 justify-between pt-1">
          {anglePresets.map((ang) => (
            <button
              key={ang}
              disabled={isSimulating}
              onClick={() => onUpdateParams({ angleDeg: ang })}
              className={`px-2 py-0.5 text-[11px] font-mono rounded border transition ${
                params.angleDeg === ang
                  ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {ang > 0 ? `+${ang}` : ang}°
            </button>
          ))}
        </div>
      </div>

      {/* 4. Obstacle Type Selector */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs text-slate-300">
          <Shield className="w-3.5 h-3.5 text-orange-400" />
          <span className="font-tech font-bold uppercase">OBSTACLE GEOMETRY</span>
        </div>

        <div className="space-y-1.5">
          {(Object.keys(OBSTACLES) as ObstacleId[]).map((obsKey) => {
            const obs = OBSTACLES[obsKey];
            const isSelected = params.obstacleId === obsKey;
            return (
              <div
                key={obsKey}
                onClick={() => !isSimulating && onUpdateParams({ obstacleId: obsKey })}
                className={`p-2.5 rounded-xl border cursor-pointer transition ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500/70 shadow-inner'
                    : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800/80'
                } ${isSimulating ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className="flex justify-between items-center mb-0.5">
                  <span className={`text-xs font-bold font-tech ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                    {obs.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {obs.isFixed ? 'Anchor ∞' : `${obs.massKg} kg`}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 line-clamp-1">{obs.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Slow-Motion Time Scale Selector */}
      <div className="pt-1">
        <div className="text-[10px] text-slate-400 mb-1 font-tech uppercase">SIMULATION SPEED (TIME SCALE)</div>
        <div className="grid grid-cols-3 gap-1">
          {timeScales.map((ts) => (
            <button
              key={ts.val}
              onClick={() => onUpdateParams({ timeScale: ts.val })}
              className={`py-1 text-[11px] font-mono rounded border transition text-center ${
                params.timeScale === ts.val
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {ts.label}
            </button>
          ))}
        </div>
      </div>

      {/* 6. Main Action Buttons */}
      <div className="pt-2 space-y-2">
        <button
          onClick={onRunCrash}
          disabled={isSimulating}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold font-tech text-sm tracking-wider btn-hazard"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>RUN CRASH TEST</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-tech font-bold transition"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>RESET</span>
          </button>

          <button
            onClick={onTogglePause}
            disabled={status === 'IDLE' || status === 'SETTLED'}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-tech font-bold transition ${
              isPaused
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200'
            } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <Pause className="w-3.5 h-3.5" />
            <span>{isPaused ? 'RESUME' : 'PAUSE'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
