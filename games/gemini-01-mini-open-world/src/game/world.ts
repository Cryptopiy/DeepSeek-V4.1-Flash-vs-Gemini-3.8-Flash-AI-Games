import { Building, Prop, RoadWaypoint, Vehicle, Pedestrian, VehicleType } from './types';

export const CITY_BOUNDS = {
  minX: -140,
  maxX: 140,
  minZ: -140,
  maxZ: 140,
};

export const ROAD_COORDINATES = [-90, -30, 30, 90];
export const ROAD_WIDTH = 14;
export const SIDEWALK_WIDTH = 3.5;
export const BLOCK_SIZE = 46;

// Key City Landmark Coordinates
export const LOCATIONS = {
  BANK_PLAZA: { x: -30, z: -30, name: 'Bank Financial Plaza' },
  MISSION_CAR_SPAWN: { x: -45, z: -32, name: 'Golden Apex Hypercar' },
  HARBOR_SAFEHOUSE: { x: 90, z: 90, name: 'Harbor Shipping Hangar' },
  POLICE_STATION: { x: 30, z: -90, name: 'Metro Police Precinct' },
  CENTRAL_PARK: { x: 0, z: 0, name: 'Grand City Park' },
};

// Generate realistic city buildings
export function generateBuildings(): Building[] {
  const buildings: Building[] = [];
  let idCounter = 1;

  // Define unique landmark buildings first
  // 1. Police Precinct (Restricted zone)
  buildings.push({
    id: `bld_police`,
    name: 'Metro Police Precinct',
    x: 48,
    z: -75,
    width: 24,
    depth: 26,
    height: 24,
    color: '#1e293b',
    roofColor: '#0f172a',
    isRestrictedZone: true,
  });

  // 2. City Central Bank (Near Mission Start)
  buildings.push({
    id: `bld_bank`,
    name: 'City Central Tower',
    x: -48,
    z: -48,
    width: 24,
    depth: 24,
    height: 68,
    color: '#334155',
    roofColor: '#1e293b',
    isMissionTarget: false,
  });

  // 3. Harbor Safehouse / Warehouse (Mission Delivery Target)
  buildings.push({
    id: `bld_safehouse`,
    name: 'Harbor Safehouse Depot',
    x: 75,
    z: 75,
    width: 32,
    depth: 24,
    height: 18,
    color: '#475569',
    roofColor: '#334155',
    isMissionTarget: true,
  });

  // 4. Metropolitan Hospital
  buildings.push({
    id: `bld_hospital`,
    name: 'City General Hospital',
    x: -75,
    z: 48,
    width: 26,
    depth: 24,
    height: 32,
    color: '#f8fafc',
    roofColor: '#e2e8f0',
  });

  // Fill in city blocks with architecturally varied buildings
  // Block centers: combination of intervals between roads [-120, -60, 0, 60, 120]
  const blockCenters = [-120, -60, 0, 60, 120];

  const palette = [
    { wall: '#1e293b', roof: '#0f172a' }, // Dark slate
    { wall: '#334155', roof: '#1e293b' }, // Steel blue
    { wall: '#475569', roof: '#334155' }, // Slate gray
    { wall: '#64748b', roof: '#475569' }, // Cool gray
    { wall: '#78716c', roof: '#44403c' }, // Warm granite
    { wall: '#b91c1c', roof: '#7f1d1d' }, // Brick red
    { wall: '#0f766e', roof: '#115e59' }, // Teal corporate
    { wall: '#1d4ed8', roof: '#1e40af' }, // Blue glass
    { wall: '#d97706', roof: '#92400e' }, // Amber accent
    { wall: '#374151', roof: '#1f2937' }, // Modern zinc
  ];

  blockCenters.forEach((bx, i) => {
    blockCenters.forEach((bz, j) => {
      // Leave center (0,0) as Central Park!
      if (bx === 0 && bz === 0) return;

      // Skip spots where unique landmarks already placed
      if ((bx === 60 && bz === -60) || (bx === -60 && bz === -60) || (bx === 60 && bz === 60) || (bx === -60 && bz === 60)) {
        // Place smaller supporting buildings in these landmark blocks
        const offX = bx === 60 ? 75 : -75;
        const offZ = bz === -60 ? -48 : (bz === 60 ? 48 : -75);
        buildings.push({
          id: `bld_sub_${idCounter++}`,
          x: offX,
          z: offZ,
          width: 18,
          depth: 18,
          height: 22 + ((i * 7 + j * 11) % 20),
          color: palette[(i + j) % palette.length].wall,
          roofColor: palette[(i + j) % palette.length].roof,
        });
        return;
      }

      // In regular blocks, place 2 to 3 buildings per block
      const count = (i + j) % 2 === 0 ? 2 : 1;
      if (count === 1) {
        const height = 28 + ((i * 13 + j * 17) % 45);
        buildings.push({
          id: `bld_${idCounter++}`,
          x: bx,
          z: bz,
          width: 32,
          depth: 32,
          height: height,
          color: palette[(i * 3 + j * 5) % palette.length].wall,
          roofColor: palette[(i * 3 + j * 5) % palette.length].roof,
        });
      } else {
        // Two buildings side by side
        const splitX = (i + j) % 2 === 0;
        const h1 = 20 + ((i * 9 + j * 3) % 40);
        const h2 = 24 + ((i * 5 + j * 7) % 36);

        if (splitX) {
          buildings.push({
            id: `bld_${idCounter++}`,
            x: bx - 10,
            z: bz,
            width: 16,
            depth: 32,
            height: h1,
            color: palette[(i * 2 + j) % palette.length].wall,
            roofColor: palette[(i * 2 + j) % palette.length].roof,
          });
          buildings.push({
            id: `bld_${idCounter++}`,
            x: bx + 10,
            z: bz,
            width: 16,
            depth: 32,
            height: h2,
            color: palette[(i + j * 4) % palette.length].wall,
            roofColor: palette[(i + j * 4) % palette.length].roof,
          });
        } else {
          buildings.push({
            id: `bld_${idCounter++}`,
            x: bx,
            z: bz - 10,
            width: 32,
            depth: 16,
            height: h1,
            color: palette[(i * 3 + j) % palette.length].wall,
            roofColor: palette[(i * 3 + j) % palette.length].roof,
          });
          buildings.push({
            id: `bld_${idCounter++}`,
            x: bx,
            z: bz + 10,
            width: 32,
            depth: 16,
            height: h2,
            color: palette[(i + j * 2) % palette.length].wall,
            roofColor: palette[(i + j * 2) % palette.length].roof,
          });
        }
      }
    });
  });

  return buildings;
}

