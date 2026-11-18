# Voxel T-Rex

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

An interactive real-time 3D **voxel Tyrannosaurus rex** built with **React + TypeScript + Vite + React Three Fiber (Three.js)**.

The dinosaur is generated entirely in code from real voxel geometry (instanced cubes). No downloaded models, textures, sprites, or external assets are used.

## Voxel-modeling approach

- A sparse voxel builder (`src/voxel/voxelBuilder.ts`) rasterizes primitives onto an integer lattice:
  - `box()` — blocky masses;
  - `ellipsoid()` — rounded torso, hips, chest, skull;
  - `capsule()` — tapered, genuinely volumetric limbs, neck and tail.
- Each anatomical section is generated in its **own local coordinate frame** and assembled through a transform hierarchy, so every part rotates around a meaningful pivot.
- Voxel colors come from a restrained olive/brown palette with small deterministic per-voxel brightness variation (never fully random).
- Rendering uses **one shared `InstancedMesh` per body part** (shared `BoxGeometry` + shared material) with per-instance colors, so thousands of voxels stay fast.
- The exact voxel count is computed from the generated model and displayed live in the UI.

## File structure

```
05_voxel_trex_prompt/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ src/
   ├─ main.tsx                 # React entry point
   ├─ App.tsx                  # Canvas + UI, holds current animation state
   ├─ types.ts                 # AnimState union
   ├─ styles.css               # UI / overlay styling
   ├─ voxel/
   │  ├─ voxelBuilder.ts       # VoxelSet rasterizer (box/ellipsoid/capsule)
   │  ├─ materials.ts          # palette + shared material + shared geometry
   │  └─ buildTrex.ts          # anatomy definition, pivots, part voxel data
   ├─ animation/
   │  └─ pose.ts               # Idle / Walk / Roar target poses + damping
   ├─ components/
   │  ├─ VoxelPart.tsx         # one InstancedMesh for a body part
   │  ├─ TRex.tsx              # transform rig + animation application
   │  └─ UI.tsx                # animation buttons, reset, voxel count
   └─ scene/
      ├─ Scene.tsx             # ground, lighting, shadows, fog
      ├─ CameraRig.tsx         # OrbitControls + reset handler
      └─ cameraApi.ts          # bridge between HTML UI and canvas
```

## Install and run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Controls

- **Drag** — orbit the camera around the T-Rex.
- **Scroll / pinch** — zoom in and out.
- **IDLE / WALK / ROAR** — switch animation states.
- **RESET CAMERA** — return to the default three-quarter view.

### Animation states

- **Idle** — breathing, subtle head motion, tail sway, weight shifting.
- **Walk** — alternating hind legs with knee/ankle articulation, body bob and head/tail reaction.
- **Roar** — the lower jaw opens around its hinge (teeth stay attached), the head and neck lift, the torso leans, then the jaw closes again; the cycle can repeat indefinitely.

## Voxel count

The model is fully generated at startup; the exact number of voxels is computed from the generated geometry and shown in the UI panel under **VOXELS**.
