import { Canvas, useFrame } from '@react-three/fiber';
import { memo } from 'react';
import type { SimulationEngine } from '../physics/Simulation';
import type { ObstacleTypeId } from '../physics/types';
import { CameraRig } from './CameraRig';
import { DebrisField } from './DebrisField';
import { ObstacleMesh } from './ObstacleMesh';
import { Track } from './Track';
import { Vehicle } from './Vehicle';

function EngineRunner({ engine }: { engine: SimulationEngine }) {
  useFrame((_, delta) => engine.update(delta));
  return null;
}

function Scene({ engine, obstacleType }: { engine: SimulationEngine; obstacleType: ObstacleTypeId }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [-46, 8, 14], fov: 52, near: 0.1, far: 500 }}
    >
      <color attach="background" args={['#0a0f18']} />
      <fog attach="fog" args={['#0a0f18', 70, 190]} />

      <hemisphereLight args={['#9fc6ff', '#1a1f28', 0.6]} />
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[30, 45, 20]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={60}
        shadow-camera-bottom={-40}
        shadow-camera-near={1}
        shadow-camera-far={200}
      />

      <Track />
      <ObstacleMesh engine={engine} type={obstacleType} />
      <Vehicle engine={engine} />
      <DebrisField engine={engine} />
      <CameraRig engine={engine} />
      <EngineRunner engine={engine} />
    </Canvas>
  );
}

export const CrashScene = memo(Scene);