// Generate street props (light poles, trees, hydrants, dumpsters)
export function generateProps(): Prop[] {
  const props: Prop[] = [];
  let id = 1;

  // 1. Street lights along sidewalks
  ROAD_COORDINATES.forEach((rx) => {
    for (let z = -130; z <= 130; z += 30) {
      if (Math.abs(z) > 135) return;
      // East sidewalk
      props.push({
        id: `prop_light_${id++}`,
        type: 'lightpole',
        x: rx + ROAD_WIDTH / 2 + 1.2,
        z: z,
        rotation: -Math.PI / 2,
        radius: 0.5,
      });
      // West sidewalk
      props.push({
        id: `prop_light_${id++}`,
        type: 'lightpole',
        x: rx - ROAD_WIDTH / 2 - 1.2,
        z: z,
        rotation: Math.PI / 2,
        radius: 0.5,
      });
    }
  });

  // 2. Central Park Trees and Benches
  const parkBounds = { minX: -20, maxX: 20, minZ: -20, maxZ: 20 };
  for (let x = -16; x <= 16; x += 8) {
    for (let z = -16; z <= 16; z += 8) {
      // Don't place on central walkway (cross through center)
      if (Math.abs(x) < 3 || Math.abs(z) < 3) continue;
      props.push({
        id: `prop_tree_${id++}`,
        type: 'tree',
        x: x + (Math.sin(id) * 1.5),
        z: z + (Math.cos(id) * 1.5),
        rotation: (id * 1.3) % (Math.PI * 2),
        radius: 1.2,
      });
    }
  }

  // 3. Hydrants and Dumpsters along blocks
  const blockCenters = [-120, -60, 60, 120];
  blockCenters.forEach((bx) => {
    blockCenters.forEach((bz) => {
      props.push({
        id: `prop_hydrant_${id++}`,
        type: 'hydrant',
        x: bx + 18,
        z: bz + 18,
        rotation: 0,
        radius: 0.4,
      });
      props.push({
        id: `prop_dumpster_${id++}`,
        type: 'dumpster',
        x: bx - 19,
        z: bz - 18,
        rotation: Math.PI / 2,
        radius: 1.0,
      });
    });
  });

  return props;
}

