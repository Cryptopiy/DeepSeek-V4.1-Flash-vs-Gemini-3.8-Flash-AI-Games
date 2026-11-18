import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import type { SimulationEngine } from '../physics/Simulation';

/**
 * Smooth chase camera with energy-driven screen shake. Keeps depth and 3D motion
 * obvious while tracking the car through the approach, impact and settle phases.
 */
export function CameraRig({ engine }: { engine: SimulationEngine }) {
  const target = useRef(new THREE.Vector3());
  const desired = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const cam = state.camera;
    const c = engine.car;

    target.current.set(c.pos.x, 1.0, c.pos.z);
    desired.current.set(c.pos.x - 11, 6.5, c.pos.z + 11);

    const k = 1 - Math.pow(0.001, delta);
    cam.position.lerp(desired.current, k);

    const s = engine.shake;
    if (s > 0.001) {
      const t = state.clock.elapsedTime;
      cam.position.x += Math.sin(t * 47) * s * 0.5;
      cam.position.y += Math.sin(t * 61) * s * 0.4;
      cam.position.z += Math.cos(t * 53) * s * 0.5;
    }

    cam.lookAt(target.current);
  });

  return null;
}