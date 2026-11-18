import * as THREE from 'three';
import { VoxelPartData } from './trexModelData';

export const VOXEL_SIZE = 0.22;

export interface BuiltPartMesh {
  key: string;
  group: THREE.Group;
  instancedMesh: THREE.InstancedMesh;
  voxelCount: number;
}

// Shared geometry and material for optimal performance
let sharedBoxGeometry: THREE.BoxGeometry | null = null;
let sharedMaterial: THREE.MeshStandardMaterial | null = null;

export function getSharedBoxGeometry(): THREE.BoxGeometry {
  if (!sharedBoxGeometry) {
    // 0.985 scale gives a subtle crisp voxel edge bevel/groove in directional lighting
    const s = VOXEL_SIZE * 0.985;
    sharedBoxGeometry = new THREE.BoxGeometry(s, s, s);
  }
  return sharedBoxGeometry;
}

export function getSharedMaterial(): THREE.MeshStandardMaterial {
  if (!sharedMaterial) {
    sharedMaterial = new THREE.MeshStandardMaterial({
      roughness: 0.78,
      metalness: 0.08,
      flatShading: true,
      envMapIntensity: 0.8
    });
  }
  return sharedMaterial;
}

/**
 * Builds an InstancedMesh inside a parent THREE.Group for an articulated body part.
 */
export function buildPartMesh(partData: VoxelPartData): BuiltPartMesh {
  const group = new THREE.Group();
  group.name = `part_${partData.key}`;

  const count = partData.voxels.length;
  if (count === 0) {
    const dummy = new THREE.InstancedMesh(getSharedBoxGeometry(), getSharedMaterial(), 1);
    dummy.visible = false;
    group.add(dummy);
    return { key: partData.key, group, instancedMesh: dummy, voxelCount: 0 };
  }

  const instancedMesh = new THREE.InstancedMesh(
    getSharedBoxGeometry(),
    getSharedMaterial(),
    count
  );
  instancedMesh.name = `instanced_${partData.key}`;
  instancedMesh.castShadow = true;
  instancedMesh.receiveShadow = true;

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();

  for (let i = 0; i < count; i++) {
    const v = partData.voxels[i];
    dummy.position.set(v.x * VOXEL_SIZE, v.y * VOXEL_SIZE, v.z * VOXEL_SIZE);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();

    instancedMesh.setMatrixAt(i, dummy.matrix);
    color.set(v.color);
    instancedMesh.setColorAt(i, color);
  }

  instancedMesh.instanceMatrix.needsUpdate = true;
  if (instancedMesh.instanceColor) {
    instancedMesh.instanceColor.needsUpdate = true;
  }

  group.add(instancedMesh);

  return {
    key: partData.key,
    group,
    instancedMesh,
    voxelCount: count
  };
}
