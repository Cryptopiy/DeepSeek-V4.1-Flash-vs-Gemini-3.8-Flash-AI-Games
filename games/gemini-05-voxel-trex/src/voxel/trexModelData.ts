import { Voxel, BodyPartKey } from '../types/dinosaur';
import { PALETTE, shadeVariation } from './colorPalette';

export interface VoxelPartData {
  key: BodyPartKey;
  name: string;
  pivot: [number, number, number]; // Position in parent coordinates
  voxels: Voxel[];
}

// Helper to push a voxel with procedural shade variation
function addVoxel(
  list: Voxel[],
  x: number,
  y: number,
  z: number,
  baseColor: string,
  variationFactor: number = 0.04
) {
  const seed = x * 73 + y * 137 + z * 311;
  const color = shadeVariation(baseColor, variationFactor, seed);
  list.push({ x, y, z, color });
}

// Helper to add symmetrical voxels across X axis
function addSymVoxels(
  list: Voxel[],
  x: number,
  y: number,
  z: number,
  baseColor: string,
  variationFactor: number = 0.04
) {
  addVoxel(list, x, y, z, baseColor, variationFactor);
  if (x !== 0) {
    addVoxel(list, -x, y, z, baseColor, variationFactor);
  }
}

// --------------------------------------------------------------------------
// 1. TORSO & PELVIS (Body Core)
// --------------------------------------------------------------------------
function buildBodyVoxels(): Voxel[] {
  const voxels: Voxel[] = [];

  // Torso runs from local z = -5 (hips) to z = 7 (chest)
  // Local y = -4 (belly) to y = 4 (spine scutes)
  for (let z = -5; z <= 7; z++) {
    // Width and height profile along the torso
    const t = (z + 5) / 12; // 0 at hips, 1 at chest
    // Wide chest at z = 3..6, wide hips at z = -4..-2
    let halfWidth = 3;
    if (z >= 2 && z <= 6) halfWidth = 4; // broad ribcage
    if (z <= -2 && z >= -5) halfWidth = 3.5; // pelvis
    if (z > 6) halfWidth = 2.5; // neck transition

    let minY = -3;
    let maxY = 3;
    if (z >= 2 && z <= 5) {
      minY = -4; // deep chest
      maxY = 3.5;
    }

    for (let y = Math.floor(minY); y <= Math.ceil(maxY); y++) {
      const curHalfWidth = Math.max(1, Math.round(halfWidth * (1 - Math.abs(y) * 0.18)));
      for (let x = -curHalfWidth; x <= curHalfWidth; x++) {
        // Determine coloring: belly counter-shading vs dorsal skin vs scutes
        let color = PALETTE.skinMid;

        if (y <= -2) {
          // Ventral counter-shading (underbelly)
          color = y === -4 ? PALETTE.bellyLight : PALETTE.bellyMid;
        } else if (y >= 3 && Math.abs(x) <= 1) {
          // Dorsal ridge
          color = PALETTE.skinDark;
        } else if ((z === 1 || z === -2) && Math.abs(x) >= 2) {
          // Subtle tiger stripes / flank accents
          color = PALETTE.stripe;
        } else {
          color = Math.abs(x) >= curHalfWidth - 1 ? PALETTE.skinLight : PALETTE.skinMid;
        }

        addVoxel(voxels, x, y, z, color);
      }
    }

    // Spine Osteoderms / Raised Scutes along dorsal centerline
    const scuteY = Math.ceil(maxY) + 1;
    if (z % 2 === 0) {
      addVoxel(voxels, 0, scuteY, z, PALETTE.scuteDark);
    }
  }

  return voxels;
}

// --------------------------------------------------------------------------
// 2. NECK (Connecting Torso to Head)
// --------------------------------------------------------------------------
function buildNeckVoxels(): Voxel[] {
  const voxels: Voxel[] = [];
  // Neck runs from local z = 0 (body front) to z = 4 (head base)
  // rises slightly in S-curve: y = 0 to y = 3
  for (let z = 0; z <= 4; z++) {
    const yCenter = z * 0.6;
    const halfWidth = 2;
    for (let dy = -2; dy <= 2; dy++) {
      const y = Math.round(yCenter + dy);
      for (let x = -halfWidth; x <= halfWidth; x++) {
        let color = PALETTE.skinMid;
        if (dy <= -1) {
          color = PALETTE.bellyMid; // throat countershading
        } else if (dy >= 2) {
          color = PALETTE.skinDark; // dorsal neck
        }
        addVoxel(voxels, x, y, z, color);
      }
    }
    // Neck spine spikes
    if (z % 2 === 1) {
      addVoxel(voxels, 0, Math.round(yCenter + 3), z, PALETTE.scuteMid);
    }
  }
  return voxels;
}

