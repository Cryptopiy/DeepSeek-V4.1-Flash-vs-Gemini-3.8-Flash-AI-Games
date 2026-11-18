import * as THREE from 'three';
import { Vehicle, Pedestrian, Building, Prop, VehicleType } from '../game/types';

// Shared materials and geometries cache for high performance
export class ModelFactory {
  private static materials: Map<string, THREE.Material> = new Map();
  private static wheelGeom = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 16);
  private static rimGeom = new THREE.CylinderGeometry(0.24, 0.24, 0.29, 12);

  // Cached materials helper
  public static getMaterial(color: string, roughness: number = 0.5, metalness: number = 0.1): THREE.MeshStandardMaterial {
    const key = `mat_${color}_${roughness}_${metalness}`;
    if (!this.materials.has(key)) {
      this.materials.set(
        key,
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          roughness,
          metalness,
        })
      );
    }
    return this.materials.get(key) as THREE.MeshStandardMaterial;
  }

  // Create Humanoid 3D Character (Player or Pedestrian)
  public static createCharacter(isPlayer: boolean, shirtColor: string, pantsColor: string, skinColor: string): THREE.Group {
    const group = new THREE.Group();
    group.name = isPlayer ? 'player_character' : 'pedestrian_character';

    const skinMat = this.getMaterial(skinColor, 0.7, 0.0);
    const shirtMat = this.getMaterial(shirtColor, 0.6, 0.1);
    const pantsMat = this.getMaterial(pantsColor, 0.8, 0.0);
    const shoeMat = this.getMaterial('#0f172a', 0.9, 0.0);
    const hairMat = this.getMaterial('#1e293b', 0.8, 0.0);

    // Torso (Chest + Jacket)
    const torsoGeom = new THREE.BoxGeometry(0.48, 0.65, 0.28);
    const torsoMesh = new THREE.Mesh(torsoGeom, shirtMat);
    torsoMesh.position.y = 1.05;
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    group.add(torsoMesh);

    // Head
    const headGeom = new THREE.BoxGeometry(0.28, 0.3, 0.28);
    const headMesh = new THREE.Mesh(headGeom, skinMat);
    headMesh.position.y = 1.55;
    headMesh.castShadow = true;
    group.add(headMesh);

    // Hair
    const hairGeom = new THREE.BoxGeometry(0.3, 0.12, 0.3);
    const hairMesh = new THREE.Mesh(hairGeom, hairMat);
    hairMesh.position.y = 1.72;
    group.add(hairMesh);

    // Arms
    const armGeom = new THREE.BoxGeometry(0.14, 0.55, 0.14);

    const leftArmPivot = new THREE.Group();
    leftArmPivot.name = 'left_arm';
    leftArmPivot.position.set(-0.32, 1.32, 0);
    const leftArmMesh = new THREE.Mesh(armGeom, shirtMat);
    leftArmMesh.position.y = -0.25;
    leftArmMesh.castShadow = true;
    leftArmPivot.add(leftArmMesh);
    group.add(leftArmPivot);

    const rightArmPivot = new THREE.Group();
    rightArmPivot.name = 'right_arm';
    rightArmPivot.position.set(0.32, 1.32, 0);
    const rightArmMesh = new THREE.Mesh(armGeom, shirtMat);
    rightArmMesh.position.y = -0.25;
    rightArmMesh.castShadow = true;
    rightArmPivot.add(rightArmMesh);
    group.add(rightArmPivot);

    // Legs
    const legGeom = new THREE.BoxGeometry(0.18, 0.68, 0.18);

    const leftLegPivot = new THREE.Group();
    leftLegPivot.name = 'left_leg';
    leftLegPivot.position.set(-0.14, 0.72, 0);
    const leftLegMesh = new THREE.Mesh(legGeom, pantsMat);
    leftLegMesh.position.y = -0.32;
    leftLegMesh.castShadow = true;
    leftLegPivot.add(leftLegMesh);

    // Left shoe
    const shoeGeom = new THREE.BoxGeometry(0.19, 0.12, 0.26);
    const leftShoe = new THREE.Mesh(shoeGeom, shoeMat);
    leftShoe.position.set(0, -0.66, 0.04);
    leftLegPivot.add(leftShoe);

    group.add(leftLegPivot);

    const rightLegPivot = new THREE.Group();
    rightLegPivot.name = 'right_leg';
    rightLegPivot.position.set(0.14, 0.72, 0);
    const rightLegMesh = new THREE.Mesh(legGeom, pantsMat);
    rightLegMesh.position.y = -0.32;
    rightLegMesh.castShadow = true;
    rightLegPivot.add(rightLegMesh);

    // Right shoe
    const rightShoe = new THREE.Mesh(shoeGeom, shoeMat);
    rightShoe.position.set(0, -0.66, 0.04);
    rightLegPivot.add(rightShoe);

    group.add(rightLegPivot);

    // Marker beacon ring above player
    if (isPlayer) {
      const ringGeom = new THREE.RingGeometry(0.28, 0.38, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 2.05;
      ringMesh.name = 'player_indicator';
      group.add(ringMesh);
    }

    return group;
  }

  // Create Vehicle 3D Model
  public static createVehicle(v: Vehicle): THREE.Group {
    const group = new THREE.Group();
    group.name = `veh_group_${v.id}`;

    const bodyMat = this.getMaterial(v.color, v.type === 'sports' ? 0.2 : 0.4, v.type === 'sports' ? 0.8 : 0.2);
    const glassMat = this.getMaterial('#1e293b', 0.1, 0.9);
    const tireMat = this.getMaterial('#1c1917', 0.9, 0.0);
    const rimMat = this.getMaterial('#cbd5e1', 0.3, 0.8);
    const lightGlowMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const tailGlowMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    const w = v.width;
    const l = v.length;
    const h = v.height;

    // 1. Lower Body Chassis
    const lowerBodyGeom = new THREE.BoxGeometry(w, h * 0.48, l);
    const lowerBody = new THREE.Mesh(lowerBodyGeom, bodyMat);
    lowerBody.position.y = h * 0.38;
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    group.add(lowerBody);

    // 2. Cabin / Windshield
    const cabinWidth = w * 0.84;
    const cabinLength = v.type === 'truck' ? l * 0.35 : l * 0.52;
    const cabinHeight = h * 0.46;
    const cabinGeom = new THREE.BoxGeometry(cabinWidth, cabinHeight, cabinLength);
    const cabin = new THREE.Mesh(cabinGeom, glassMat);
    const cabinZ = v.type === 'truck' ? l * 0.25 : -l * 0.05;
    cabin.position.set(0, h * 0.82, cabinZ);
    cabin.castShadow = true;
    group.add(cabin);

    // Truck flatbed / cargo container
    if (v.type === 'truck') {
      const cargoGeom = new THREE.BoxGeometry(w * 0.95, h * 0.8, l * 0.6);
      const cargoMat = this.getMaterial('#94a3b8', 0.5, 0.2);
      const cargo = new THREE.Mesh(cargoGeom, cargoMat);
      cargo.position.set(0, h * 0.65, -l * 0.16);
      cargo.castShadow = true;
      group.add(cargo);
    }

    // 3. Headlights (Front is +Z)
    const hlGeom = new THREE.BoxGeometry(0.35, 0.18, 0.08);
    const hlLeft = new THREE.Mesh(hlGeom, lightGlowMat);
    hlLeft.position.set(-w * 0.36, h * 0.36, l * 0.5);
    group.add(hlLeft);

    const hlRight = new THREE.Mesh(hlGeom, lightGlowMat);
    hlRight.position.set(w * 0.36, h * 0.36, l * 0.5);
    group.add(hlRight);

    // 4. Tail Lights (Rear is -Z)
    const tlGeom = new THREE.BoxGeometry(0.35, 0.16, 0.08);
    const tlLeft = new THREE.Mesh(tlGeom, tailGlowMat);
    tlLeft.position.set(-w * 0.36, h * 0.36, -l * 0.5);
    tlLeft.name = 'tail_left';
    group.add(tlLeft);

    const tlRight = new THREE.Mesh(tlGeom, tailGlowMat);
    tlRight.position.set(w * 0.36, h * 0.36, -l * 0.5);
    tlRight.name = 'tail_right';
    group.add(tlRight);

    // 5. Special vehicle details:
    if (v.isPolice) {
      // Lightbar on roof
      const barGeom = new THREE.BoxGeometry(w * 0.65, 0.16, 0.32);
      const barBase = new THREE.Mesh(barGeom, this.getMaterial('#0f172a', 0.5, 0.5));
      barBase.position.set(0, h * 1.08, cabinZ);
      group.add(barBase);

      const redLightMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const blueLightMat = new THREE.MeshBasicMaterial({ color: 0x0066ff });

      const redBeacon = new THREE.Mesh(new THREE.BoxGeometry(w * 0.28, 0.14, 0.28), redLightMat);
      redBeacon.name = 'police_red';
      redBeacon.position.set(-w * 0.18, h * 1.15, cabinZ);
      group.add(redBeacon);

      const blueBeacon = new THREE.Mesh(new THREE.BoxGeometry(w * 0.28, 0.14, 0.28), blueLightMat);
      blueBeacon.name = 'police_blue';
      blueBeacon.position.set(w * 0.18, h * 1.15, cabinZ);
      group.add(blueBeacon);

      // Strobe point lights
      const redPt = new THREE.PointLight(0xff0000, 0, 15);
      redPt.name = 'police_pt_red';
      redPt.position.set(-w * 0.2, h * 1.25, cabinZ);
      group.add(redPt);

      const bluePt = new THREE.PointLight(0x0066ff, 0, 15);
      bluePt.name = 'police_pt_blue';
      bluePt.position.set(w * 0.2, h * 1.25, cabinZ);
      group.add(bluePt);
    } else if (v.type === 'taxi') {
      // Taxi roof sign
      const signGeom = new THREE.BoxGeometry(0.7, 0.22, 0.35);
      const signMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
      const sign = new THREE.Mesh(signGeom, signMat);
      sign.position.set(0, h * 1.1, cabinZ);
      group.add(sign);
    } else if (v.isMissionCar) {
      // Spoiler & Gold trim
      const spoilerWingGeom = new THREE.BoxGeometry(w * 1.05, 0.08, 0.35);
      const spoilerMat = this.getMaterial('#06b6d4', 0.2, 0.8);
      const spoiler = new THREE.Mesh(spoilerWingGeom, spoilerMat);
      spoiler.position.set(0, h * 0.85, -l * 0.46);
      group.add(spoiler);

      // Floating objective diamond indicator
      const diamondGeom = new THREE.OctahedronGeometry(0.55, 0);
      const diamondMat = new THREE.MeshBasicMaterial({ color: 0xfacc15, wireframe: false });
      const diamond = new THREE.Mesh(diamondGeom, diamondMat);
      diamond.position.set(0, 3.2, 0);
      diamond.name = 'mission_marker_floating';
      group.add(diamond);
    }

    // 6. Wheels (4 wheels rotated along X axis)
    const wheelY = 0.38;
    const wheelOffsets = [
      { name: 'wheel_fl', x: -w * 0.52, z: l * 0.32, isFront: true },
      { name: 'wheel_fr', x: w * 0.52, z: l * 0.32, isFront: true },
      { name: 'wheel_rl', x: -w * 0.52, z: -l * 0.32, isFront: false },
      { name: 'wheel_rr', x: w * 0.52, z: -l * 0.32, isFront: false },
    ];

    wheelOffsets.forEach((pos) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.name = pos.name;
      wheelGroup.position.set(pos.x, wheelY, pos.z);

      const tire = new THREE.Mesh(this.wheelGeom, tireMat);
      tire.rotation.z = Math.PI / 2;
      tire.castShadow = true;
      wheelGroup.add(tire);

      const rim = new THREE.Mesh(this.rimGeom, rimMat);
      rim.rotation.z = Math.PI / 2;
      wheelGroup.add(rim);

      group.add(wheelGroup);
    });

    return group;
  }

  // Create 3D Building with architectural details
  public static createBuilding(b: Building): THREE.Group {
    const group = new THREE.Group();
    group.name = `building_${b.id}`;

    const wallMat = this.getMaterial(b.color, 0.7, 0.1);
    const roofMat = this.getMaterial(b.roofColor, 0.8, 0.0);
    const glassMat = this.getMaterial('#0284c7', 0.2, 0.8);

    // Main tower
    const geom = new THREE.BoxGeometry(b.width, b.height, b.depth);
    const mesh = new THREE.Mesh(geom, wallMat);
    mesh.position.set(b.x, b.height / 2, b.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    // Roof parapet / cap
    const capGeom = new THREE.BoxGeometry(b.width * 1.02, 1.2, b.depth * 1.02);
    const cap = new THREE.Mesh(capGeom, roofMat);
    cap.position.set(b.x, b.height + 0.6, b.z);
    cap.castShadow = true;
    group.add(cap);

    // Roof details (AC unit or antenna)
    if (b.height > 25) {
      const acGeom = new THREE.BoxGeometry(4.0, 2.2, 3.5);
      const acMesh = new THREE.Mesh(acGeom, this.getMaterial('#64748b', 0.6, 0.3));
      acMesh.position.set(b.x - 3, b.height + 2.0, b.z + 2);
      acMesh.castShadow = true;
      group.add(acMesh);

      // Antenna spire
      const spireGeom = new THREE.CylinderGeometry(0.12, 0.25, 7.0, 8);
      const spireMat = this.getMaterial('#dc2626', 0.4, 0.6);
      const spire = new THREE.Mesh(spireGeom, spireMat);
      spire.position.set(b.x + 4, b.height + 4.5, b.z - 4);
      group.add(spire);
    }

    // Windows band bands on facades
    const floors = Math.floor(b.height / 4);
    if (floors > 2) {
      for (let f = 1; f < floors; f++) {
        const winY = f * 4.0;
        // North/South window strip
        const stripGeom = new THREE.BoxGeometry(b.width * 0.85, 1.4, b.depth + 0.1);
        const strip = new THREE.Mesh(stripGeom, glassMat);
        strip.position.set(b.x, winY, b.z);
        group.add(strip);
      }
    }

    // Special signage for unique buildings
    if (b.isRestrictedZone) {
      // Police Precinct Blue Neon Band
      const bandGeom = new THREE.BoxGeometry(b.width * 1.03, 1.0, b.depth * 1.03);
      const bandMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
      const band = new THREE.Mesh(bandGeom, bandMat);
      band.position.set(b.x, 8.0, b.z);
      group.add(band);
    } else if (b.isMissionTarget) {
      // Harbor Safehouse Neon Green Band
      const bandGeom = new THREE.BoxGeometry(b.width * 1.03, 1.2, b.depth * 1.03);
      const bandMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
      const band = new THREE.Mesh(bandGeom, bandMat);
      band.position.set(b.x, 6.0, b.z);
      group.add(band);
    }

    return group;
  }

  // Create Street Prop (Light pole, Tree, Hydrant, Dumpster)
  public static createProp(p: Prop): THREE.Group {
    const group = new THREE.Group();
    group.name = `prop_${p.id}`;
    group.position.set(p.x, 0, p.z);
    group.rotation.y = p.rotation;

    switch (p.type) {
      case 'lightpole': {
        const poleMat = this.getMaterial('#475569', 0.4, 0.7);
        const bulbMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

        // Vertical pole
        const poleGeom = new THREE.CylinderGeometry(0.12, 0.16, 7.5, 8);
        const pole = new THREE.Mesh(poleGeom, poleMat);
        pole.position.y = 3.75;
        pole.castShadow = true;
        group.add(pole);

        // Arm
        const armGeom = new THREE.CylinderGeometry(0.09, 0.09, 2.0, 8);
        const arm = new THREE.Mesh(armGeom, poleMat);
        arm.rotation.z = Math.PI / 2.6;
        arm.position.set(0.8, 7.2, 0);
        group.add(arm);

        // Lamp head bulb
        const bulbGeom = new THREE.SphereGeometry(0.24, 8, 8);
        const bulb = new THREE.Mesh(bulbGeom, bulbMat);
        bulb.position.set(1.6, 7.0, 0);
        group.add(bulb);
        break;
      }

      case 'tree': {
        // Wood trunk
        const trunkGeom = new THREE.CylinderGeometry(0.26, 0.35, 3.2, 8);
        const trunkMat = this.getMaterial('#78350f', 0.9, 0.0);
        const trunk = new THREE.Mesh(trunkGeom, trunkMat);
        trunk.position.y = 1.6;
        trunk.castShadow = true;
        group.add(trunk);

        // Foliage spheres/cones
        const foliageMat = this.getMaterial('#15803d', 0.8, 0.0);
        const f1 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.6, 1), foliageMat);
        f1.position.y = 3.8;
        f1.castShadow = true;
        group.add(f1);

        const f2 = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), foliageMat);
        f2.position.set(0.4, 4.6, 0.2);
        f2.castShadow = true;
        group.add(f2);
        break;
      }

      case 'hydrant': {
        const hydrantMat = this.getMaterial('#ef4444', 0.4, 0.4);
        const geom = new THREE.CylinderGeometry(0.2, 0.22, 0.8, 8);
        const hydrant = new THREE.Mesh(geom, hydrantMat);
        hydrant.position.y = 0.4;
        hydrant.castShadow = true;
        group.add(hydrant);
        break;
      }

      case 'dumpster': {
        const dumpMat = this.getMaterial('#155e75', 0.6, 0.3);
        const geom = new THREE.BoxGeometry(1.8, 1.2, 1.2);
        const dumpster = new THREE.Mesh(geom, dumpMat);
        dumpster.position.y = 0.6;
        dumpster.castShadow = true;
        dumpster.receiveShadow = true;
        group.add(dumpster);
        break;
      }
    }

    return group;
  }
}
