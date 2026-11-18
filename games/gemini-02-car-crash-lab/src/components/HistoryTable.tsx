import React from 'react';
import { CrashResult } from '../types/simulation';
import { History, Trash2, ChevronRight } from 'lucide-react';

interface HistoryTableProps {
  history: CrashResult[];
  onSelectRun: (run: CrashResult) => void;
  onClearHistory: () => void;
  selectedRunId?: string;
}

export const HistoryTable: React.FC<HistoryTableProps> = ({
  history,
  onSelectRun,
  onClearHistory,
  selectedRunId
}) => {
  if (history.length === 0) return null;

  return (
    <div className="glass-panel p-4 border border-slate-700/80 bg-slate-900/90 text-slate-100 rounded-2xl shadow-xl font-sans pointer-events-auto">
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 mb-3">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-amber-400" />
          <h4 className="text-xs font-bold font-tech tracking-wider text-slate-200 uppercase">
            EXPERIMENT RUN LOG ({history.length})
          </h4>
        </div>
        <button
          onClick={onClearHistory}
          title="Clear History"
          className="p-1 text-slate-400 hover:text-red-400 rounded transition"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto max-h-48 overflow-y-auto">
        <table className="w-full text-[11px] text-left border-collapse font-mono">
          <thead>
            <tr className="text-slate-400 border-b border-slate-800 text-[10px] tracking-wider uppercase font-tech">
              <th className="py-1 px-1.5">#</th>
              <th className="py-1 px-1.5">Speed</th>
              <th className="py-1 px-1.5">Mass</th>
              <th className="py-1 px-1.5">Angle</th>
              <th className="py-1 px-1.5">Obstacle</th>
              <th className="py-1 px-1.5">Peak Force</th>
              <th className="py-1 px-1.5">Damage</th>
            </tr>
          </thead>
          <tbody>
            {history.map((run) => {
              const isSelected = selectedRunId === run.id;
              return (
                <tr
                  key={run.id}
                  onClick={() => onSelectRun(run)}
                  className={`border-b border-slate-800/50 cursor-pointer transition ${
                    isSelected
                      ? 'bg-amber-500/20 text-white font-semibold'
                      : 'hover:bg-slate-800/60 text-slate-300'
                  }`}
                >
                  <td className="py-1.5 px-1.5 text-slate-500 font-bold">{run.runNumber}</td>
                  <td className="py-1.5 px-1.5 text-amber-400 font-semibold">{run.configuredSpeedKmh} <span className="text-[9px] text-slate-500">km/h</span></td>
                  <td className="py-1.5 px-1.5">{run.vehicleMassKg} <span className="text-[9px] text-slate-500">kg</span></td>
                  <td className="py-1.5 px-1.5">{run.collisionAngleDeg > 0 ? `+${run.collisionAngleDeg}` : run.collisionAngleDeg}°</td>
                  <td className="py-1.5 px-1.5 text-[10px] truncate max-w-[90px]">{run.obstacleName.split(' ')[0]}</td>
                  <td className="py-1.5 px-1.5 text-cyan-400 font-semibold">{run.estimatedImpactForceKn} <span className="text-[9px] text-slate-500">kN</span></td>
                  <td className="py-1.5 px-1.5">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        run.damagePercentage > 80
                          ? 'bg-red-950 text-red-400'
                          : run.damagePercentage > 50
                          ? 'bg-orange-950 text-orange-400'
                          : run.damagePercentage > 20
                          ? 'bg-amber-950 text-amber-400'
                          : 'bg-emerald-950 text-emerald-400'
                      }`}
                    >
                      {run.damagePercentage}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
