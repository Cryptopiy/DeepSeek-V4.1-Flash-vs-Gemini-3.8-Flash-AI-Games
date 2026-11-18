import {
  Player,
  Vehicle,
  Pedestrian,
  Building,
  Prop,
  RoadWaypoint,
  WantedState,
  Mission,
  InputState,
  ParticleEffect,
  HUDData,
  MissionStep,
} from './types';
import {
  generateBuildings,
  generateProps,
  generateRoadWaypoints,
  createInitialVehicles,
  createInitialPedestrians,
  LOCATIONS,
  CITY_BOUNDS,
} from './world';
import {
  resolvePlayerBuildingCollisions,
  resolvePlayerPropCollisions,
  resolvePlayerVehicleCollisions,
  resolveVehicleBuildingCollisions,
  resolveVehicleVehicleCollisions,
  resolveVehiclePedestrianCollisions,
  VehicleCollisionEvent,
  PedestrianHitEvent,
} from './collision';
import { updatePedestrians, updateTrafficCars, updatePoliceAI } from './ai';
import { SoundManager } from './audio';

export class GameSimulation {
  public player: Player;
  public vehicles: Vehicle[];
  public pedestrians: Pedestrian[];
  public buildings: Building[];
  public props: Prop[];
  public roadWaypoints: Record<string, RoadWaypoint>;
  public wantedState: WantedState;
  public mission: Mission;
  public particles: ParticleEffect[] = [];
  public soundManager: SoundManager;

  public busted: boolean = false;
  public cameraMode: 'follow' | 'cinematic' | 'hood' = 'follow';

  private nearestVehicleId: string | null = null;
  private nearestVehicleDist: number = Infinity;
  private missionStartTime: number = 0;

  constructor() {
    this.buildings = generateBuildings();
    this.props = generateProps();
    this.roadWaypoints = generateRoadWaypoints();
    this.vehicles = createInitialVehicles();
    this.pedestrians = createInitialPedestrians();
    this.soundManager = new SoundManager();

    // Spawn player on foot on sidewalk near Bank Plaza
    this.player = {
      x: -26,
      y: 0,
      z: -26,
      rotation: 0,
      vx: 0,
      vz: 0,
      state: 'on_foot',
      currentVehicleId: null,
      walkSpeed: 6.5,
      sprintSpeed: 10.5,
      isSprinting: false,
      legPhase: 0,
      health: 100,
    };

    this.wantedState = {
      level: 0,
      stars: 0,
      evadeTimer: 10.0,
      maxEvadeTimer: 10.0,
      isEvading: false,
      spottedTimer: 0,
      offenseText: '',
    };

    this.mission = this.createInitialMission();
  }

  public createInitialMission(): Mission {
    return {
      active: true,
      step: 'GOTO_START',
      title: 'Project Apex: Grand Delivery',
      objective: 'Head to the Bank Financial Plaza to locate the courier vehicle',
      targetX: LOCATIONS.MISSION_CAR_SPAWN.x,
      targetZ: LOCATIONS.MISSION_CAR_SPAWN.z,
      targetRadius: 7.0,
      targetName: 'Bank Plaza Car Park',
      completed: false,
      failed: false,
      elapsed: 0,
      reward: 25000,
    };
  }

  public restartMission(): void {
    this.mission = this.createInitialMission();
    this.busted = false;
    this.wantedState.level = 0;
    this.wantedState.stars = 0;
    this.wantedState.isEvading = false;
    this.soundManager.stopSiren();

    // If player is driving the mission car or another car, reset or keep
    const missionCar = this.vehicles.find((v) => v.id === 'veh_mission_golden');
    if (missionCar && missionCar.driver !== 'player') {
      missionCar.x = LOCATIONS.MISSION_CAR_SPAWN.x;
      missionCar.z = LOCATIONS.MISSION_CAR_SPAWN.z;
      missionCar.rotation = Math.PI / 2;
      missionCar.speed = 0;
      missionCar.isParked = true;
    }
  }

  public triggerCrime(offense: string, levelIncrement: number = 1): void {
    this.wantedState.level = Math.min(3, this.wantedState.level + levelIncrement);
    this.wantedState.stars = this.wantedState.level;
    this.wantedState.isEvading = false;
    this.wantedState.evadeTimer = this.wantedState.maxEvadeTimer;
    this.wantedState.offenseText = offense;
    this.soundManager.startSiren();
  }

