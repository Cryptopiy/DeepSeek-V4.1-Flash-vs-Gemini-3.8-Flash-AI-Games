import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GameSimulation } from './game/simulation';
import { GameRenderer } from './render/GameRenderer';
import { InputController } from './game/input';
import { HUD } from './ui/HUD';
import { HUDData, InputState } from './game/types';
import './styles.css';

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const simRef = useRef<GameSimulation | null>(null);
  const rendererRef = useRef<GameRenderer | null>(null);
  const inputRef = useRef<InputController | null>(null);

  const [hudData, setHudData] = useState<HUDData | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Simulation, Input, and 3D Renderer
    const sim = new GameSimulation();
    const input = new InputController();
    const renderer = new GameRenderer(containerRef.current, sim);

    simRef.current = sim;
    inputRef.current = input;
    rendererRef.current = renderer;

    const ensureFocus = () => {
      window.focus();
    };
    window.addEventListener('click', ensureFocus);
    window.focus();

    let animId: number;
    let lastTime = performance.now();
    let hudUpdateTimer = 0;

    const gameLoop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const moveInput = input.getMovementInput();
      const inputState: InputState = {
        ...moveInput,
        interact: input.isJustPressed('interact') || input.isJustPressed('e') || input.isJustPressed('f'),
        restart: input.isJustPressed('restart') || input.isJustPressed('r'),
        toggleSound: input.isJustPressed('togglesound') || input.isJustPressed('m'),
        cameraToggle: input.isJustPressed('cameratoggle') || input.isJustPressed('c'),
      };

      // Reset edge-triggered keys for next frame
      input.resetJustPressed();

      // Step physics and game state
      sim.update(dt, inputState);

      // Render 3D Scene
      renderer.render(sim, dt);

      // Throttle React HUD state update to ~30-60fps
      hudUpdateTimer += dt;
      if (hudUpdateTimer >= 0.033) {
        hudUpdateTimer = 0;
        setHudData(sim.getHUDData());
      }

      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('click', ensureFocus);
      renderer.dispose();
      sim.dispose();
      input.dispose();
    };
  }, []);

  const handleInteract = useCallback(() => {
    if (simRef.current) {
      simRef.current.interactVehicle();
      setHudData(simRef.current.getHUDData());
    }
  }, []);

  const handleToggleSound = useCallback(() => {
    if (simRef.current) {
      simRef.current.soundManager.toggleMute();
      setHudData(simRef.current.getHUDData());
    }
  }, []);

  const handleRestart = useCallback(() => {
    if (simRef.current) {
      simRef.current.restartMission();
      setHudData(simRef.current.getHUDData());
    }
  }, []);

  const handleToggleCamera = useCallback(() => {
    if (simRef.current) {
      if (simRef.current.cameraMode === 'follow') simRef.current.cameraMode = 'cinematic';
      else if (simRef.current.cameraMode === 'cinematic') simRef.current.cameraMode = 'hood';
      else simRef.current.cameraMode = 'follow';
      setHudData(simRef.current.getHUDData());
    }
  }, []);

  return (
    <div className="game-container">
      <div ref={containerRef} className="render-canvas-container" />
      {hudData && simRef.current && (
        <HUD
          data={hudData}
          simulation={simRef.current}
          onInteract={handleInteract}
          onToggleSound={handleToggleSound}
          onRestart={handleRestart}
          onToggleCamera={handleToggleCamera}
        />
      )}
    </div>
  );
};

export default App;
