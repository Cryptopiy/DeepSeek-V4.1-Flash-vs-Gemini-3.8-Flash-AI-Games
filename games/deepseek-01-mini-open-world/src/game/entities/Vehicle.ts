import * as THREE from 'three';
import { buildVehicleMesh } from './vehicleMesh';
import {
  VEHICLE_ENGINE,
  VEHICLE_MAX_SPEED,
  VEHICLE_MAX_REVERSE,
  VEHICLE_TURN_RATE
} from '../constants';
import { clamp } from '../math';

export type VehicleKind = 'parked' | 'traffic' | 'police' | 'mission';

export interface VehicleControls {
  throttle: number;
  steer: number;
  handbrake: boolean;
}

export class Vehicle {
  mesh: THREE.Group;
  position = new THREE.Vector3();
  heading = 0;
  speed = 0;
  steer = 0;
  kind: VehicleKind;
  controlled = false;

  readonly halfLength = 2.2;
  readonly halfWidth = 1.05;
  readonly circleOffset = 1.25;
  readonly circleRadius = 1.18;

  maxSpeed = VEHICLE_MAX_SPEED;

  // traffic / police AI state
  nodeA = 0;
  nodeB = 0;
  targetX = 0;
  targetZ = 0;
  desiredSpeed = 11;
  stuckTimer = 0;

  constructor(kind: VehicleKind, color: number) {
    this.kind = kind;
    this.mesh = buildVehicleMesh(color, kind);
  }

  forward(): { x: number; z: number } {
    return { x: Math.sin(this.heading), z: Math.cos(this.heading) };
  }

  setPosition(x: number, z: number, heading: number) {
    this.position.set(x, 0, z);
    this.heading = heading;
    this.syncMesh();
  }

  drive(dt: number, controls: VehicleControls) {
    const vehicleFwd = Math.sin(this.heading);
    const vehicleFwdZ = Math.cos(this.heading);

    const throttle = controls.throttle;
    if (throttle > 0) {
      this.speed += VEHICLE_ENGINE * throttle * dt;
    } else if (throttle < 0) {
      if (this.speed > 0.8) {
        this.speed += throttle * 34 * dt;
      } else {
        this.speed += throttle * 13 * dt;
      }
    }

    if (controls.handbrake) {
      const decel = 42 * dt;
      if (Math.abs(this.speed) <= decel) this.speed = 0;
      else this.speed -= Math.sign(this.speed) * decel;
    }

    this.speed -= this.speed * 0.55 * dt;
    if (throttle === 0 && Math.abs(this.speed) < 0.08) this.speed = 0;
    this.speed = clamp(this.speed, -VEHICLE_MAX_REVERSE, this.maxSpeed);

    const targetSteer = clamp(controls.steer, -1, 1);
    this.steer += (targetSteer - this.steer) * Math.min(1, dt * 9);
    const speedFactor = clamp(Math.abs(this.speed) / 9, 0, 1);
    if (Math.abs(this.speed) > 0.25) {
      this.heading += this.steer * VEHICLE_TURN_RATE * speedFactor * dt * Math.sign(this.speed);
    }

    this.position.x += vehicleFwd * this.speed * dt;
    this.position.z += vehicleFwdZ * this.speed * dt;

    this.syncMesh();
  }

  syncMesh() {
    this.mesh.position.set(this.position.x, 0, this.position.z);
    this.mesh.rotation.y = this.heading;

    const wheels = (this.mesh.userData.wheels ?? []) as THREE.Mesh[];
    const spin = (this.speed / 0.38) * 0.016;
    for (const w of wheels) {
      w.rotation.x -= spin;
    }
  }
}