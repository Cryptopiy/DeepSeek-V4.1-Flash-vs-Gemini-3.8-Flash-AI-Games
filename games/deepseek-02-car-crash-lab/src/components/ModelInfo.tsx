export function ModelInfo() {
  return (
    <details className="panel model">
      <summary>
        <h2>Physics Model</h2>
      </summary>
      <div className="model-body">
        <p>
          The car drives along +X; the obstacle is yawed by the collision angle <b>a</b>, so the
          contact normal is <code>n = (cos a, 0, -sin a)</code> and the tangent is{' '}
          <code>t = (sin a, 0, cos a)</code>. Velocities are split into normal and tangential
          components.
        </p>
        <p>
          <b>Normal direction</b> — a 1D momentum collision with restitution <code>e</code>:
        </p>
        <pre>{`v1' = ((m1 - e·m2)·v1 + (1+e)·m2·v2) / (m1 + m2)
v2' = ((m2 - e·m1)·v2 + (1+e)·m1·v1) / (m1 + m2)
J   = m1·(v1 - v1')   [impulse]`}</pre>
        <p>
          <b>Tangential direction</b> — friction scrubs the sliding component:{' '}
          <code>vt' = vt·(1 - μ)</code>. The output velocity is then{' '}
          <code>v' = v1'·n + vt'·t</code> — a real 3D rebound.
        </p>
        <p>
          <b>Impact force (estimate)</b> — <code>F ≈ J / Δt</code> where <code>Δt</code> is an
          assumed contact time per obstacle. This is presented as an estimate, not a measured
          force.
        </p>
        <p>
          <b>Damage</b> — only the normal component dissipates energy:
          <code> E_diss = KE_before - KE_after</code>. Damage is normalized to a reference energy
          (2000 kg at 100 km/h ≈ 0.77 MJ) and clamped to 0–100 %:{' '}
          <code>damage% = 100·E_diss / E_ref</code>. This makes damage scale with speed², with
          mass, and fall off for glancing angles — while a low-restitution (stiff) obstacle
          dissipates more.
        </p>
        <p>
          <b>Post-impact motion</b> — the rebound velocity, an impulse-derived yaw rate, and roll/
          pitch rates are integrated over time with ground friction, air drag and damped rotation
          until the car settles. Debris is seeded deterministically from the configuration, so the
          same setup gives approximately the same run.
        </p>
      </div>
    </details>
  );
}