  public update(dt: number, input: InputState): void {
    // Cap dt for stability
    const clampedDt = Math.min(dt, 0.1);

    if (this.busted) {
      if (input.restart) {
        this.restartMission();
      }
      return;
    }

    // Camera mode toggle
    if (input.cameraToggle) {
      if (this.cameraMode === 'follow') this.cameraMode = 'cinematic';
      else if (this.cameraMode === 'cinematic') this.cameraMode = 'hood';
      else this.cameraMode = 'follow';
    }

    // Toggle Sound
    if (input.toggleSound) {
      this.soundManager.toggleMute();
    }

    // Restart mission key
    if (input.restart) {
      this.restartMission();
    }

    // Update Player & Vehicles
    if (this.player.state === 'on_foot') {
      this.updatePlayerOnFoot(clampedDt, input);
    } else {
      this.updatePlayerDriving(clampedDt, input);
    }

    // Update AI systems
    updatePedestrians(this.pedestrians, this.player, this.vehicles, clampedDt);
    updateTrafficCars(this.vehicles, this.roadWaypoints, this.player, clampedDt);

    const policeCars = this.vehicles.filter((v) => v.isPolice);
    const activePlayerVeh = this.getPlayerVehicle();
    updatePoliceAI(policeCars, this.player, activePlayerVeh, this.wantedState, clampedDt, () => {
      this.busted = true;
      this.soundManager.stopEngine();
      this.soundManager.stopSiren();
    });

    // Check Restricted Precinct Area Trigger
    this.checkRestrictedPrecinctZone();

    // Collisions
    this.resolveAllCollisions(clampedDt);

    // Update Missions
    this.updateMission(clampedDt);

    // Update Particles
    this.updateParticles(clampedDt);

    // Update nearest vehicle for enter prompt
    this.findNearestVehicle();
  }

  private updatePlayerOnFoot(dt: number, input: InputState): void {
    const move = input;
    const speed = move.sprint ? this.player.sprintSpeed : this.player.walkSpeed;

    let dirX = 0;
    let dirZ = 0;

    if (move.forward) dirZ += 1;
    if (move.backward) dirZ -= 1;
    if (move.left) dirX += 1;
    if (move.right) dirX -= 1;

    const len = Math.sqrt(dirX * dirX + dirZ * dirZ);
    if (len > 0.001) {
      dirX /= len;
      dirZ /= len;

      this.player.vx = dirX * speed;
      this.player.vz = dirZ * speed;
      this.player.rotation = Math.atan2(dirX, dirZ);
      this.player.legPhase += speed * dt * 4.0;
      this.player.isSprinting = move.sprint;

      this.soundManager.playFootstep(performance.now() / 1000);
    } else {
      this.player.vx = 0;
      this.player.vz = 0;
      this.player.isSprinting = false;
    }

    this.player.x += this.player.vx * dt;
    this.player.z += this.player.vz * dt;

    // World bounds clamp
    this.player.x = Math.max(CITY_BOUNDS.minX + 2, Math.min(CITY_BOUNDS.maxX - 2, this.player.x));
    this.player.z = Math.max(CITY_BOUNDS.minZ + 2, Math.min(CITY_BOUNDS.maxZ - 2, this.player.z));

    // Vehicle Entry with 'E' or 'F' or Enter
    if (input.interact && this.nearestVehicleId && this.nearestVehicleDist < 5.8) {
      const v = this.vehicles.find((veh) => veh.id === this.nearestVehicleId);
      if (v) {
        this.enterVehicle(v);
      }
    }
  }

