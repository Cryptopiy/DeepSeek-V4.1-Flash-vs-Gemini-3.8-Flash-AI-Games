import * as THREE from 'three';
import { TrackEnvironment } from './TrackEnvironment';
import { VehicleMesh } from './VehicleMesh';
import { ObstacleMesh } from './ObstacleMesh';
import { DebrisSystem } from './DebrisSystem';
import { Skidmarks } from './Skidmarks';
import { CameraController } from './CameraController';
import { CrashSimulationEngine } from '../physics/dynamics';
import { CameraMode, ObstacleId, SimulationStatus } from '../types/simulation';

export class SceneManager {
  private container: HTMLElement;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public cameraController: CameraController;

  // Scene sub-systems
  public track: TrackEnvironment;
  public vehicle: VehicleMesh;
  public obstacle: ObstacleMesh;
  public debris: DebrisSystem;
  public skidmarks: Skidmarks;

  private isRunning: boolean = true;
  private animationFrameId: number = 0;
  private clock: THREE.Clock;

  constructor(container: HTMLElement) {
    this.container = container;
    this.clock = new THREE.Clock();

    // 1. Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0e17);
    this.scene.fog = new THREE.FogExp2(0x0a0e17, 0.015);

    // 2. Camera setup
    const aspect = container.clientWidth / container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 200);
    this.cameraController = new CameraController(this.camera, container);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    container.appendChild(this.renderer.domElement);

    // 4. Lighting
    this.setupLighting();

    // 5. Build 3D objects
    this.track = new TrackEnvironment();
    this.scene.add(this.track.group);

    this.vehicle = new VehicleMesh();
    this.scene.add(this.vehicle.group);

    this.obstacle = new ObstacleMesh();
    this.scene.add(this.obstacle.group);

    this.debris = new DebrisSystem();
    this.scene.add(this.debris.group);

    this.skidmarks = new Skidmarks();
    this.scene.add(this.skidmarks.group);

    // 6. Resize listener
    window.addEventListener('resize', this.onWindowResize);
  }

  private setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x94a3b8, 0.7);
    this.scene.add(ambientLight);

    // Main directional sun / arena floodlight
    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.6);
    dirLight.position.set(-15, 30, -10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 5;
    dirLight.shadow.camera.far = 70;
    dirLight.shadow.camera.left = -25;
    dirLight.shadow.camera.right = 25;
    dirLight.shadow.camera.top = 25;
    dirLight.shadow.camera.bottom = -25;
    dirLight.shadow.bias = -0.0005;
    this.scene.add(dirLight);

    // Fill light from opposite side
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.4);
    fillLight.position.set(20, 15, 20);
    this.scene.add(fillLight);
  }

  public setCameraMode(mode: CameraMode) {
    this.cameraController.setMode(mode);
  }

  public setObstacle(id: ObstacleId, angleDeg: number) {
    this.obstacle.setObstacleType(id);
    const angleRad = (angleDeg * Math.PI) / 180;
    this.obstacle.reset(angleRad);
  }

  public triggerImpactEffects(speedKmh: number, contactX: number, contactZ: number, nx: number, nz: number) {
    // 1. Emit debris & spark burst
    this.debris.emitImpactBurst(contactX, contactZ, nx, nz, speedKmh);

    // 2. Camera screen shake
    const shakeIntensity = Math.min(1.2, (speedKmh / 80) * 0.9);
    this.cameraController.triggerShake(shakeIntensity);
  }

  public syncWithPhysics(sim: CrashSimulationEngine, dt: number) {
    // 1. Update vehicle transform
    const carPos = sim.car;
    const carSpeedMs = Math.hypot(carPos.vx, carPos.vz);

    this.vehicle.updateTransform(
      carPos.x,
      carPos.z,
      carPos.angle,
      sim.carPitch,
      sim.carRoll,
      carSpeedMs,
      dt
    );

    // 2. Update obstacle transform
    this.obstacle.updateTransform(sim.obstacle.x, sim.obstacle.z, sim.obstacle.angle);

    // 3. Update debris particles
    this.debris.update(dt);

    // 4. Update tire skidmarks during post-impact slide
    if (sim.status === 'POST_IMPACT') {
      const slideIntensity = Math.min(1.0, carSpeedMs / 10 + Math.abs(carPos.omega) * 0.5);
      this.skidmarks.addMark(carPos.x, carPos.z, carPos.angle, slideIntensity);
    }

    // 5. Track lighting animation
    this.track.update(this.clock.getElapsedTime());

    // 6. Camera controller update
    this.cameraController.update(dt, carPos, carPos.angle, sim.status);
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public reset(obstacleId: ObstacleId, angleDeg: number) {
    const angleRad = (angleDeg * Math.PI) / 180;
    this.vehicle.reset();
    this.obstacle.setObstacleType(obstacleId);
    this.obstacle.reset(angleRad);
    this.debris.reset();
    this.skidmarks.reset();
  }

  private onWindowResize = () => {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  public destroy() {
    window.removeEventListener('resize', this.onWindowResize);
    cancelAnimationFrame(this.animationFrameId);
    this.renderer.dispose();
    if (this.container && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
