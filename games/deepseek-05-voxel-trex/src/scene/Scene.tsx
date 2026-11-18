import { ContactShadows } from '@react-three/drei'

const GROUND_COLOR = '#22262b'

export function Scene() {
  return (
    <>
      <color attach="background" args={['#10141a']} />
      <fog attach="fog" args={['#10141a', 55, 155]} />

      <hemisphereLight args={['#bcd3e8', '#2b2a20', 0.6]} />
      <ambientLight intensity={0.22} />

      <directionalLight
        position={[20, 32, 16]}
        intensity={2.4}
        color="#fff3e0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-32}
        shadow-camera-right={32}
        shadow-camera-top={32}
        shadow-camera-bottom={-32}
        shadow-camera-near={1}
        shadow-camera-far={120}
        shadow-bias={-0.0004}
      />
      <directionalLight position={[-22, 14, -18]} intensity={0.5} color="#8fb3ff" />

      {/* Studio platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <cylinderGeometry args={[46, 46, 1, 72]} />
        <meshStandardMaterial color={GROUND_COLOR} roughness={0.95} metalness={0} />
      </mesh>

      {/* Accent ring around the display */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[17, 18, 96]} />
        <meshStandardMaterial color="#3a4a32" roughness={0.6} metalness={0.1} />
      </mesh>

      <ContactShadows
        position={[0, 0.02, 0]}
        opacity={0.55}
        scale={95}
        blur={2.4}
        far={24}
        resolution={1024}
        color="#000000"
      />
    </>
  )
}