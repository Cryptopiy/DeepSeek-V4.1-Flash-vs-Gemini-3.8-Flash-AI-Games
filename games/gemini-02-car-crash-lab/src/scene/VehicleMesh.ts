import * as THREE from 'three';
import { VEHICLE_SPECS } from '../physics/constants';
import { DamageZones } from '../types/simulation';

interface DetachedPart {
  mesh: THREE.Mesh;
  initialPos: THREE.Vector3;
  initialRot: THREE.Euler;
  vel: THREE.Vector3;
  rotVel: THREE.Vector3;
  detached: boolean;
}

export class VehicleMesh {
  public group: THREE.Group;
  private chassisGroup: THREE.Group;
  private wheels: THREE.Mesh[] = [];

  // Deformable geometry references
  private bumperMesh!: THREE.Mesh;
  private originalBumperPositions!: Float32Array;
  private hoodMesh!: THREE.Mesh;
  private originalHoodPositions!: Float32Array;

  // Detachable parts
  private detachableParts: DetachedPart[] = [];

  // Material references for damage tinting
  private bodyMaterial!: THREE.MeshStandardMaterial;
  private bumperMaterial!: THREE.MeshStandardMaterial;

  constructor() {
    this.group = new THREE.Group();
    this.chassisGroup = new THREE.Group();
    this.group.add(this.chassisGroup);

    this.buildBody();
    this.buildHoodAndBumper();
    this.buildCabinAndGlass();
    this.buildWheels();
    this.buildDetachableParts();
    this.buildLights();
    this.buildCrashLivery();
  }

