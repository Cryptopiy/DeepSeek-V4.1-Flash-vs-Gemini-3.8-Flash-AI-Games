# Mini Open World

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

A small but complete real-time 3D open-world sandbox built with **TypeScript + React + Vite + Three.js**.
All geometry and materials are generated procedurally in code — no external assets, no backend.

## Install & run

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`). Type-check/build with `npm run build`.

## Controls

| Key / Input | Action |
| --- | --- |
| `W A S D` / arrows | Move on foot / drive |
| `E` | Enter or exit the nearest vehicle |
| `Space` | Handbrake (while driving) |
| `R` | Restart the mission |
| Mouse drag | Orbit the third-person camera |

## Implemented systems

- **3D city world** — procedural road grid, intersections, sidewalks, ~60 buildings, lane markings, street lamps, parked cars. A perspective third-person camera with mouse orbit that auto-follows while driving.
- **Player on foot** — 8-direction movement, facing/orientation, walking animation, collision with buildings and vehicles, enter-vehicle hint.
- **Vehicle system** — acceleration, braking/reverse, drag/friction, speed-dependent steering, handbrake, inertia (cars never snap-turn), world/vehicle collision response, safe exit placement.
- **Pedestrian NPCs** — independent state machine (`walk` / `wait` / `flee`), randomized destinations, un-synchronized movement, blocked detection with re-routing, flee from impact.
- **Traffic NPCs** — vehicles follow the road node graph, pick new directions at intersections, brake for obstacles, collide instead of passing through.
- **Collision** — 3D circle/OBB-style collision volumes (two-circle vehicle bodies + AABB buildings), resolved against the actual world geometry each frame.
- **Police / wanted** — wanted level (0–3) triggered by hitting pedestrians, ramming cars, or hitting police; police cars spawn and pursue the target both on foot and while driving; wanted decays after escaping for several seconds.
- **Mission** — "Go to the green marker → enter the yellow delivery car → drive to the blue drop-off"; objective text, world markers, success state, `R` to replay.
- **HUD** — player state (`ON FOOT` / `DRIVING`), speed, objective, wanted stars + police count, interaction hints, toasts, and a controls panel.

## Project structure

```
01_mini_open_world/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ styles.css
   ├─ ui/
   │  └─ Hud.tsx
   └─ game/
      ├─ Game.ts            # game loop, wiring of all systems
      ├─ Input.ts           # keyboard + frame-edge input
      ├─ World.ts           # procedural city, colliders, road graph
      ├─ CameraRig.ts       # third-person follow/orbit camera
      ├─ Physics.ts         # vehicle & entity collision resolution
      ├─ Collision.ts       # circle/AABB/circle primitives
      ├─ constants.ts
      ├─ math.ts
      ├─ types.ts
      ├─ entities/
      │  ├─ Player.ts
      │  ├─ Vehicle.ts
      │  ├─ Pedestrian.ts
      │  └─ vehicleMesh.ts
      └─ systems/
         ├─ MissionSystem.ts
         └─ PoliceSystem.ts
```

## Notes

- Simulation state lives in the `Game` class (plain Three.js); React only renders the HUD from a throttled state snapshot, so UI updates never interrupt input or the loop.
- Movement and velocities are NaN-sanitized every frame; cars and NPCs are clamped after collision resolution.
- Everything is deterministic-ish procedural content, so the project is fully self-contained and offline once dependencies are installed.