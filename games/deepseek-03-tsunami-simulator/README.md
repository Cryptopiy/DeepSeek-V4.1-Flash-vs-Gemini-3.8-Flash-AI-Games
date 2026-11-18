# Tsunami Disaster Simulator

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

A working real-time **3D** browser-based tsunami disaster simulator for a small coastal
island/city. Built with **TypeScript + React + Vite + React Three Fiber (Three.js)**.
No backend, no external APIs, no downloaded assets — the terrain and city are generated
locally in code.

![scene]()

## Run

```bash
npm install
npm run dev
```

Then open the printed URL (default `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Controls

- **Wave Height** slider (1–20 m) — changes maximum inundation, water depth, reach inland
  and the force applied to movable objects.
- **START TSUNAMI** — resets and begins the progressive event.
- **RESET** — restores ocean/land water state, object positions and all counters.
- **PAUSE / RESUME** — freeze or continue the event.
- **Sim Speed** (0.25x–3x).
- **Terrain wireframe overlay** toggle.
- Drag to orbit, scroll to zoom, right-drag to pan.

## Water-propagation model

The map is a 128×128 node grid (256 m × 256 m, ~2 m spacing). Each node stores:

- terrain elevation `terrain[k]` (m),
- water depth `depth[k]` (m, always ≥ 0),
- approximate flow velocity `(flowX[k], flowZ[k])` (m/s),
- flags for sea, road and building-obstacle cells.

Each fixed step:

1. **Surface height** `surface = terrain + depth`.
2. For every 4-neighbour edge (excluding building cells) a *desired* transfer is computed
   from the head difference: `q = max(0, surfaceA − surfaceB) · RATE`.
3. Each land cell's total desired outflow is limited so it can never move more than ~90 %
   of its current depth (`scale = min(1, 0.9·depth / Σq)`). Sea cells are an unlimited
   source/sink, so they are never scaled.
4. Transfers are written to a delta buffer and applied at the end (order-independent),
   guaranteeing non-negative depths and conservation for land cells.
5. The sea boundary is reset each step to `depth = max(0, seaLevel(t) − terrain)`, so the
   ocean behaves as an infinite reservoir at the current tsunami surge level.
6. Flow velocity is derived from the accumulated per-node flux
   (`v = flux · cell / (dt · depth)`), clamped to a maximum.

The tsunami is a surge `seaLevel(t)` = smooth rise (2.5 s) → hold (7.5 s) → smooth fall
(24 s), scaled by the wave-height setting. Water can only reach cells whose terrain is
below the current sea level, so **low coastal terrain floods first**, depressions collect
water, roads (lowered ~1.1 m) channel it, hills delay/prevent flooding, and larger waves
reach farther inland. No scripted flood mask is used — the flood is an emergent result of
the cell transfers and the real terrain heights.

## Object-force model

Vehicles accelerate only when local water depth exceeds a float threshold (0.18 m):

- drag force from the moving water: `F = k · depth · flowVelocity`, so acceleration is
  `a = F / mass` (mass differs per car/truck/bus),
- viscous drag `v ·= exp(−DRAG·dt)`,
- a torque from the component of flow perpendicular to the vehicle heading, so vehicles
  rotate to align with the current,
- speed/spin clamps for stability.

When dry, strong ground friction brings objects to rest. Vehicles collide with building
AABBs (they are pushed out and bounce slightly) and with the map bounds. Their render
height follows the ground when dry and the water surface when afloat. Pedestrians flee
toward the summit while dry, stop when safe, and are swept/drifted once deep water
reaches them.

## Statistics

`Flooded Area: XX%` is computed from **actual land cells** (sea cells and building
footprints excluded) whose depth exceeds 0.08 m. Also shown: peak flooded %, maximum
water depth, flooded buildings, displaced vehicles, caught people, elapsed simulated time
and current wave height.

## File structure

```
03_disaster_simulator/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── src/
    ├── main.tsx                 # React entry
    ├── App.tsx                  # top-level state + Canvas + UI wiring
    ├── styles.css               # UI styling
    ├── sim/
    │   ├── util.ts              # clamp / lerp / smoothstep helpers
    │   ├── rng.ts               # seeded PRNG + value noise / fbm
    │   ├── types.ts             # shared simulation types / grid interface
    │   ├── terrain.ts           # height-field generation + colour ramp
    │   ├── city.ts              # buildings, roads usage, vehicles, pedestrians
    │   ├── water.ts             # cell-based water propagation + flow estimation
    │   ├── objects.ts           # vehicle / pedestrian physics + collisions
    │   ├── statistics.ts        # flood counters
    │   └── Simulation.ts        # orchestrator (state, reset, step loop)
    ├── scene/
    │   ├── SimContext.ts        # context + visual update bus
    │   ├── geometry.ts          # grid geometry builders / water buffer updates
    │   ├── Scene.tsx            # lighting, sky, fog, camera controls
    │   ├── TerrainMesh.tsx      # 3D terrain mesh (vertex-coloured elevation)
    │   ├── WaterMesh.tsx        # 3D water surface with depth-based shader
    │   ├── Buildings.tsx        # instanced building meshes
    │   ├── Vehicles.tsx         # movable vehicle meshes
    │   ├── People.tsx           # pedestrian markers
    │   ├── FlowParticles.tsx    # advected flow/foam particles
    │   ├── SkyDome.tsx          # gradient sky
    │   └── SimulationRunner.tsx # fixed-step driver (useFrame)
    └── ui/
        ├── ControlPanel.tsx
        ├── Hud.tsx
        └── ElevationLegend.tsx
```

## Architecture notes

- The simulation loop is a plain TypeScript class (`Simulation`) with no React inside it.
- React never re-renders per cell. Rendering uses a small number of meshes: one terrain
  mesh, one water mesh (custom depth shader), one instanced mesh for all buildings, and
  direct `position/rotation` mutation of vehicle/pedestrian groups through a lightweight
  "visual bus" updated once per frame.
- Statistics are pushed to React at ~5 Hz only.
- The fixed-step integrator (1/60 s, max 10 substeps/frame) keeps the water solver stable
  regardless of frame rate.

## Simplifications / assumptions

- Water uses a first-order finite-volume / "pipe" transfer scheme rather than full CFD;
  buildings block flow at the cell level (flow goes around them) but no Navier–Stokes.
- A tsunami is modelled as a surge at the sea boundary that rises, holds and recedes;
  there is no secondary train of waves.
- Object physics is a simplified buoyancy + drag + torque model, not a rigid-body engine.
- Buildings are axis-aligned for collision (their small visual rotation is ignored).
- The grid is 128×128 nodes to keep the simulator comfortably interactive.

## Acceptance checklist

1. ✅ Coastal city with visible terrain elevation (varied 3D height-field mesh, contour
   colour bands, wireframe overlay and elevation legend).
2. ✅ Roads (lowered, water-channelling) and 34 buildings.
3. ✅ 24 movable vehicles (cars/trucks/buses).
4. ✅ User can change wave height (1–20 m).
5. ✅ `START TSUNAMI` begins a progressive simulation.
6. ✅ Water visibly enters from the sea side (ocean boundary source).
7. ✅ Low terrain floods before nearby high terrain (level-set + neighbour transfer).
8. ✅ Water continues spreading over time until the surge recedes.
9. ✅ A small wave produces less inland flooding than a large wave.
10. ✅ Vehicles are pushed, rotated and carried by deep water and collide with buildings.
11. ✅ `Flooded Area: XX%` updates from actual land-cell depths.
12. ✅ `RESET` restores the initial scene, objects and counters.
13. ✅ Multiple runs work without a page refresh (START re-initialises deterministically).
14. ✅ Responsive: no per-cell React components, instancing/merged buffers, fixed-step loop,
    stats throttled, non-negative/NaN-guarded water and object state.

## Reliability

- Water depths are clamped to ≥ 0 and the scaling step prevents draining a cell below its
  available water.
- NaN/Infinity guards on water, flow and object state.
- Reset restores all arrays and object states each run; module scratch buffers are reused
  (no unbounded allocation / slowdown across runs).
- Fixed-step integration prevents instability at low frame rates.