// Road Waypoint Network for Traffic AI
// Creates connected loops along both lanes of all roads
export function generateRoadWaypoints(): Record<string, RoadWaypoint> {
  const waypoints: Record<string, RoadWaypoint> = {};
  const roads = ROAD_COORDINATES;
  const laneOffset = 3.5; // Offset from road center for right-hand driving

  // Build grid of road intersection nodes
  // For each road intersection (rx, rz):
  // We have 4 approach points and 4 exit points
  roads.forEach((rx) => {
    // North-South Avenue:
    // Southbound lane: X = rx - laneOffset (moving +Z)
    // Northbound lane: X = rx + laneOffset (moving -Z)
    for (let z = -130; z <= 130; z += 20) {
      // Southbound node
      const sbId = `wp_sb_${rx}_${z}`;
      const nextZ_sb = z + 20;
      const nextSb = nextZ_sb <= 130 ? [`wp_sb_${rx}_${nextZ_sb}`] : [`wp_nb_${rx}_130`]; // loop at edge
      waypoints[sbId] = {
        id: sbId,
        x: rx - laneOffset,
        z: z,
        next: nextSb,
      };

      // Northbound node
      const nbId = `wp_nb_${rx}_${z}`;
      const nextZ_nb = z - 20;
      const nextNb = nextZ_nb >= -130 ? [`wp_nb_${rx}_${nextZ_nb}`] : [`wp_sb_${rx}_-130`]; // loop at edge
      waypoints[nbId] = {
        id: nbId,
        x: rx + laneOffset,
        z: z,
        next: nextNb,
      };
    }
  });

  // East-West Streets:
  // Eastbound lane: Z = rz + laneOffset (moving +X)
  // Westbound lane: Z = rz - laneOffset (moving -X)
  roads.forEach((rz) => {
    for (let x = -130; x <= 130; x += 20) {
      // Eastbound node
      const ebId = `wp_eb_${x}_${rz}`;
      const nextX_eb = x + 20;
      const nextEb = nextX_eb <= 130 ? [`wp_eb_${nextX_eb}_${rz}`] : [`wp_wb_130_${rz}`];
      waypoints[ebId] = {
        id: ebId,
        x: x,
        z: rz + laneOffset,
        next: nextEb,
      };

      // Westbound node
      const wbId = `wp_wb_${x}_${rz}`;
      const nextX_wb = x - 20;
      const nextWb = nextX_wb >= -130 ? [`wp_wb_${nextX_wb}_${rz}`] : [`wp_eb_-130_${rz}`];
      waypoints[wbId] = {
        id: wbId,
        x: x,
        z: rz - laneOffset,
        next: nextWb,
      };
    }
  });

  // Cross-connections at road intersections to allow cars to turn!
  roads.forEach((rx) => {
    roads.forEach((rz) => {
      // Near intersection, connect lanes:
      // Southbound (x=rx-3.5, z=rz-10) can continue south or turn right (west) onto (z=rz-3.5, x=rx-10)
      const sbNear = `wp_sb_${rx}_${rz - 10}`;
      if (waypoints[sbNear]) {
        // Can turn right to Westbound
        const wbTurn = `wp_wb_${rx - 10}_${rz}`;
        if (waypoints[wbTurn] && !waypoints[sbNear].next.includes(wbTurn)) {
          waypoints[sbNear].next.push(wbTurn);
        }
      }

      // Northbound (x=rx+3.5, z=rz+10) can continue north or turn right (east)
      const nbNear = `wp_nb_${rx}_${rz + 10}`;
      if (waypoints[nbNear]) {
        const ebTurn = `wp_eb_${rx + 10}_${rz}`;
        if (waypoints[ebTurn] && !waypoints[nbNear].next.includes(ebTurn)) {
          waypoints[nbNear].next.push(ebTurn);
        }
      }
    });
  });

  return waypoints;
}