  private updatePlayerDriving(dt: number, input: InputState): void {
    const v = this.getPlayerVehicle();
    if (!v) {
      this.player.state = 'on_foot';
      return;
    }

    // Vehicle Controls: Accelerate, Brake/Reverse, Steer, Handbrake
    const isAccelerating = input.forward;
    const isBraking = input.backward;
    const isHandbraking = input.handbrake;

    // Steering
    if (input.left) {
      v.targetSteering = Math.min(0.55, v.targetSteering + v.turnSpeed * dt * 2.5);
    } else if (input.right) {
      v.targetSteering = Math.max(-0.55, v.targetSteering - v.turnSpeed * dt * 2.5);
    } else {
      // Return to center
      v.targetSteering += (0 - v.targetSteering) * Math.min(dt * 8, 1);
    }
    v.steeringAngle += (v.targetSteering - v.steeringAngle) * Math.min(dt * 12, 1);

    // Longitudinal Dynamics
    if (isAccelerating) {
      if (v.speed < v.maxSpeed) {
        v.speed += v.acceleration * dt;
      }
      v.isBraking = false;
    } else if (isBraking) {
      if (v.speed > 0.5) {
        // Forward braking
        v.speed = Math.max(0, v.speed - v.brakeForce * dt);
        v.isBraking = true;
      } else {
        // Reverse
        if (v.speed > v.reverseSpeed) {
          v.speed -= v.acceleration * 0.7 * dt;
        }
        v.isBraking = false;
      }
    } else {
      // Coasting / rolling friction
      if (v.speed > 0) {
        v.speed = Math.max(0, v.speed - v.friction * dt);
      } else if (v.speed < 0) {
        v.speed = Math.min(0, v.speed + v.friction * dt);
      }
      v.isBraking = false;
    }

    // Handbrake
    if (isHandbraking) {
      v.isBraking = true;
      if (Math.abs(v.speed) > 2.0) {
        v.speed -= Math.sign(v.speed) * v.brakeForce * 1.5 * dt;
        // Spawn tire smoke particles!
        this.spawnTireSmoke(v);
        this.soundManager.playTireSkid();
      }
    }

    // Turning dynamics (Steering influenced by speed; cannot turn standing still)
    const speedFactor = Math.min(1.0, Math.abs(v.speed) / 5.0);
    const turnRate = (v.speed / v.wheelbase) * Math.tan(v.steeringAngle) * speedFactor;
    v.rotation += turnRate * dt;

    // Position integration
    v.x += Math.sin(v.rotation) * v.speed * dt;
    v.z += Math.cos(v.rotation) * v.speed * dt;
    v.wheelRotation += (v.speed / 0.4) * dt;

    // Synchronize player position with car
    this.player.x = v.x;
    this.player.z = v.z;
    this.player.rotation = v.rotation;

    // Update sound
    this.soundManager.updateEngine(v.speed, v.maxSpeed, isAccelerating);

    // World bounds clamp
    v.x = Math.max(CITY_BOUNDS.minX + 3, Math.min(CITY_BOUNDS.maxX - 3, v.x));
    v.z = Math.max(CITY_BOUNDS.minZ + 3, Math.min(CITY_BOUNDS.maxZ - 3, v.z));

    if (v.collisionCooldown > 0) {
      v.collisionCooldown -= dt;
    }

    // Exit vehicle with 'E' (allowed when vehicle speed is below 6 m/s)
    if (input.interact && Math.abs(v.speed) < 6.0) {
      this.exitVehicle(v);
    }
  }

  public enterVehicle(v: Vehicle): void {
    this.player.state = 'driving';
    this.player.currentVehicleId = v.id;
    v.driver = 'player';
    v.isParked = false;
    this.soundManager.startEngine();

    // Advance mission if this is the target car
    if (this.mission.step === 'ENTER_CAR' && v.isMissionCar) {
      this.mission.step = 'DRIVE_DELIVERY';
      this.mission.objective = 'Deliver the hypercar to the Harbor Safehouse hangar (North-East)!';
      this.mission.targetX = LOCATIONS.HARBOR_SAFEHOUSE.x;
      this.mission.targetZ = LOCATIONS.HARBOR_SAFEHOUSE.z;
      this.mission.targetRadius = 10.0;
      this.mission.targetName = 'Harbor Safehouse Delivery Pad';
      // Trigger police pursuit on getaway!
      this.triggerCrime('Vehicle Theft & Grand Larceny', 1);
    }
  }

  public exitVehicle(v: Vehicle): void {
    // Calculate safe exit position (to the driver's left side: -cos(rot), sin(rot))
    const leftX = -Math.cos(v.rotation) * 2.2;
    const leftZ = Math.sin(v.rotation) * 2.2;

    this.player.state = 'on_foot';
    this.player.currentVehicleId = null;
    v.driver = null;
    v.speed = 0;
    this.player.x = v.x + leftX;
    this.player.z = v.z + leftZ;
    this.player.rotation = v.rotation - Math.PI / 2;
    this.player.vx = 0;
    this.player.vz = 0;

    this.soundManager.stopEngine();
  }

  public interactVehicle(): void {
    if (this.player.state === 'on_foot') {
      if (this.nearestVehicleId && this.nearestVehicleDist < 5.8) {
        const v = this.vehicles.find((veh) => veh.id === this.nearestVehicleId);
        if (v) {
          this.enterVehicle(v);
        }
      }
    } else {
      const v = this.getPlayerVehicle();
      if (v && Math.abs(v.speed) < 6.0) {
        this.exitVehicle(v);
      }
    }
  }

