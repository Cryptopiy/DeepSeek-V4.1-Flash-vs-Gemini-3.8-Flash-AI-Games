import * as THREE from 'three';
import { ParticleEffect } from '../game/types';

export class ParticleRenderer {
  private smokeMesh: THREE.InstancedMesh;
  private sparkMesh: THREE.InstancedMesh;
  private dummy = new THREE.Object3D();
  private maxSmoke = 250;
  private maxSparks = 350;

  constructor(scene: THREE.Scene) {
    // Smoke particles: translucent soft spheres
    const smokeGeom = new THREE.SphereGeometry(1, 6, 6);
    const smokeMat = new THREE.MeshBasicMaterial({
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    this.smokeMesh = new THREE.InstancedMesh(smokeGeom, smokeMat, this.maxSmoke);
    this.smokeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.smokeMesh.frustumCulled = false;
    scene.add(this.smokeMesh);

    // Spark particles: glowing small cubes
    const sparkGeom = new THREE.BoxGeometry(1, 1, 1);
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      depthWrite: false,
    });
    this.sparkMesh = new THREE.InstancedMesh(sparkGeom, sparkMat, this.maxSparks);
    this.sparkMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.sparkMesh.frustumCulled = false;
    scene.add(this.sparkMesh);
  }

  public update(particles: ParticleEffect[]): void {
    let smokeIdx = 0;
    let sparkIdx = 0;

    for (const p of particles) {
      const progress = p.life / p.maxLife;

      if (p.type === 'smoke' && smokeIdx < this.maxSmoke) {
        const currentSize = p.size * (1 + progress * 2.2);
        this.dummy.position.set(p.x, p.y, p.z);
        this.dummy.scale.set(currentSize, currentSize, currentSize);
        this.dummy.updateMatrix();
        this.smokeMesh.setMatrixAt(smokeIdx, this.dummy.matrix);
        smokeIdx++;
      } else if (p.type === 'spark' && sparkIdx < this.maxSparks) {
        const currentSize = p.size * (1 - progress * 0.7);
        this.dummy.position.set(p.x, p.y, p.z);
        this.dummy.scale.set(currentSize, currentSize, currentSize);
        this.dummy.updateMatrix();
        this.sparkMesh.setMatrixAt(sparkIdx, this.dummy.matrix);
        sparkIdx++;
      }
    }

    // Hide remaining instances by scaling them to 0
    this.dummy.scale.set(0, 0, 0);
    this.dummy.updateMatrix();

    for (let i = smokeIdx; i < this.maxSmoke; i++) {
      this.smokeMesh.setMatrixAt(i, this.dummy.matrix);
    }
    for (let i = sparkIdx; i < this.maxSparks; i++) {
      this.sparkMesh.setMatrixAt(i, this.dummy.matrix);
    }

    this.smokeMesh.instanceMatrix.needsUpdate = true;
    this.sparkMesh.instanceMatrix.needsUpdate = true;
  }
}
