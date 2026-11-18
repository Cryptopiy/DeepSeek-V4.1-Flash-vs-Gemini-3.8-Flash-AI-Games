import { useEffect, useRef, useState } from 'react';
import { Game } from './game/Game';
import { Hud } from './ui/Hud';
import type { HudState } from './game/types';

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hud, setHud] = useState<HudState | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const game = new Game();
    game.onHud(setHud);
    game.mount(container);
    return () => game.dispose();
  }, []);

  return (
    <div className="app">
      <div className="canvas-host" ref={mountRef} />
      {hud && <Hud state={hud} />}
    </div>
  );
}