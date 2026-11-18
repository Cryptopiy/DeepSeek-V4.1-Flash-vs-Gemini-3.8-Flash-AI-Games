import React, { useState } from 'react';
import { HUDData } from '../game/types';
import { StarIcon, CarIcon, WalkIcon, SoundOnIcon, SoundOffIcon, TargetIcon } from './Icons';
import { Minimap } from './Minimap';
import { GameSimulation } from '../game/simulation';

interface HUDProps {
  data: HUDData;
  simulation: GameSimulation;
  onInteract: () => void;
  onToggleSound: () => void;
  onRestart: () => void;
  onToggleCamera: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  data,
  simulation,
  onInteract,
  onToggleSound,
  onRestart,
  onToggleCamera,
}) => {
  const [showControls, setShowControls] = useState(true);

  // Speed in km/h
  const speedKmh = Math.round(data.speed * 3.6);
  const maxKmh = Math.round(data.maxSpeed * 3.6);
  const speedPercent = Math.min(100, Math.round((speedKmh / (maxKmh || 120)) * 100));

  return (
    <div className="hud-overlay">
      {/* Top Left: Player Status & Wanted Level */}
      <div className="hud-top-left">
        <div className="hud-panel status-card">
          <div className="player-badge">
            {data.playerState === 'driving' ? (
              <>
                <CarIcon className="icon-pulse" />
                <span className="badge-text">DRIVING • {data.vehicleName || 'Vehicle'}</span>
              </>
            ) : (
              <>
                <WalkIcon className="icon-pulse" />
                <span className="badge-text">ON FOOT</span>
              </>
            )}
          </div>

          {/* Wanted Stars System */}
          <div className={`wanted-container ${data.wantedLevel > 0 ? 'wanted-active' : ''}`}>
            <div className="wanted-stars">
              <StarIcon filled={data.wantedLevel >= 1} />
              <StarIcon filled={data.wantedLevel >= 2} />
              <StarIcon filled={data.wantedLevel >= 3} />
            </div>
            {data.wantedLevel > 0 && (
              <div className="evade-status">
                {data.isEvading ? (
                  <div className="evading-bar-container">
                    <span className="evading-text">EVADING POLICE</span>
                    <div className="evade-progress-track">
                      <div
                        className="evade-progress-fill"
                        style={{ width: `${Math.round(data.evadeProgress * 100)}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <span className="pursuit-text">POLICE PURSUIT ACTIVE</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mission Objective Card */}
        <div className="hud-panel mission-card">
          <div className="mission-header">
            <TargetIcon />
            <span className="mission-title">{data.mission.title}</span>
          </div>
          <div className="mission-body">
            <p className="mission-objective">{data.mission.objective}</p>
            {!data.mission.completed && (
              <div className="mission-footer">
                <span className="mission-distance">
                  📍 Distance: <strong>{data.mission.distance}m</strong>
                </span>
                <span className="mission-timer">
                  ⏱️ {Math.floor(data.mission.elapsed / 60)}:
                  {String(data.mission.elapsed % 60).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Top Right: Radar Minimap & Quick Actions */}
      <div className="hud-top-right">
        <Minimap simulation={simulation} />

        <div className="quick-actions">
          <button
            onClick={onToggleSound}
            className="hud-btn"
            title="Toggle Audio (M)"
          >
            {data.soundEnabled ? <SoundOnIcon /> : <SoundOffIcon />}
            <span>{data.soundEnabled ? 'Audio On' : 'Muted'}</span>
          </button>

          <button
            onClick={onToggleCamera}
            className="hud-btn"
            title="Toggle Camera View (C)"
          >
            <span>Cam: {data.cameraMode.toUpperCase()}</span>
          </button>

          {(data.canEnterVehicle || data.playerState === 'driving') && (
            <button
              onClick={onInteract}
              className="hud-btn hud-btn-action"
              title="Enter/Exit Car (E/F)"
            >
              <CarIcon />
              <span>{data.playerState === 'driving' ? 'Exit Car [E]' : 'Enter Car [E]'}</span>
            </button>
          )}

          <button
            onClick={() => setShowControls(!showControls)}
            className="hud-btn"
            title="Toggle Controls Help (H)"
          >
            <span>{showControls ? 'Hide Keys' : 'Controls'}</span>
          </button>
        </div>
      </div>

      {/* Center Screen: Interactive Vehicle Prompt */}
      {data.vehicleHint && (
        <div
          className="hud-center-hint"
          onClick={onInteract}
          role="button"
          tabIndex={0}
          title="Click to Enter / Exit Car"
        >
          <div className="hint-pill">
            <span className="hint-key">E / F</span>
            <span className="hint-text">{data.vehicleHint}</span>
            <span className="hint-click-sub">👆 or Click to Enter/Exit</span>
          </div>
        </div>
      )}

      {/* Bottom Center: Speedometer & Controls Bar */}
      <div className="hud-bottom-center">
        {data.playerState === 'driving' && (
          <div className="speedometer-panel">
            <div className="speedometer-digital">
              <span className="speed-number">{speedKmh}</span>
              <span className="speed-unit">KM/H</span>
            </div>
            <div className="speed-gauge-track">
              <div
                className="speed-gauge-fill"
                style={{ width: `${speedPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Controls Card */}
        {showControls && (
          <div className="controls-card">
            <div className="control-item">
              <kbd className="key-cap">W</kbd>
              <kbd className="key-cap">A</kbd>
              <kbd className="key-cap">S</kbd>
              <kbd className="key-cap">D</kbd>
              <span className="control-desc">Move / Drive</span>
            </div>
            <div className="control-item">
              <kbd className="key-cap">E</kbd>
              <span className="control-desc">Enter / Exit Car</span>
            </div>
            <div className="control-item">
              <kbd className="key-cap">Space</kbd>
              <span className="control-desc">Handbrake</span>
            </div>
            <div className="control-item">
              <kbd className="key-cap">Shift</kbd>
              <span className="control-desc">Sprint (Foot)</span>
            </div>
            <div className="control-item">
              <kbd className="key-cap">C</kbd>
              <span className="control-desc">Camera</span>
            </div>
            <div className="control-item">
              <kbd className="key-cap">R</kbd>
              <span className="control-desc">Restart Mission</span>
            </div>
          </div>
        )}
      </div>

      {/* Busted Modal Overlay */}
      {data.busted && (
        <div className="modal-overlay busted-overlay">
          <div className="modal-card busted-card">
            <h1 className="modal-title busted-title">BUSTED!</h1>
            <p className="modal-desc">
              You were apprehended by the Metropolitan Police Department.
            </p>
            <button onClick={onRestart} className="modal-action-btn">
              Respawn / Restart Mission [R]
            </button>
          </div>
        </div>
      )}

      {/* Mission Complete Overlay */}
      {data.mission.completed && (
        <div className="modal-overlay success-overlay">
          <div className="modal-card success-card">
            <div className="success-badge">🏆 MISSION ACCOMPLISHED</div>
            <h1 className="modal-title success-title">{data.mission.title}</h1>
            <p className="modal-desc">
              The Golden Apex Hypercar and confidential payload were safely delivered to the Harbor Safehouse hangar!
            </p>
            <div className="mission-stats-grid">
              <div className="stat-box">
                <span className="stat-label">Delivery Time</span>
                <span className="stat-value">
                  {Math.floor(data.mission.elapsed / 60)}m {data.mission.elapsed % 60}s
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Bounty Payout</span>
                <span className="stat-value text-gold">$25,000</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Police Heat</span>
                <span className="stat-value text-green">Evaded</span>
              </div>
            </div>
            <button onClick={onRestart} className="modal-action-btn success-btn">
              Replay Mission [R]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
