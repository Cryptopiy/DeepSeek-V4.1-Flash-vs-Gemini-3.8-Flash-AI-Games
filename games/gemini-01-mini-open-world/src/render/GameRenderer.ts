import * as THREE from 'three';
import { GameSimulation } from '../game/simulation';
import { ModelFactory } from './models';
import { ParticleRenderer } from './particles';
import { ROAD_COORDINATES, ROAD_WIDTH, SIDEWALK_WIDTH } from '../game/world';

export class GameRenderer {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particleRenderer: ParticleRenderer;

  // Scene object caches
  private vehicleMeshes: Map<string, THREE.Group> = new Map();
  private pedestrianMeshes: Map<string, THREE.Group> = new Map();
  private playerMesh: THREE.Group | null = null;
  private missionBeaconGroup: THREE.Group;

  // Camera tracking vectors
  private cameraPosTarget = new THREE.Vector3();
  private cameraLookTarget = new THREE.Vector3();

  constructor(container: HTMLElement, simulation: GameSimulation) {
    this.container = container;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#090d16');
    this.scene.fog = new THREE.FogExp2('#090d16', 0.0055);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.5,
      600
    );
    this.camera.position.set(0, 15, -25);

    // 3. WebGLRenderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    container.appendChild(this.renderer.domElement);

    // 4. Lighting
    this.setupLighting();

    // 5. City Ground & Roads
    this.buildGroundAndRoads();

    // 6. Buildings & Props
    this.buildCityEntities(simulation);

    // 7. Mission Beacon Marker
    this.missionBeaconGroup = this.createMissionBeacon();
    this.scene.add(this.missionBeaconGroup);

    // 8. Particle System
    this.particleRenderer = new ParticleRenderer(this.scene);

