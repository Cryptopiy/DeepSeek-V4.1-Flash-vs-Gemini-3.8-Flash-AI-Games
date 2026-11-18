import type { HudState } from '../game/types';

export function Hud({ state }: { state: HudState }) {
  const stars = [0, 1, 2].map((i) => (
    <span key={i} className={i < state.wanted ? '' : 'dim'}>
      ★
    </span>
  ));

  return (
    <div className="hud">
      <div className="hud-panel hud-top-left">
        <div className="hud-label">Player state</div>
        <div className={`hud-value ${state.mode === 'foot' ? 'mode-foot' : 'mode-drive'}`}>
          {state.mode === 'foot' ? 'ON FOOT' : 'DRIVING'}
        </div>
        {state.mode === 'driving' && (
          <div className="hud-sub">Speed: {Math.round(state.speed)} km/h</div>
        )}
        {state.mode === 'driving' && state.vehicleKind && (
          <div className="hud-sub">Vehicle: {state.vehicleKind}</div>
        )}
      </div>

      <div className="hud-panel hud-top-right">
        <div className="hud-label">Wanted</div>
        <div className="hud-stars">{stars}</div>
        <div className="hud-sub">
          {state.wanted > 0 ? `${state.police} police pursuing` : 'No active pursuit'}
        </div>
      </div>

      <div className="hud-panel hud-bottom-left">
        <div className="hud-label">Objective</div>
        <div className="hud-objective">{state.objective}</div>
        <div className="hud-sub" style={{ marginTop: 10 }}>
          <div className="hud-controls">
            <b>W A S D</b> move / drive
            <br />
            <b>E</b> enter / exit vehicle
            <br />
            <b>Space</b> handbrake
            <br />
            <b>R</b> restart mission
            <br />
            <b>Mouse drag</b> orbit camera
          </div>
        </div>
      </div>

      {state.hint && <div className="hint">{state.hint}</div>}

      {state.message && <div className="toast">{state.message}</div>}

      {state.missionComplete && (
        <div className="success">
          MISSION COMPLETE
          <span className="small">Press R to play it again</span>
        </div>
      )}
    </div>
  );
}