  private buildBody() {
    // Crash test yellow base paint
    this.bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.6,
      roughness: 0.25
    });

    // Lower main chassis frame
    const lowerBodyGeo = new THREE.BoxGeometry(1.88, 0.55, 4.3);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, this.bodyMaterial);
    lowerBody.position.set(0, 0.45, 0);
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    this.chassisGroup.add(lowerBody);

    // Wheel arches cutouts / underbody dark panel
    const underbodyMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9 });
    const underbody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 4.2), underbodyMat);
    underbody.position.set(0, 0.2, 0);
    this.chassisGroup.add(underbody);

    // Rear bumper & diffuser
    const rearMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.4 });
    const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.45, 0.4), rearMat);
    rearBumper.position.set(0, 0.42, -2.1);
    rearBumper.castShadow = true;
    this.chassisGroup.add(rearBumper);
  }

  private buildHoodAndBumper() {
    // 1. Front Deformable Bumper
    this.bumperMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.3,
      roughness: 0.4
    });

    // Bumper geometry with multiple subdivisions so it can bend and crumple
    const bumperGeo = new THREE.BoxGeometry(1.86, 0.45, 0.6, 8, 4, 6);
    this.originalBumperPositions = new Float32Array(bumperGeo.attributes.position.array);

    this.bumperMesh = new THREE.Mesh(bumperGeo, this.bumperMaterial);
    this.bumperMesh.position.set(0, 0.42, 2.15);
    this.bumperMesh.castShadow = true;
    this.chassisGroup.add(this.bumperMesh);

    // 2. Front Deformable Hood
    const hoodGeo = new THREE.BoxGeometry(1.72, 0.15, 1.45, 8, 2, 8);
    this.originalHoodPositions = new Float32Array(hoodGeo.attributes.position.array);

    this.hoodMesh = new THREE.Mesh(hoodGeo, this.bodyMaterial);
    this.hoodMesh.position.set(0, 0.72, 1.25);
    this.hoodMesh.castShadow = true;
    this.chassisGroup.add(this.hoodMesh);
  }

  private buildCabinAndGlass() {
    // Glass material
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });

    // Cabin greenhouse / roof
    const cabinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.6,
      roughness: 0.25
    });

    // Roof top
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.08, 1.8), cabinMat);
    roof.position.set(0, 1.4, -0.3);
    roof.castShadow = true;
    this.chassisGroup.add(roof);

    // Front Windshield (slanted)
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.46, 0.06, 0.95), glassMat);
    windshield.position.set(0, 1.1, 0.85);
    windshield.rotation.x = -Math.PI / 4.5;
    windshield.castShadow = true;
    this.chassisGroup.add(windshield);

    // Rear Windshield (slanted)
    const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(1.46, 0.06, 0.9), glassMat);
    rearGlass.position.set(0, 1.1, -1.45);
    rearGlass.rotation.x = Math.PI / 4.8;
    this.chassisGroup.add(rearGlass);

    // Side windows
    for (const side of [-0.73, 0.73]) {
      const sideGlass = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.5, 1.7), glassMat);
      sideGlass.position.set(side, 1.05, -0.3);
      this.chassisGroup.add(sideGlass);
    }

    // A, B, C Pillars
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    for (const side of [-0.74, 0.74]) {
      // B-Pillar
      const bPillar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.62, 0.12), pillarMat);
      bPillar.position.set(side, 1.05, -0.3);
      this.chassisGroup.add(bPillar);
    }
  }

  private buildWheels() {
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.85,
      metalness: 0.1
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.85,
      roughness: 0.2
    });

    const wheelPositions = [
      { x: -0.96, y: 0.35, z: 1.35 },  // Front-Left
      { x: 0.96, y: 0.35, z: 1.35 },   // Front-Right
      { x: -0.96, y: 0.35, z: -1.35 }, // Rear-Left
      { x: 0.96, y: 0.35, z: -1.35 }   // Rear-Right
    ];

    for (const pos of wheelPositions) {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(pos.x, pos.y, pos.z);

      // Tire cylinder
      const tireGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.28, 20);
      tireGeo.rotateZ(Math.PI / 2);
      const tire = new THREE.Mesh(tireGeo, tireMat);
      tire.castShadow = true;
      wheelGroup.add(tire);

      // Rim
      const rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.29, 16);
      rimGeo.rotateZ(Math.PI / 2);
      const rim = new THREE.Mesh(rimGeo, rimMat);
      wheelGroup.add(rim);

      // Spoke detail
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.44, 0.04), rimMat);
      wheelGroup.add(spoke);

      this.chassisGroup.add(wheelGroup);
      this.wheels.push(tire);
    }
  }

  private buildDetachableParts() {
    // 1. Left Headlight Lens
    const lightLensMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x93c5fd,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      transparent: true,
      opacity: 0.9
    });

    const leftHeadlight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.16, 0.12), lightLensMat);
    const leftHeadlightPos = new THREE.Vector3(-0.68, 0.62, 2.38);
    leftHeadlight.position.copy(leftHeadlightPos);
    this.group.add(leftHeadlight);
    this.detachableParts.push({
      mesh: leftHeadlight,
      initialPos: leftHeadlightPos.clone(),
      initialRot: leftHeadlight.rotation.clone(),
      vel: new THREE.Vector3(),
      rotVel: new THREE.Vector3(),
      detached: false
    });

    // 2. Right Headlight Lens
    const rightHeadlight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.16, 0.12), lightLensMat);
    const rightHeadlightPos = new THREE.Vector3(0.68, 0.62, 2.38);
    rightHeadlight.position.copy(rightHeadlightPos);
    this.group.add(rightHeadlight);
    this.detachableParts.push({
      mesh: rightHeadlight,
      initialPos: rightHeadlightPos.clone(),
      initialRot: rightHeadlight.rotation.clone(),
      vel: new THREE.Vector3(),
      rotVel: new THREE.Vector3(),
      detached: false
    });

    // 3. Left Side Mirror
    const mirrorMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.4 });
    const leftMirror = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.22), mirrorMat);
    const leftMirrorPos = new THREE.Vector3(-1.05, 0.98, 0.65);
    leftMirror.position.copy(leftMirrorPos);
    this.group.add(leftMirror);
    this.detachableParts.push({
      mesh: leftMirror,
      initialPos: leftMirrorPos.clone(),
      initialRot: leftMirror.rotation.clone(),
      vel: new THREE.Vector3(),
      rotVel: new THREE.Vector3(),
      detached: false
    });

    // 4. Right Side Mirror
    const rightMirror = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.14, 0.22), mirrorMat);
    const rightMirrorPos = new THREE.Vector3(1.05, 0.98, 0.65);
    rightMirror.position.copy(rightMirrorPos);
    this.group.add(rightMirror);
    this.detachableParts.push({
      mesh: rightMirror,
      initialPos: rightMirrorPos.clone(),
      initialRot: rightMirror.rotation.clone(),
      vel: new THREE.Vector3(),
      rotVel: new THREE.Vector3(),
      detached: false
    });
  }

  private buildLights() {
    // Headlight spotlights casting light forward on the test track
    const leftSpot = new THREE.SpotLight(0xfffbeb, 1.8, 25, 0.4, 0.5);
    leftSpot.position.set(-0.65, 0.6, 2.4);
    leftSpot.target.position.set(-0.65, 0, 15);
    this.chassisGroup.add(leftSpot);
    this.chassisGroup.add(leftSpot.target);

    const rightSpot = new THREE.SpotLight(0xfffbeb, 1.8, 25, 0.4, 0.5);
    rightSpot.position.set(0.65, 0.6, 2.4);
    rightSpot.target.position.set(0.65, 0, 15);
    this.chassisGroup.add(rightSpot);
    this.chassisGroup.add(rightSpot.target);

    // Tail lights (red)
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.6,
      roughness: 0.3
    });
    for (const x of [-0.68, 0.68]) {
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.14, 0.05), tailMat);
      tail.position.set(x, 0.6, -2.16);
      this.chassisGroup.add(tail);
    }
  }

  private buildCrashLivery() {
    // Iconic Crash-Test Target Marker (Yellow & Black alternating quarter circles)
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(0, 0, 128, 128);

      // Top-left and bottom-right black quarters
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.moveTo(64, 64);
      ctx.arc(64, 64, 56, 0, Math.PI / 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(64, 64);
      ctx.arc(64, 64, 56, Math.PI, (3 * Math.PI) / 2);
      ctx.fill();

      // Outer circle rim
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(64, 64, 56, 0, Math.PI * 2);
      ctx.stroke();
    }

    const targetTex = new THREE.CanvasTexture(canvas);
    const targetMat = new THREE.MeshBasicMaterial({ map: targetTex, transparent: true });

    // Target on Roof
    const roofTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), targetMat);
    roofTarget.rotation.x = -Math.PI / 2;
    roofTarget.position.set(0, 1.45, -0.3);
    this.chassisGroup.add(roofTarget);

    // Target on Driver Door (Left)
    const leftDoorTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.45), targetMat);
    leftDoorTarget.rotation.y = -Math.PI / 2;
    leftDoorTarget.position.set(-0.95, 0.62, 0);
    this.chassisGroup.add(leftDoorTarget);

    // Target on Passenger Door (Right)
    const rightDoorTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.45), targetMat);
    rightDoorTarget.rotation.y = Math.PI / 2;
    rightDoorTarget.position.set(0.95, 0.62, 0);
    this.chassisGroup.add(rightDoorTarget);
  }

  public applyDamage(damageZones: DamageZones, totalDamagePercent: number, collisionAngleDeg: number) {
    const damageFactor = totalDamagePercent / 100;

    // 1. Deform Bumper Geometry
    const bumperPositions = this.bumperMesh.geometry.attributes.position;
    const bumperArr = bumperPositions.array as Float32Array;
    const origBumper = this.originalBumperPositions;

    for (let i = 0; i < bumperArr.length; i += 3) {
      const ox = origBumper[i];
      const oy = origBumper[i + 1];
      const oz = origBumper[i + 2];

      // If vertex is in the front portion of the bumper
      if (oz > 0) {
        // Compute crush depth based on which side is impacted
        let zoneRatio = damageZones.frontCenter / 100;
        if (ox < -0.2) zoneRatio = damageZones.frontLeft / 100;
        if (ox > 0.2) zoneRatio = damageZones.frontRight / 100;

        const maxCrush = 0.45 * zoneRatio;
        // Push front vertices back along Z
        bumperArr[i + 2] = oz - maxCrush * (0.8 + 0.4 * Math.sin(ox * 4));
        // Dent inward along X
        bumperArr[i] = ox + (ox > 0 ? -1 : 1) * maxCrush * 0.2;
        // Wrinkle vertically
        bumperArr[i + 1] = oy + (Math.sin(ox * 8) * 0.08 * zoneRatio);
      }
    }
    bumperPositions.needsUpdate = true;
    this.bumperMesh.geometry.computeVertexNormals();

    // 2. Deform Hood Geometry (buckle upwards)
    const hoodPositions = this.hoodMesh.geometry.attributes.position;
    const hoodArr = hoodPositions.array as Float32Array;
    const origHood = this.originalHoodPositions;

    for (let i = 0; i < hoodArr.length; i += 3) {
      const ox = origHood[i];
      const oy = origHood[i + 1];
      const oz = origHood[i + 2];

      // Front of the hood compresses back and buckles up
      if (oz > -0.4) {
        const normalizedZ = (oz + 0.4) / 1.1; // 0 to 1
        const buckleUp = Math.sin(normalizedZ * Math.PI) * 0.35 * damageFactor;
        const compressBack = normalizedZ * 0.3 * damageFactor;

        hoodArr[i + 1] = oy + buckleUp;
        hoodArr[i + 2] = oz - compressBack;
      }
    }
    hoodPositions.needsUpdate = true;
    this.hoodMesh.geometry.computeVertexNormals();

    // 3. Detach parts on high impacts
    if (totalDamagePercent >= 22) {
      this.triggerPartDetachment(damageZones, totalDamagePercent, collisionAngleDeg);
    }

    // 4. Scratch & scuff material colors
    if (totalDamagePercent > 40) {
      this.bumperMaterial.color.setHex(0x374151);
      this.bodyMaterial.roughness = 0.55;
    }
  }

  private triggerPartDetachment(damageZones: DamageZones, damagePercent: number, angleDeg: number) {
    const angleRad = (angleDeg * Math.PI) / 180;
    const baseBlast = Math.min(6.5, (damagePercent / 100) * 8.0);

    for (const part of this.detachableParts) {
      if (part.detached) continue;

      let shouldDetach = false;
      if (part.mesh.position.x < 0 && damageZones.frontLeft > 25) {
        shouldDetach = true;
      } else if (part.mesh.position.x > 0 && damageZones.frontRight > 25) {
        shouldDetach = true;
      } else if (damagePercent > 60) {
        shouldDetach = true;
      }

      if (shouldDetach) {
        part.detached = true;
        // World velocity outward and upward
        const outX = Math.sign(part.initialPos.x) * (1.5 + Math.random() * 2.5);
        const outY = 2.0 + Math.random() * 3.5;
        const outZ = -Math.cos(angleRad) * baseBlast * 0.4 + (Math.random() - 0.5) * 2;

        part.vel.set(outX, outY, outZ);
        part.rotVel.set(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12
        );
      }
    }
  }

  public updateDetachedParts(dt: number) {
    for (const part of this.detachableParts) {
      if (!part.detached) {
        // Keep synced with chassis
        continue;
      }

      // Physics integration for detached part
      part.vel.y -= 9.81 * dt; // Gravity
      part.mesh.position.addScaledVector(part.vel, dt);

      // Rotation
      part.mesh.rotation.x += part.rotVel.x * dt;
      part.mesh.rotation.y += part.rotVel.y * dt;
      part.mesh.rotation.z += part.rotVel.z * dt;

      // Ground bounce / resting
      if (part.mesh.position.y <= 0.08) {
        part.mesh.position.y = 0.08;
        part.vel.y = -part.vel.y * 0.3; // Rebound
        part.vel.x *= 0.65;
        part.vel.z *= 0.65;
        part.rotVel.multiplyScalar(0.7);

        if (Math.abs(part.vel.y) < 0.2) {
          part.vel.set(0, 0, 0);
          part.rotVel.set(0, 0, 0);
        }
      }
    }
  }

  public updateTransform(x: number, z: number, angleRad: number, pitchRad: number, rollRad: number, speedMs: number, dt: number) {
    this.group.position.set(x, 0, z);
    this.group.rotation.y = angleRad;

    // Pitch & roll suspension movement on chassis
    this.chassisGroup.rotation.x = pitchRad;
    this.chassisGroup.rotation.z = rollRad;

    // Rotate wheels when driving
    const wheelRadius = 0.35;
    const wheelRotSpeed = speedMs / wheelRadius;
    for (const tire of this.wheels) {
      tire.rotation.x += wheelRotSpeed * dt;
    }

    // Update any detached parts in world space
    this.updateDetachedParts(dt);
  }

  public reset() {
    // Reset positions of bumper vertices
    const bumperArr = this.bumperMesh.geometry.attributes.position.array as Float32Array;
    bumperArr.set(this.originalBumperPositions);
    this.bumperMesh.geometry.attributes.position.needsUpdate = true;
    this.bumperMesh.geometry.computeVertexNormals();

    // Reset positions of hood vertices
    const hoodArr = this.hoodMesh.geometry.attributes.position.array as Float32Array;
    hoodArr.set(this.originalHoodPositions);
    this.hoodMesh.geometry.attributes.position.needsUpdate = true;
    this.hoodMesh.geometry.computeVertexNormals();

    // Reset detachable parts
    for (const part of this.detachableParts) {
      part.detached = false;
      part.mesh.position.copy(part.initialPos);
      part.mesh.rotation.copy(part.initialRot);
      part.vel.set(0, 0, 0);
      part.rotVel.set(0, 0, 0);
    }

    // Reset materials
    this.bodyMaterial.color.setHex(0xf59e0b);
    this.bodyMaterial.roughness = 0.25;
    this.bumperMaterial.color.setHex(0x1f2937);

    // Reset group transforms
    this.group.position.set(0, 0, VEHICLE_SPECS.trackStartZ);
    this.group.rotation.set(0, 0, 0);
    this.chassisGroup.rotation.set(0, 0, 0);
  }
}
