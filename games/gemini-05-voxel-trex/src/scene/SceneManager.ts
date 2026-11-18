import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DinosaurRig } from './DinosaurRig';
import { AnimationController } from './AnimationController';
import { AnimationMode, CameraPreset } from '../types/dinosaur';

export class SceneManager {
  public container: HTMLElement;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public controls: OrbitControls;

  public rig: DinosaurRig;
  public animator: AnimationController;

  private clock: THREE.Clock;
  private animFrameId: number | null = null;
  private shakeIntensity: number = 0;

  // Camera lerp targets for presets & reset
  private targetCamPos: THREE.Vector3 = new THREE.Vector3(8.5, 4.2, 9.5);
  private targetLookAt: THREE.Vector3 = new THREE.Vector3(0, 2.6, 0.5);
  private isTransitioningCamera: boolean = false;

  // Ground and lighting references
  private dirLight!: THREE.DirectionalLight;
  private groundMesh!: THREE.Mesh;

  constructor(container: HTMLElement) {
    this.container = container;
    this.clock = new THREE.Clock();

    // 1. Scene & Fog
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#101416');
    this.scene.fog = new THREE.Fog('#101416', 18, 48);

    // 2. Camera
    const aspect = container.clientWidth / container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
    this.camera.position.copy(this.targetCamPos);

    // 3. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    // 4. Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 3.0;
    this.controls.maxDistance = 26.0;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.03; // Stay above ground
    this.controls.target.copy(this.targetLookAt);
    this.controls.update();

    // 5. Environment & Lighting
    this.setupLighting();
    this.setupEnvironment();

    // 6. Dinosaur Rig & Animator
    this.rig = new DinosaurRig();
    this.scene.add(this.rig.root);

    this.animator = new AnimationController(this.rig);
    this.animator.onCameraShake = (intensity: number) => {
      this.shakeIntensity = intensity;
    };

    // 7. Event Listeners
    window.addEventListener('resize', this.onWindowResize);

    // 8. Start Loop
    this.animate = this.animate.bind(this);
    this.clock.start();
    this.animate();
  }

  private setupLighting() {
    // Ambient / Hemisphere light (warm prehistoric sky, cool bounce)
    const hemiLight = new THREE.HemisphereLight(0xdbe3dc, 0x1f221b, 0.75);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    // Key Light (Sun) - sharp shadows to accentuate voxel cubes
    this.dirLight = new THREE.DirectionalLight(0xfff5e3, 2.3);
    this.dirLight.position.set(9, 14, 8);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 1.0;
    this.dirLight.shadow.camera.far = 38;
    this.dirLight.shadow.bias = -0.0004;

    const d = 9;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.scene.add(this.dirLight);

    // Cool Fill Light (softens harsh shadows)
    const fillLight = new THREE.DirectionalLight(0x7ea3b8, 0.65);
    fillLight.position.set(-8, 8, -6);
    this.scene.add(fillLight);

    // Warm Rim Light (highlights dorsal ridges, spine scutes, and tail)
    const rimLight = new THREE.DirectionalLight(0xf0b86a, 1.2);
    rimLight.position.set(-6, 9, 10);
    this.scene.add(rimLight);
  }

  private setupEnvironment() {
    // Pedestal Ground with layered rings and subtle prehistoric slate texture
    const groundGeo = new THREE.CylinderGeometry(11, 12, 0.4, 64);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1b2022,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true
    });
    this.groundMesh = new THREE.Mesh(groundGeo, groundMat);
    this.groundMesh.position.y = -0.2; // top aligns with y = 0
    this.groundMesh.receiveShadow = true;
    this.scene.add(this.groundMesh);

    // Inner museum/showcase dais ring
    const ringGeo = new THREE.RingGeometry(8.5, 8.7, 64);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x485a4a,
      transparent: true,
      opacity: 0.45
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.y = 0.005;
    this.scene.add(ringMesh);

    // Outer boundary ground plane that fades into fog
    const outerPlaneGeo = new THREE.PlaneGeometry(80, 80);
    outerPlaneGeo.rotateX(-Math.PI / 2);
    const outerPlaneMat = new THREE.MeshStandardMaterial({
      color: 0x101416,
      roughness: 0.95
    });
    const outerPlane = new THREE.Mesh(outerPlaneGeo, outerPlaneMat);
    outerPlane.position.y = -0.21;
    outerPlane.receiveShadow = true;
    this.scene.add(outerPlane);

    // Subtle atmospheric voxel dust particles in background
    const particleCount = 180;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = Math.random() * 8 + 0.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x6e8869,
      size: 0.06,
      transparent: true,
      opacity: 0.35
    });
    const particles = new THREE.Points(pGeo, pMat);
    this.scene.add(particles);
  }

  public setCameraPreset(preset: CameraPreset) {
    this.isTransitioningCamera = true;
    switch (preset) {
      case 'default':
        this.targetCamPos.set(8.5, 4.2, 9.5);
        this.targetLookAt.set(0, 2.6, 0.5);
        break;
      case 'side':
        this.targetCamPos.set(11.5, 3.2, 0.0);
        this.targetLookAt.set(0, 2.6, 0.0);
        break;
      case 'front':
        this.targetCamPos.set(0.0, 3.5, 10.5);
        this.targetLookAt.set(0, 2.8, 1.2);
        break;
      case 'head':
        this.targetCamPos.set(2.4, 3.6, 5.2);
        this.targetLookAt.set(0, 3.6, 2.8);
        break;
      case 'action':
        this.targetCamPos.set(6.2, 1.8, 6.8);
        this.targetLookAt.set(0, 3.0, 1.5);
        break;
    }
  }

  public resetCamera() {
    this.setCameraPreset('default');
  }

  public setAnimation(mode: AnimationMode) {
    this.animator.setMode(mode);
  }

  private onWindowResize = () => {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private animate() {
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();

    // 1. Update dinosaur animation
    this.animator.update(delta);

    // 2. Camera transition lerp
    if (this.isTransitioningCamera) {
      this.camera.position.lerp(this.targetCamPos, 0.08);
      this.controls.target.lerp(this.targetLookAt, 0.08);

      if (
        this.camera.position.distanceTo(this.targetCamPos) < 0.05 &&
        this.controls.target.distanceTo(this.targetLookAt) < 0.05
      ) {
        this.camera.position.copy(this.targetCamPos);
        this.controls.target.copy(this.targetLookAt);
        this.isTransitioningCamera = false;
      }
    }

    // 3. Camera Shake Effect (during roar)
    if (this.shakeIntensity > 0.001) {
      const sx = (Math.random() - 0.5) * this.shakeIntensity;
      const sy = (Math.random() - 0.5) * this.shakeIntensity;
      const sz = (Math.random() - 0.5) * this.shakeIntensity;
      this.camera.position.x += sx;
      this.camera.position.y += sy;
      this.camera.position.z += sz;
    }

    // 4. Update controls and render
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  public dispose() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    window.removeEventListener('resize', this.onWindowResize);
    this.controls.dispose();
    this.renderer.dispose();
    if (this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}
