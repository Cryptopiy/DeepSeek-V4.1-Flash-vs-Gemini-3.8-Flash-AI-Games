import type { CrashResult } from '../physics/types';
import { fmt, formatForce } from '../utils/math';

export function HistoryPanel({ runs }: { runs: CrashResult[] }) {
  return (
    <div className="panel">
      <h2>Last Runs</h2>
      {runs.length === 0 ? (
        <p className="muted">No experiments yet. History is kept for this session.</p>
      ) : (
        <div className="table-scroll">
          <table className="history">
            <thead>
              <tr>
                <th>#</th>
                <th>Speed</th>
                <th>Mass</th>
                <th>Angle</th>
                <th>Obstacle</th>
                <th>Force</th>
                <th>Damage</th>
              </tr>
            </thead>
            <tbody>
              {runs.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{fmt(r.initialSpeedKmh, 0)} km/h</td>
                  <td>{fmt(r.massKg, 0)} kg</td>
                  <td>{fmt(r.angleDeg, 0)}°</td>
                  <td>{r.obstacleName}</td>
                  <td>{formatForce(r.impactForceN)}</td>
                  <td>{fmt(r.damagePct, 0)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}