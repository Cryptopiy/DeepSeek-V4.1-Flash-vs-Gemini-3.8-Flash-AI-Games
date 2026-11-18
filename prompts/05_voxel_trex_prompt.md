# Prompt — Voxel T-Rex

You are an autonomous senior 3D graphics and frontend engineer. Build a **polished interactive real-time 3D browser application featuring a voxel Tyrannosaurus rex**.

The goal is to create a convincing voxel dinosaur that demonstrates understanding of 3D form, proportions, spatial structure, articulation, and animation.

The final result must feel like a complete 3D model showcase, not a collection of disconnected cubes.

## Primary Objective

Create a recognizable **voxel T-Rex** that the user can inspect from every angle.

The dinosaur must include:

- a large detailed head;
- upper and lower jaws;
- visible teeth;
- two eyes;
- thick neck;
- large torso;
- powerful hips;
- two large hind legs;
- feet with visible toes;
- two small forearms;
- a long tapering tail.

The model should clearly read as a Tyrannosaurus rex from the side, front, rear, and three-quarter views.

## Technical Requirements

Build the project as a browser application using:

- **TypeScript**
- **React**
- **Vite**
- **Three.js** or **React Three Fiber**

The application must be **true real-time 3D**.

Do not implement the dinosaur as:

- a 2D sprite;
- a flat pixel-art image;
- an isometric renderer;
- a billboard;
- CSS-only pseudo-3D;
- a pre-rendered animation;
- an imported complete dinosaur model.

Use a perspective camera, real 3D geometry, lighting, shadows where practical, and real 3D transforms.

The project must run locally with:

```bash
npm install
npm run dev
```

Do not depend on external dinosaur assets, API keys, authentication, or paid services.

The T-Rex geometry must be generated directly inside the project.

## Voxel Model

Build the dinosaur from **real 3D voxel-style geometry** such as cubes, cuboids, merged box geometry, or instanced meshes.

The voxels must occupy actual 3D positions and have visible depth.

Do not fake the voxel appearance using only a pixel texture on a smooth mesh.

Use enough voxels to create a detailed silhouette without making the scene unnecessarily heavy.

The dinosaur should look like one connected creature rather than several large rectangular blocks.

## Anatomy

Use believable T-Rex proportions.

The model should have:

- oversized skull;
- deep snout and jaw;
- short thick neck;
- large chest and torso;
- broad hip region;
- extremely small forearms;
- strong hind legs;
- large feet;
- long counterbalancing tail.

The body must have meaningful width and depth.

Left and right limbs must occupy separate positions in 3D space.

Avoid obvious mistakes such as:

- both legs placed on the same center line;
- eyes occupying the same position;
- flat tail geometry;
- arms intersecting through the torso;
- floating teeth;
- feet overlapping each other.

## Head and Jaw

Make the head one of the most detailed parts of the model.

Include:

- broad skull;
- visible snout;
- two eyes;
- separate upper and lower jaws;
- visible mouth cavity;
- multiple upper and lower teeth.

The lower jaw must be articulated and able to open around a sensible pivot near the rear of the skull.

Teeth must stay attached to the correct jaw while it moves.

The mouth must be real 3D geometry, not just a dark stripe painted on the head.

## Legs and Tail

Create separate left and right hind legs.

Each leg should visually contain:

- thigh;
- lower leg;
- ankle;
- foot;
- multiple toes.

The feet should visibly contact the ground.

Create a long voxel tail that:

- starts thick near the hips;
- gradually becomes thinner;
- has real volume;
- forms a natural counterbalance to the head and torso.

Do not make the tail a flat line of identical cubes.

## Forearms

Add two small T-Rex forearms.

They should:

- attach naturally near the upper torso;
- remain much smaller than the hind legs;
- contain visible lower-arm or claw detail;
- occupy separate left and right 3D positions.

## Animation

Implement at least three animation states:

### Idle

The dinosaur should have subtle movement such as:

- breathing;
- small head movement;
- slight tail movement;
- minor weight shifting.

### Walk

Create a looping walk animation where:

- left and right hind legs alternate;
- feet move visibly;
- torso shifts slightly;
- head and tail react to movement.

