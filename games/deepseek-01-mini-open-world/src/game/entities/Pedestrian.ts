import * as THREE from 'three';
import { PED_SPEED, PED_FLEE_SPEED } from '../constants';

export type PedState = 'walk' | 'wait' | 'flee';

export interface PedContext {
  resolve(x: number, z: number, r: number): { x: number; z: number };
  randomDest(): { x: number; z: number };
}

const SHIRTS = [0xe07a5f, 0x81b29a, 0xf2cc8f, 0x9a8c98, 0x6d9dc5, 0xc1667f, 0x7a9e7e];

export class Pedestrian {
  position = new THREE.Vector3();
  heading = 0;
  radius = 0.45;
  state: PedState = 'walk';
  destX = 0;
  destZ = 0;
  waitTimer = 0;
  fleeTimer = 0;
  fleeX = 0;
  fleeZ = 0;
  blockedTimer = 0;
  hitCooldown = 0;
  mesh: THREE.Group;
  private body: THREE.Mesh;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  private walkPhase = 0;

  constructor(color?: number) {
    this.mesh = new THREE.Group();
    const shirt = color ?? SHIRTS[Math.floor(Math.random() * SHIRTS.length)];
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirt, roughness: 0.7 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xe8b98a, roughness: 0.7 });
    const legMat = new THREE.MeshStandardMaterial({ color: 0x33384a, roughness: 0.8 });

    this.body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.6, 4, 8), shirtMat);
    this.body.position.y = 1.05;
    this.body.castShadow = true;
    this.mesh.add(this.body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), skinMat);
    head.position.y = 1.6;
    head.castShadow = true;
    this.mesh.add(head);

    const legGeo = new THREE.BoxGeometry(0.18, 0.5, 0.2);
    this.leftLeg = new THREE.Mesh(legGeo, legMat);
    this.leftLeg.position.set(0.13, 0.36, 0);
    this.rightLeg = new THREE.Mesh(legGeo, legMat);
    this.rightLeg.position.set(-0.13, 0.36, 0);
    this.mesh.add(this.leftLeg, this.rightLeg);
  }

  setPosition(x: number, z: number) {
    this.position.set(x, 0, z);
    this.syncMesh();
  }

  setDest(x: number, z: number) {
    this.destX = x;
    this.destZ = z;
  }

  flee(fromX: number, fromZ: number) {
    this.state = 'flee';
    this.fleeX = fromX;
    this.fleeZ = fromZ;
    this.fleeTimer = 4.5;
  }

  update(dt: number, ctx: PedContext) {
    if (this.hitCooldown > 0) this.hitCooldown -= dt;

    let vx = 0;
    let vz = 0;
    let speed = 0;

    if (this.state === 'walk') {
      const dx = this.destX - this.position.x;
      const dz = this.destZ - this.position.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.2) {
        this.state = 'wait';
        this.waitTimer = 1 + Math.random() * 4;
      } else {
        vx = dx / d;
        vz = dz / d;
        speed = PED_SPEED;
      }
    } else if (this.state === 'wait') {
      this.waitTimer -= dt;
      if (this.waitTimer <= 0) {
        const d = ctx.randomDest();
        this.setDest(d.x, d.z);
        this.state = 'walk';
      }
    } else if (this.state === 'flee') {
      this.fleeTimer -= dt;
      const dx = this.position.x - this.fleeX;
      const dz = this.position.z - this.fleeZ;
      const d = Math.hypot(dx, dz) || 1;
      vx = dx / d;
      vz = dz / d;
      speed = PED_FLEE_SPEED;
      if (this.fleeTimer <= 0) {
        const nd = ctx.randomDest();
        this.setDest(nd.x, nd.z);
        this.state = 'walk';
      }
    }

    const startX = this.position.x;
    const startZ = this.position.z;
    const intended = speed * dt;

    if (speed > 0) {
      this.position.x += vx * speed * dt;
      this.position.z += vz * speed * dt;
      this.heading = Math.atan2(vx, vz);
      this.walkPhase += dt * (this.state === 'flee' ? 16 : 9);
    }

    const corrected = ctx.resolve(this.position.x, this.position.z, this.radius);
    this.position.x = corrected.x;
    this.position.z = corrected.z;

    const moved = Math.hypot(this.position.x - startX, this.position.z - startZ);
    if (this.state === 'walk' && intended > 0 && moved < intended * 0.35) {
      this.blockedTimer += dt;
    } else {
      this.blockedTimer = 0;
    }
    if (this.blockedTimer > 0.5) {
      const nd = ctx.randomDest();
      this.setDest(nd.x, nd.z);
      this.blockedTimer = 0;
    }

    this.syncMesh();
  }

  syncMesh() {
    this.mesh.position.set(this.position.x, 0, this.position.z);
    this.mesh.rotation.y = this.heading;
    const swing = this.state === 'wait' ? 0 : Math.sin(this.walkPhase) * 0.5;
    this.leftLeg.rotation.x = swing;
    this.rightLeg.rotation.x = -swing;
  }
}