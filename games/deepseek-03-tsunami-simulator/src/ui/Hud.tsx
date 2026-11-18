import type { SimStats } from '../sim/types'

export function Hud({
  stats,
  running,
  paused,
  waveHeight,
}: {
  stats: SimStats
  running: boolean
  paused: boolean
  waveHeight: number
}) {
  const status = !running ? 'CALM' : paused ? 'PAUSED' : 'RUNNING'
  return (
    <div className="hud">
      <div className={`status status-${status.toLowerCase()}`}>{status}</div>
      <div className="stat-big">
        <span>Flooded Area</span>
        <strong>{stats.floodedPercent.toFixed(1)}%</strong>
      </div>
      <div className="stat-grid">
        <div>
          <span>Peak flooded</span>
          <b>{stats.peakFloodedPercent.toFixed(1)}%</b>
        </div>
        <div>
          <span>Max depth</span>
          <b>{stats.maxDepth.toFixed(2)} m</b>
        </div>
        <div>
          <span>Wave height</span>
          <b>{waveHeight.toFixed(0)} m</b>
        </div>
        <div>
          <span>Elapsed</span>
          <b>{stats.elapsed.toFixed(1)} s</b>
        </div>
        <div>
          <span>Flooded buildings</span>
          <b>
            {stats.floodedBuildings}/{stats.totalBuildings}
          </b>
        </div>
        <div>
          <span>Displaced vehicles</span>
          <b>
            {stats.displacedVehicles}/{stats.totalVehicles}
          </b>
        </div>
        <div>
          <span>People caught</span>
          <b>
            {stats.caughtPeople}/{stats.totalPeople}
          </b>
        </div>
      </div>
    </div>
  )
}