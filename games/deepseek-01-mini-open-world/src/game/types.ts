export interface Box {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  height: number;
}

export type GameMode = 'foot' | 'driving';

export interface HudState {
  mode: GameMode;
  speed: number;
  objective: string;
  wanted: number;
  police: number;
  hint: string;
  vehicleKind: string;
  message: string;
  missionComplete: boolean;
}

export interface Vec2 {
  x: number;
  z: number;
}