// --------------------------------------------------------------------------
// 3. HEAD & UPPER JAW (Skull, Snout, Eyes, Upper Teeth, Brow)
// --------------------------------------------------------------------------
function buildHeadVoxels(): Voxel[] {
  const voxels: Voxel[] = [];

  // Head spans local z = 0 (occipital/back of skull) to z = 10 (snout tip)
  // Local y = -1 (roof of mouth / palate) to y = 4 (brow & cranial crest)
  for (let z = 0; z <= 10; z++) {
    // Width tapers from back of skull (halfWidth = 3) to snout tip (halfWidth = 1.5)
    let halfWidth = 3;
    let minY = -1;
    let maxY = 3;

    if (z >= 0 && z <= 3) {
      // Rear skull / braincase
      halfWidth = 3;
      maxY = 4;
    } else if (z >= 4 && z <= 8) {
      // Mid snout / maxilla
      halfWidth = 2;
      maxY = 3;
    } else {
      // Premaxilla / snout tip
      halfWidth = 1.5;
      maxY = 2.5;
      minY = 0;
    }

    const hw = Math.round(halfWidth);
    for (let y = Math.floor(minY); y <= Math.ceil(maxY); y++) {
      for (let x = -hw; x <= hw; x++) {
        // Hollow interior for mouth cavity and eye sockets
        const isMouthCavity = y <= 0 && z >= 2 && Math.abs(x) < hw;
        if (isMouthCavity) {
          // Roof of mouth palate (dark crimson)
          if (y === 0) {
            addVoxel(voxels, x, y, z, PALETTE.mouthDark);
          }
          continue;
        }

        // Default skull color
        let color = PALETTE.skinMid;
        if (y === Math.ceil(maxY) && Math.abs(x) <= 1) {
          color = PALETTE.skinDark; // top of skull
        } else if (z >= 8) {
          color = PALETTE.skinDark; // tip of snout
        }

        // Eyes: Located at z = 2..3, y = 2, x = ±3
        const isEyeLocation = (z === 2 || z === 3) && y === 2 && Math.abs(x) === 3;
        if (isEyeLocation) {
          continue; // Handled below with custom detail
        }

        addVoxel(voxels, x, y, z, color);
      }
    }

    // Nostrils at snout tip
    if (z === 9) {
      addSymVoxels(voxels, 1, 2, z, PALETTE.scuteDark);
    }
  }

  // --- Brow Ridges & Hornlets over eyes ---
  // Prominent rugose lacrimal crests typical of T. rex!
  for (let z = 1; z <= 4; z++) {
    addSymVoxels(voxels, 3, 3, z, PALETTE.scuteDark);
    addSymVoxels(voxels, 2, 4, z, PALETTE.skinDark);
  }

  // --- Eyes (Left & Right 3D positions with distinct pupil & amber iris) ---
  // Right eye (+X)
  addVoxel(voxels, 3, 2, 2, PALETTE.eyeAmber);
  addVoxel(voxels, 3, 2, 3, PALETTE.eyePupil);
  addVoxel(voxels, 2, 2, 2, PALETTE.eyeGold);
  // Left eye (-X)
  addVoxel(voxels, -3, 2, 2, PALETTE.eyeAmber);
  addVoxel(voxels, -3, 2, 3, PALETTE.eyePupil);
  addVoxel(voxels, -2, 2, 2, PALETTE.eyeGold);

  // --- Upper Teeth (Serrated ivory daggers pointing downward) ---
  // Upper teeth along both outer edges from z = 2 to z = 9 at y = -1.5
  for (let z = 2; z <= 9; z++) {
    const toothX = z <= 3 ? 3 : (z <= 7 ? 2 : 1.5);
    // Alternate long and short teeth like real tyrannosaur dentition!
    const toothColor = z % 2 === 0 ? PALETTE.toothTip : PALETTE.toothBase;
    addSymVoxels(voxels, Math.round(toothX), -1, z, PALETTE.mouthGums);
    addSymVoxels(voxels, Math.round(toothX), -2, z, toothColor);
  }

  return voxels;
}

