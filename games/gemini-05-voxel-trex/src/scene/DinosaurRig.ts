import * as THREE from 'three';
import { generateTRexModelData, VoxelPartData } from '../voxel/trexModelData';
import { buildPartMesh, BuiltPartMesh } from '../voxel/voxelMeshBuilder';
import { BodyPartKey } from '../types/dinosaur';

export class DinosaurRig {
  public root: THREE.Group;
  public parts: Map<BodyPartKey, BuiltPartMesh> = new Map();

  // Primary articulated bone/part groups
  public body!: THREE.Group;
  public neck!: THREE.Group;
  public head!: THREE.Group;
  public lowerJaw!: THREE.Group;
  public tailBase!: THREE.Group;
  public tailMid!: THREE.Group;
  public tailTip!: THREE.Group;
  public armL!: THREE.Group;
  public armR!: THREE.Group;
  public thighL!: THREE.Group;
  public shinL!: THREE.Group;
  public footL!: THREE.Group;
  public thighR!: THREE.Group;
  public shinR!: THREE.Group;
  public footR!: THREE.Group;

  public totalVoxelCount: number = 0;
  public partCounts: Record<string, number> = {};

  // Base resting transforms for reset/interpolation
  public readonly baseBodyY: number = 2.95;

  constructor() {
    this.root = new THREE.Group();
    this.root.name = 'trex_rig_root';
    this.buildHierarchy();
  }

  private buildHierarchy() {
    const rawParts = generateTRexModelData();
    const partMap = new Map<BodyPartKey, VoxelPartData>();
    rawParts.forEach(p => partMap.set(p.key, p));

    // Build instanced meshes for each part
    rawParts.forEach(p => {
      const built = buildPartMesh(p);
      this.parts.set(p.key, built);
      this.totalVoxelCount += built.voxelCount;
      this.partCounts[p.key] = built.voxelCount;
    });

    // 1. Root and Torso
    this.body = this.parts.get('body')!.group;
    this.body.position.set(0, this.baseBodyY, 0);
    this.root.add(this.body);

    // 2. Neck & Head & Lower Jaw
    this.neck = this.parts.get('neck')!.group;
    this.neck.position.set(0, 0.45, 1.45);
    this.body.add(this.neck);

    this.head = this.parts.get('head')!.group;
    this.head.position.set(0, 0.65, 0.95);
    this.neck.add(this.head);

    this.lowerJaw = this.parts.get('lowerJaw')!.group;
    // Jaw hinge pivot near back of skull
    this.lowerJaw.position.set(0, -0.22, 0.22);
    this.head.add(this.lowerJaw);

    // 3. Tail chain (Base -> Mid -> Tip)
    this.tailBase = this.parts.get('tailBase')!.group;
    this.tailBase.position.set(0, 0.1, -1.1);
    this.body.add(this.tailBase);

    this.tailMid = this.parts.get('tailMid')!.group;
    this.tailMid.position.set(0, 0, -1.6);
    this.tailBase.add(this.tailMid);

    this.tailTip = this.parts.get('tailTip')!.group;
    this.tailTip.position.set(0, 0, -1.6);
    this.tailMid.add(this.tailTip);

    // 4. Forearms (attached to torso shoulder)
    this.armL = this.parts.get('armL')!.group;
    this.armL.position.set(-0.85, -0.35, 1.2);
    this.armL.rotation.set(0.3, 0.1, 0.2);
    this.body.add(this.armL);

    this.armR = this.parts.get('armR')!.group;
    this.armR.position.set(0.85, -0.35, 1.2);
    this.armR.rotation.set(0.3, -0.1, -0.2);
    this.body.add(this.armR);

    // 5. Left Hind Leg (Thigh -> Shin -> Foot)
    this.thighL = this.parts.get('thighL')!.group;
    this.thighL.position.set(-0.95, this.baseBodyY, -0.2);
    this.root.add(this.thighL);

    this.shinL = this.parts.get('shinL')!.group;
    this.shinL.position.set(0, -1.45, -0.15);
    this.thighL.add(this.shinL);

    this.footL = this.parts.get('footL')!.group;
    this.footL.position.set(0, -1.5, 0.15);
    this.shinL.add(this.footL);

    // 6. Right Hind Leg (Thigh -> Shin -> Foot)
    this.thighR = this.parts.get('thighR')!.group;
    this.thighR.position.set(0.95, this.baseBodyY, -0.2);
    this.root.add(this.thighR);

    this.shinR = this.parts.get('shinR')!.group;
    this.shinR.position.set(0, -1.45, -0.15);
    this.thighR.add(this.shinR);

    this.footR = this.parts.get('footR')!.group;
    this.footR.position.set(0, -1.5, 0.15);
    this.shinR.add(this.footR);

    this.resetPose();
  }

  public resetPose() {
    this.body.position.set(0, this.baseBodyY, 0);
    this.body.rotation.set(0, 0, 0);

    this.neck.rotation.set(0, 0, 0);
    this.head.rotation.set(0, 0, 0);
    this.lowerJaw.rotation.set(0, 0, 0);

    this.tailBase.rotation.set(0, 0, 0);
    this.tailMid.rotation.set(0, 0, 0);
    this.tailTip.rotation.set(0, 0, 0);

    this.armL.rotation.set(0.35, 0.1, 0.15);
    this.armR.rotation.set(0.35, -0.1, -0.15);

    this.thighL.position.set(-0.95, this.baseBodyY, -0.2);
    this.thighL.rotation.set(0, 0, 0);
    this.shinL.rotation.set(0, 0, 0);
    this.footL.rotation.set(0, 0, 0);

    this.thighR.position.set(0.95, this.baseBodyY, -0.2);
    this.thighR.rotation.set(0, 0, 0);
    this.shinR.rotation.set(0, 0, 0);
    this.footR.rotation.set(0, 0, 0);
  }
}
