import React, { useState, useRef, useCallback } from 'react';
import { VoxelCanvas } from './components/VoxelCanvas';
import { UIOverlay } from './components/UIOverlay';
import { SceneManager } from './scene/SceneManager';
import { AnimationMode, CameraPreset } from './types/dinosaur';
import './App.css';

export const App: React.FC = () => {
  const [currentAnimation, setCurrentAnimation] = useState<AnimationMode>('idle');
  const [voxelCount, setVoxelCount] = useState<number>(0);
  const [partCounts, setPartCounts] = useState<Record<string, number>>({});
  const sceneManagerRef = useRef<SceneManager | null>(null);

  const handleAnimationChange = useCallback((mode: AnimationMode) => {
    setCurrentAnimation(mode);
    if (sceneManagerRef.current) {
      sceneManagerRef.current.setAnimation(mode);
    }
  }, []);

  const handleResetCamera = useCallback(() => {
    if (sceneManagerRef.current) {
      sceneManagerRef.current.resetCamera();
    }
  }, []);

  const handleCameraPreset = useCallback((preset: CameraPreset) => {
    if (sceneManagerRef.current) {
      sceneManagerRef.current.setCameraPreset(preset);
    }
  }, []);

  const handleModelLoaded = useCallback((stats: { totalVoxels: number; partCounts: Record<string, number> }) => {
    setVoxelCount(stats.totalVoxels);
    setPartCounts(stats.partCounts);
  }, []);

  return (
    <div className="app-container">
      <VoxelCanvas
        currentAnimation={currentAnimation}
        onAnimationChange={handleAnimationChange}
        onModelLoaded={handleModelLoaded}
        sceneManagerRef={sceneManagerRef}
      />
      <UIOverlay
        currentAnimation={currentAnimation}
        onSelectAnimation={handleAnimationChange}
        onResetCamera={handleResetCamera}
        onSelectCameraPreset={handleCameraPreset}
        voxelCount={voxelCount}
        partCounts={partCounts}
      />
    </div>
  );
};

export default App;