// --------------------------------------------------------------------------
// 4. LOWER JAW (Mandible, Lower Teeth, Gums, Tongue, Chin)
// --------------------------------------------------------------------------
function buildLowerJawVoxels(): Voxel[] {
  const voxels: Voxel[] = [];

  // Lower jaw pivots at rear joint (local z = 0, y = 0)
  // Extends forward to z = 9, y = -2 to 0
  for (let z = 0; z <= 9; z++) {
    const halfWidth = z <= 3 ? 2.5 : (z <= 7 ? 2 : 1.5);
    const hw = Math.round(halfWidth);

    for (let y = -2; y <= 0; y++) {
      for (let x = -hw; x <= hw; x++) {
        // Mouth interior: tongue along center at y = 0
        if (y === 0 && Math.abs(x) < hw && z >= 2) {
          addVoxel(voxels, x, y, z, PALETTE.mouthTongue);
          continue;
        }

        // Jaw underside counter-shading
        let color = PALETTE.skinMid;
        if (y === -2) {
          color = PALETTE.bellyLight; // pale underside of chin
        } else if (Math.abs(x) === hw) {
          color = y === 0 ? PALETTE.mouthGums : PALETTE.bellyMid;
        }

        addVoxel(voxels, x, y, z, color);
      }
    }

    // Heavy T-Rex Chin at tip (z = 8..9, y = -3)
    if (z >= 8) {
      addSymVoxels(voxels, 1, -3, z, PALETTE.skinDark);
      addVoxel(voxels, 0, -3, z, PALETTE.skinDark);
    }

    // Lower Teeth (Pointing UP from gums at y = 1)
    if (z >= 2 && z <= 9) {
      const toothX = z <= 3 ? 2.5 : (z <= 7 ? 2 : 1.5);
      const toothColor = z % 2 === 1 ? PALETTE.toothTip : PALETTE.toothBase;
      addSymVoxels(voxels, Math.round(toothX), 1, z, toothColor);
    }
  }

  return voxels;
}

// --------------------------------------------------------------------------
// 5. TAIL SEGMENTS (Counterbalancing Volumetric Whip)
// --------------------------------------------------------------------------
// Tail Base (thick, muscular near hips)
function buildTailBaseVoxels(): Voxel[] {
  const voxels: Voxel[] = [];
  // Extends backward from local z = 0 to z = -7
  for (let z = 0; z >= -7; z--) {
    const t = -z / 7; // 0 to 1
    const halfWidth = Math.round(3.2 * (1 - t * 0.3));
    const halfHeight = Math.round(3.5 * (1 - t * 0.3));

    for (let y = -halfHeight; y <= halfHeight; y++) {
      const curW = Math.max(1, Math.round(halfWidth * (1 - Math.abs(y) / (halfHeight + 1) * 0.3)));
      for (let x = -curW; x <= curW; x++) {
        let color = PALETTE.skinMid;
        if (y <= -halfHeight + 1) color = PALETTE.bellyMid;
        else if (y >= halfHeight - 1 && Math.abs(x) <= 1) color = PALETTE.skinDark;
        addVoxel(voxels, x, y, z, color);
      }
    }
    // Dorsal scutes
    if (z % 2 === 0) {
      addVoxel(voxels, 0, halfHeight + 1, z, PALETTE.scuteDark);
    }
  }
  return voxels;
}

// Tail Mid (gradually thinning, athletic)
function buildTailMidVoxels(): Voxel[] {
  const voxels: Voxel[] = [];
  // Extends backward from local z = 0 to z = -7
  for (let z = 0; z >= -7; z--) {
    const t = -z / 7;
    const halfWidth = Math.max(1, Math.round(2.2 * (1 - t * 0.35)));
    const halfHeight = Math.max(1, Math.round(2.5 * (1 - t * 0.35)));

    for (let y = -halfHeight; y <= halfHeight; y++) {
      for (let x = -halfWidth; x <= halfWidth; x++) {
        let color = PALETTE.skinMid;
        if (y <= -halfHeight) color = PALETTE.bellyDark;
        else if (y >= halfHeight && Math.abs(x) === 0) color = PALETTE.skinDark;
        addVoxel(voxels, x, y, z, color);
      }
    }
    // Tail spikes
    if (z % 2 === 0) {
      addVoxel(voxels, 0, halfHeight + 1, z, PALETTE.scuteMid);
    }
  }
  return voxels;
}

