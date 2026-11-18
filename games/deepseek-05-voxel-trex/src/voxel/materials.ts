import * as THREE from 'three'

export const PALETTE = {
  bodyMid: '#5c6b3a',
  bodyDark: '#39472a',
  bodyLight: '#7c8b4e',
  belly: '#a7ad63',
  stripe: '#2c3620',
  teeth: '#efe9d5',
  eye: '#101010',
  eyeGlow: '#e0a83a',
  claw: '#2a261f',
  mouth: '#4a1e1e',
} as const

/**
 * A single shared material for every instanced body part. Per-voxel color is
 * supplied through InstancedMesh.setColorAt, so the whole dinosaur only needs
 * one material and one box geometry.
 */
export const voxelMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.82,
  metalness: 0.03,
  flatShading: true,
})

export const VOXEL_GEOMETRY = new THREE.BoxGeometry(1, 1, 1)