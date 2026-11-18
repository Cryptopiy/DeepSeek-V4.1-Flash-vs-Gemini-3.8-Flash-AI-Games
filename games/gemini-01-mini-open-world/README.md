# Mini Open World 3D

> **Как запустить готовую сборку / How to run the ready-made build:** см. / see [HOW_TO_PLAY.md](../../HOW_TO_PLAY.md) в корне репозитория / in the repository root. Если ниже упоминаются другие файлы запуска — их в этом репозитории нет / if other launch files are mentioned below, they are not part of this repository.

A compact, real-time 3D open-world browser game built with **TypeScript**, **React**, **Vite**, and **Three.js**.

## Implemented Systems

1. **3D World Environment**
   - 280m x 280m urban grid with multi-lane avenues, streets, sidewalks, and crosswalks.
   - 40+ unique buildings with varied heights, architectural roof caps, AC units, and antennas.
   - Dedicated landmark destinations: *Metro Police Precinct* (restricted zone), *Bank Financial Plaza*, *Harbor Safehouse Depot*, and *Grand Central Park* with trees and greenery.
   - Street props including lightpoles, fire hydrants, trash dumpsters, and trees.

2. **Player On-Foot Movement**
   - True 3D humanoid character model with animated limbs swinging synchronously with movement.
   - 8-directional WASD movement with sprint (Shift).
   - Solid collision detection against buildings, props, and parked/moving vehicles.
   - Proximity prompt when near vehicles with interactive entry (`[E]`).

3. **Vehicle Driving & Physics Engine**
   - Realistic steering geometry, speed-sensitive turning, longitudinal acceleration, engine braking, reverse, and drag/friction.
   - Handbrake mechanism (`[Space]`) generating drift deceleration and tire smoke particles.
   - 6 vehicle archetypes: Sports Hypercar, Sedan, SUV, Police Interceptor, Taxi, and Freight Truck.
   - Dynamic wheel turning and spin animations, reactive brake lights, and collision rebounds.
   - Safe exit mechanics positioning player to the driver's side without clipping walls.

4. **NPC Pedestrians AI**
   - 20+ autonomous pedestrians with unique color variations following sidewalk circuits.
   - State machine: `walking` along waypoints, `waiting` at corners, `fleeing` in panic from speeding cars, and `knocked` recovery on impact.

5. **Traffic AI & Road Network**
   - Autonomous NPC vehicles traversing connected road graph waypoints with multi-lane right-hand traffic.
   - Forward sensor obstacle detection: cars yield, slow down, or brake when vehicles, pedestrians, or obstacles are ahead.

6. **Police & Wanted Pursuit System**
   - Wanted level (1 to 3 stars) triggered by hit-and-run accidents, vehicle theft, assaulting police cruisers, or trespassing in the restricted Police Precinct courtyard.
   - Active pursuit AI: police cruisers activate alternating red/blue emergency roof strobe lights and pursuit sirens, steering aggressively toward the player.
   - Evasion mechanic: losing sight of police for 10 seconds clears heat.
   - Busted game-over sequence if pinned by police for 3.5 seconds.

7. **The Syndicate Courier Mission**
   - Multi-stage mission:
     1. Reach the Bank Financial Plaza.
     2. Enter the Golden Apex Hypercar.
     3. Evade police pursuit while driving across town to the Harbor Safehouse.
     4. Halt inside the delivery hangar.
     5. Mission Accomplished victory screen with replay capability (`[R]`).
   - 3D beacon light pillar, floating rotating waypoint markers, and HUD distance tracker.

8. **Web Audio Synthesizer**
   - 100% self-contained procedural audio using the Web Audio API.
   - Dynamic engine throttle rumble/revving, tire screech, crash impacts, wailing police siren, footsteps, and victory fanfare.

9. **Cyberpunk HUD & Minimap**
   - Real-time rotating circular radar minimap showing player, roads, buildings, traffic dots, flashing police markers, and mission waypoint.
   - Digital speedometer with progressive speed bar.
   - Wanted level stars with animated evasion cooldown timer.
   - Camera view modes (`[C]`): Third-person follow, Cinematic orbit, and Hood bumper camera.

## File Structure

```
01_mini_open_world/
├── 01_mini_open_world.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles.css
    ├── game/
    │   ├── types.ts
    │   ├── world.ts
    │   ├── collision.ts
    │   ├── input.ts
    │   ├── ai.ts
    │   ├── audio.ts
    │   └── simulation.ts
    ├── render/
    │   ├── models.ts
    │   ├── particles.ts
    │   └── GameRenderer.ts
    └── ui/
        ├── Icons.tsx
        ├── Minimap.tsx
        └── HUD.tsx
```

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build for production
npm run build
```

## Controls

| Key | Action |
| --- | --- |
| `W`, `A`, `S`, `D` / Arrows | Move on foot / Drive vehicle |
| `E` | Enter / Exit vehicle |
| `Space` | Handbrake (Driving) / Brake |
| `Shift` | Sprint (On foot) |
| `C` | Cycle Camera (Follow / Cinematic / Hood) |
| `M` | Mute / Unmute Audio |
| `R` | Restart Mission / Respawn |
