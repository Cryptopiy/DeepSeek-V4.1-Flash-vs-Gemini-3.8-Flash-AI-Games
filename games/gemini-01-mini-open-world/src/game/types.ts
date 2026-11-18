export type PlayerState = 'on_foot' | 'driving';

export type VehicleType = 'sedan' | 'sports' | 'suv' | 'police' | 'taxi' | 'truck';

export type PedestrianState = 'walking' | 'waiting' | 'fleeing' | 'knocked';

export interface BoundingBox2D {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export interface Building {
  id: string;
  x: number;
  z: number;
  width: number;
  depth: number;
  height: number;
  color: string;
  roofColor: string;
  name?: string;
  isMissionTarget?: boolean;
  isRestrictedZone?: boolean;
}

export interface Prop {
  id: string;
  type: 'lightpole' | 'tree' | 'hydrant' | 'dumpster' | 'barrier' | 'trafficlight';
  x: number;
  z: number;
  rotation: number;
  radius: number;
}

export interface RoadWaypoint {
  id: string;
  x: number;
  z: number;
  next: string[];
}

export interface Vehicle {
  id: string;
  type: VehicleType;
  name: string;
  x: number;
  y: number;
  z: number;
  rotation: number; // radians around Y
  speed: number; // m/s
  steeringAngle: number; // current steering angle
  targetSteering: number;
  width: number;
  length: number;
  height: number;
  wheelbase: number;
  color: string;
  accentColor?: string;
  isPolice: boolean;
  sirenActive: boolean;
  sirenTimer: number;
  driver: 'player' | 'npc' | 'police' | null;
  health: number;
  maxSpeed: number;
  acceleration: number;
  reverseSpeed: number;
  brakeForce: number;
  turnSpeed: number;
  friction: number;
  wheelRotation: number;
  isParked: boolean;
  isMissionCar?: boolean;
  isBraking: boolean;
  collisionCooldown: number;
  // AI waypoint navigation
  currentWaypointId?: string;
  aiTargetX?: number;
  aiTargetZ?: number;
  aiWaitTimer?: number;
}

export interface Pedestrian {
  id: string;
  x: number;
  y: number;
  z: number;
  rotation: number;
  speed: number;
  walkSpeed: number;
  state: PedestrianState;
  targetX: number;
  targetZ: number;
  waypointIndex: number;
  route: { x: number; z: number }[];
  waitTime: number;
  fleeTimer: number;
  knockedTimer: number;
  legPhase: number;
  shirtColor: string;
  pantsColor: string;
  skinColor: string;
}

export interface Player {
  x: number;
  y: number;
  z: number;
  rotation: number;
  vx: number;
  vz: number;
  state: PlayerState;
  currentVehicleId: string | null;
  walkSpeed: number;
  sprintSpeed: number;
  isSprinting: boolean;
  legPhase: number;
  health: number;
}

export interface WantedState {
  level: number; // 0 to 3
  stars: number;
  evadeTimer: number; // seconds required to escape
  maxEvadeTimer: number;
  isEvading: boolean;
  spottedTimer: number;
  offenseText: string;
}

export type MissionStep = 'GOTO_START' | 'ENTER_CAR' | 'DRIVE_DELIVERY' | 'PARK_CAR' | 'COMPLETED';

export interface Mission {
  active: boolean;
  step: MissionStep;
  title: string;
  objective: string;
  targetX: number;
  targetZ: number;
  targetRadius: number;
  targetName: string;
  completed: boolean;
  failed: boolean;
  elapsed: number;
  reward: number;
}

export interface InputState {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  handbrake: boolean;
  interact: boolean;
  restart: boolean;
  toggleSound: boolean;
  sprint: boolean;
  cameraToggle: boolean;
}

export interface ParticleEffect {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
  type: 'smoke' | 'spark' | 'debris';
}

export interface HUDData {
  playerState: PlayerState;
  speed: number;
  maxSpeed: number;
  vehicleName: string | null;
  canEnterVehicle: boolean;
  vehicleHint: string | null;
  wantedLevel: number;
  isEvading: boolean;
  evadeProgress: number; // 0 to 1
  mission: {
    step: MissionStep;
    title: string;
    objective: string;
    distance: number;
    completed: boolean;
    failed: boolean;
    elapsed: number;
  };
  busted: boolean;
  soundEnabled: boolean;
  cameraMode: 'follow' | 'cinematic' | 'hood';
}
