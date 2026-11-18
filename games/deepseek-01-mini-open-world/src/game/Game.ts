import * as THREE from 'three';
import { Input } from './Input';
import { World } from './World';
import { CameraRig } from './CameraRig';
import { Player } from './entities/Player';
import { Vehicle } from './entities/Vehicle';
import { Pedestrian, type PedContext } from './entities/Pedestrian';
import { MissionSystem } from './systems/MissionSystem';
import { PoliceSystem } from './systems/PoliceSystem';
import {
  resolveCircle,
  resolveVehiclePair,
  resolveVehicleWorld,
  vehicleCircles
} from './Physics';
import { circleCircle } from './Collision';
import { GRID, SPACING, OFFSET, ROAD_HALF, TRAFFIC_SPEED } from './constants';
import { angleDiff, clamp, dist2, randInt } from './math';
import type { GameMode, HudState } from './types';

const CAR_COLORS = [0xd94f4f, 0x4f8fd9, 0xe0b13a, 0x62b56b, 0x9b5de5, 0xe07a5f, 0x38b6b6, 0xbfc4cc];

const KIND_LABEL: Record<string, string> = {
  parked: 'car',
  traffic: 'car',
  police: 'police car',
  mission: 'delivery car'
};

export class Game {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private rig!: CameraRig;
  private input = new Input();
  private world = new World();
  private player = new Player();
  private vehicles: Vehicle[] = [];
  private peds: Pedestrian[] = [];
  private policeSystem = new PoliceSystem();
  private mission!: MissionSystem;
  private missionCar!: Vehicle;

  private mode: GameMode = 'foot';
  private controlledCar: Vehicle | null = null;
  private wanted = 0;
  private escapeTimer = 0;
  private ramCooldown = 0;
  private toastText = '';
  private toastTimer = 0;

  private hudListener: ((s: HudState) => void) | null = null;
  private hudTimer = 0;
  private clock = new THREE.Clock();
  private running = false;
  private container: HTMLElement | null = null;
  private dragging = false;
  private lastPointerX = 0;
  private lastPointerY = 0;

  constructor() {
    this.setupRenderer();
    this.setupScene();
    this.setupEntities();
  }

  onHud(cb: (s: HudState) => void) {
    this.hudListener = cb;
  }

  mount(container: HTMLElement) {
    this.container = container;
    container.appendChild(this.renderer.domElement);
    this.input.attach();
    this.addPointerListeners();
    window.addEventListener('resize', this.onResize);

    this.spawnPlayer();
    this.running = true;
    this.clock.start();
    this.renderer.setAnimationLoop(this.loop);
  }

  dispose() {
    this.running = false;
    this.renderer.setAnimationLoop(null);
    this.input.detach();
    this.removePointerListeners();
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }

