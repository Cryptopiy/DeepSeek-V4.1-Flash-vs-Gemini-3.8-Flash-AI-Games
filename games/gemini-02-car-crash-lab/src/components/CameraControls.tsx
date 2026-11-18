import React from 'react';
import { Camera, Compass, Video, Eye, ArrowDown } from 'lucide-react';
import { CameraMode } from '../types/simulation';

interface CameraControlsProps {
  currentMode: CameraMode;
  onSelectMode: (mode: CameraMode) => void;
}

export const CameraControls: React.FC<CameraControlsProps> = ({ currentMode, onSelectMode }) => {
  const modes: { id: CameraMode; label: string; icon: React.ReactNode }[] = [
    { id: 'cinematic', label: 'Director', icon: <Video className="w-3.5 h-3.5" /> },
    { id: 'orbit', label: '3D Orbit', icon: <Compass className="w-3.5 h-3.5" /> },
    { id: 'trackside', label: 'Trackside', icon: <Camera className="w-3.5 h-3.5" /> },
    { id: 'chase', label: 'Chase Cam', icon: <Eye className="w-3.5 h-3.5" /> },
    { id: 'top_down', label: 'Top-Down', icon: <ArrowDown className="w-3.5 h-3.5" /> }
  ];

  return (
    <div className="flex items-center gap-1 p-1 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/80 shadow-lg pointer-events-auto">
      {modes.map((m) => {
        const isActive = currentMode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onSelectMode(m.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              isActive
                ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            {m.icon}
            <span className="hidden sm:inline">{m.label}</span>
          </button>
        );
      })}
    </div>
  );
};
