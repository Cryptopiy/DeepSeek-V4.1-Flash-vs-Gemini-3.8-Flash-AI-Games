import * as THREE from 'three';

/** Static 3D crash-test environment: ground, scale markers, rails and impact zone. */
export function Track() {
  const marks: number[] = [];
  for (let x = -40; x <= 10; x += 5) marks.push(x);

  return (
    <group>
      {/* Asphalt */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[160, 60]} />
        <meshStandardMaterial color="#20242b" roughness={0.95} />
      </mesh>

      {/* Lane edge lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -2.4]}>
        <planeGeometry args={[150, 0.12]} />
        <meshBasicMaterial color="#c8cdd4" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 2.4]}>
        <planeGeometry args={[150, 0.12]} />
        <meshBasicMaterial color="#c8cdd4" transparent opacity={0.5} />
      </mesh>

      {/* Distance scale markers every 5 m */}
      {marks.map((x) => (
        <mesh key={x} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.012, 0]}>
          <planeGeometry args={[0.12, 11]} />
          <meshBasicMaterial color="#3fd0c9" transparent opacity={0.28} />
        </mesh>
      ))}

      {/* Start gate posts */}
      <mesh position={[-35, 1.6, -3.2]}>
        <cylinderGeometry args={[0.12, 0.12, 3.2, 12]} />
        <meshStandardMaterial color="#c0392b" emissive="#c0392b" emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[-35, 1.6, 3.2]}>
        <cylinderGeometry args={[0.12, 0.12, 3.2, 12]} />
        <meshStandardMaterial color="#c0392b" emissive="#c0392b" emissiveIntensity={0.25} />
      </mesh>

      {/* Impact zone ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[4.4, 5.4, 48]} />
        <meshBasicMaterial color="#ff3b2f" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>

      {/* Safety rails */}
      <mesh position={[-15, 0.3, -8]} receiveShadow>
        <boxGeometry args={[150, 0.6, 0.35]} />
        <meshStandardMaterial color="#2f3a46" roughness={0.8} metalness={0.3} />
      </mesh>
      <mesh position={[-15, 0.3, 8]} receiveShadow>
        <boxGeometry args={[150, 0.6, 0.35]} />
        <meshStandardMaterial color="#2f3a46" roughness={0.8} metalness={0.3} />
      </mesh>
    </group>
  );
}