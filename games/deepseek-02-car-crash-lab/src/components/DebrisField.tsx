import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import type { SimulationEngine } from '../physics/Simulation';

const MAX = 64;
const dummy = new THREE.Object3D();

/** GPU-instanced debris field. Matrices come straight from the physics engine. */
export function DebrisField({ engine }: { engine: SimulationEngine }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const geo = useMemo(() => new THREE.BoxGeometry(0.24, 0.16, 0.3), []);
  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#8b9099', metalness: 0.6, roughness: 0.4 }),
    [],
  );

  useFrame(() => {
    const m = ref.current;
    if (!m) return;
    const list = engine.debris;
    const n = Math.min(list.length, MAX);
    for (let i = 0; i < MAX; i++) {
      if (i < n) {
        const d = list[i];
        const s = d.size;
        dummy.position.set(d.pos.x, d.pos.y, d.pos.z);
        dummy.rotation.set(d.spin * d.life, d.life * 2 + d.pos.z, d.spin * 0.5);
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        m.setMatrixAt(i, dummy.matrix);
      } else {
        dummy.position.set(0, -100, 0);
        dummy.scale.setScalar(0.0001);
        dummy.updateMatrix();
        m.setMatrixAt(i, dummy.matrix);
      }
    }
    m.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={ref} args={[geo, mat, MAX]} castShadow frustumCulled={false} />;
}