  private findNearestVehicle(): void {
    if (this.player.state === 'driving') {
      this.nearestVehicleId = null;
      this.nearestVehicleDist = Infinity;
      return;
    }

    let closest: Vehicle | null = null;
    let minDist = Infinity;

    for (const v of this.vehicles) {
      const dx = this.player.x - v.x;
      const dz = this.player.z - v.z;
      const centerDist = Math.sqrt(dx * dx + dz * dz);
      // Effective distance from vehicle perimeter
      const effectiveDist = Math.max(0, centerDist - v.width * 0.5);

      if (effectiveDist < minDist) {
        minDist = effectiveDist;
        closest = v;
      }
    }

    this.nearestVehicleDist = minDist;
    this.nearestVehicleId = closest ? closest.id : null;
  }

  private checkRestrictedPrecinctZone(): void {
    // Restricted precinct courtyard bounds
    const inCourtyard =
      this.player.x > 36 && this.player.x < 62 &&
      this.player.z > -94 && this.player.z < -66;

    if (inCourtyard && this.wantedState.level === 0) {
      this.triggerCrime('Trespassing into Police Station Restricted Grounds', 2);
    }
  }

  private resolveAllCollisions(dt: number): void {
    // 1. Player collisions
    if (this.player.state === 'on_foot') {
      resolvePlayerBuildingCollisions(this.player, this.buildings);
      resolvePlayerPropCollisions(this.player, this.props);
      resolvePlayerVehicleCollisions(this.player, this.vehicles);
    }

    // 2. Vehicle collisions against buildings
    for (const v of this.vehicles) {
      resolveVehicleBuildingCollisions(v, this.buildings, (e: VehicleCollisionEvent) => {
        this.soundManager.playCrash(Math.min(1.0, e.impactSpeed / 15));
        this.spawnCrashSparks(e.hitX, e.hitZ, e.impactSpeed);

        if (v.driver === 'player' && e.impactSpeed > 14) {
          this.triggerCrime('Reckless Endangerment & Property Damage', 1);
        }
      });
    }

    // 3. Vehicle vs Vehicle
    resolveVehicleVehicleCollisions(this.vehicles, (e: VehicleCollisionEvent) => {
      this.soundManager.playCrash(Math.min(1.0, e.impactSpeed / 12));
      this.spawnCrashSparks(e.hitX, e.hitZ, e.impactSpeed);

      const v = this.vehicles.find((veh) => veh.id === e.vehicleId);
      if (v && v.isPolice && this.player.state === 'driving') {
        this.triggerCrime('Assault on Police Cruiser', 2);
      }
    });

    // 4. Vehicle vs Pedestrian
    resolveVehiclePedestrianCollisions(this.vehicles, this.pedestrians, (e: PedestrianHitEvent) => {
      this.soundManager.playCrash(0.8);
      if (e.isPlayerVehicle) {
        this.triggerCrime('Vehicular Assault on Civilian', 2);
      }
    });
  }

  private updateMission(dt: number): void {
    if (!this.mission.active || this.mission.completed) return;

    this.mission.elapsed += dt;

    const pX = this.player.x;
    const pZ = this.player.z;
    const distToTarget = Math.sqrt((pX - this.mission.targetX) ** 2 + (pZ - this.mission.targetZ) ** 2);

    switch (this.mission.step) {
      case 'GOTO_START':
        if (distToTarget <= this.mission.targetRadius) {
          this.mission.step = 'ENTER_CAR';
          this.mission.objective = 'Enter the marked Golden Apex Hypercar';
          this.mission.targetX = LOCATIONS.MISSION_CAR_SPAWN.x;
          this.mission.targetZ = LOCATIONS.MISSION_CAR_SPAWN.z;
          this.mission.targetRadius = 5.0;
          this.mission.targetName = 'Golden Apex Car';
        }
        break;

      case 'ENTER_CAR':
        // Transition handled in enterVehicle
        break;

      case 'DRIVE_DELIVERY':
        if (distToTarget <= this.mission.targetRadius) {
          this.mission.step = 'PARK_CAR';
          this.mission.objective = 'Halt inside the green drop-off hangar';
        }
        break;

      case 'PARK_CAR': {
        const v = this.getPlayerVehicle();
        if (v && distToTarget <= this.mission.targetRadius && Math.abs(v.speed) < 1.5) {
          this.mission.step = 'COMPLETED';
          this.mission.completed = true;
          this.soundManager.playMissionComplete();
          // Escape police on mission success
          this.wantedState.level = 0;
          this.wantedState.stars = 0;
          this.wantedState.isEvading = false;
          this.soundManager.stopSiren();
        }
        break;
      }

      case 'COMPLETED':
        break;
    }
  }

