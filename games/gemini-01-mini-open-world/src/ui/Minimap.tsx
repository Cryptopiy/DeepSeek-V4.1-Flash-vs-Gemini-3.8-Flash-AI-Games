import React, { useRef, useEffect } from 'react';
import { GameSimulation } from '../game/simulation';
import { ROAD_COORDINATES, ROAD_WIDTH, CITY_BOUNDS } from '../game/world';

interface MinimapProps {
  simulation: GameSimulation;
}

export const Minimap: React.FC<MinimapProps> = ({ simulation }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animId: number;

    const renderMinimap = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const size = canvas.width;
      const center = size / 2;
      const scale = 0.85; // Pixels per world meter

      const pX = simulation.player.x;
      const pZ = simulation.player.z;
      const pRot = simulation.player.rotation;

      // Clear circular radar background
      ctx.clearRect(0, 0, size, size);

      ctx.save();
      // Clip to circular radar
      ctx.beginPath();
      ctx.arc(center, center, center - 2, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = '#090d16ee';
      ctx.fillRect(0, 0, size, size);

      // Translate so player is at center of radar
      ctx.translate(center, center);

      // 1. Draw Central Park
      const parkX = (0 - pX) * scale;
      const parkZ = (0 - pZ) * scale;
      ctx.fillStyle = '#14532d88';
      ctx.fillRect(parkX - 21 * scale, parkZ - 21 * scale, 42 * scale, 42 * scale);

      // 2. Draw Roads
      ctx.fillStyle = '#1e293baa';
      ROAD_COORDINATES.forEach((rx) => {
        const screenRx = (rx - pX) * scale;
        ctx.fillRect(screenRx - (ROAD_WIDTH / 2) * scale, -200, ROAD_WIDTH * scale, 400);
      });
      ROAD_COORDINATES.forEach((rz) => {
        const screenRz = (rz - pZ) * scale;
        ctx.fillRect(-200, screenRz - (ROAD_WIDTH / 2) * scale, 400, ROAD_WIDTH * scale);
      });

      // 3. Draw Buildings
      ctx.fillStyle = '#334155aa';
      for (const b of simulation.buildings) {
        const bx = (b.x - pX) * scale;
        const bz = (b.z - pZ) * scale;
        const bw = b.width * scale;
        const bd = b.depth * scale;

        if (b.isRestrictedZone) {
          ctx.fillStyle = '#1e3a8a88'; // Police blue
        } else if (b.isMissionTarget) {
          ctx.fillStyle = '#065f4688'; // Safehouse green
        } else {
          ctx.fillStyle = '#334155aa';
        }

        ctx.fillRect(bx - bw / 2, bz - bd / 2, bw, bd);
      }

      // 4. Draw Traffic & Police Vehicles
      for (const v of simulation.vehicles) {
        if (v.driver === 'player') continue;
        const vx = (v.x - pX) * scale;
        const vz = (v.z - pZ) * scale;

        // Skip if outside radar bounds
        if (vx * vx + vz * vz > (center + 10) ** 2) continue;

        if (v.isPolice) {
          // Flashing red/blue police dot
          const isRed = Math.floor(performance.now() / 150) % 2 === 0;
          ctx.fillStyle = isRed ? '#ef4444' : '#3b82f6';
          ctx.beginPath();
          ctx.arc(vx, vz, 3.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (v.isMissionCar) {
          ctx.fillStyle = '#facc15';
          ctx.beginPath();
          ctx.arc(vx, vz, 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath();
          ctx.arc(vx, vz, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Draw Pedestrians
      ctx.fillStyle = '#cbd5e166';
      for (const ped of simulation.pedestrians) {
        const px = (ped.x - pX) * scale;
        const pz = (ped.z - pZ) * scale;
        if (px * px + pz * pz > center ** 2) continue;
        ctx.fillRect(px - 1, pz - 1, 2, 2);
      }

      // 6. Draw Mission Waypoint Target
      if (simulation.mission.active && !simulation.mission.completed) {
        const mx = (simulation.mission.targetX - pX) * scale;
        const mz = (simulation.mission.targetZ - pZ) * scale;
        const dist = Math.sqrt(mx * mx + mz * mz);

        let drawMx = mx;
        let drawMz = mz;

        // Clamp to radar perimeter if off-screen
        if (dist > center - 12) {
          drawMx = (mx / dist) * (center - 12);
          drawMz = (mz / dist) * (center - 12);
        }

        const pulse = 1 + Math.sin(performance.now() / 200) * 0.25;
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(drawMx, drawMz, 5 * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 7. Draw Player in Center with Directional Arrow
      ctx.save();
      ctx.rotate(pRot);

      // Player Arrow
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(0, 7);
      ctx.lineTo(-5, -5);
      ctx.lineTo(0, -2);
      ctx.lineTo(5, -5);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
      ctx.restore();

      // Border ring and North compass indicator
      ctx.strokeStyle = '#38bdf866';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(center, center, center - 2, 0, Math.PI * 2);
      ctx.stroke();

      // North label
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('N', center, 14);

      animId = requestAnimationFrame(renderMinimap);
    };

    animId = requestAnimationFrame(renderMinimap);
    return () => cancelAnimationFrame(animId);
  }, [simulation]);

  return (
    <div className="minimap-container">
      <canvas
        ref={canvasRef}
        width={180}
        height={180}
        className="minimap-canvas"
      />
    </div>
  );
};
