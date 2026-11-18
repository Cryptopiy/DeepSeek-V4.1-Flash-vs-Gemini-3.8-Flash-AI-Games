import React, { useEffect, useRef } from 'react';
import { SceneManager } from '../scene/SceneManager';
import { AnimationMode, CameraPreset } from '../types/dinosaur';

interface VoxelCanvasProps {
  currentAnimation: AnimationMode;
  onAnimationChange: (mode: AnimationMode) => void;
  onModelLoaded: (stats: { totalVoxels: number; partCounts: Record<string, number> }) => void;
  sceneManagerRef: React.MutableRefObject<SceneManager | null>;
}

export const VoxelCanvas: React.FC<VoxelCanvasProps> = ({
  currentAnimation,
  onAnimationChange,
  onModelLoaded,
  sceneManagerRef
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const manager = new SceneManager(mountRef.current);
    sceneManagerRef.current = manager;

    // Report stats
    onModelLoaded({
      totalVoxels: manager.rig.totalVoxelCount,
      partCounts: manager.rig.partCounts
    });

    // When roar finishes, update UI state back to idle
    manager.animator.onRoarComplete = () => {
      onAnimationChange('idle');
    };

    return () => {
      manager.dispose();
      sceneManagerRef.current = null;
    };
  }, []);

  // Sync animation mode changes from UI
  useEffect(() => {
    if (sceneManagerRef.current) {
      sceneManagerRef.current.setAnimation(currentAnimation);
    }
  }, [currentAnimation]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#101416'
      }}
    />
  );
};