// Tail Tip (sleek whip end)
function buildTailTipVoxels(): Voxel[] {
  const voxels: Voxel[] = [];
  // Extends backward from local z = 0 to z = -8
  for (let z = 0; z >= -8; z--) {
    const t = -z / 8;
    const size = t < 0.6 ? 1 : 0; // 3x3 tapering down to single voxel line
    for (let y = -size; y <= size; y++) {
      for (let x = -size; x <= size; x++) {
        const color = z < -5 ? PALETTE.scuteDark : PALETTE.skinMid;
        addVoxel(voxels, x, y, z, color);
      }
    }
  }
  return voxels;
}

// --------------------------------------------------------------------------
// 6. FOREARMS (Tiny Vestigial T-Rex Arms with 2 Clawed Digits)
// --------------------------------------------------------------------------
function buildArmVoxels(isLeft: boolean): Voxel[] {
  const voxels: Voxel[] = [];
  const dirX = isLeft ? -1 : 1;

  // Upper arm: connects to shoulder, angled down and slightly outward
  addVoxel(voxels, 0, 0, 0, PALETTE.skinMid);
  addVoxel(voxels, 0, -1, 0, PALETTE.skinMid);
  addVoxel(voxels, dirX * 0.5, -2, 0.5, PALETTE.skinLight);

  // Forearm: angled forward
  addVoxel(voxels, dirX * 0.5, -2, 1.5, PALETTE.skinLight);
  addVoxel(voxels, dirX * 0.5, -2.5, 2.2, PALETTE.skinMid);

  // Hand with 2 separate clawed fingers!
  // Finger 1 (inner)
  addVoxel(voxels, 0, -2.5, 3.0, PALETTE.skinLight);
  addVoxel(voxels, 0, -3.0, 3.5, PALETTE.clawDark); // sharp claw

  // Finger 2 (outer)
  addVoxel(voxels, dirX * 1, -2.5, 3.0, PALETTE.skinLight);
  addVoxel(voxels, dirX * 1, -3.0, 3.5, PALETTE.clawDark); // sharp claw

  return voxels;
}

// --------------------------------------------------------------------------
// 7. HIND LEGS (Thighs, Shins, Ankles, Feet with Toes & Claws)
// --------------------------------------------------------------------------
// Thigh (Massive muscular upper leg)
function buildThighVoxels(isLeft: boolean): Voxel[] {
  const voxels: Voxel[] = [];
  const dirX = isLeft ? -1 : 1;

  // Thigh extends from hip pivot local y = 0 down to knee at y = -5
  // Powerful muscle bulge: z = -2 to +2, x = -1 to +1
  for (let y = 0; y >= -5; y--) {
    const radZ = y > -4 ? 2 : 1.5;
    const radX = y > -4 ? 1.5 : 1.2;

    for (let z = -Math.round(radZ); z <= Math.round(radZ); z++) {
      for (let x = -Math.round(radX); x <= Math.round(radX); x++) {
        let color = PALETTE.skinMid;
        // Outer flank shading vs inner leg
        if ((isLeft && x < 0) || (!isLeft && x > 0)) {
          color = PALETTE.skinDark; // outer muscular contour
        } else {
          color = PALETTE.skinLight;
        }
        addVoxel(voxels, x, y, z, color);
      }
    }
  }
  return voxels;
}

// Shin (Muscular lower leg / crus, angled backward)
function buildShinVoxels(): Voxel[] {
  const voxels: Voxel[] = [];
  // Extends from knee (local y = 0) to ankle (local y = -5)
  for (let y = 0; y >= -5; y--) {
    // Shin extends slightly back
    const zOffset = Math.round(y * 0.3);
    for (let dz = -1; dz <= 1; dz++) {
      const z = zOffset + dz;
      for (let x = -1; x <= 1; x++) {
        // Calf muscle bulge at top, slender near ankle
        if (y < -3 && (Math.abs(x) > 0 || dz === -1)) continue;
        const color = y > -3 ? PALETTE.skinMid : PALETTE.skinLight;
        addVoxel(voxels, x, y, z, color);
      }
    }
  }
  return voxels;
}

