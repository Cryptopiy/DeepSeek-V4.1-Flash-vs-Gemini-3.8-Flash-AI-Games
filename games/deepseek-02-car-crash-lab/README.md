# Car Crash Lab

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

Interactive, real-time **3D** browser car-crash laboratory built with TypeScript, React, Vite
and React Three Fiber / Three.js. It is a true 3D simulation (perspective camera, 3D geometry,
3D position + rotation, lighting, shadows) — not a 2D/iso/CSS/pre-rendered animation.

## Run

```bash
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

Other scripts:

```bash
npm run build     # type-check + production build
npm run preview   # preview the production build
```

No backend, API keys, authentication or external assets are required.

## Physics model (summary)

The car drives along **+X**. The collision angle yaws the **obstacle**, so the contact geometry
is real: normal `n = (cos a, 0, -sin a)`, tangent `t = (sin a, 0, cos a)`. The car's velocity is
split into normal and tangential components.

1. **Normal direction** — 1D momentum collision with restitution `e`:

   ```
   v1' = ((m1 - e·m2)·v1 + (1+e)·m2·v2) / (m1 + m2)
   v2' = ((m2 - e·m1)·v2 + (1+e)·m1·v1) / (m1 + m2)
   J   = m1·(v1 - v1')          # impulse on the car
   ```

2. **Tangential direction** — friction scrubs the sliding component: `vt' = vt·(1 - μ)`.

3. **Rebound** — `v' = v1'·n + vt'·t`, a real 3D velocity vector.

4. **Impact force (estimate)** — `F ≈ J / Δt`, where `Δt` is an **assumed** contact time per
   obstacle (concrete 0.05 s, heavy 0.09 s, light 0.16 s). Presented in the UI as an estimate.

5. **Damage** — only the normal component dissipates energy:
   `E_diss = KE_before - KE_after`, scaled by obstacle stiffness.
   `damage% = 100 · E_diss · stiffness / E_ref`, clamped 0–100, with
   `E_ref = ½·2000 kg·(100 km/h)² ≈ 0.772 MJ`. Damage scales with speed², with mass, and falls
   off for glancing angles. Zones: front always, plus left/right side when the angle is oblique.

6. **Post-impact motion** — the rebound velocity, an impulse-derived yaw rate and roll/pitch
   rates are integrated with fixed 1/120 s substeps plus ground friction, air drag and damped
   rotation until the car settles. Obstacles also translate/slide when movable.

Debris is seeded deterministically from the configuration (`mulberry32`), so the same setup
produces approximately the same run.

## Assumptions

- Impact force is an **estimate** based on an assumed contact duration, not a measured value.
- Concrete is modelled with a very large mass so it behaves as immovable within the same
  momentum equations.
- The damage reference energy is a calibration constant, not a real crash-test figure.
- Post-impact motion is a simplified rigid-body model (ground-plane friction, no suspension).

## File structure

```
02_car_crash_lab/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx                 # app state, wiring, history
    ├── styles.css
    ├── physics/
    │   ├── types.ts            # shared domain types
    │   ├── obstacles.ts        # obstacle presets
    │   └── Simulation.ts       # 3D collision + integration engine
    ├── utils/
    │   └── math.ts             # clamp, PRNG, formatters
    └── components/
        ├── CrashScene.tsx      # React Three Fiber canvas
        ├── Vehicle.tsx         # 3D car + damage deformation
        ├── ObstacleMesh.tsx    # 3D obstacle
        ├── Track.tsx           # ground, scale markers, rails, impact zone
        ├── DebrisField.tsx     # instanced debris
        ├── CameraRig.tsx       # chase camera + screen shake
        ├── ControlPanel.tsx    # parameter controls + actions
        ├── ResultPanel.tsx     # measurements + damage zones
        ├── HistoryPanel.tsx    # last runs table
        └── ModelInfo.tsx       # in-app physics model documentation
```

## Feature checklist

- [x] Adjustable vehicle speed (10–200 km/h) with configured + simulated readout
- [x] Adjustable vehicle mass (700–3000 kg)
- [x] Adjustable collision angle (−60°…+60°) that changes real 3D geometry
- [x] Three obstacle types with distinct behaviour (concrete / heavy / light)
- [x] RUN CRASH launches an actual simulation
- [x] Car collides with the obstacle at the selected geometry
- [x] Car visibly reacts (translation, rebound, rotation, sliding)
- [x] Damage zones change visually (front + left/right, proportional deformation)
- [x] Obstacle types produce meaningfully different outcomes
- [x] Shows Speed / Impact force / Damage / Final position
- [x] Higher speed significantly increases force and damage
- [x] Reset restores the scene for repeated experiments
- [x] Last runs table for comparison
- [x] Stable across repeated crashes (bounded values, deterministic reset)
