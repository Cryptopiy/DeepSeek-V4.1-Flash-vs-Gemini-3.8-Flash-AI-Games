import { VoxelSet, type Voxel } from './voxelBuilder'
import { PALETTE as P } from './materials'

/**
 * Local pivot positions for every articulated group.
 * Coordinate system: +Z points forward (toward the snout), +Y is up and the
 * ground sits at y = 0. All pivots are expressed relative to their parent.
 */
export const PIVOTS: Record<string, [number, number, number]> = {
  body: [0, 9, 0],
  neck: [0, 1, 5.5],
  head: [0, 2.5, 3.5],
  jaw: [0, -1, -0.5],
  tail: [0, 0, -4],
  tailSeg: [0, 0.22, -4],
  leg: [3, -0.5, -2],
  knee: [0, -4.2, 0.4],
  ankle: [0, -3.3, -0.5],
  arm: [3.2, -0.5, 4],
  forearm: [0, -1.8, 0.7],
}

function buildBody(): Voxel[] {
  const s = new VoxelSet()
  // Main torso mass.
  s.ellipsoid(0, 0.3, 2.5, 4, 3.3, 6.2, P.bodyMid)
  // Broad hips at the rear.
  s.ellipsoid(0, 0.3, -3.5, 3.9, 3.4, 3.6, P.bodyMid)
  // Deep chest at the front.
  s.ellipsoid(0, 0.8, 4, 3.7, 3.0, 3.0, P.bodyMid)
  // Lighter belly and darker back.
  s.recolor((v) => v.y < -1.6, P.belly)
  s.recolor((v) => v.y > 2.0, P.bodyDark)
  s.recolor((v) => v.y > 2.4 && v.z < -4, P.stripe)
  return s.toArray()
}

function buildNeck(): Voxel[] {
  const s = new VoxelSet()
  // Short, thick neck rising from the chest toward the skull.
  s.capsule(0, -1, -2.5, 0, 2.2, 3.2, 2.6, 2.0, P.bodyMid)
  s.recolor((v) => v.y > 1.5, P.bodyDark)
  return s.toArray()
}

function buildHead(): Voxel[] {
  const s = new VoxelSet()
  // Cranium.
  s.ellipsoid(0, 1.4, -0.5, 2.4, 1.8, 3.0, P.bodyMid)
  // Deep snout / maxilla.
  s.capsule(0, 0.6, 0.4, 0, 0.1, 5.6, 1.7, 0.9, P.bodyMid)
  // Flat upper-jaw underside so teeth attach cleanly.
  s.box(-1.5, 1.5, 0, 1, 1, 5.5, P.bodyMid)
  // Nose tip.
  s.add(0, 0.4, 6, P.bodyMid)
  s.recolor((v) => v.y > 2.2, P.bodyDark)

  // Dark mouth cavity sits between the jaws (stays with the skull).
  s.box(-1.5, 1.5, -1, -1, -0.5, 4, P.mouth)

  // Eyes: two separate sockets on opposite sides.
  for (const sx of [-1, 1]) {
    s.add(sx * 2, 1, 0, P.eyeGlow)
    s.add(sx * 2, 2, 0, P.eye)
  }

  // Upper teeth hanging below the maxilla (placed after the cavity so they win).
  for (let i = 0; i < 5; i++) {
    const z = Math.round(1.2 + i * 0.95)
    s.add(-1, -1, z, P.teeth)
    s.add(1, -1, z, P.teeth)
  }

  return s.toArray()
}

function buildJaw(): Voxel[] {
  const s = new VoxelSet()
  // Lower jaw body, tapering toward the chin. Origin is the rear hinge.
  for (let z = 0; z <= 6; z++) {
    const halfWidth = 2.0 - (z / 6) * 1.0
    for (let x = -2; x <= 2; x++) {
      if (Math.abs(x) <= halfWidth) {
        for (let y = -3; y <= -2; y++) {
          s.add(x, y, z, P.bodyMid)
        }
      }
    }
  }
  s.recolor((v) => v.y <= -3, P.bodyDark)

  // Lower teeth pointing up, offset from the upper row so they interlock.
  for (let i = 0; i < 5; i++) {
    const z = Math.round(0.6 + i * 0.9)
    s.add(-1, -1, z, P.teeth)
    s.add(1, -1, z, P.teeth)
  }

  return s.toArray()
}

function buildThigh(): Voxel[] {
  const s = new VoxelSet()
  s.capsule(0, 0, 0, 0, -4.2, 0.4, 2.1, 1.4, P.bodyMid)
  s.recolor((v) => v.y < -3 && v.z > 0, P.bodyDark)
  return s.toArray()
}

function buildShin(): Voxel[] {
  const s = new VoxelSet()
  s.capsule(0, 0, 0, 0, -3.3, -0.5, 1.4, 0.95, P.bodyMid)
  return s.toArray()
}

function buildFoot(): Voxel[] {
  const s = new VoxelSet()
  // Ankle and sole. Bottom row rests exactly on the ground plane.
  s.box(-1, 1, -1, 0, -1, 2, P.bodyMid)
  // Three splayed toes with claws.
  for (const tx of [-2, 0, 2]) {
    s.box(tx, tx, -1, 0, 2, 4, P.bodyMid)
    s.add(tx, -1, 5, P.claw)
  }
  return s.toArray()
}

function buildUpperArm(): Voxel[] {
  const s = new VoxelSet()
  s.capsule(0, 0, 0, 0, -1.8, 0.7, 0.9, 0.65, P.bodyMid)
  return s.toArray()
}

function buildForearm(): Voxel[] {
  const s = new VoxelSet()
  s.capsule(0, 0, 0, 0, -1.4, 1.4, 0.65, 0.5, P.bodyMid)
  // Two claws at the tip.
  s.add(0, -1, 1, P.claw)
  s.add(0, -1, 2, P.claw)
  return s.toArray()
}

function buildTail(): Voxel[] {
  const radii: [number, number][] = [
    [2.4, 1.9],
    [1.9, 1.5],
    [1.5, 1.15],
    [1.15, 0.8],
    [0.8, 0.5],
  ]
  return radii.map(([r0, r1], i) => {
    const s = new VoxelSet()
    const length = i === radii.length - 1 ? 3.5 : 4
    s.capsule(0, 0, 0, 0, 0.2, -length, r0, r1, P.bodyMid)
    s.recolor((v) => v.y > 0.6, P.bodyDark)
    return s.toArray()
  })
}

export const MODEL = {
  body: buildBody(),
  neck: buildNeck(),
  head: buildHead(),
  jaw: buildJaw(),
  tail: buildTail(),
  thigh: buildThigh(),
  shin: buildShin(),
  foot: buildFoot(),
  upperArm: buildUpperArm(),
  forearm: buildForearm(),
}

export const VOXEL_COUNT =
  MODEL.body.length +
  MODEL.neck.length +
  MODEL.head.length +
  MODEL.jaw.length +
  MODEL.tail.reduce((sum, seg) => sum + seg.length, 0) +
  (MODEL.thigh.length + MODEL.shin.length + MODEL.foot.length) * 2 +
  (MODEL.upperArm.length + MODEL.forearm.length) * 2