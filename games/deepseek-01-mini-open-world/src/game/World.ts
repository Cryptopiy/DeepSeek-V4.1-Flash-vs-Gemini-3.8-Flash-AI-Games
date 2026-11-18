import * as THREE from 'three';
import { GRID, SPACING, ROAD_HALF, SIDEWALK, CITY_SIZE, OFFSET } from './constants';
import type { Box } from './types';
import { mulberry32, randRange } from './math';
import { pointInBox } from './Collision';

const BUILDING_COLORS = [
  0x8d99ae, 0x9c6644, 0x6b705c, 0x7d8597, 0x5f6f94, 0x8a7f72, 0x4a5759, 0xb08968, 0x707a8a,
  0x996f5a
];

export interface ParkedSpot {
  x: number;
  z: number;
  heading: number;
}

export class World {
  group = new THREE.Group();
  buildings: Box[] = [];
  nodes: { x: number; z: number }[] = [];
  neighbors: number[][] = [];
  parkedSpots: ParkedSpot[] = [];

  constructor() {
    const rng = mulberry32(1337);
    this.buildGround();
    this.buildRoads();
    this.buildBlocksAndBuildings(rng);
    this.buildLamps();
    this.buildNodes();
    this.buildParkedSpots(rng);
  }

  nodeIndex(i: number, j: number): number {
    return i * (GRID + 1) + j;
  }

