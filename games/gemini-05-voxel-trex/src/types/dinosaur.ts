export type AnimationMode = 'idle' | 'walk' | 'roar';

export type CameraPreset = 'default' | 'side' | 'front' | 'head' | 'action';

export interface Voxel {
  x: number;
  y: number;
  z: number;
  color: string;
}

export type BodyPartKey =
  | 'body'
  | 'neck'
  | 'head'
  | 'lowerJaw'
  | 'tailBase'
  | 'tailMid'
  | 'tailTip'
  | 'armL'
  | 'armR'
  | 'thighL'
  | 'shinL'
  | 'footL'
  | 'thighR'
  | 'shinR'
  | 'footR';

export interface BodyPartDefinition {
  key: BodyPartKey;
  name: string;
  pivot: [number, number, number]; // local offset where this part pivots
  voxels: Voxel[];
}

export interface ModelStats {
  totalVoxels: number;
  partCounts: Record<BodyPartKey, number>;
}
