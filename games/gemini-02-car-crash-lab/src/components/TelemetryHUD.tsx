import React from 'react';
import { Gauge, Activity, Navigation, Timer } from 'lucide-react';
import { LiveTelemetry, SimulationParams } from '../types/simulation';

interface TelemetryHUDProps {
  telemetry: LiveTelemetry;
  params: SimulationParams;
}

export const TelemetryHUD: React.FC<TelemetryHUDProps> = ({ telemetry, params }) => {
  // Speed percentage relative to 200 km/h
  const speedRatio = Math.min(1.0, telemetry.speedKmh / 200);
  const strokeDashoffset = 251.2 * (1 - speedRatio * 0.75); // 270 deg arc

  // Status color badge
  const getStatusBadge = () => {
    switch (telemetry.status) {
      case 'IDLE':
        return <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">STATUS: READY</span>;
      case 'ACCELERATING':
        return <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 animate-pulse">APPROACH ACCELERATION</span>;
      case 'IMPACT':
        return <span className="px-2.5 py-1 rounded bg-red-950 text-red-400 border border-red-700 font-bold animate-ping">CRASH IMPACT</span>;
      case 'POST_IMPACT':
        return <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-400 border border-amber-700">POST-CRASH SLIDE & REBOUND</span>;
      case 'SETTLED':
        return <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-700 font-bold">SIMULATION COMPLETED</span>;
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 shadow-2xl text-slate-100 font-tech pointer-events-auto">
      {/* Speedometer Gauge */}
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#1e293b"
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke={telemetry.speedKmh > 100 ? '#ef4444' : '#f59e0b'}
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-75"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-base font-bold font-mono text-white leading-none">
              {telemetry.speedKmh}
            </span>
            <span className="text-[9px] text-slate-400 tracking-wider">KM/H</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            <span>LIVE VELOCITY</span>
          </div>
          <div className="text-xs text-slate-300 font-mono">
            Target: <span className="text-amber-400 font-semibold">{params.speedKmh} km/h</span> ({Math.round(params.speedKmh / 3.6)} m/s)
          </div>
        </div>
      </div>

      {/* G-Force Readout */}
      <div className="flex items-center gap-3 px-3 py-1.5 bg-slate-800/60 rounded-xl border border-slate-700/50">
        <Activity className="w-4 h-4 text-cyan-400" />
        <div>
          <div className="text-[10px] text-slate-400 tracking-wider">CHASSIS LOAD (G)</div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-300">
              Long: <span className={telemetry.longitudinalG < -2 ? 'text-red-400 font-bold' : 'text-slate-200'}>{telemetry.longitudinalG}G</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              Lat: <span className="text-slate-200">{telemetry.lateralG}G</span>
            </span>
          </div>
        </div>
      </div>

      {/* Distance to Impact */}
      <div className="flex items-center gap-3 px-3 py-1.5 bg-slate-800/60 rounded-xl border border-slate-700/50">
        <Navigation className="w-4 h-4 text-emerald-400" />
        <div>
          <div className="text-[10px] text-slate-400 tracking-wider">DATUM PROXIMITY</div>
          <div className="font-mono text-xs text-slate-200">
            {telemetry.distanceToImpactM > 0 ? (
              <span>
                <strong className="text-emerald-400">{telemetry.distanceToImpactM}</strong> m to impact
              </span>
            ) : (
              <span className="text-amber-400 font-bold">IMPACT ZONE REACHED</span>
            )}
          </div>
        </div>
      </div>

      {/* Timer & Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
          <Timer className="w-3.5 h-3.5 text-slate-400" />
          <span>{telemetry.timeElapsedS.toFixed(2)}s</span>
        </div>
        <div className="text-xs font-bold">{getStatusBadge()}</div>
      </div>
    </div>
  );
};