// Initial Vehicles in the city
export function createInitialVehicles(): Vehicle[] {
  const vehicles: Vehicle[] = [];

  // Vehicle template specs
  const specs: Record<VehicleType, {
    width: number;
    length: number;
    height: number;
    wheelbase: number;
    maxSpeed: number;
    acceleration: number;
    brakeForce: number;
    turnSpeed: number;
    reverseSpeed: number;
    friction: number;
  }> = {
    sedan: {
      width: 2.1,
      length: 4.5,
      height: 1.45,
      wheelbase: 2.8,
      maxSpeed: 27,
      acceleration: 15,
      brakeForce: 25,
      turnSpeed: 2.4,
      reverseSpeed: -10,
      friction: 4.0,
    },
    sports: {
      width: 2.2,
      length: 4.6,
      height: 1.25,
      wheelbase: 2.7,
      maxSpeed: 38,
      acceleration: 24,
      brakeForce: 32,
      turnSpeed: 2.8,
      reverseSpeed: -14,
      friction: 3.5,
    },
    suv: {
      width: 2.3,
      length: 4.8,
      height: 1.8,
      wheelbase: 3.0,
      maxSpeed: 24,
      acceleration: 12,
      brakeForce: 22,
      turnSpeed: 2.0,
      reverseSpeed: -9,
      friction: 4.5,
    },
    police: {
      width: 2.2,
      length: 4.7,
      height: 1.55,
      wheelbase: 2.9,
      maxSpeed: 33,
      acceleration: 20,
      brakeForce: 30,
      turnSpeed: 2.6,
      reverseSpeed: -12,
      friction: 3.8,
    },
    taxi: {
      width: 2.1,
      length: 4.5,
      height: 1.5,
      wheelbase: 2.8,
      maxSpeed: 26,
      acceleration: 14,
      brakeForce: 24,
      turnSpeed: 2.3,
      reverseSpeed: -10,
      friction: 4.0,
    },
    truck: {
      width: 2.6,
      length: 6.2,
      height: 2.4,
      wheelbase: 4.0,
      maxSpeed: 20,
      acceleration: 9,
      brakeForce: 20,
      turnSpeed: 1.6,
      reverseSpeed: -7,
      friction: 5.0,
    },
  };

  // 1. Mission Car: Golden Hypercar parked at Bank Plaza
  vehicles.push({
    id: 'veh_mission_golden',
    type: 'sports',
    name: 'Apex Golden Hypercar',
    x: -45,
    y: 0,
    z: -32,
    rotation: Math.PI / 2, // Facing East
    speed: 0,
    steeringAngle: 0,
    targetSteering: 0,
    ...specs.sports,
    color: '#eab308', // Radiant Gold
    accentColor: '#06b6d4', // Cyan neon trim
    isPolice: false,
    sirenActive: false,
    sirenTimer: 0,
    driver: null,
    health: 100,
    wheelRotation: 0,
    isParked: true,
    isMissionCar: true,
    isBraking: false,
    collisionCooldown: 0,
  });

  // 2. Parked cars around town
  const parkedLocations = [
    { x: -22, z: -26, rot: 0, type: 'sedan' as VehicleType, color: '#ef4444', name: 'Crimson Cruiser' },
    { x: 15, z: -32, rot: 0, type: 'suv' as VehicleType, color: '#3b82f6', name: 'Cobalt Trek' },
    { x: -45, z: 28, rot: Math.PI, type: 'sedan' as VehicleType, color: '#10b981', name: 'Emerald Sedan' },
    { x: 45, z: 28, rot: 0, type: 'sports' as VehicleType, color: '#8b5cf6', name: 'Violet Spectre' },
    { x: -75, z: -88, rot: Math.PI / 2, type: 'taxi' as VehicleType, color: '#facc15', name: 'Metro Cab' },
  ];

  parkedLocations.forEach((p, idx) => {
    vehicles.push({
      id: `veh_parked_${idx + 1}`,
      type: p.type,
      name: p.name,
      x: p.x,
      y: 0,
      z: p.z,
      rotation: p.rot,
      speed: 0,
      steeringAngle: 0,
      targetSteering: 0,
      ...specs[p.type],
      color: p.color,
      isPolice: false,
      sirenActive: false,
      sirenTimer: 0,
      driver: null,
      health: 100,
      wheelRotation: 0,
      isParked: true,
      isBraking: false,
      collisionCooldown: 0,
    });
  });

  // 3. Police Cruisers (One parked at Precinct, one patrolling)
  vehicles.push({
    id: 'veh_police_station',
    type: 'police',
    name: 'Police Interceptor Unit 1',
    x: 48,
    y: 0,
    z: -88,
    rotation: 0,
    speed: 0,
    steeringAngle: 0,
    targetSteering: 0,
    ...specs.police,
    color: '#0f172a',
    accentColor: '#f8fafc',
    isPolice: true,
    sirenActive: false,
    sirenTimer: 0,
    driver: 'police',
    health: 100,
    wheelRotation: 0,
    isParked: true,
    isBraking: false,
    collisionCooldown: 0,
  });

  vehicles.push({
    id: 'veh_police_patrol',
    type: 'police',
    name: 'Police Patrol Unit 2',
    x: 33.5, // On road x=30 northbound lane
    y: 0,
    z: -40,
    rotation: Math.PI,
    speed: 12,
    steeringAngle: 0,
    targetSteering: 0,
    ...specs.police,
    color: '#0f172a',
    accentColor: '#f8fafc',
    isPolice: true,
    sirenActive: false,
    sirenTimer: 0,
    driver: 'police',
    health: 100,
    wheelRotation: 0,
    isParked: false,
    isBraking: false,
    collisionCooldown: 0,
    currentWaypointId: 'wp_nb_30_-40',
  });

  // 4. Traffic Vehicles moving on the grid
  const trafficSpawns = [
    { id: 'veh_trf_1', type: 'sedan' as VehicleType, color: '#f97316', x: -93.5, z: -60, rot: 0, wp: 'wp_sb_-90_-60' },
    { id: 'veh_trf_2', type: 'taxi' as VehicleType, color: '#eab308', x: -33.5, z: 20, rot: 0, wp: 'wp_sb_-30_20' },
    { id: 'veh_trf_3', type: 'suv' as VehicleType, color: '#64748b', x: 26.5, z: 40, rot: 0, wp: 'wp_sb_30_40' },
    { id: 'veh_trf_4', type: 'sedan' as VehicleType, color: '#ec4899', x: 93.5, z: -80, rot: Math.PI, wp: 'wp_nb_90_-80' },
    { id: 'veh_trf_5', type: 'truck' as VehicleType, color: '#0284c7', x: -40, z: -26.5, rot: Math.PI / 2, wp: 'wp_eb_-40_-30' },
    { id: 'veh_trf_6', type: 'sedan' as VehicleType, color: '#14b8a6', x: 50, z: 33.5, rot: -Math.PI / 2, wp: 'wp_wb_50_30' },
    { id: 'veh_trf_7', type: 'sports' as VehicleType, color: '#dc2626', x: -80, z: 93.5, rot: -Math.PI / 2, wp: 'wp_wb_-80_90' },
    { id: 'veh_trf_8', type: 'taxi' as VehicleType, color: '#eab308', x: -26.5, z: -80, rot: Math.PI, wp: 'wp_nb_-30_-80' },
  ];

  trafficSpawns.forEach((t) => {
    vehicles.push({
      id: t.id,
      type: t.type,
      name: `City ${t.type.toUpperCase()}`,
      x: t.x,
      y: 0,
      z: t.z,
      rotation: t.rot,
      speed: 10 + Math.random() * 5,
      steeringAngle: 0,
      targetSteering: 0,
      ...specs[t.type],
      color: t.color,
      isPolice: false,
      sirenActive: false,
      sirenTimer: 0,
      driver: 'npc',
      health: 100,
      wheelRotation: 0,
      isParked: false,
      isBraking: false,
      collisionCooldown: 0,
      currentWaypointId: t.wp,
    });
  });

  return vehicles;
}

