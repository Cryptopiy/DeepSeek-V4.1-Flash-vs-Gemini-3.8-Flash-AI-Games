import React from 'react';
import { CrashResult } from '../types/simulation';
import { ShieldAlert, Zap, Compass, RotateCcw, Activity, ArrowRight, BarChart2, X } from 'lucide-react';

interface ResultsPanelProps {
  result: CrashResult | null;
  onReset: () => void;
  onClose?: () => void;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ result, onReset, onClose }) => {
  if (!result) return null;

  // Severity badge color styling
  const getSeverityBadge = () => {
    switch (result.damageSeverity) {
      case 'Minor':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">MINOR (0–20%)</span>;
      case 'Moderate':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/40">MODERATE (20–50%)</span>;
      case 'Severe':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/40">SEVERE (50–80%)</span>;
      case 'Catastrophic':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse">CATASTROPHIC (80–100%)</span>;
    }
  };

  return (
    <div className="glass-panel p-5 border border-slate-700/80 bg-slate-900/95 text-slate-100 rounded-2xl shadow-2xl max-w-md w-full font-sans pointer-events-auto max-h-[85vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-red-500/20 text-red-400 rounded-xl">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold font-tech tracking-wide text-white uppercase">
              POST-CRASH TELEMETRY REPORT
            </h3>
            <p className="text-[11px] text-slate-400">
              Run #{result.runNumber} • {result.obstacleName}
            </p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white rounded-lg">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Key Headline Metrics */}
      <div className="grid grid-cols-2 gap-2.5 mb-4 font-tech">
        {/* Damage Score */}
        <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
          <div className="text-[11px] text-slate-400 font-sans">STRUCTURAL DAMAGE</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-3xl font-bold font-mono text-amber-400">{result.damagePercentage}%</span>
          </div>
          <div className="mt-1.5">{getSeverityBadge()}</div>
        </div>

        {/* Peak Impact Force */}
        <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
          <div className="text-[11px] text-slate-400 font-sans">ESTIMATED PEAK FORCE</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-3xl font-bold font-mono text-cyan-400">{result.estimatedImpactForceKn}</span>
            <span className="text-xs text-slate-400">kN</span>
          </div>
          <div className="mt-1 text-xs text-slate-400 font-mono">
            ≈ <strong className="text-slate-200">{result.estimatedImpactForceTons}</strong> tf (metric tons)
          </div>
        </div>
      </div>

      {/* Primary Impact Zone */}
      <div className="p-3 mb-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-400">PRIMARY IMPACT ZONE:</span>
          <span className="font-bold text-amber-400 font-tech">{result.primaryDamageZone}</span>
        </div>

        {/* 5-Zone Breakdown */}
        <div className="space-y-1.5 text-xs font-mono">
          <div>
            <div className="flex justify-between text-[11px] text-slate-400 mb-0.5">
              <span>Front Center Bumper</span>
              <span>{result.damageZones.frontCenter}%</span>
            </div>
            <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all"
                style={{ width: `${result.damageZones.frontCenter}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                <span>Front Left</span>
                <span>{result.damageZones.frontLeft}%</span>
              </div>
              <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-500 h-full rounded-full"
                  style={{ width: `${result.damageZones.frontLeft}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                <span>Front Right</span>
                <span>{result.damageZones.frontRight}%</span>
              </div>
              <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-500 h-full rounded-full"
                  style={{ width: `${result.damageZones.frontRight}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collision Kinematics Table */}
      <div className="space-y-2 mb-4 text-xs">
        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 font-tech">
          <Activity className="w-3.5 h-3.5 text-amber-400" />
          <span>COLLISION KINEMATICS & FORCES</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950/60 p-3 rounded-xl border border-slate-800">
          <div>
            <div className="text-[10px] text-slate-400">CONFIG / IMPACT SPEED</div>
            <div className="text-slate-200">
              {result.configuredSpeedKmh} → <strong className="text-amber-400">{result.impactSpeedKmh}</strong> km/h
            </div>
            <div className="text-[10px] text-slate-500">({result.impactSpeedMs} m/s)</div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400">VEHICLE MASS & ANGLE</div>
            <div className="text-slate-200">
              <strong>{result.vehicleMassKg}</strong> kg @ <strong>{result.collisionAngleDeg > 0 ? `+${result.collisionAngleDeg}` : result.collisionAngleDeg}°</strong>
            </div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400">DECELERATION PEAK</div>
            <div className="text-slate-200">
              <strong className="text-red-400">{result.peakGForce}</strong> G
            </div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400">PULSE DURATION (EST.)</div>
            <div className="text-slate-200">
              <strong>{result.assumedPulseDurationMs}</strong> ms
            </div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400">CRUMPLE DEPTH (EST.)</div>
            <div className="text-slate-200">
              <strong>{result.assumedCrumpleDistanceM}</strong> m
            </div>
          </div>

          <div>
            <div className="text-[10px] text-slate-400">MOMENTUM IMPULSE</div>
            <div className="text-slate-200">
              <strong>{(result.impulseNs / 1000).toFixed(1)}</strong> kN·s
            </div>
          </div>
        </div>
      </div>

      {/* Energy Dissipation */}
      <div className="space-y-2 mb-4 text-xs">
        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 font-tech">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>KINETIC ENERGY BALANCE</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
          <div>
            <div className="text-[10px] text-slate-400">INITIAL KE</div>
            <div className="text-slate-200 font-bold">{result.initialKineticEnergyKj} <span className="text-[10px] text-slate-400">kJ</span></div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400">POST KE</div>
            <div className="text-slate-400">{result.postImpactKineticEnergyKj} <span className="text-[10px] text-slate-400">kJ</span></div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400">DISSIPATED</div>
            <div className="text-emerald-400 font-bold">{result.energyDissipatedKj} <span className="text-[10px] text-slate-400">kJ</span></div>
          </div>
        </div>
      </div>

      {/* Final Resting Position */}
      <div className="p-3 mb-4 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs">
        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 font-tech mb-2">
          <Compass className="w-3.5 h-3.5 text-emerald-400" />
          <span>FINAL RESTING POSITION & ORIENTATION</span>
        </div>
        <div className="grid grid-cols-3 gap-2 font-mono text-[11px] text-slate-200">
          <div>
            <span className="text-slate-500">X:</span> {result.finalPosition.x} m
          </div>
          <div>
            <span className="text-slate-500">Z:</span> {result.finalPosition.z} m
          </div>
          <div>
            <span className="text-slate-500">Yaw:</span> {result.finalRotationDeg}°
          </div>
        </div>
        <div className="mt-1.5 flex justify-between text-[11px] text-slate-400 font-mono">
          <span>Displacement from Datum: <strong>{result.finalDistanceToImpactM} m</strong></span>
          {result.obstacleDisplacementM > 0 && (
            <span>Obstacle Displaced: <strong className="text-amber-400">{result.obstacleDisplacementM} m</strong></span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onReset}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold font-tech rounded-xl border border-slate-600 transition"
        >
          <RotateCcw className="w-4 h-4 text-amber-400" />
          RESET SIMULATION
        </button>
      </div>
    </div>
  );
};