  private buildGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(900, 900),
      new THREE.MeshStandardMaterial({ color: 0x1f2a1e, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    this.group.add(ground);

    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x34373f, roughness: 0.95 });
    const size = CITY_SIZE + ROAD_HALF * 2;
    const center = OFFSET + CITY_SIZE / 2;
    const slab = new THREE.Mesh(new THREE.PlaneGeometry(size, size), asphaltMat);
    slab.rotation.x = -Math.PI / 2;
    slab.position.set(center, 0, center);
    slab.receiveShadow = true;
    this.group.add(slab);
  }

  private buildRoads() {
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x3a3d45, roughness: 0.95 });
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xd8c76a, roughness: 0.7 });

    for (let g = 0; g <= GRID; g++) {
      const p = OFFSET + g * SPACING;

      const roadZ = new THREE.Mesh(
        new THREE.PlaneGeometry(ROAD_HALF * 2, CITY_SIZE + ROAD_HALF * 2),
        asphaltMat
      );
      roadZ.rotation.x = -Math.PI / 2;
      roadZ.position.set(p, 0.01, OFFSET + CITY_SIZE / 2);
      roadZ.receiveShadow = true;
      this.group.add(roadZ);

      const roadX = new THREE.Mesh(
        new THREE.PlaneGeometry(CITY_SIZE + ROAD_HALF * 2, ROAD_HALF * 2),
        asphaltMat
      );
      roadX.rotation.x = -Math.PI / 2;
      roadX.position.set(OFFSET + CITY_SIZE / 2, 0.01, p);
      roadX.receiveShadow = true;
      this.group.add(roadX);
    }

    for (let g = 0; g < GRID; g++) {
      const mid = OFFSET + g * SPACING + SPACING / 2;
      const len = SPACING - ROAD_HALF * 2;
      for (let line = 0; line <= GRID; line++) {
        const p = OFFSET + line * SPACING;

        const cx = new THREE.Mesh(new THREE.PlaneGeometry(len, 0.28), lineMat);
        cx.rotation.x = -Math.PI / 2;
        cx.position.set(mid, 0.02, p);
        this.group.add(cx);

        const cz = new THREE.Mesh(new THREE.PlaneGeometry(0.28, len), lineMat);
        cz.rotation.x = -Math.PI / 2;
        cz.position.set(p, 0.02, mid);
        this.group.add(cz);
      }
    }
  }

  private buildBlocksAndBuildings(rng: () => number) {
    const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x8b9099, roughness: 0.9 });
    const blockSize = SPACING - ROAD_HALF * 2;

    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        const bx = OFFSET + i * SPACING + SPACING / 2;
        const bz = OFFSET + j * SPACING + SPACING / 2;

        const block = new THREE.Mesh(new THREE.BoxGeometry(blockSize, 0.14, blockSize), sidewalkMat);
        block.position.set(bx, 0.07, bz);
        block.receiveShadow = true;
        this.group.add(block);

        const innerSize = blockSize - SIDEWALK * 2;
        const cellGap = 2;
        const cellSize = (innerSize - cellGap) / 2;
        const innerMin = -innerSize / 2;

        for (let ci = 0; ci < 2; ci++) {
          for (let cj = 0; cj < 2; cj++) {
            if (rng() < 0.12) continue;
            const cellCx = ci * (cellSize + cellGap) + cellSize / 2 + innerMin;
            const cellCz = cj * (cellSize + cellGap) + cellSize / 2 + innerMin;
            const w = cellSize * (0.82 + rng() * 0.18);
            const d = cellSize * (0.82 + rng() * 0.18);
            const h = 8 + rng() * 24;
            const color = BUILDING_COLORS[Math.floor(rng() * BUILDING_COLORS.length)];

            const mesh = new THREE.Mesh(
              new THREE.BoxGeometry(w, h, d),
              new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0.05 })
            );
            const px = bx + cellCx;
            const pz = bz + cellCz;
            mesh.position.set(px, 0.14 + h / 2, pz);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.group.add(mesh);

            this.buildings.push({
              minX: px - w / 2,
              maxX: px + w / 2,
              minZ: pz - d / 2,
              maxZ: pz + d / 2,
              height: h
            });
          }
        }
      }
    }
  }

  private buildLamps() {
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x2b2f36, roughness: 0.7 });
    const bulbMat = new THREE.MeshStandardMaterial({
      color: 0xfff3c4,
      emissive: 0xffe28a,
      emissiveIntensity: 0.7
    });
    const poleGeo = new THREE.CylinderGeometry(0.12, 0.16, 6, 8);
    const bulbGeo = new THREE.SphereGeometry(0.28, 10, 10);

    for (let i = 0; i <= GRID; i++) {
      for (let j = 0; j <= GRID; j++) {
        const x = OFFSET + i * SPACING + (ROAD_HALF - 1.2);
        const z = OFFSET + j * SPACING + (ROAD_HALF - 1.2);
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.set(x, 3, z);
        pole.castShadow = true;
        const bulb = new THREE.Mesh(bulbGeo, bulbMat);
        bulb.position.set(x, 6.1, z);
        this.group.add(pole, bulb);
      }
    }
  }

  private buildNodes() {
    for (let i = 0; i <= GRID; i++) {
      for (let j = 0; j <= GRID; j++) {
        this.nodes.push({ x: OFFSET + i * SPACING, z: OFFSET + j * SPACING });
      }
    }
    this.neighbors = this.nodes.map(() => []);
    for (let i = 0; i <= GRID; i++) {
      for (let j = 0; j <= GRID; j++) {
        const idx = this.nodeIndex(i, j);
        if (i > 0) this.neighbors[idx].push(this.nodeIndex(i - 1, j));
        if (i < GRID) this.neighbors[idx].push(this.nodeIndex(i + 1, j));
        if (j > 0) this.neighbors[idx].push(this.nodeIndex(i, j - 1));
        if (j < GRID) this.neighbors[idx].push(this.nodeIndex(i, j + 1));
      }
    }
  }

  private buildParkedSpots(rng: () => number) {
    let count = 0;
    const maxCars = 24;
    for (let line = 0; line <= GRID && count < maxCars; line++) {
      for (let g = 0; g < GRID && count < maxCars; g++) {
        if (rng() < 0.35) continue;
        const mid = OFFSET + g * SPACING + SPACING / 2 + (rng() - 0.5) * 18;
        const p = OFFSET + line * SPACING;

        if (rng() < 0.5) {
          this.parkedSpots.push({ x: mid, z: p - (ROAD_HALF - 1.3), heading: Math.PI / 2 });
        } else {
          this.parkedSpots.push({ x: mid, z: p + (ROAD_HALF - 1.3), heading: -Math.PI / 2 });
        }
        count++;
        if (count >= maxCars) break;

        if (rng() < 0.7) {
          this.parkedSpots.push({ x: p - (ROAD_HALF - 1.3), z: mid, heading: 0 });
          count++;
        }
      }
    }
  }

  randomWalkablePoint(): { x: number; z: number } {
    for (let attempt = 0; attempt < 40; attempt++) {
      const x = OFFSET + 4 + Math.random() * (CITY_SIZE - 8);
      const z = OFFSET + 4 + Math.random() * (CITY_SIZE - 8);
      let inside = false;
      for (const b of this.buildings) {
        if (pointInBox(x, z, b, 1.2)) {
          inside = true;
          break;
        }
      }
      if (!inside) return { x, z };
    }
    const n = this.nodes[Math.floor(Math.random() * this.nodes.length)];
    return { x: n.x + randRange(-8, 8), z: n.z + randRange(-8, 8) };
  }

  isInsideBuilding(x: number, z: number, margin = 1): boolean {
    for (const b of this.buildings) {
      if (pointInBox(x, z, b, margin)) return true;
    }
    return false;
  }
}