// Generate pedestrian routes along sidewalks and park
export function createInitialPedestrians(): Pedestrian[] {
  const pedestrians: Pedestrian[] = [];
  const shirtColors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#e2e8f0'];
  const pantsColors = ['#1e293b', '#334155', '#475569', '#1f2937', '#0f172a'];
  const skinColors = ['#fcd34d', '#fbcfe8', '#fed7aa', '#d97706', '#92400e'];

  // Define some walkable sidewalk loop circuits
  const circuits = [
    // Circuit 1: Around Central Park
    [
      { x: -18, z: -18 }, { x: 18, z: -18 }, { x: 18, z: 18 }, { x: -18, z: 18 }
    ],
    // Circuit 2: Bank Plaza sidewalks
    [
      { x: -48, z: -18 }, { x: -22, z: -18 }, { x: -22, z: -42 }, { x: -48, z: -42 }
    ],
    // Circuit 3: East boulevard
    [
      { x: 38, z: -18 }, { x: 82, z: -18 }, { x: 82, z: 18 }, { x: 38, z: 18 }
    ],
    // Circuit 4: South-west residential block
    [
      { x: -82, z: 38 }, { x: -38, z: 38 }, { x: -38, z: 82 }, { x: -82, z: 82 }
    ],
    // Circuit 5: North-east commercial block
    [
      { x: 38, z: -82 }, { x: 82, z: -82 }, { x: 82, z: -38 }, { x: 38, z: -38 }
    ],
  ];

  let pId = 1;
  circuits.forEach((circuit, cIdx) => {
    // Spawn 4-5 pedestrians per circuit at different points
    for (let i = 0; i < 4; i++) {
      const wpIdx = i % circuit.length;
      const pt = circuit[wpIdx];
      const nextPt = circuit[(wpIdx + 1) % circuit.length];
      const angle = Math.atan2(nextPt.x - pt.x, nextPt.z - pt.z);

      pedestrians.push({
        id: `ped_${pId++}`,
        x: pt.x + (Math.random() - 0.5) * 2,
        y: 0,
        z: pt.z + (Math.random() - 0.5) * 2,
        rotation: angle,
        speed: 2.2 + Math.random() * 0.8,
        walkSpeed: 2.4 + Math.random() * 0.8,
        state: 'walking',
        targetX: nextPt.x,
        targetZ: nextPt.z,
        waypointIndex: (wpIdx + 1) % circuit.length,
        route: circuit,
        waitTime: 0,
        fleeTimer: 0,
        knockedTimer: 0,
        legPhase: Math.random() * Math.PI * 2,
        shirtColor: shirtColors[(pId + cIdx) % shirtColors.length],
        pantsColor: pantsColors[pId % pantsColors.length],
        skinColor: skinColors[pId % skinColors.length],
      });
    }
  });

  return pedestrians;
}
