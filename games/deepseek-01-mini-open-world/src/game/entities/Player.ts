import * as THREE from 'three';
import { WALK_SPEED } from '../constants';

export class Player {
  position = new THREE.Vector3();
  heading = 0;
  radius = 0.5;
  moving = false;
  mesh: THREE.Group;
  private body: THREE.Mesh;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  private walkPhase = 0;

  constructor() {
    this.mesh = new THREE.Group();

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2f6fed, roughness: 0.6 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf0c090, roughness: 0.7 });
    const legMat = new THREE.MeshStandardMaterial({ color: 0x24324a, roughness: 0.8 });
    const noseMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x2266ff, emissiveIntensity: 0.4 });

    this.body = new THREE.Mesh(new THREE.CapsuleGeometry(0.36, 0.7, 4, 10), bodyMat);
    this.body.position.y = 1.15;
    this.body.castShadow = true;
    this.mesh.add(this.body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), skinMat);
    head.position.y = 1.82;
    head.castShadow = true;
    this.mesh.add(head);

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.28, 8), noseMat);
    nose.rotation.x = Math.PI / 2;
    nose.position.set(0, 1.82, 0.3);
    this.mesh.add(nose);

    const legGeo = new THREE.BoxGeometry(0.22, 0.62, 0.24);
    this.leftLeg = new THREE.Mesh(legGeo, legMat);
    this.leftLeg.position.set(0.16, 0.42, 0);
    this.leftLeg.castShadow = true;
    this.rightLeg = new THREE.Mesh(legGeo, legMat);
    this.rightLeg.position.set(-0.16, 0.42, 0);
    this.rightLeg.castShadow = true;
    this.mesh.add(this.leftLeg, this.rightLeg);

    const armGeo = new THREE.BoxGeometry(0.16, 0.6, 0.18);
    const leftArm = new THREE.Mesh(armGeo, bodyMat);
    leftArm.position.set(0.44, 1.2, 0);
    leftArm.castShadow = true;
    const rightArm = new THREE.Mesh(armGeo, bodyMat);
    rightArm.position.set(-0.44, 1.2, 0);
    rightArm.castShadow = true;
    this.mesh.add(leftArm, rightArm);
  }

  setPosition(x: number, z: number) {
    this.position.set(x, 0, z);
    this.syncMesh();
  }

  move(dt: number, dirX: number, dirZ: number) {
    const len = Math.hypot(dirX, dirZ);
    this.moving = len > 0.01;

    if (this.moving) {
      const nx = dirX / len;
      const nz = dirZ / len;
      this.position.x += nx * WALK_SPEED * dt;
      this.position.z += nz * WALK_SPEED * dt;
      this.heading = Math.atan2(nx, nz);
      this.walkPhase += dt * 11;
    } else {
      this.walkPhase += dt * 2;
    }

    this.syncMesh();
  }

  syncMesh() {
    this.mesh.position.set(this.position.x, 0, this.position.z);
    this.mesh.rotation.y = this.heading;

    const swing = this.moving ? Math.sin(this.walkPhase) * 0.5 : 0;
    this.leftLeg.rotation.x = swing;
    this.rightLeg.rotation.x = -swing;
    this.body.position.y = 1.15 + Math.abs(Math.sin(this.walkPhase)) * 0.04;
  }
}