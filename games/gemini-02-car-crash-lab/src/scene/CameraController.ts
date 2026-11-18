import * as THREE from 'three';
import { CameraMode, SimulationStatus } from '../types/simulation';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  public mode: CameraMode = 'cinematic';
  
  // Orbit controls state
  private isMouseDown = false;
  private prevMouse = { x: 0, y: 0 };
  private orbitTheta = 0.6; // azimuth
  private orbitPhi = 0.55;  // elevation
  private orbitRadius = 16.0;
  private orbitTarget = new THREE.Vector3(0, 1.0, 0);

  // Screen shake
  private shakeIntensity = 0;

  // Cinematic smooth camera transitions
  private currentCamPos = new THREE.Vector3(0, 5, -20);
  private currentLookAt = new THREE.Vector3(0, 1, 0);

  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    this.camera = camera;
    this.setupMouseEvents(domElement);
  }

  private setupMouseEvents(domElement: HTMLElement) {
    domElement.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isMouseDown) return;

      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.prevMouse = { x: e.clientX, y: e.clientY };

      // In orbit mode or when dragging, allow manual viewpoint control
      this.orbitTheta -= dx * 0.008;
      this.orbitPhi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, this.orbitPhi + dy * 0.008));
    });

    domElement.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.orbitRadius = Math.max(4.0, Math.min(50.0, this.orbitRadius + e.deltaY * 0.03));
    }, { passive: false });
  }

  public setMode(mode: CameraMode) {
    this.mode = mode;
  }

  public triggerShake(intensity: number) {
    this.shakeIntensity = Math.min(1.5, Math.max(0.2, intensity));
  }

  public update(
    dt: number,
    carPos: { x: number; y?: number; z: number },
    carAngle: number,
    status: SimulationStatus
  ) {
    // Screen shake decay
    let shakeOffset = new THREE.Vector3(0, 0, 0);
    if (this.shakeIntensity > 0.01) {
      shakeOffset.set(
        (Math.random() - 0.5) * this.shakeIntensity,
        (Math.random() - 0.5) * this.shakeIntensity,
        (Math.random() - 0.5) * this.shakeIntensity
      );
      this.shakeIntensity = Math.max(0, this.shakeIntensity - 3.0 * dt);
    }

    let targetPos = new THREE.Vector3();
    let targetLook = new THREE.Vector3();

    switch (this.mode) {
      case 'cinematic': {
        if (status === 'IDLE') {
          // Slow dynamic establishing pan near start line
          targetPos.set(carPos.x - 5.5, 2.2, carPos.z - 6.5);
          targetLook.set(carPos.x, 0.9, carPos.z + 4.0);
        } else if (status === 'ACCELERATING') {
          // Dynamic tracking camera ahead and to the side
          targetPos.set(carPos.x - 6.0, 3.2, carPos.z - 8.0);
          targetLook.set(carPos.x, 1.0, carPos.z + 6.0);
        } else if (status === 'IMPACT') {
          // Tight low-angle impact perspective
          targetPos.set(-4.5, 1.6, 2.5);
          targetLook.set(0, 0.8, 0);
        } else if (status === 'POST_IMPACT') {
          // Follow rebound with wide lens
          targetPos.set(carPos.x - 7.0, 4.0, carPos.z + 4.0);
          targetLook.set(carPos.x, 0.8, carPos.z);
        } else {
          // SETTLED: slow rotation around final crash scene
          const t = Date.now() * 0.0003;
          targetPos.set(
            carPos.x + Math.sin(t) * 9.0,
            3.5 + Math.sin(t * 0.5) * 0.5,
            carPos.z + Math.cos(t) * 9.0
          );
          targetLook.set(carPos.x, 0.8, carPos.z);
        }
        break;
      }

      case 'orbit': {
        this.orbitTarget.set(carPos.x * 0.5, 1.0, carPos.z * 0.5);
        const x = this.orbitTarget.x + this.orbitRadius * Math.sin(this.orbitPhi) * Math.sin(this.orbitTheta);
        const y = this.orbitTarget.y + this.orbitRadius * Math.cos(this.orbitPhi);
        const z = this.orbitTarget.z + this.orbitRadius * Math.sin(this.orbitPhi) * Math.cos(this.orbitTheta);
        targetPos.set(x, y, z);
        targetLook.copy(this.orbitTarget);
        break;
      }

      case 'trackside': {
        // High speed camera on tripod at impact zone
        targetPos.set(-7.0, 1.5, 2.0);
        targetLook.set(carPos.x, 0.8, carPos.z);
        break;
      }

      case 'chase': {
        // Chase cam behind car
        const distBehind = 7.5;
        const heightAbove = 2.8;
        targetPos.set(
          carPos.x - Math.sin(carAngle) * distBehind,
          heightAbove,
          carPos.z - Math.cos(carAngle) * distBehind
        );
        targetLook.set(
          carPos.x + Math.sin(carAngle) * 5.0,
          0.9,
          carPos.z + Math.cos(carAngle) * 5.0
        );
        break;
      }

      case 'top_down': {
        // Orthographic style top-down drone view
        targetPos.set(0, 26.0, carPos.z * 0.5);
        targetLook.set(0, 0, carPos.z * 0.5);
        break;
      }
    }

    // Smooth lerp for cinematic polish
    const lerpSpeed = this.mode === 'orbit' ? 0.25 : 0.08;
    this.currentCamPos.lerp(targetPos, lerpSpeed);
    this.currentLookAt.lerp(targetLook, lerpSpeed);

    this.camera.position.copy(this.currentCamPos).add(shakeOffset);
    this.camera.lookAt(this.currentLookAt);
  }
}
