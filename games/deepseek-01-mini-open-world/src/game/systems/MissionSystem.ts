import * as THREE from 'three';
import type { Vehicle } from '../entities/Vehicle';

export class MissionSystem {
  stage = 0;
  complete = false;
  markerA: THREE.Group;
  markerB: THREE.Group;
  carMarker: THREE.Group;
  carStart: { x: number; z: number; heading: number };
  car: Vehicle;
  a: { x: number; z: number };
  b: { x: number; z: number };
  private t = 0;

  constructor(
    scene: THREE.Scene,
    car: Vehicle,
    a: { x: number; z: number },
    b: { x: number; z: number }
  ) {
    this.car = car;
    this.a = a;
    this.b = b;
    this.carStart = { x: car.position.x, z: car.position.z, heading: car.heading };
    this.markerA = this.makeMarker(scene, a.x, a.z, 0x39d353);
    this.markerB = this.makeMarker(scene, b.x, b.z, 0x35b6ff);
    this.carMarker = this.makeMarker(scene, 0, 0, 0xffd23f);
    this.car.mesh.add(this.carMarker);
    this.carMarker.position.set(0, 3.4, 0);
    this.refresh();
  }

  private makeMarker(scene: THREE.Scene, x: number, z: number, color: number): THREE.Group {
    const group = new THREE.Group();
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(2.1, 2.1, 0.35, 24),
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.8
      })
    );
    base.position.y = 0.2;
    group.add(base);

    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.45, 12, 16, 1, true),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
    );
    beam.position.y = 6;
    group.add(beam);

    group.position.set(x, 0, z);
    scene.add(group);
    return group;
  }

  setMarkerPosition(group: THREE.Group, x: number, z: number) {
    group.position.set(x, 0, z);
  }

  reset() {
    this.stage = 0;
    this.complete = false;
    this.car.setPosition(this.carStart.x, this.carStart.z, this.carStart.heading);
    this.car.speed = 0;
    this.car.steer = 0;
    this.refresh();
  }

  refresh() {
    this.markerA.visible = this.stage === 0;
    this.markerB.visible = this.stage === 2;
    this.carMarker.visible = this.stage === 0 || this.stage === 1;
  }

  update(dt: number, playerPos: THREE.Vector3, controlled: Vehicle | null) {
    this.t += dt;

    const pulse = 1 + Math.sin(this.t * 3) * 0.06;
    this.markerA.scale.setScalar(pulse);
    this.markerB.scale.setScalar(pulse);
    this.markerA.rotation.y += dt * 0.8;
    this.markerB.rotation.y += dt * 0.8;

    if (this.stage === 0) {
      const dx = playerPos.x - this.a.x;
      const dz = playerPos.z - this.a.z;
      if (dx * dx + dz * dz < 16) {
        this.stage = 1;
        this.refresh();
      }
    } else if (this.stage === 1) {
      if (controlled === this.car) {
        this.stage = 2;
        this.refresh();
      }
    } else if (this.stage === 2) {
      if (controlled === this.car) {
        const dx = this.car.position.x - this.b.x;
        const dz = this.car.position.z - this.b.z;
        if (dx * dx + dz * dz < 49) {
          this.stage = 3;
          this.complete = true;
          this.refresh();
        }
      }
    }
  }

  objective(): string {
    switch (this.stage) {
      case 0:
        return 'Go to the green marker on foot';
      case 1:
        return 'Enter the yellow delivery car (press E)';
      case 2:
        return 'Drive to the blue drop-off marker';
      default:
        return 'Mission complete!';
    }
  }
}