export function ControlPanel({
  waveHeight,
  onWaveHeight,
  running,
  paused,
  speed,
  onSpeed,
  overlay,
  onOverlay,
  onStart,
  onReset,
  onTogglePause,
}: {
  waveHeight: number
  onWaveHeight: (v: number) => void
  running: boolean
  paused: boolean
  speed: number
  onSpeed: (v: number) => void
  overlay: boolean
  onOverlay: (v: boolean) => void
  onStart: () => void
  onReset: () => void
  onTogglePause: () => void
}) {
  return (
    <div className="panel">
      <div className="panel-title">TSUNAMI DISASTER SIMULATOR</div>

      <label className="field">
        <span>
          Wave Height <b>{waveHeight.toFixed(0)} m</b>
        </span>
        <input
          type="range"
          min={1}
          max={20}
          step={1}
          value={waveHeight}
          onChange={(e) => onWaveHeight(Number(e.target.value))}
        />
      </label>

      <button className="start-btn" onClick={onStart}>
        {running ? 'RESTART TSUNAMI' : 'START TSUNAMI'}
      </button>

      <div className="row">
        <button className="ghost-btn" onClick={onReset}>
          RESET
        </button>
        <button className="ghost-btn" onClick={onTogglePause} disabled={!running}>
          {paused ? 'RESUME' : 'PAUSE'}
        </button>
      </div>

      <label className="field">
        <span>
          Sim Speed <b>{speed.toFixed(1)}x</b>
        </span>
        <input
          type="range"
          min={0.25}
          max={3}
          step={0.25}
          value={speed}
          onChange={(e) => onSpeed(Number(e.target.value))}
        />
      </label>

      <label className="check">
        <input
          type="checkbox"
          checked={overlay}
          onChange={(e) => onOverlay(e.target.checked)}
        />
        <span>Show terrain wireframe overlay</span>
      </label>

      <div className="hint">Drag to orbit · Scroll to zoom · Right-drag to pan</div>
    </div>
  )
}