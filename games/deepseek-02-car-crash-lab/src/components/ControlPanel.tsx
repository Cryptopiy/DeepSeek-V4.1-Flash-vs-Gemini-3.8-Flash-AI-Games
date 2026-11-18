import type { CrashConfig, ObstacleTypeId, Telemetry } from '../physics/types';
import { OBSTACLE_LIST } from '../physics/obstacles';
import { fmt } from '../utils/math';

interface Props {
  config: CrashConfig;
  onChange: (patch: Partial<CrashConfig>) => void;
  onRun: () => void;
  onReset: () => void;
  onTogglePause: () => void;
  onToggleSlow: () => void;
  running: boolean;
  paused: boolean;
  slow: boolean;
  locked: boolean;
  telemetry: Telemetry;
}

export function ControlPanel({
  config,
  onChange,
  onRun,
  onReset,
  onTogglePause,
  onToggleSlow,
  running,
  paused,
  slow,
  locked,
  telemetry,
}: Props) {
  return (
    <div className="panel">
      <h2>Experiment Setup</h2>

      <div className="field">
        <label>
          Vehicle Speed <span className="value">{fmt(config.speedKmh, 0)} km/h</span>
        </label>
        <input
          type="range"
          min={10}
          max={200}
          step={1}
          value={config.speedKmh}
          disabled={locked}
          onChange={(e) => onChange({ speedKmh: Number(e.target.value) })}
        />
        <div className="sub">
          Configured <b>{fmt(config.speedKmh, 0)}</b> km/h · Simulated{' '}
          <b>{fmt(telemetry.speedKmh, 1)}</b> km/h
        </div>
      </div>

      <div className="field">
        <label>
          Vehicle Mass <span className="value">{fmt(config.massKg, 0)} kg</span>
        </label>
        <input
          type="range"
          min={700}
          max={3000}
          step={10}
          value={config.massKg}
          disabled={locked}
          onChange={(e) => onChange({ massKg: Number(e.target.value) })}
        />
      </div>

      <div className="field">
        <label>
          Collision Angle <span className="value">{fmt(config.angleDeg, 0)}°</span>
        </label>
        <input
          type="range"
          min={-60}
          max={60}
          step={1}
          value={config.angleDeg}
          disabled={locked}
          onChange={(e) => onChange({ angleDeg: Number(e.target.value) })}
        />
        <div className="sub">
          {Math.abs(config.angleDeg) < 8
            ? 'Approximately head-on impact'
            : `Glancing impact (${Math.abs(config.angleDeg)}° off-normal)`}
        </div>
      </div>

      <div className="field">
        <label>Obstacle Type</label>
        <div className="obstacle-grid">
          {OBSTACLE_LIST.map((o) => (
            <button
              key={o.id}
              className={`obstacle-card ${config.obstacleType === o.id ? 'active' : ''}`}
              disabled={locked}
              onClick={() => onChange({ obstacleType: o.id as ObstacleTypeId })}
            >
              <span className="swatch" style={{ background: o.color }} />
              <span className="oname">{o.name}</span>
              <span className="ometa">{o.mass.toLocaleString()} kg</span>
            </button>
          ))}
        </div>
      </div>

      <div className="actions">
        <button className="run" onClick={onRun}>
          RUN CRASH
        </button>
        <button className="reset" onClick={onReset}>
          RESET
        </button>
        <button className="ghost" onClick={onTogglePause} disabled={!running}>
          {paused ? 'RESUME' : 'PAUSE'}
        </button>
        <button className={`ghost ${slow ? 'on' : ''}`} onClick={onToggleSlow}>
          {slow ? 'SLOW-MO · 0.25×' : 'SLOW-MO · OFF'}
        </button>
      </div>
      <div className="sub center">
        Phase: <b>{telemetry.phase.toUpperCase()}</b> · t = {fmt(telemetry.elapsed, 2)} s
      </div>
    </div>
  );
}