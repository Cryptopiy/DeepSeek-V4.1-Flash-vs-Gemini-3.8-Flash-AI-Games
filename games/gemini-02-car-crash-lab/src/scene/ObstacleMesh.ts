import * as THREE from 'three';
import { OBSTACLES } from '../physics/constants';
import { ObstacleId } from '../types/simulation';

export class ObstacleMesh {
  public group: THREE.Group;
  private currentId: ObstacleId = 'concrete_wall';
  private concreteWallMesh!: THREE.Group;
  private heavyBarrierMesh!: THREE.Group;
  private lightBarrierMesh!: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
    this.buildConcreteWall();
    this.buildHeavyBarrier();
    this.buildLightweightBarrier();
    this.setObstacleType('concrete_wall');
  }

  private buildConcreteWall() {
    this.concreteWallMesh = new THREE.Group();
    const def = OBSTACLES.concrete_wall;

    // Main concrete block
    const wallGeo = new THREE.BoxGeometry(def.width, def.height, def.depth);
    
    // Canvas texture for impact face hazard stripes
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Concrete gray base
      ctx.fillStyle = '#475569';
      ctx.fillRect(0, 0, 512, 256);

      // Yellow/Black diagonal stripes
      ctx.fillStyle = '#eab308';
      for (let x = -256; x < 768; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 256);
        ctx.lineTo(x + 40, 0);
        ctx.lineTo(x + 72, 0);
        ctx.lineTo(x + 32, 256);
        ctx.closePath();
        ctx.fill();
      }

      // Warning text
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(160, 100, 192, 56);
      ctx.strokeStyle = '#eab308';
      ctx.lineWidth = 3;
      ctx.strokeRect(160, 100, 192, 56);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CRASH BARRIER', 256, 136);
    }
    const tex = new THREE.CanvasTexture(canvas);

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.85,
      metalness: 0.1
    });

    const frontMat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.8,
      metalness: 0.15
    });

    // Box materials array [right, left, top, bottom, front(+z), back(-z)]
    // In our orientation, car approaches along +Z, so front face facing -Z is material index 5
    const materials = [wallMat, wallMat, wallMat, wallMat, wallMat, frontMat];

    const wall = new THREE.Mesh(wallGeo, materials);
    wall.position.y = def.height / 2;
    wall.castShadow = true;
    wall.receiveShadow = true;
    this.concreteWallMesh.add(wall);

    // Rear steel reinforcement buttresses
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3
    });

    for (const xOffset of [-2.2, 0, 2.2]) {
      const buttressGeo = new THREE.BoxGeometry(0.3, 2.0, 1.8);
      const buttress = new THREE.Mesh(buttressGeo, steelMat);
      buttress.position.set(xOffset, 1.0, 1.2);
      buttress.castShadow = true;
      this.concreteWallMesh.add(buttress);
    }

    this.group.add(this.concreteWallMesh);
  }

  private buildHeavyBarrier() {
    this.heavyBarrierMesh = new THREE.Group();
    const def = OBSTACLES.heavy_barrier;

    // Jersey-barrier shaped profile using ExtrudeGeometry
    const shape = new THREE.Shape();
    const halfBase = def.depth / 2; // 0.55m
    const halfTop = 0.22;
    const h = def.height;

    // Profile in YZ plane
    shape.moveTo(-halfBase, 0);
    shape.lineTo(-halfBase, 0.25);
    shape.lineTo(-halfBase + 0.15, 0.45);
    shape.lineTo(-halfTop, h);
    shape.lineTo(halfTop, h);
    shape.lineTo(halfBase - 0.15, 0.45);
    shape.lineTo(halfBase, 0.25);
    shape.lineTo(halfBase, 0);
    shape.closePath();

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: def.width,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 2
    };

    const barrierGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // Center the extrusion
    barrierGeo.center();

    const barrierMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.75,
      metalness: 0.15
    });

    const mesh = new THREE.Mesh(barrierGeo, barrierMat);
    // Rotate so depth is Z, width is X, height is Y
    mesh.rotation.y = Math.PI / 2;
    mesh.position.y = def.height / 2;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.heavyBarrierMesh.add(mesh);

    // Reflectors on side
    const reflectorMat = new THREE.MeshStandardMaterial({
      color: 0xeab308,
      emissive: 0xeab308,
      emissiveIntensity: 0.4,
      roughness: 0.2
    });
    for (const x of [-1.5, 0, 1.5]) {
      const ref = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.04), reflectorMat);
      ref.position.set(x, 0.8, -halfBase - 0.02);
      this.heavyBarrierMesh.add(ref);
    }

    this.group.add(this.heavyBarrierMesh);
  }

  private buildLightweightBarrier() {
    this.lightBarrierMesh = new THREE.Group();
    const def = OBSTACLES.lightweight_barrier;

    // High visibility safety orange plastic barrier
    const plasticMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      roughness: 0.4,
      metalness: 0.05
    });

    const bodyGeo = new THREE.BoxGeometry(def.width, def.height * 0.85, def.depth);
    const body = new THREE.Mesh(bodyGeo, plasticMat);
    body.position.y = (def.height * 0.85) / 2 + 0.05;
    body.castShadow = true;
    body.receiveShadow = true;
    this.lightBarrierMesh.add(body);

    // Molded structural indentations/ribs
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0xc2410c,
      roughness: 0.5
    });
    for (const x of [-0.8, 0, 0.8]) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.2, def.height * 0.65, def.depth + 0.04), ribMat);
      rib.position.set(x, def.height * 0.45, 0);
      this.lightBarrierMesh.add(rib);
    }

    // Dual reflective white stripes across front
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      emissive: 0xffffff,
      emissiveIntensity: 0.2
    });

    const stripe1 = new THREE.Mesh(new THREE.BoxGeometry(def.width + 0.02, 0.12, def.depth + 0.02), stripeMat);
    stripe1.position.y = def.height * 0.65;
    this.lightBarrierMesh.add(stripe1);

    const stripe2 = new THREE.Mesh(new THREE.BoxGeometry(def.width + 0.02, 0.12, def.depth + 0.02), stripeMat);
    stripe2.position.y = def.height * 0.35;
    this.lightBarrierMesh.add(stripe2);

    // Water fill cap on top
    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.08, 12),
      new THREE.MeshStandardMaterial({ color: 0x111827 })
    );
    cap.position.set(0, def.height * 0.9, 0);
    this.lightBarrierMesh.add(cap);

    this.group.add(this.lightBarrierMesh);
  }

  public setObstacleType(id: ObstacleId) {
    this.currentId = id;
    this.concreteWallMesh.visible = id === 'concrete_wall';
    this.heavyBarrierMesh.visible = id === 'heavy_barrier';
    this.lightBarrierMesh.visible = id === 'lightweight_barrier';
  }

  public updateTransform(x: number, z: number, angleRad: number) {
    this.group.position.set(x, 0, z);
    this.group.rotation.y = angleRad;
  }

  public reset(angleRad: number) {
    this.group.position.set(0, 0, 0);
    this.group.rotation.y = angleRad;
  }
}
