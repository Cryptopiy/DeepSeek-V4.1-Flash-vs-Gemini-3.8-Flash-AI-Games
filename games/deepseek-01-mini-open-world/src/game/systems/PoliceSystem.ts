import * as THREE from 'three';
import { Vehicle } from '../entities/Vehicle';
import type { World } from '../World';
import { angleDiff, clamp, dist2 } from '../math';

export class PoliceSystem {
  police: Vehicle[] = [];
  private flashTimer = 0;

  ensure(wanted: number, playerPos: THREE.Vector3, world: World, scene: THREE.Scene) {
    while (this.police.length < wanted) {
      const candidates = world.nodes.filter(
        (n) => dist2(n.x, n.z, playerPos.x, playerPos.z) > 75 * 75
      );
      const node =
        candidates.length > 0
          ? candidates[Math.floor(Math.random() * candidates.length)]
          : world.nodes[Math.floor(Math.random() * world.nodes.length)];

      const car = new Vehicle('police', 0x1b1f2a);
      const jitter = (Math.random() - 0.5) * 6;
      car.setPosition(node.x + jitter, node.z + jitter, 0);
      const dx = playerPos.x - car.position.x;
      const dz = playerPos.z - car.position.z;
      car.heading = Math.atan2(dx, dz);
      car.speed = 0;
      car.syncMesh();
      scene.add(car.mesh);
      this.police.push(car);
    }

    while (this.police.length > wanted) {
      const car = this.police.pop();
      if (car) scene.remove(car.mesh);
    }
  }

  update(dt: number, playerPos: THREE.Vector3) {
    this.flashTimer += dt;
    const flashOn = Math.floor(this.flashTimer * 4) % 2 === 0;

    for (const car of this.police) {
      if (car.controlled) continue;

      const dx = playerPos.x - car.position.x;
      const dz = playerPos.z - car.position.z;
      const dist = Math.hypot(dx, dz);

      if (dist > 3 && !car.controlled) {
        const desired = Math.atan2(dx, dz);
        const diff = angleDiff(desired, car.heading);
        const turn = 4.2 * dt;
        car.heading += clamp(diff, -turn, turn);
      }

      const targetSpeed = clamp(8 + dist * 0.6, 8, 30);
      car.speed += (targetSpeed - car.speed) * Math.min(1, dt * 2);
      car.speed = clamp(car.speed, 0, 30);

      const f = car.forward();
      car.position.x += f.x * car.speed * dt;
      car.position.z += f.z * car.speed * dt;
      car.syncMesh();

      const bar = car.mesh.userData.lightBar;
      if (bar) {
        const red = bar[0]?.material as THREE.MeshStandardMaterial | undefined;
        const blue = bar[1]?.material as THREE.MeshStandardMaterial | undefined;
        if (red) red.emissiveIntensity = flashOn ? 2.4 : 0.25;
        if (blue) blue.emissiveIntensity = flashOn ? 0.25 : 2.4;
      }
    }
  }

  reset(scene: THREE.Scene) {
    for (const car of this.police) scene.remove(car.mesh);
    this.police = [];
  }
}