  private spawnTireSmoke(v: Vehicle): void {
    for (let i = 0; i < 2; i++) {
      const offsetX = (Math.random() - 0.5) * v.width;
      const rearZ = -v.length * 0.4;
      const worldX = v.x + Math.sin(v.rotation) * rearZ - Math.cos(v.rotation) * offsetX;
      const worldZ = v.z + Math.cos(v.rotation) * rearZ + Math.sin(v.rotation) * offsetX;

      this.particles.push({
        x: worldX,
        y: 0.15,
        z: worldZ,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 0.8 + Math.random() * 1.2,
        vz: (Math.random() - 0.5) * 1.5,
        color: '#e2e8f0',
        size: 0.35 + Math.random() * 0.25,
        life: 0,
        maxLife: 0.45 + Math.random() * 0.3,
        type: 'smoke',
      });
    }
  }

  private spawnCrashSparks(x: number, z: number, intensity: number): void {
    const count = Math.min(25, Math.floor(intensity * 1.5));
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 3.0 + Math.random() * 8.0;
      this.particles.push({
        x,
        y: 0.6 + Math.random() * 0.5,
        z,
        vx: Math.cos(angle) * spd,
        vy: 2.0 + Math.random() * 5.0,
        vz: Math.sin(angle) * spd,
        color: Math.random() > 0.3 ? '#f59e0b' : '#ef4444',
        size: 0.12,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.2,
        type: 'spark',
      });
    }
  }

  private updateParticles(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      if (p.type === 'spark') {
        p.vy -= 12.0 * dt; // Gravity
      }
    }
  }

  public getPlayerVehicle(): Vehicle | null {
    if (this.player.state !== 'driving' || !this.player.currentVehicleId) return null;
    return this.vehicles.find((v) => v.id === this.player.currentVehicleId) || null;
  }

  public getHUDData(): HUDData {
    const v = this.getPlayerVehicle();
    const pX = this.player.x;
    const pZ = this.player.z;
    const dist = Math.sqrt((pX - this.mission.targetX) ** 2 + (pZ - this.mission.targetZ) ** 2);

    let vehicleHint: string | null = null;
    let canEnter = false;

    if (this.player.state === 'on_foot') {
      if (this.nearestVehicleId && this.nearestVehicleDist < 3.8) {
        const nearVeh = this.vehicles.find((veh) => veh.id === this.nearestVehicleId);
        if (nearVeh) {
          canEnter = true;
          vehicleHint = `Press [E] to Enter ${nearVeh.name}`;
        }
      }
    } else if (v) {
      if (Math.abs(v.speed) < 6.0) {
        vehicleHint = `Press [E] to Exit Vehicle`;
      } else {
        vehicleHint = `Slow down to exit (${Math.round(Math.abs(v.speed) * 3.6)} km/h)`;
      }
    }

    return {
      playerState: this.player.state,
      speed: v ? Math.abs(v.speed) : Math.sqrt(this.player.vx ** 2 + this.player.vz ** 2),
      maxSpeed: v ? v.maxSpeed : this.player.sprintSpeed,
      vehicleName: v ? v.name : null,
      canEnterVehicle: canEnter,
      vehicleHint: vehicleHint,
      wantedLevel: this.wantedState.level,
      isEvading: this.wantedState.isEvading,
      evadeProgress: this.wantedState.isEvading ? (1 - this.wantedState.evadeTimer / this.wantedState.maxEvadeTimer) : 0,
      mission: {
        step: this.mission.step,
        title: this.mission.title,
        objective: this.mission.objective,
        distance: Math.round(dist),
        completed: this.mission.completed,
        failed: this.mission.failed,
        elapsed: Math.round(this.mission.elapsed),
      },
      busted: this.busted,
      soundEnabled: this.soundManager.isSoundEnabled(),
      cameraMode: this.cameraMode,
    };
  }

  public dispose() {
    this.soundManager.dispose();
  }
}
