import * as THREE from 'three';

interface SkidPoint {
  leftWheel: THREE.Vector3;
  rightWheel: THREE.Vector3;
}

export class Skidmarks {
  public group: THREE.Group;
  private markSegments: THREE.Mesh[] = [];
  private lastLeftPos: THREE.Vector3 | null = null;
  private lastRightPos: THREE.Vector3 | null = null;
  private skidMaterial: THREE.MeshBasicMaterial;

  constructor() {
    this.group = new THREE.Group();
    this.skidMaterial = new THREE.MeshBasicMaterial({
      color: 0x090c10,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    });
  }

  public addMark(carX: number, carZ: number, carAngle: number, intensity: number) {
    if (intensity < 0.2) {
      this.lastLeftPos = null;
      this.lastRightPos = null;
      return;
    }

    const halfTrack = 0.85; // Distance between tires
    const cosA = Math.cos(carAngle);
    const sinA = Math.sin(carAngle);

    // Left and right rear tire contact patches
    const curLeft = new THREE.Vector3(
      carX - halfTrack * cosA,
      0.008,
      carZ + halfTrack * sinA - 1.35 * cosA
    );
    const curRight = new THREE.Vector3(
      carX + halfTrack * cosA,
      0.008,
      carZ - halfTrack * sinA - 1.35 * cosA
    );

    if (this.lastLeftPos && this.lastRightPos) {
      const dist = curLeft.distanceTo(this.lastLeftPos);
      if (dist > 0.2 && dist < 3.0) {
        this.createRibbonSegment(this.lastLeftPos, curLeft, 0.22);
        this.createRibbonSegment(this.lastRightPos, curRight, 0.22);
      }
    }

    this.lastLeftPos = curLeft.clone();
    this.lastRightPos = curRight.clone();
  }

  private createRibbonSegment(p1: THREE.Vector3, p2: THREE.Vector3, width: number) {
    // Normal in XZ plane
    const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
    const perp = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(width / 2);

    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      p1.x - perp.x, p1.y, p1.z - perp.z,
      p1.x + perp.x, p1.y, p1.z + perp.z,
      p2.x - perp.x, p2.y, p2.z - perp.z,

      p1.x + perp.x, p1.y, p1.z + perp.z,
      p2.x + perp.x, p2.y, p2.z + perp.z,
      p2.x - perp.x, p2.y, p2.z - perp.z,
    ]);

    geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const mesh = new THREE.Mesh(geo, this.skidMaterial);
    mesh.renderOrder = 1;
    this.group.add(mesh);
    this.markSegments.push(mesh);

    // Limit max skid segments for memory safety
    if (this.markSegments.length > 300) {
      const old = this.markSegments.shift();
      if (old) {
        this.group.remove(old);
        old.geometry.dispose();
      }
    }
  }

  public reset() {
    for (const mesh of this.markSegments) {
      this.group.remove(mesh);
      mesh.geometry.dispose();
    }
    this.markSegments = [];
    this.lastLeftPos = null;
    this.lastRightPos = null;
  }
}
