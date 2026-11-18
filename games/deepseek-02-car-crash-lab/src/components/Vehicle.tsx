import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import type { SimulationEngine } from '../physics/Simulation';
import { clamp } from '../utils/math';

const BODY = '#d8402f';
const DAMAGE = '#1c1412';
const GLASS = '#9fd3ff';
const TYRE = '#14171b';

function applyDamage(
  mat: THREE.MeshStandardMaterial | null,
  base: THREE.Color,
  damage: number,
  damageColor: THREE.Color,
): void {
  if (!mat) return;
  const t = clamp(damage, 0, 1);
  mat.color.copy(base).lerp(damageColor, t * 0.85);
  mat.emissive.set('#ff2a08');
  mat.emissiveIntensity = t * t * 0.7;
  mat.roughness = 0.35 + 0.5 * t;
}

/**
 * 3D vehicle. Reads the live engine state every frame and mutates the transform
 * directly (position + yaw/roll/pitch) so post-impact motion is driven by physics,
 * not by a disconnected CSS animation. Body deformation scales with damage.
 */
export function Vehicle({ engine }: { engine: SimulationEngine }) {
  const group = useRef<THREE.Group>(null);
  const front = useRef<THREE.Mesh>(null);
  const hood = useRef<THREE.Mesh>(null);
  const cabin = useRef<THREE.Mesh>(null);

  const frontMat = useRef<THREE.MeshStandardMaterial>(null);
  const hoodMat = useRef<THREE.MeshStandardMaterial>(null);
  const leftMat = useRef<THREE.MeshStandardMaterial>(null);
  const rightMat = useRef<THREE.MeshStandardMaterial>(null);
  const rearMat = useRef<THREE.MeshStandardMaterial>(null);

  const base = useMemo(
    () => ({
      front: new THREE.Color(BODY),
      left: new THREE.Color(BODY),
      right: new THREE.Color(BODY),
      rear: new THREE.Color(BODY),
      damage: new THREE.Color(DAMAGE),
    }),
    [],
  );

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const c = engine.car;
    g.position.set(c.pos.x, c.pos.y, c.pos.z);
    g.rotation.set(c.pitch, c.yaw, c.roll);

    const imp = engine.impact;
    const d = imp ? clamp(imp.damagePct / 100, 0, 1) : 0;
    const zones = imp ? imp.zones : { front: 0, rear: 0, left: 0, right: 0 };

    if (front.current) {
      front.current.position.x = 2.15 - 0.55 * d;
      front.current.scale.x = 1 - 0.6 * d;
    }
    if (hood.current) {
      hood.current.position.x = 1.5 - 0.4 * d;
      hood.current.scale.x = 1 - 0.35 * d;
      hood.current.rotation.z = -0.18 * d;
    }
    if (cabin.current) {
      cabin.current.position.x = -0.35 + 0.25 * d;
      cabin.current.rotation.z = 0.08 * d;
    }

    applyDamage(frontMat.current, base.front, zones.front / 100, base.damage);
    applyDamage(hoodMat.current, base.front, zones.front / 100, base.damage);
    applyDamage(leftMat.current, base.left, zones.left / 100, base.damage);
    applyDamage(rightMat.current, base.right, zones.right / 100, base.damage);
    applyDamage(rearMat.current, base.rear, zones.rear / 100, base.damage);
  });

  return (
    <group ref={group}>
      {/* Chassis */}
      <mesh castShadow position={[0, 0.8, 0]}>
        <boxGeometry args={[4.4, 0.6, 1.8]} />
        <meshStandardMaterial color={BODY} roughness={0.35} metalness={0.25} />
      </mesh>

      {/* Cabin */}
      <mesh ref={cabin} castShadow position={[-0.35, 1.3, 0]}>
        <boxGeometry args={[1.9, 0.6, 1.55]} />
        <meshStandardMaterial color={BODY} roughness={0.35} metalness={0.25} />
      </mesh>
      <mesh position={[-0.35, 1.32, 0]}>
        <boxGeometry args={[1.7, 0.45, 1.6]} />
        <meshStandardMaterial color={GLASS} roughness={0.1} metalness={0.6} transparent opacity={0.55} />
      </mesh>

      {/* Hood / front deformable zone */}
      <mesh ref={hood} castShadow position={[1.5, 1.0, 0]}>
        <boxGeometry args={[1.2, 0.34, 1.7]} />
        <meshStandardMaterial ref={hoodMat} color={BODY} roughness={0.4} metalness={0.25} />
      </mesh>

      {/* Front bumper / crash structure */}
      <mesh ref={front} castShadow position={[2.15, 0.6, 0]}>
        <boxGeometry args={[0.35, 0.5, 1.8]} />
        <meshStandardMaterial ref={frontMat} color={BODY} roughness={0.4} metalness={0.25} />
      </mesh>

      {/* Side panels (left / right damage zones) */}
      <mesh castShadow position={[-0.1, 0.8, -0.95]}>
        <boxGeometry args={[3.8, 0.55, 0.1]} />
        <meshStandardMaterial ref={leftMat} color={BODY} roughness={0.4} metalness={0.25} />
      </mesh>
      <mesh castShadow position={[-0.1, 0.8, 0.95]}>
        <boxGeometry args={[3.8, 0.55, 0.1]} />
        <meshStandardMaterial ref={rightMat} color={BODY} roughness={0.4} metalness={0.25} />
      </mesh>

      {/* Rear bumper (rear damage zone) */}
      <mesh castShadow position={[-2.2, 0.6, 0]}>
        <boxGeometry args={[0.3, 0.5, 1.8]} />
        <meshStandardMaterial ref={rearMat} color={BODY} roughness={0.4} metalness={0.25} />
      </mesh>

      {/* Headlights */}
      <mesh position={[2.18, 0.95, -0.55]}>
        <boxGeometry args={[0.1, 0.18, 0.4]} />
        <meshStandardMaterial color="#fff6cc" emissive="#ffe17a" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[2.18, 0.95, 0.55]}>
        <boxGeometry args={[0.1, 0.18, 0.4]} />
        <meshStandardMaterial color="#fff6cc" emissive="#ffe17a" emissiveIntensity={0.8} />
      </mesh>

      {/* Tail lights */}
      <mesh position={[-2.22, 0.85, -0.6]}>
        <boxGeometry args={[0.08, 0.16, 0.35]} />
        <meshStandardMaterial color="#ff2b2b" emissive="#ff0000" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[-2.22, 0.85, 0.6]}>
        <boxGeometry args={[0.08, 0.16, 0.35]} />
        <meshStandardMaterial color="#ff2b2b" emissive="#ff0000" emissiveIntensity={0.4} />
      </mesh>

      {[-1.5, 1.5].map((x) =>
        [-0.92, 0.92].map((z) => (
          <mesh key={`${x}-${z}`} castShadow position={[x, 0.35, z]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.35, 0.35, 0.26, 20]} />
            <meshStandardMaterial color={TYRE} roughness={0.85} />
          </mesh>
        )),
      )}
    </group>
  );
}