    // 9. Resize Listener
    window.addEventListener('resize', this.handleResize);
  }

  private setupLighting() {
    // Ambient / Hemisphere light
    const hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x1e293b, 0.7);
    this.scene.add(hemiLight);

    // Directional Sunlight with Shadows
    const sunLight = new THREE.DirectionalLight(0xfffbeb, 1.25);
    sunLight.position.set(90, 140, 80);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 350;

    const shadowDist = 120;
    sunLight.shadow.camera.left = -shadowDist;
    sunLight.shadow.camera.right = shadowDist;
    sunLight.shadow.camera.top = shadowDist;
    sunLight.shadow.camera.bottom = -shadowDist;
    sunLight.shadow.bias = -0.0005;

    this.scene.add(sunLight);

    // Soft warm ambient fill
    const ambientLight = new THREE.AmbientLight(0x334155, 0.45);
    this.scene.add(ambientLight);
  }

  private buildGroundAndRoads() {
    // 1. Base Ground (Grass & Plaza terrain)
    const groundGeom = new THREE.PlaneGeometry(340, 340);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.9,
      metalness: 0.05,
    });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // 2. Central Park Green Lawn
    const parkGeom = new THREE.PlaneGeometry(42, 42);
    const parkMat = new THREE.MeshStandardMaterial({
      color: 0x166534,
      roughness: 0.95,
      metalness: 0.0,
    });
    const parkMesh = new THREE.Mesh(parkGeom, parkMat);
    parkMesh.rotation.x = -Math.PI / 2;
    parkMesh.position.set(0, 0.01, 0);
    parkMesh.receiveShadow = true;
    this.scene.add(parkMesh);

    // 3. Roads & Sidewalks
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Dark asphalt
      roughness: 0.8,
      metalness: 0.1,
    });

    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // Concrete sidewalk
      roughness: 0.85,
      metalness: 0.05,
    });

    const lineMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 }); // Yellow dashed line
    const whiteLineMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc }); // White border / crosswalk line

    // Road segments along coordinates
    ROAD_COORDINATES.forEach((rx) => {
      // North-South Avenues
      const roadN = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_WIDTH, 290), roadMat);
      roadN.rotation.x = -Math.PI / 2;
      roadN.position.set(rx, 0.02, 0);
      roadN.receiveShadow = true;
      this.scene.add(roadN);

      // East Sidewalk
      const swE = new THREE.Mesh(new THREE.BoxGeometry(SIDEWALK_WIDTH, 0.25, 290), sidewalkMat);
      swE.position.set(rx + ROAD_WIDTH / 2 + SIDEWALK_WIDTH / 2, 0.1, 0);
      swE.receiveShadow = true;
      this.scene.add(swE);

      // West Sidewalk
      const swW = new THREE.Mesh(new THREE.BoxGeometry(SIDEWALK_WIDTH, 0.25, 290), sidewalkMat);
      swW.position.set(rx - ROAD_WIDTH / 2 - SIDEWALK_WIDTH / 2, 0.1, 0);
      swW.receiveShadow = true;
      this.scene.add(swW);

      // Yellow dashed center stripe
      for (let z = -140; z <= 140; z += 8) {
        const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 4.5), lineMat);
        dash.rotation.x = -Math.PI / 2;
        dash.position.set(rx, 0.04, z);
        this.scene.add(dash);
      }
    });

    ROAD_COORDINATES.forEach((rz) => {
      // East-West Streets
      const roadW = new THREE.Mesh(new THREE.PlaneGeometry(290, ROAD_WIDTH), roadMat);
      roadW.rotation.x = -Math.PI / 2;
      roadW.position.set(0, 0.03, rz);
      roadW.receiveShadow = true;
      this.scene.add(roadW);

      // North Sidewalk
      const swN = new THREE.Mesh(new THREE.BoxGeometry(290, 0.25, SIDEWALK_WIDTH), sidewalkMat);
      swN.position.set(0, 0.1, rz + ROAD_WIDTH / 2 + SIDEWALK_WIDTH / 2);
      swN.receiveShadow = true;
      this.scene.add(swN);

      // South Sidewalk
      const swS = new THREE.Mesh(new THREE.BoxGeometry(290, 0.25, SIDEWALK_WIDTH), sidewalkMat);
      swS.position.set(0, 0.1, rz - ROAD_WIDTH / 2 - SIDEWALK_WIDTH / 2);
      swS.receiveShadow = true;
      this.scene.add(swS);

      // Yellow dashed center stripe
      for (let x = -140; x <= 140; x += 8) {
        const dash = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 0.3), lineMat);
        dash.rotation.x = -Math.PI / 2;
        dash.position.set(x, 0.045, rz);
        this.scene.add(dash);
      }
    });

    // Crosswalk zebra stripes at intersections
    ROAD_COORDINATES.forEach((rx) => {
      ROAD_COORDINATES.forEach((rz) => {
        // Crosswalk bars
        [-8.5, 8.5].forEach((offset) => {
          // Horizontal crosswalk
          for (let step = -4.5; step <= 4.5; step += 1.5) {
            const bar = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 2.5), whiteLineMat);
            bar.rotation.x = -Math.PI / 2;
            bar.position.set(rx + step, 0.05, rz + offset);
            this.scene.add(bar);
          }
          // Vertical crosswalk
          for (let step = -4.5; step <= 4.5; step += 1.5) {
            const bar = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 0.8), whiteLineMat);
            bar.rotation.x = -Math.PI / 2;
            bar.position.set(rx + offset, 0.05, rz + step);
            this.scene.add(bar);
          }
        });
      });
    });
  }

  private buildCityEntities(sim: GameSimulation) {
    // 1. Buildings
    sim.buildings.forEach((b) => {
      const bGroup = ModelFactory.createBuilding(b);
      this.scene.add(bGroup);
    });

    // 2. Props
    sim.props.forEach((p) => {
      const pGroup = ModelFactory.createProp(p);
      this.scene.add(pGroup);
    });

    // 3. Vehicles
    sim.vehicles.forEach((v) => {
      const vGroup = ModelFactory.createVehicle(v);
      this.vehicleMeshes.set(v.id, vGroup);
      this.scene.add(vGroup);
    });

    // 4. Pedestrians
    sim.pedestrians.forEach((p) => {
      const pGroup = ModelFactory.createCharacter(false, p.shirtColor, p.pantsColor, p.skinColor);
      this.pedestrianMeshes.set(p.id, pGroup);
      this.scene.add(pGroup);
    });

    // 5. Player
    this.playerMesh = ModelFactory.createCharacter(true, '#38bdf8', '#1e293b', '#fcd34d');
    this.scene.add(this.playerMesh);
  }

  private createMissionBeacon(): THREE.Group {
    const group = new THREE.Group();

    // 1. Vertical Light Cylinder Beam
    const beamGeom = new THREE.CylinderGeometry(0.6, 1.4, 60, 16, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const beam = new THREE.Mesh(beamGeom, beamMat);
    beam.position.y = 30;
    group.add(beam);

    // 2. Floating Diamond Marker
    const diamondGeom = new THREE.OctahedronGeometry(1.2, 0);
    const diamondMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const diamond = new THREE.Mesh(diamondGeom, diamondMat);
    diamond.name = 'beacon_diamond';
    diamond.position.y = 4.5;
    group.add(diamond);

    // 3. Ground Ripple Rings
    const ringGeom = new THREE.RingGeometry(3.0, 3.6, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.15;
    group.add(ring);

    return group;
  }

  public render(sim: GameSimulation, dt: number): void {
    const time = performance.now() / 1000;

    // 1. Update Player 3D Mesh
    if (this.playerMesh) {
      if (sim.player.state === 'driving') {
        this.playerMesh.visible = false;
      } else {
        this.playerMesh.visible = true;
        this.playerMesh.position.set(sim.player.x, 0, sim.player.z);
        this.playerMesh.rotation.y = sim.player.rotation;

        // Limb swinging animation
        const leftLeg = this.playerMesh.getObjectByName('left_leg');
        const rightLeg = this.playerMesh.getObjectByName('right_leg');
        const leftArm = this.playerMesh.getObjectByName('left_arm');
        const rightArm = this.playerMesh.getObjectByName('right_arm');

        const swing = Math.sin(sim.player.legPhase) * 0.65;
        if (leftLeg) leftLeg.rotation.x = swing;
        if (rightLeg) rightLeg.rotation.x = -swing;
        if (leftArm) leftArm.rotation.x = -swing * 0.7;
        if (rightArm) rightArm.rotation.x = swing * 0.7;
      }
    }

    // 2. Update Vehicles
    for (const v of sim.vehicles) {
      const vGroup = this.vehicleMeshes.get(v.id);
      if (!vGroup) continue;

      vGroup.position.set(v.x, v.y, v.z);
      vGroup.rotation.y = v.rotation;

      // Front wheel steering
      const wheelFL = vGroup.getObjectByName('wheel_fl');
      const wheelFR = vGroup.getObjectByName('wheel_fr');
      if (wheelFL) wheelFL.rotation.y = v.steeringAngle;
      if (wheelFR) wheelFR.rotation.y = v.steeringAngle;

      // Wheel spinning
      const wheelRL = vGroup.getObjectByName('wheel_rl');
      const wheelRR = vGroup.getObjectByName('wheel_rr');
      if (wheelFL && wheelFL.children[0]) wheelFL.children[0].rotation.x = v.wheelRotation;
      if (wheelFR && wheelFR.children[0]) wheelFR.children[0].rotation.x = v.wheelRotation;
      if (wheelRL && wheelRL.children[0]) wheelRL.children[0].rotation.x = v.wheelRotation;
      if (wheelRR && wheelRR.children[0]) wheelRR.children[0].rotation.x = v.wheelRotation;

      // Tail brake lights glow
      const tailLeft = vGroup.getObjectByName('tail_left') as THREE.Mesh;
      const tailRight = vGroup.getObjectByName('tail_right') as THREE.Mesh;
      if (tailLeft && tailRight) {
        const mat = tailLeft.material as THREE.MeshBasicMaterial;
        mat.color.setHex(v.isBraking ? 0xff0000 : 0x7f1d1d);
      }

      // Police Strobe Flashers
      if (v.isPolice) {
        const redBeacon = vGroup.getObjectByName('police_red') as THREE.Mesh;
        const blueBeacon = vGroup.getObjectByName('police_blue') as THREE.Mesh;
        const redPt = vGroup.getObjectByName('police_pt_red') as THREE.PointLight;
        const bluePt = vGroup.getObjectByName('police_pt_blue') as THREE.PointLight;

        if (v.sirenActive) {
          const flashCycle = Math.sin(time * 18);
          const isRed = flashCycle > 0;

          if (redBeacon) (redBeacon.material as THREE.MeshBasicMaterial).color.setHex(isRed ? 0xff0000 : 0x450a0a);
          if (blueBeacon) (blueBeacon.material as THREE.MeshBasicMaterial).color.setHex(!isRed ? 0x0088ff : 0x082f49);
          if (redPt) redPt.intensity = isRed ? 2.5 : 0;
          if (bluePt) bluePt.intensity = !isRed ? 2.5 : 0;
        } else {
          if (redBeacon) (redBeacon.material as THREE.MeshBasicMaterial).color.setHex(0x450a0a);
          if (blueBeacon) (blueBeacon.material as THREE.MeshBasicMaterial).color.setHex(0x082f49);
          if (redPt) redPt.intensity = 0;
          if (bluePt) bluePt.intensity = 0;
        }
      }

      // Mission car floating diamond spin
      if (v.isMissionCar) {
        const diamond = vGroup.getObjectByName('mission_marker_floating');
        if (diamond) {
          diamond.rotation.y = time * 2.5;
          diamond.position.y = 3.2 + Math.sin(time * 4) * 0.3;
          // Hide when player already entered
          diamond.visible = v.driver !== 'player' && sim.mission.step === 'ENTER_CAR';
        }
      }
    }

    // 3. Update Pedestrians
    for (const p of sim.pedestrians) {
      const pGroup = this.pedestrianMeshes.get(p.id);
      if (!pGroup) continue;

      pGroup.position.set(p.x, 0, p.z);
      pGroup.rotation.y = p.rotation;

      if (p.state === 'knocked') {
        pGroup.rotation.z = Math.PI / 2.2;
        pGroup.position.y = 0.2;
      } else {
        pGroup.rotation.z = 0;
        pGroup.position.y = 0;

        const leftLeg = pGroup.getObjectByName('left_leg');
        const rightLeg = pGroup.getObjectByName('right_leg');
        const leftArm = pGroup.getObjectByName('left_arm');
        const rightArm = pGroup.getObjectByName('right_arm');

        const swing = Math.sin(p.legPhase) * 0.55;
        if (leftLeg) leftLeg.rotation.x = swing;
        if (rightLeg) rightLeg.rotation.x = -swing;
        if (leftArm) leftArm.rotation.x = -swing * 0.6;
        if (rightArm) rightArm.rotation.x = swing * 0.6;
      }
    }

    // 4. Update Mission Waypoint Beacon
    if (sim.mission.active && !sim.mission.completed) {
      this.missionBeaconGroup.visible = true;
      this.missionBeaconGroup.position.set(sim.mission.targetX, 0, sim.mission.targetZ);

      const diamond = this.missionBeaconGroup.getObjectByName('beacon_diamond');
      if (diamond) {
        diamond.rotation.y = time * 2.0;
        diamond.position.y = 4.2 + Math.sin(time * 3.5) * 0.4;
      }
    } else {
      this.missionBeaconGroup.visible = false;
    }

    // 5. Update Particles
    this.particleRenderer.update(sim.particles);

    // 6. Camera Follow System
    this.updateCamera(sim, dt);

    // Render Scene
    this.renderer.render(this.scene, this.camera);
  }

  private updateCamera(sim: GameSimulation, dt: number): void {
    const isDriving = sim.player.state === 'driving';
    const veh = sim.getPlayerVehicle();

    const targetX = isDriving && veh ? veh.x : sim.player.x;
    const targetY = isDriving && veh ? veh.y + 1.2 : 1.4;
    const targetZ = isDriving && veh ? veh.z : sim.player.z;
    const targetRot = isDriving && veh ? veh.rotation : sim.player.rotation;
    const speed = isDriving && veh ? veh.speed : Math.sqrt(sim.player.vx ** 2 + sim.player.vz ** 2);

    if (sim.cameraMode === 'hood' && isDriving && veh) {
      // Hood bumper camera
      const hoodOffset = veh.length * 0.4;
      const camX = targetX + Math.sin(targetRot) * hoodOffset;
      const camZ = targetZ + Math.cos(targetRot) * hoodOffset;
      this.camera.position.set(camX, veh.height * 0.85, camZ);
      const lookDist = 20;
      this.camera.lookAt(
        targetX + Math.sin(targetRot) * (hoodOffset + lookDist),
        targetY,
        targetZ + Math.cos(targetRot) * (hoodOffset + lookDist)
      );
      return;
    }

    if (sim.cameraMode === 'cinematic') {
      // Cinematic wide dynamic angle
      const time = performance.now() / 1000;
      const orbitDist = isDriving ? 22 : 14;
      const camX = targetX + Math.sin(time * 0.4) * orbitDist;
      const camZ = targetZ + Math.cos(time * 0.4) * orbitDist;
      const camY = targetY + (isDriving ? 9 : 5);

      this.cameraPosTarget.set(camX, camY, camZ);
      this.cameraLookTarget.set(targetX, targetY + 1.5, targetZ);
    } else {
      // Standard Third-Person Follow Camera
      const dist = isDriving ? 11.5 + Math.min(speed / 4.0, 4.5) : 6.8;
      const height = isDriving ? 5.2 + Math.min(speed / 7.0, 2.0) : 3.4;

      // Position behind entity based on heading
      const camX = targetX - Math.sin(targetRot) * dist;
      const camZ = targetZ - Math.cos(targetRot) * dist;
      const camY = targetY + height;

      this.cameraPosTarget.set(camX, camY, camZ);

      // Look slightly ahead of entity in heading direction
      const lookAhead = isDriving ? Math.min(speed * 0.5, 12.0) : 2.5;
      this.cameraLookTarget.set(
        targetX + Math.sin(targetRot) * lookAhead,
        targetY + (isDriving ? 1.0 : 1.2),
        targetZ + Math.cos(targetRot) * lookAhead
      );

      // Dynamic FOV for speed sensation
      const targetFOV = isDriving ? 60 + Math.min(speed * 0.45, 18) : 60;
      this.camera.fov += (targetFOV - this.camera.fov) * Math.min(dt * 5, 1);
      this.camera.updateProjectionMatrix();
    }

    // Smooth camera interpolation
    const lerpSpeed = isDriving ? 7.5 : 9.0;
    this.camera.position.lerp(this.cameraPosTarget, Math.min(dt * lerpSpeed, 1));
    this.camera.lookAt(this.cameraLookTarget);
  }

  private handleResize = () => {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  public dispose(): void {
    window.removeEventListener('resize', this.handleResize);
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }
}