The dinosaur must not simply slide as one rigid object.

### Roar

Create a roar animation with:

- jaw opening;
- head movement;
- neck movement;
- subtle torso motion;
- optional camera shake.

The jaw should close again after the animation.

## Rig / Transform Hierarchy

Use a sensible transform hierarchy for major body sections.

Separate movable groups should include at least:

- body;
- head;
- lower jaw;
- left leg;
- right leg;
- left arm;
- right arm;
- tail.

Animation should rotate body parts around meaningful pivots instead of moving unrelated voxels independently.

## Camera

Use an interactive perspective camera.

The user must be able to:

- orbit around the dinosaur;
- zoom in and out;
- inspect the model from all sides.

Add reasonable camera limits so it remains easy to control.

Include a `RESET CAMERA` action.

## Scene

Place the T-Rex in a simple polished 3D environment.

Include:

- ground plane;
- shadows;
- readable background;
- lighting that clearly reveals voxel depth.

The dinosaur must remain the main focus of the scene.

A neutral studio, museum display, or simple prehistoric environment is acceptable.

## UI

Include a compact UI showing at least:

- current animation;
- `IDLE`;
- `WALK`;
- `ROAR`;
- `RESET CAMERA`;
- actual voxel count.

Do not cover a large portion of the 3D scene.

## Visual Quality

The application should look polished enough that a screen recording immediately communicates the result.

Prioritize:

- clear silhouette;
- readable voxel structure;
- convincing proportions;
- visible depth;
- coherent materials;
- good lighting;
- contact shadows;
- smooth camera movement;
- readable animation.

Use a restrained dinosaur color palette such as greens, browns, olive tones, or similar natural colors.

Small voxel-to-voxel color variation is acceptable, but do not assign random colors to every cube.

## Performance

Keep the application responsive in a modern browser.

For large voxel counts, use efficient rendering techniques such as:

- `InstancedMesh`;
- shared geometry;
- merged geometry;
- shared materials.

Avoid one React component per voxel if it causes unnecessary overhead.

## Architecture

Structure the code cleanly.

Separate major systems where practical, for example:

- voxel model generation;
- anatomy/body-part definitions;
- animation;
- camera;
- scene and lighting;
- UI;
- materials.

Avoid putting the entire application into one giant React component.

## Reliability Requirements

The application must:

- start without runtime errors;
- display the complete model immediately;
- keep camera controls functional;
- allow repeated switching between animations;
- keep the jaw and teeth correctly attached;
- keep left/right anatomy separated;
- avoid NaN positions, rotations, or scales;
- keep the dinosaur visible after camera reset;
- remain responsive while animating.

## Acceptance Criteria

The result is only complete if all of the following can be demonstrated:

1. A recognizable voxel T-Rex is visible.
2. The dinosaur is built from real 3D voxel geometry.
3. The model can be inspected from all sides.
4. The head has real 3D volume.
5. Upper and lower jaws are separate.
6. The jaw opens during the roar animation.
7. Visible 3D teeth are present.
8. Two separate eyes are present.
9. Two separate hind legs are present.
10. Feet contain visible toes and contact the ground.
11. Two small forearms are present.
12. A long tapering volumetric tail is present.
13. Idle animation works.
14. Walk animation alternates the hind legs.
15. Roar animation works repeatedly.
16. Camera orbit and zoom work correctly.
17. Lighting and shadows clearly show depth.
18. The displayed voxel count comes from the actual model.
19. The app remains stable after repeatedly switching animations.

## Delivery Requirements

Implement the complete project.

Do **not**:

- provide pseudocode instead of implementation;
- leave TODO placeholders for required features;
- use a downloaded complete T-Rex model;
- replace the model with a 2D image;
- fake voxel geometry with a texture;
- leave animation buttons non-functional;
- omit necessary source files.

At the end, provide:

1. a short summary of the voxel-modeling approach;
2. the final file structure;
3. exact commands to install and run the project;
4. controls;
5. the generated voxel count.

Before finishing, run the production build and review the implementation for TypeScript errors, broken imports, invalid transforms, disconnected body parts, animation bugs, and missing required features.