// Foot (Ankle, Metatarsus, 3 forward toes + 1 hallux, talons)
function buildFootVoxels(): Voxel[] {
  const voxels: Voxel[] = [];

  // Ankle / metatarsus block (y = 0 to 1, z = -1 to 1)
  for (let y = 0; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      for (let x = -1; x <= 1; x++) {
        addVoxel(voxels, x, y, z, PALETTE.skinMid);
      }
    }
  }

  // Hallux (Small rear dewclaw at z = -2, y = 0)
  addVoxel(voxels, 0, 0, -2, PALETTE.skinDark);
  addVoxel(voxels, 0, 0, -3, PALETTE.clawDark);

  // 3 Large Forward-Facing Toes with Talons (visibly contacting ground at y = 0)
  // Inner toe: x = -1.8, Middle toe: x = 0, Outer toe: x = +1.8
  const toes = [
    { x: -1.8, length: 4 },
    { x: 0,    length: 5 }, // Middle toe is longest
    { x: 1.8,  length: 4 }
  ];

  toes.forEach(toe => {
    const rx = Math.round(toe.x);
    for (let z = 2; z <= toe.length; z++) {
      // Toe pad
      addVoxel(voxels, rx, 0, z, PALETTE.skinMid);
      if (z <= 3) {
        addVoxel(voxels, rx, 1, z, PALETTE.skinLight);
      }
    }
    // Deadly black talon / claw at the toe tip
    addVoxel(voxels, rx, 0, toe.length + 1, PALETTE.clawMid);
    addVoxel(voxels, rx, 0, toe.length + 2, PALETTE.clawDark);
    addVoxel(voxels, rx, 0.4, toe.length + 1, PALETTE.clawTip);
  });

  return voxels;
}

// --------------------------------------------------------------------------
// Complete Model Assembly
// --------------------------------------------------------------------------
export function generateTRexModelData(): VoxelPartData[] {
  // World scale reference: 1 voxel = 0.22 Three.js units
  // Hip pivot is the root origin at world height ~ y = 3.6
  return [
    {
      key: 'body',
      name: 'Torso & Hips',
      pivot: [0, 3.6, 0],
      voxels: buildBodyVoxels()
    },
    {
      key: 'neck',
      name: 'Muscular Neck',
      pivot: [0, 1.2, 1.6], // attached to front of torso
      voxels: buildNeckVoxels()
    },
    {
      key: 'head',
      name: 'Skull & Upper Jaw',
      pivot: [0, 0.7, 0.9], // attached to end of neck
      voxels: buildHeadVoxels()
    },
    {
      key: 'lowerJaw',
      name: 'Articulated Lower Jaw',
      pivot: [0, -0.22, 0.22], // hinged at rear skull joint
      voxels: buildLowerJawVoxels()
    },
    {
      key: 'tailBase',
      name: 'Tail Base',
      pivot: [0, 0.2, -1.2], // attached to rear of pelvis
      voxels: buildTailBaseVoxels()
    },
    {
      key: 'tailMid',
      name: 'Tail Mid',
      pivot: [0, 0, -1.6], // attached to end of tail base
      voxels: buildTailMidVoxels()
    },
    {
      key: 'tailTip',
      name: 'Tail Tip',
      pivot: [0, 0, -1.6], // attached to end of tail mid
      voxels: buildTailTipVoxels()
    },
    {
      key: 'armL',
      name: 'Left Forearm',
      pivot: [-0.9, -0.4, 1.3], // left shoulder
      voxels: buildArmVoxels(true)
    },
    {
      key: 'armR',
      name: 'Right Forearm',
      pivot: [0.9, -0.4, 1.3], // right shoulder
      voxels: buildArmVoxels(false)
    },
    {
      key: 'thighL',
      name: 'Left Thigh',
      pivot: [-1.0, 0, -0.2], // left hip socket
      voxels: buildThighVoxels(true)
    },
    {
      key: 'shinL',
      name: 'Left Shin',
      pivot: [0, -1.2, 0], // left knee
      voxels: buildShinVoxels()
    },
    {
      key: 'footL',
      name: 'Left Foot',
      pivot: [0, -1.3, -0.2], // left ankle
      voxels: buildFootVoxels()
    },
    {
      key: 'thighR',
      name: 'Right Thigh',
      pivot: [1.0, 0, -0.2], // right hip socket
      voxels: buildThighVoxels(false)
    },
    {
      key: 'shinR',
      name: 'Right Shin',
      pivot: [0, -1.2, 0], // right knee
      voxels: buildShinVoxels()
    },
    {
      key: 'footR',
      name: 'Right Foot',
      pivot: [0, -1.3, -0.2], // right ankle
      voxels: buildFootVoxels()
    }
  ];
}
