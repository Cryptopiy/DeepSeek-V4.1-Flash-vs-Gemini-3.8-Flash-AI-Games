import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { SimulationEngine } from '../physics/Simulation';
import { getObstacle } from '../physics/obstacles';
import type { ObstacleTypeId } from '../physics/types';

/**
 * Obstacle mesh. Its yaw is the collision angle, so the incoming car always meets a
 * real, rotated 3D collision surface. Movable obstacles translate after impact
 * because their transform is read from the engine state each frame.
 */
export function ObstacleMesh({ engine, type }: { engine: SimulationEngine; type: ObstacleTypeId }) {
  const group = useRef<THREE.Group>(null);
  const def = getObstacle(type);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const o = engine.obstacle;
    g.position.set(o.pos.x, o.pos.y, o.pos.z);
    g.rotation.y = o.yaw;
  });

  const [w, h, d] = def.size;
  const stripeCount = Math.max(3, Math.round(d / 1.2));

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow position={[0, h / 2, 0]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={def.color} roughness={0.75} metalness={0.15} />
      </mesh>

      {/* Hazard stripes on the impact face */}
      {Array.from({ length: stripeCount }).map((_, i) => {
        const z = -d / 2 + (i + 0.5) * (d / stripeCount);
        return (
          <mesh key={i} position={[-w / 2 - 0.03, h / 2, z]}>
            <boxGeometry args={[0.05, h * 0.8, (d / stripeCount) * 0.42]} />
            <meshStandardMaterial color="#141414" emissive="#f5c400" emissiveIntensity={0.25} />
          </mesh>
        );
      })}
    </group>
  );
}