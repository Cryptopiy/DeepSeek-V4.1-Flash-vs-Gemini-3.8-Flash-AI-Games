import * as THREE from 'three';
import { clamp, lerpAngle } from './math';

export class CameraRig {
  camera: THREE.PerspectiveCamera;
  yaw = 0;
  pitch = 0.36;
  distance = 9.5;
  autoFollow = false;
  private followBlock = 0;
  private focus = new THREE.Vector3();
  private desired = new THREE.Vector3();
  private initialized = false;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(62, aspect, 0.1, 1200);
  }

  addOrbit(dx: number, dy: number) {
    this.yaw -= dx * 0.006;
    this.pitch = clamp(this.pitch + dy * 0.005, 0.08, 1.1);
    this.followBlock = 1.6;
  }

  update(dt: number, target: THREE.Vector3, heading: number, autoFollow: boolean) {
    if (this.followBlock > 0) this.followBlock -= dt;

    if (autoFollow && this.followBlock <= 0) {
      this.yaw = lerpAngle(this.yaw, heading, Math.min(1, dt * 1.6));
    }

    if (!this.initialized) {
      this.focus.copy(target);
      this.initialized = true;
    }
    const lerpFactor = Math.min(1, dt * 6);
    this.focus.x += (target.x - this.focus.x) * lerpFactor;
    this.focus.y += (target.y - this.focus.y) * lerpFactor;
    this.focus.z += (target.z - this.focus.z) * lerpFactor;

    const cp = Math.cos(this.pitch);
    const sp = Math.sin(this.pitch);
    const fx = Math.sin(this.yaw);
    const fz = Math.cos(this.yaw);

    this.desired.set(
      this.focus.x - fx * cp * this.distance,
      this.focus.y + sp * this.distance,
      this.focus.z - fz * cp * this.distance
    );

    if (this.camera.position.lengthSq() === 0) {
      this.camera.position.copy(this.desired);
    } else {
      this.camera.position.lerp(this.desired, Math.min(1, dt * 7));
    }
    this.camera.lookAt(this.focus.x, this.focus.y + 1.0, this.focus.z);
  }

  forwardVector(): { x: number; z: number } {
    return { x: Math.sin(this.yaw), z: Math.cos(this.yaw) };
  }

  leftVector(): { x: number; z: number } {
    return { x: Math.cos(this.yaw), z: -Math.sin(this.yaw) };
  }

  resize(aspect: number) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}