import * as THREE from 'three';

interface DebrisParticle {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  rot: THREE.Vector3;
  rotVel: THREE.Vector3;
  size: number;
  life: number;
  maxLife: number;
  type: 'spark' | 'shard' | 'dust';
}

export class DebrisSystem {
  public group: THREE.Group;
  private particles: DebrisParticle[] = [];

  // Instanced Meshes for high performance rendering
  private sparkInstancedMesh!: THREE.InstancedMesh;
  private shardInstancedMesh!: THREE.InstancedMesh;
  private dustInstancedMesh!: THREE.InstancedMesh;

  private dummy = new THREE.Object3D();

  private readonly MAX_SPARKS = 250;
  private readonly MAX_SHARDS = 120;
  private readonly MAX_DUST = 60;

  constructor() {
    this.group = new THREE.Group();
    this.initMeshes();
  }

  private initMeshes() {
    // 1. Sparks Mesh
    const sparkGeo = new THREE.SphereGeometry(0.04, 4, 4);
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xffaa22
    });
    this.sparkInstancedMesh = new THREE.InstancedMesh(sparkGeo, sparkMat, this.MAX_SPARKS);
    this.sparkInstancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.group.add(this.sparkInstancedMesh);

    // 2. Glass / Plastic Shards Mesh
    const shardGeo = new THREE.BoxGeometry(0.1, 0.08, 0.03);
    const shardMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.7
    });
    this.shardInstancedMesh = new THREE.InstancedMesh(shardGeo, shardMat, this.MAX_SHARDS);
    this.shardInstancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.shardInstancedMesh.castShadow = true;
    this.group.add(this.shardInstancedMesh);

    // 3. Smoke / Dust Puff Mesh
    const dustGeo = new THREE.DodecahedronGeometry(0.35, 1);
    const dustMat = new THREE.MeshStandardMaterial({
      color: 0xcbd5e1,
      roughness: 0.9,
      metalness: 0.0,
      transparent: true,
      opacity: 0.4
    });
    this.dustInstancedMesh = new THREE.InstancedMesh(dustGeo, dustMat, this.MAX_DUST);
    this.dustInstancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.group.add(this.dustInstancedMesh);

    this.hideAllInstances();
  }

  private hideAllInstances() {
    this.dummy.position.set(0, -9999, 0);
    this.dummy.scale.set(0, 0, 0);
    this.dummy.updateMatrix();

    for (let i = 0; i < this.MAX_SPARKS; i++) {
      this.sparkInstancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.sparkInstancedMesh.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < this.MAX_SHARDS; i++) {
      this.shardInstancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.shardInstancedMesh.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < this.MAX_DUST; i++) {
      this.dustInstancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.dustInstancedMesh.instanceMatrix.needsUpdate = true;
  }

  public emitImpactBurst(
    originX: number,
    originZ: number,
    normalX: number,
    normalZ: number,
    speedKmh: number
  ) {
    const intensity = Math.min(2.5, Math.max(0.6, speedKmh / 50));
    const sparkCount = Math.floor(60 * intensity);
    const shardCount = Math.floor(35 * intensity);
    const dustCount = Math.floor(18 * intensity);

    // Tangent plane vector for spray
    const tx = -normalZ;
    const tz = normalX;

    // 1. Emit Sparks
    for (let i = 0; i < sparkCount && this.particles.length < this.MAX_SPARKS + this.MAX_SHARDS + this.MAX_DUST; i++) {
      const spread = (Math.random() - 0.5) * 2;
      const speed = 4 + Math.random() * 12 * intensity;
      const vx = tx * spread * speed + normalX * (1 + Math.random() * 4);
      const vy = 1.5 + Math.random() * 5 * intensity;
      const vz = tz * spread * speed + normalZ * (1 + Math.random() * 4);

      this.particles.push({
        pos: new THREE.Vector3(originX + (Math.random() - 0.5) * 0.4, 0.4 + Math.random() * 0.4, originZ),
        vel: new THREE.Vector3(vx, vy, vz),
        rot: new THREE.Vector3(),
        rotVel: new THREE.Vector3(),
        size: 0.05 + Math.random() * 0.05,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.45,
        type: 'spark'
      });
    }

    // 2. Emit Shards
    for (let i = 0; i < shardCount; i++) {
      const speed = 2 + Math.random() * 8 * intensity;
      const vx = (Math.random() - 0.5) * speed + normalX * 2;
      const vy = 2.0 + Math.random() * 5 * intensity;
      const vz = (Math.random() - 0.5) * speed + normalZ * 2;

      this.particles.push({
        pos: new THREE.Vector3(originX + (Math.random() - 0.5) * 0.6, 0.5, originZ),
        vel: new THREE.Vector3(vx, vy, vz),
        rot: new THREE.Vector3(Math.random() * Math.PI, Math.random() * Math.PI, 0),
        rotVel: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ),
        size: 0.08 + Math.random() * 0.1,
        life: 0,
        maxLife: 2.5 + Math.random() * 1.5,
        type: 'shard'
      });
    }

    // 3. Emit Dust
    for (let i = 0; i < dustCount; i++) {
      const speed = 1.0 + Math.random() * 3.5;
      this.particles.push({
        pos: new THREE.Vector3(originX + (Math.random() - 0.5) * 0.8, 0.3, originZ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * speed + normalX * 1.5,
          0.8 + Math.random() * 2.0,
          (Math.random() - 0.5) * speed + normalZ * 1.5
        ),
        rot: new THREE.Vector3(Math.random(), Math.random(), 0),
        rotVel: new THREE.Vector3(0.5, 0.5, 0),
        size: 0.2 + Math.random() * 0.3,
        life: 0,
        maxLife: 1.2 + Math.random() * 0.8,
        type: 'dust'
      });
    }
  }

  public update(dt: number) {
    if (this.particles.length === 0) return;

    let sparkIdx = 0;
    let shardIdx = 0;
    let dustIdx = 0;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;

      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }

      const lifeProgress = p.life / p.maxLife;

      if (p.type === 'spark') {
        p.vel.y -= 14.0 * dt; // High gravity on sparks
        p.pos.addScaledVector(p.vel, dt);

        if (p.pos.y <= 0.02) {
          p.pos.y = 0.02;
          p.vel.y = -p.vel.y * 0.2;
          p.vel.x *= 0.7;
          p.vel.z *= 0.7;
        }

        if (sparkIdx < this.MAX_SPARKS) {
          const s = p.size * (1 - lifeProgress);
          this.dummy.position.copy(p.pos);
          this.dummy.scale.set(s, s, s);
          this.dummy.updateMatrix();
          this.sparkInstancedMesh.setMatrixAt(sparkIdx++, this.dummy.matrix);
        }
      } else if (p.type === 'shard') {
        p.vel.y -= 9.81 * dt; // Gravity
        p.pos.addScaledVector(p.vel, dt);

        p.rot.x += p.rotVel.x * dt;
        p.rot.y += p.rotVel.y * dt;

        // Ground bounce
        if (p.pos.y <= 0.04) {
          p.pos.y = 0.04;
          p.vel.y = -p.vel.y * 0.25;
          p.vel.x *= 0.65;
          p.vel.z *= 0.65;
          p.rotVel.multiplyScalar(0.7);

          if (Math.abs(p.vel.y) < 0.1) {
            p.vel.set(0, 0, 0);
            p.rotVel.set(0, 0, 0);
          }
        }

        if (shardIdx < this.MAX_SHARDS) {
          this.dummy.position.copy(p.pos);
          this.dummy.rotation.set(p.rot.x, p.rot.y, p.rot.z);
          this.dummy.scale.set(p.size, p.size, p.size);
          this.dummy.updateMatrix();
          this.shardInstancedMesh.setMatrixAt(shardIdx++, this.dummy.matrix);
        }
      } else if (p.type === 'dust') {
        p.vel.multiplyScalar(0.94);
        p.pos.addScaledVector(p.vel, dt);
        p.pos.y += 0.4 * dt; // Soft thermal rise

        if (dustIdx < this.MAX_DUST) {
          const s = p.size * (1 + lifeProgress * 2.5);
          this.dummy.position.copy(p.pos);
          this.dummy.rotation.set(p.rot.x, p.rot.y, 0);
          this.dummy.scale.set(s, s, s);
          this.dummy.updateMatrix();
          this.dustInstancedMesh.setMatrixAt(dustIdx++, this.dummy.matrix);
        }
      }
    }

    // Hide remaining unused instances
    this.dummy.position.set(0, -9999, 0);
    this.dummy.scale.set(0, 0, 0);
    this.dummy.updateMatrix();

    for (let i = sparkIdx; i < this.MAX_SPARKS; i++) {
      this.sparkInstancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.sparkInstancedMesh.instanceMatrix.needsUpdate = true;

    for (let i = shardIdx; i < this.MAX_SHARDS; i++) {
      this.shardInstancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.shardInstancedMesh.instanceMatrix.needsUpdate = true;

    for (let i = dustIdx; i < this.MAX_DUST; i++) {
      this.dustInstancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.dustInstancedMesh.instanceMatrix.needsUpdate = true;
  }

  public reset() {
    this.particles = [];
    this.hideAllInstances();
  }
}
