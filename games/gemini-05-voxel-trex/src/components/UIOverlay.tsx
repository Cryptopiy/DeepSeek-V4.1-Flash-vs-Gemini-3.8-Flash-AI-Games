import React, { useState, useEffect } from 'react';
import { AnimationMode, CameraPreset } from '../types/dinosaur';
import {
  RotateCcw,
  Play,
  Flame,
  Activity,
  Layers,
  Camera,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface UIOverlayProps {
  currentAnimation: AnimationMode;
  onSelectAnimation: (mode: AnimationMode) => void;
  onResetCamera: () => void;
  onSelectCameraPreset: (preset: CameraPreset) => void;
  voxelCount: number;
  partCounts: Record<string, number>;
}

export const UIOverlay: React.FC<UIOverlayProps> = ({
  currentAnimation,
  onSelectAnimation,
  onResetCamera,
  onSelectCameraPreset,
  voxelCount,
  partCounts
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeCamPreset, setActiveCamPreset] = useState<CameraPreset>('default');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if input is focused
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      switch (e.key) {
        case '1':
          onSelectAnimation('idle');
          break;
        case '2':
          onSelectAnimation('walk');
          break;
        case '3':
          onSelectAnimation('roar');
          break;
        case ' ':
          e.preventDefault();
          onResetCamera();
          setActiveCamPreset('default');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelectAnimation, onResetCamera]);

  const handleCameraClick = (preset: CameraPreset) => {
    setActiveCamPreset(preset);
    onSelectCameraPreset(preset);
  };

  const handleResetCamera = () => {
    setActiveCamPreset('default');
    onResetCamera();
  };

  return (
    <div className="ui-overlay-container">
      {/* Top Header & Voxel Counter */}
      <header className="top-bar">
        <div className="brand-group">
          <div className="title-row">
            <span className="brand-badge">VOXEL PALEONTOLOGY</span>
            <span className="status-live">REAL-TIME 3D</span>
          </div>
          <h1 className="main-title">TYRANNOSAURUS REX</h1>
        </div>

        {/* Real Dynamic Voxel Counter Badge */}
        <div className="stats-container">
          <div className="voxel-count-badge" onClick={() => setShowDetails(!showDetails)}>
            <Layers size={18} className="badge-icon" />
            <div className="voxel-text-block">
              <span className="voxel-number">{voxelCount.toLocaleString()}</span>
              <span className="voxel-label">ACTUAL VOXELS</span>
            </div>
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {/* Collapsible Anatomy Breakdown */}
          {showDetails && (
            <div className="breakdown-panel">
              <div className="breakdown-title">ANATOMICAL BREAKDOWN</div>
              <div className="breakdown-grid">
                {Object.entries(partCounts).map(([part, count]) => (
                  <div key={part} className="breakdown-item">
                    <span className="breakdown-key">{formatPartName(part)}</span>
                    <span className="breakdown-val">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Bottom Control Center */}
      <footer className="bottom-bar">
        {/* Camera Views Quick Switch */}
        <div className="camera-controls-card">
          <div className="card-header">
            <Camera size={14} />
            <span>CAMERA VIEWS</span>
          </div>
          <div className="camera-btn-group">
            <button
              className={`cam-btn ${activeCamPreset === 'default' ? 'active' : ''}`}
              onClick={() => handleCameraClick('default')}
            >
              Perspective
            </button>
            <button
              className={`cam-btn ${activeCamPreset === 'side' ? 'active' : ''}`}
              onClick={() => handleCameraClick('side')}
            >
              Side Profile
            </button>
            <button
              className={`cam-btn ${activeCamPreset === 'front' ? 'active' : ''}`}
              onClick={() => handleCameraClick('front')}
            >
              Front
            </button>
            <button
              className={`cam-btn ${activeCamPreset === 'head' ? 'active' : ''}`}
              onClick={() => handleCameraClick('head')}
            >
              Skull & Jaw
            </button>
            <button
              className="cam-btn reset-cam-btn"
              onClick={handleResetCamera}
              title="Reset Camera (Spacebar)"
            >
              <RotateCcw size={13} />
              <span>RESET CAMERA</span>
            </button>
          </div>
        </div>

        {/* Animation State Bar */}
        <div className="animation-card">
          <div className="card-header">
            <Activity size={14} />
            <span>ANIMATION STATE :</span>
            <span className={`active-state-tag ${currentAnimation}`}>
              {currentAnimation.toUpperCase()}
            </span>
          </div>

          <div className="anim-buttons-row">
            {/* IDLE */}
            <button
              className={`anim-btn idle-btn ${currentAnimation === 'idle' ? 'selected' : ''}`}
              onClick={() => onSelectAnimation('idle')}
            >
              <div className="btn-key-badge">1</div>
              <Activity size={18} />
              <div className="btn-labels">
                <span className="btn-main-text">IDLE</span>
                <span className="btn-sub-text">Breathing & Glance</span>
              </div>
            </button>

            {/* WALK */}
            <button
              className={`anim-btn walk-btn ${currentAnimation === 'walk' ? 'selected' : ''}`}
              onClick={() => onSelectAnimation('walk')}
            >
              <div className="btn-key-badge">2</div>
              <Play size={18} />
              <div className="btn-labels">
                <span className="btn-main-text">WALK</span>
                <span className="btn-sub-text">Alternating Strides</span>
              </div>
            </button>

            {/* ROAR */}
            <button
              className={`anim-btn roar-btn ${currentAnimation === 'roar' ? 'selected' : ''}`}
              onClick={() => onSelectAnimation('roar')}
            >
              <div className="btn-key-badge">3</div>
              <Flame size={18} />
              <div className="btn-labels">
                <span className="btn-main-text">ROAR</span>
                <span className="btn-sub-text">Open Jaws & Shake</span>
              </div>
            </button>
          </div>
        </div>

        {/* Minimal Controls Guide */}
        <div className="hints-card">
          <div className="hint-item">
            <span className="hint-pill">Left Drag</span> Orbit
          </div>
          <div className="hint-item">
            <span className="hint-pill">Right Drag</span> Pan
          </div>
          <div className="hint-item">
            <span className="hint-pill">Scroll</span> Zoom
          </div>
          <div className="hint-item">
            <span className="hint-pill">Space</span> Reset Cam
          </div>
        </div>
      </footer>
    </div>
  );
};

function formatPartName(key: string): string {
  switch (key) {
    case 'body': return 'Torso & Pelvis';
    case 'neck': return 'Muscular Neck';
    case 'head': return 'Skull & Upper Jaw';
    case 'lowerJaw': return 'Articulated Jaw';
    case 'tailBase': return 'Tail (Base)';
    case 'tailMid': return 'Tail (Mid)';
    case 'tailTip': return 'Tail (Tip)';
    case 'armL': return 'Left Forearm';
    case 'armR': return 'Right Forearm';
    case 'thighL': return 'Left Thigh';
    case 'shinL': return 'Left Shin';
    case 'footL': return 'Left Foot & Toes';
    case 'thighR': return 'Right Thigh';
    case 'shinR': return 'Right Shin';
    case 'footR': return 'Right Foot & Toes';
    default: return key;
  }
}