  private setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  private setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87b6e0);
    this.scene.fog = new THREE.Fog(0x87b6e0, 140, 420);

    this.rig = new CameraRig(window.innerWidth / window.innerHeight);
    this.rig.yaw = 0;

    const hemi = new THREE.HemisphereLight(0xbfd9ff, 0x3a4030, 0.75);
    this.scene.add(hemi);

    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff2d0, 1.15);
    sun.position.set(80, 120, 60);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = -150;
    sc.right = 150;
    sc.top = 150;
    sc.bottom = -150;
    sc.near = 10;
    sc.far = 420;
    sun.shadow.bias = -0.0006;
    this.scene.add(sun);
    this.scene.add(sun.target);
    sun.target.position.set(0, 0, 0);

    this.scene.add(this.world.group);
    this.scene.add(this.player.mesh);
  }

  private setupEntities() {
    const nodeMid = OFFSET + 2 * SPACING;
    this.player.setPosition(nodeMid - (ROAD_HALF + 1.5), nodeMid - (ROAD_HALF + 1.5));

    for (const spot of this.world.parkedSpots) {
      const car = new Vehicle('parked', CAR_COLORS[randInt(0, CAR_COLORS.length - 1)]);
      car.setPosition(spot.x, spot.z, spot.heading);
      this.scene.add(car.mesh);
      this.vehicles.push(car);
    }

    for (let i = 0; i < 8; i++) {
      const car = new Vehicle('traffic', CAR_COLORS[randInt(0, CAR_COLORS.length - 1)]);
      car.nodeA = randInt(0, this.world.nodes.length - 1);
      car.nodeB = -1;
      this.pickTrafficTarget(car);
      const node = this.world.nodes[car.nodeA];
      const heading = Math.atan2(car.targetX - node.x, car.targetZ - node.z);
      car.setPosition(node.x, node.z, heading);
      car.speed = TRAFFIC_SPEED;
      this.scene.add(car.mesh);
      this.vehicles.push(car);
    }

    const carA = { x: nodeMid - SPACING - (ROAD_HALF + 1.5), z: nodeMid - SPACING - (ROAD_HALF + 1.5) };
    const missionCarX = OFFSET + SPACING - 16;
    const missionCarZ = OFFSET + SPACING - (ROAD_HALF - 1.3);
    this.missionCar = new Vehicle('mission', 0xffd23f);
    this.missionCar.setPosition(missionCarX, missionCarZ, Math.PI / 2);
    this.scene.add(this.missionCar.mesh);
    this.vehicles.push(this.missionCar);

    const far = OFFSET + (GRID - 1) * SPACING;
    const carB = { x: far, z: far };

    this.mission = new MissionSystem(this.scene, this.missionCar, carA, carB);

    for (let i = 0; i < 14; i++) {
      const ped = new Pedestrian();
      const p = this.world.randomWalkablePoint();
      ped.setPosition(p.x, p.z);
      const d = this.world.randomWalkablePoint();
      ped.setDest(d.x, d.z);
      this.scene.add(ped.mesh);
      this.peds.push(ped);
    }
  }

  private pickTrafficTarget(car: Vehicle) {
    const nbrs = this.world.neighbors[car.nodeA] ?? [];
    if (nbrs.length === 0) return;
    let choices = nbrs.filter((n) => n !== car.nodeB);
    if (choices.length === 0) choices = nbrs;
    const nb = choices[randInt(0, choices.length - 1)];
    car.nodeB = nb;

    const a = this.world.nodes[car.nodeA];
    const b = this.world.nodes[nb];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz) || 1;
    const nx = dx / len;
    const nz = dz / len;
    car.targetX = b.x + nz * 3;
    car.targetZ = b.z - nx * 3;
  }

  private spawnPlayer() {
    this.player.mesh.visible = true;
    this.player.syncMesh();
    this.rig.yaw = Math.PI * 0.25;
  }

  private loop = () => {
    if (!this.running) return;
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.update(dt);
    this.renderer.render(this.scene, this.rig.camera);
  };

  private update(dt: number) {
    if (this.ramCooldown > 0) this.ramCooldown -= dt;
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) this.toastText = '';
    }

    this.handleInteraction();

    if (this.mode === 'foot') {
      this.updatePlayer(dt);
    } else if (this.controlledCar) {
      this.updateControlledCar(dt);
    }

    this.updateTraffic(dt);
    this.updatePeds(dt);
    this.policeSystem.update(dt, this.playerTargetPos());
    this.updatePoliceAndWanted(dt);

    this.resolveCollisions();
    this.checkPedestrianHits();
    this.sanitize();

    if (this.mission) {
      this.mission.update(dt, this.playerTargetPos(), this.controlledCar);
    }

    this.updateCamera(dt);
    this.updateHud(dt);
    this.input.endFrame();
  }

  private updatePlayer(dt: number) {
    const f = this.rig.forwardVector();
    const l = this.rig.leftVector();
    const forward = this.input.axis(['KeyS', 'ArrowDown'], ['KeyW', 'ArrowUp']);
    const left = this.input.axis(['KeyD', 'ArrowRight'], ['KeyA', 'ArrowLeft']);
    const dirX = f.x * forward + l.x * left;
    const dirZ = f.z * forward + l.z * left;
    this.player.move(dt, dirX, dirZ);
  }

  private updateControlledCar(dt: number) {
    const car = this.controlledCar;
    if (!car) return;
    const throttle = this.input.axis(['KeyS', 'ArrowDown'], ['KeyW', 'ArrowUp']);
    const steer = this.input.axis(['KeyD', 'ArrowRight'], ['KeyA', 'ArrowLeft']);
    const handbrake = this.input.isDown('Space');
    car.drive(dt, { throttle, steer, handbrake });
  }

  private updateTraffic(dt: number) {
    for (const car of this.vehicles) {
      if (car.kind !== 'traffic' || car.controlled) continue;

      const dx = car.targetX - car.position.x;
      const dz = car.targetZ - car.position.z;
      const dist = Math.hypot(dx, dz);

      if (dist < 2.5) {
        car.nodeA = car.nodeB;
        this.pickTrafficTarget(car);
      }

      const tdx = car.targetX - car.position.x;
      const tdz = car.targetZ - car.position.z;
      const desired = Math.atan2(tdx, tdz);
      const diff = angleDiff(desired, car.heading);
      const turn = 2.4 * dt;
      car.heading += clamp(diff, -turn, turn);

      let targetSpeed = TRAFFIC_SPEED;
      const fwr = car.forward();
      for (const other of this.vehicles) {
        if (other === car) continue;
        const ox = other.position.x - car.position.x;
        const oz = other.position.z - car.position.z;
        const d = Math.hypot(ox, oz);
        if (d < 10 && d > 0.001) {
          const dot = (ox * fwr.x + oz * fwr.z) / d;
          if (dot > 0.55) {
            targetSpeed = Math.min(targetSpeed, 2.5);
          }
        }
      }

      car.speed += (targetSpeed - car.speed) * Math.min(1, dt * 2.5);
      car.speed = clamp(car.speed, 0, car.maxSpeed);

      const f = car.forward();
      car.position.x += f.x * car.speed * dt;
      car.position.z += f.z * car.speed * dt;
      car.syncMesh();
    }
  }

  private pedContext: PedContext = {
    resolve: (x, z, r) =>
      resolveCircle(x, z, r, this.world.buildings, this.vehicles),
    randomDest: () => this.world.randomWalkablePoint()
  };

  private updatePeds(dt: number) {
    for (const ped of this.peds) {
      ped.update(dt, this.pedContext);
    }
  }

  private resolveCollisions() {
    for (const v of this.vehicles) {
      resolveVehicleWorld(v, this.world.buildings);
    }

    for (let i = 0; i < this.vehicles.length; i++) {
      for (let j = i + 1; j < this.vehicles.length; j++) {
        const a = this.vehicles[i];
        const b = this.vehicles[j];
        const aSpeed = a.speed;
        const hit = resolveVehiclePair(a, b);
        if (!hit) continue;

        const controlled = a.controlled ? a : b.controlled ? b : null;
        if (!controlled) continue;
        const other = controlled === a ? b : a;

        if (other.kind === 'police' && this.ramCooldown <= 0) {
          this.addWanted(2);
          this.setToast('You crashed into the police!');
          this.ramCooldown = 2;
        } else if (
          (other.kind === 'parked' || other.kind === 'traffic') &&
          Math.abs(aSpeed) > 9 &&
          this.ramCooldown <= 0
        ) {
          this.addWanted(1);
          this.setToast('Reckless driving! Police alerted');
          this.ramCooldown = 3;
        }
      }
    }

    if (this.mode === 'foot') {
      const r = resolveCircle(
        this.player.position.x,
        this.player.position.z,
        this.player.radius,
        this.world.buildings,
        this.vehicles
      );
      this.player.position.x = r.x;
      this.player.position.z = r.z;
      this.player.syncMesh();
    }
  }

  private checkPedestrianHits() {
    for (const ped of this.peds) {
      if (ped.hitCooldown > 0) continue;
      for (const v of this.vehicles) {
        if (Math.abs(v.speed) < 2.5) continue;
        const circles = vehicleCircles(v);
        let hit = false;
        for (const c of circles) {
          if (circleCircle(ped.position.x, ped.position.z, ped.radius, c.x, c.z, v.circleRadius)) {
            hit = true;
            break;
          }
        }
        if (hit) {
          ped.flee(v.position.x, v.position.z);
          ped.hitCooldown = 3;
          if (v.controlled) {
            this.addWanted(1);
            this.setToast('You hit a pedestrian!');
          }
          break;
        }
      }
    }
  }

  private updatePoliceAndWanted(dt: number) {
    if (this.wanted > 0) {
      this.policeSystem.ensure(this.wanted, this.playerTargetPos(), this.world, this.scene);
      const pp = this.playerTargetPos();
      let minDist = Infinity;
      for (const p of this.policeSystem.police) {
        const d = dist2(p.position.x, p.position.z, pp.x, pp.z);
        if (d < minDist) minDist = d;
      }
      if (minDist > 65 * 65) {
        this.escapeTimer += dt;
      } else {
        this.escapeTimer = 0;
      }
      if (this.escapeTimer > 7) {
        this.wanted = Math.max(0, this.wanted - 1);
        this.escapeTimer = 0;
        this.setToast(this.wanted === 0 ? 'You escaped the police' : 'Wanted level reduced');
        this.policeSystem.ensure(this.wanted, this.playerTargetPos(), this.world, this.scene);
      }
    } else if (this.policeSystem.police.length > 0) {
      this.policeSystem.reset(this.scene);
    }
  }

  private addWanted(amount: number) {
    this.wanted = Math.min(3, this.wanted + amount);
    this.escapeTimer = 0;
  }

  private playerTargetPos(): THREE.Vector3 {
    return this.controlledCar ? this.controlledCar.position : this.player.position;
  }

  private updateCamera(dt: number) {
    if (this.mode === 'driving' && this.controlledCar) {
      const car = this.controlledCar;
      const target = new THREE.Vector3(car.position.x, car.position.y + 1.1, car.position.z);
      this.rig.update(dt, target, car.heading, true);
    } else {
      const target = new THREE.Vector3(
        this.player.position.x,
        this.player.position.y + 1.4,
        this.player.position.z
      );
      this.rig.update(dt, target, this.player.heading, false);
    }
  }

  private handleInteraction() {
    if (this.input.wasPressed('KeyR')) {
      this.restartMission();
    }

    if (this.input.wasPressed('KeyE')) {
      if (this.mode === 'foot') {
        const car = this.nearestVehicle();
        if (car) this.enterVehicle(car);
      } else if (this.controlledCar && Math.abs(this.controlledCar.speed) < 4) {
        this.exitVehicle();
      }
    }
  }

  private nearestVehicle(): Vehicle | null {
    let best: Vehicle | null = null;
    let bestDist = 4.2 * 4.2;
    for (const v of this.vehicles) {
      if (v.controlled) continue;
      if (v.kind === 'police') continue;
      const d = dist2(v.position.x, v.position.z, this.player.position.x, this.player.position.z);
      if (d < bestDist) {
        bestDist = d;
        best = v;
      }
    }
    return best;
  }

  private enterVehicle(car: Vehicle) {
    this.mode = 'driving';
    this.controlledCar = car;
    car.controlled = true;
    car.steer = 0;
    this.player.mesh.visible = false;
    this.setToast('');
  }

  private exitVehicle() {
    const car = this.controlledCar;
    if (!car) return;

    const f = car.forward();
    const candidates = [
      { x: car.position.x + f.z * (car.halfWidth + 1.0), z: car.position.z - f.x * (car.halfWidth + 1.0) },
      { x: car.position.x - f.z * (car.halfWidth + 1.0), z: car.position.z + f.x * (car.halfWidth + 1.0) },
      { x: car.position.x - f.x * (car.halfLength + 1.2), z: car.position.z - f.z * (car.halfLength + 1.2) },
      { x: car.position.x + f.x * (car.halfLength + 1.2), z: car.position.z + f.z * (car.halfLength + 1.2) }
    ];

    let placedX = car.position.x + f.z * (car.halfWidth + 1.0);
    let placedZ = car.position.z - f.x * (car.halfWidth + 1.0);
    for (const c of candidates) {
      const resolved = resolveCircle(c.x, c.z, this.player.radius, this.world.buildings, this.vehicles);
      const moved = Math.hypot(resolved.x - c.x, resolved.z - c.z);
      if (moved < 0.45 && !this.world.isInsideBuilding(resolved.x, resolved.z, 0.3)) {
        placedX = resolved.x;
        placedZ = resolved.z;
        break;
      }
      placedX = resolved.x;
      placedZ = resolved.z;
    }

    car.controlled = false;
    car.speed = 0;
    car.steer = 0;
    if (car.kind === 'traffic') {
      let nearest = 0;
      let nd = Infinity;
      for (let i = 0; i < this.world.nodes.length; i++) {
        const n = this.world.nodes[i];
        const d = dist2(n.x, n.z, car.position.x, car.position.z);
        if (d < nd) {
          nd = d;
          nearest = i;
        }
      }
      car.nodeA = nearest;
      car.nodeB = -1;
      this.pickTrafficTarget(car);
    }

    this.mode = 'foot';
    this.controlledCar = null;
    this.player.setPosition(placedX, placedZ);
    this.player.heading = car.heading;
    this.player.mesh.visible = true;
    this.player.syncMesh();
    this.rig.autoFollow = false;
  }

  private restartMission() {
    if (this.mode === 'driving') {
      this.exitVehicle();
    }
    this.mission.reset();
    this.setToast('Mission restarted');
  }

  private setToast(text: string) {
    this.toastText = text;
    this.toastTimer = text ? 2.5 : 0;
  }

  private sanitize() {
    const fix = (obj: { x: number; z: number }, speedObj?: { speed: number }) => {
      if (!Number.isFinite(obj.x) || !Number.isFinite(obj.z)) {
        obj.x = 0;
        obj.z = 0;
      }
      if (speedObj && !Number.isFinite(speedObj.speed)) speedObj.speed = 0;
    };
    fix(this.player.position);
    for (const v of this.vehicles) {
      fix(v.position, v);
      if (!Number.isFinite(v.heading)) v.heading = 0;
    }
    for (const p of this.peds) {
      fix(p.position);
      if (!Number.isFinite(p.heading)) p.heading = 0;
    }
  }

  private updateHud(dt: number) {
    this.hudTimer += dt;
    if (this.hudTimer < 0.1) return;
    this.hudTimer = 0;
    if (!this.hudListener) return;

    let hint = '';
    if (this.mode === 'foot') {
      const car = this.nearestVehicle();
      if (car) hint = `Press E to enter ${KIND_LABEL[car.kind] ?? 'vehicle'}`;
    } else if (this.controlledCar && Math.abs(this.controlledCar.speed) < 4) {
      hint = 'Press E to exit vehicle';
    }

    this.hudListener({
      mode: this.mode,
      speed: this.controlledCar ? Math.abs(this.controlledCar.speed) * 3.6 : 0,
      objective: this.mission ? this.mission.objective() : '',
      wanted: this.wanted,
      police: this.policeSystem.police.length,
      hint,
      vehicleKind: this.controlledCar ? this.controlledCar.kind : '',
      message: this.toastText,
      missionComplete: this.mission ? this.mission.complete : false
    });
  }

  private onResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.rig.resize(w / h);
  };

  private addPointerListeners() {
    const el = this.renderer.domElement;
    el.addEventListener('pointerdown', this.onPointerDown);
    el.addEventListener('pointermove', this.onPointerMove);
    el.addEventListener('pointerup', this.onPointerUp);
    el.addEventListener('pointerleave', this.onPointerUp);
  }

  private removePointerListeners() {
    const el = this.renderer.domElement;
    el.removeEventListener('pointerdown', this.onPointerDown);
    el.removeEventListener('pointermove', this.onPointerMove);
    el.removeEventListener('pointerup', this.onPointerUp);
    el.removeEventListener('pointerleave', this.onPointerUp);
  }

  private onPointerDown = (e: PointerEvent) => {
    this.dragging = true;
    this.lastPointerX = e.clientX;
    this.lastPointerY = e.clientY;
    this.renderer.domElement.setPointerCapture?.(e.pointerId);
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastPointerX;
    const dy = e.clientY - this.lastPointerY;
    this.lastPointerX = e.clientX;
    this.lastPointerY = e.clientY;
    this.rig.addOrbit(dx, dy);
  };

  private onPointerUp = (e: PointerEvent) => {
    this.dragging = false;
    if (this.renderer.domElement.hasPointerCapture?.(e.pointerId)) {
      this.renderer.domElement.releasePointerCapture(e.pointerId);
    }
  };
}