import type { CrashResult, ImpactData, Telemetry } from '../physics/types';
import { fmt, formatEnergy, formatForce } from '../utils/math';

function severityClass(sev: string): string {
  switch (sev) {
    case 'Minor':
      return 'sev-minor';
    case 'Moderate':
      return 'sev-moderate';
    case 'Severe':
      return 'sev-severe';
    default:
      return 'sev-catastrophic';
  }
}

function ZoneBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="zone">
      <span className="zone-label">{label}</span>
      <div className="zone-track">
        <div className="zone-fill" style={{ width: `${Math.min(100, value)}%` }} />
      </div>
      <span className="zone-val">{fmt(value, 0)}%</span>
    </div>
  );
}

interface Props {
  result: CrashResult | null;
  impact: ImpactData | null;
  telemetry: Telemetry;
  running: boolean;
}

export function ResultPanel({ result, impact, telemetry, running }: Props) {
  const live = impact;
  const damage = result ? result.damagePct : live ? live.damagePct : 0;
  const force = result ? result.impactForceN : live ? live.forceN : 0;
  const zones = live ? live.zones : { front: 0, rear: 0, left: 0, right: 0 };
  const severity = result ? result.severity : '—';

  return (
    <div className="panel">
      <h2>Result</h2>
      {!result && !live && <p className="muted">Run a crash to compute measurements.</p>}

      {(result || live) && (
        <>
          <div className="readout-grid">
            <div className="readout">
              <span>Impact Speed</span>
              <strong>{fmt(live?.impactSpeedKmh ?? result?.impactSpeedKmh ?? 0, 1)} km/h</strong>
            </div>
            <div className="readout">
              <span>Impact Force (est.)</span>
              <strong>{formatForce(force)}</strong>
            </div>
            <div className="readout">
              <span>Damage</span>
              <strong>{fmt(damage, 1)} %</strong>
            </div>
            <div className="readout">
              <span>Final Position</span>
              <strong>
                X {fmt(result?.finalX ?? telemetry.x, 1)} / Z{' '}
                {fmt(result?.finalZ ?? telemetry.z, 1)} m
              </strong>
            </div>
          </div>

          <div className={`severity ${severityClass(severity)}`}>
            {severity}
            {!result && running && ' (live)'}
          </div>

          <div className="damage-block">
            <div className="damage-track">
              <div className="damage-fill" style={{ width: `${Math.min(100, damage)}%` }} />
            </div>
            <div className="zone-list">
              <ZoneBar label="Front" value={zones.front} />
              <ZoneBar label="Left side" value={zones.left} />
              <ZoneBar label="Right side" value={zones.right} />
              <ZoneBar label="Rear" value={zones.rear} />
            </div>
          </div>

          <table className="kv">
            <tbody>
              <tr>
                <td>Configured speed</td>
                <td>{fmt(result?.initialSpeedKmh ?? 0, 0)} km/h</td>
              </tr>
              <tr>
                <td>Normal component</td>
                <td>{fmt(live?.normalSpeedKmh ?? result?.normalComponentKmh ?? 0, 1)} km/h</td>
              </tr>
              <tr>
                <td>Vehicle mass</td>
                <td>{fmt(result?.massKg ?? 0, 0)} kg</td>
              </tr>
              <tr>
                <td>Collision angle</td>
                <td>{fmt(result?.angleDeg ?? 0, 0)}°</td>
              </tr>
              <tr>
                <td>Obstacle</td>
                <td>{result?.obstacleName ?? live?.obstacleName ?? '—'}</td>
              </tr>
              <tr>
                <td>Final rotation (yaw)</td>
                <td>{fmt(result?.finalYawDeg ?? telemetry.yawDeg, 1)}°</td>
              </tr>
              <tr>
                <td>Kinetic energy before</td>
                <td>{formatEnergy(live?.energyBeforeJ ?? result?.energyBeforeJ ?? 0)}</td>
              </tr>
              <tr>
                <td>Kinetic energy after</td>
                <td>{formatEnergy(live?.energyAfterJ ?? result?.energyAfterJ ?? 0)}</td>
              </tr>
              <tr>
                <td>Assumed impact duration</td>
                <td>{fmt(live?.impactDuration ?? 0, 3)} s</td>
              </tr>
            </tbody>
          </table>

          <p className="assumption">
            Impact force is an <b>estimate</b>: average force ≈ impulse ÷ assumed contact time.
            The contact time is a preset per obstacle (concrete 0.05 s, heavy 0.09 s, light 0.16 s),
            not a measured value.
          </p>
        </>
      )}
    </div>
  );
}