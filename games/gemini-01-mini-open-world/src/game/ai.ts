import { Pedestrian, Vehicle, Player, WantedState, RoadWaypoint } from './types';

// Update Pedestrian Behaviors and State Machines
export function updatePedestrians(
  pedestrians: Pedestrian[],
  player: Player,
  vehicles: Vehicle[],
  dt: number
): void {
  for (const ped of pedestrians) {
    // 1. Knocked down state (recovering from vehicle hit)
    if (ped.state === 'knocked') {
      ped.knockedTimer -= dt;
      if (ped.knockedTimer <= 0) {
        ped.state = 'walking';
        ped.speed = ped.walkSpeed;
      }
      continue;
    }

    // 2. Check danger / fleeing trigger
    // If a car is driving fast nearby, pedestrian enters fleeing state
    let dangerX = 0;
    let dangerZ = 0;
    let isThreatened = false;

    for (const v of vehicles) {
      if (Math.abs(v.speed) > 5.0) {
        const dx = ped.x - v.x;
        const dz = ped.z - v.z;
        const distSq = dx * dx + dz * dz;
        if (distSq < 100) { // Within 10m of speeding car
          isThreatened = true;
          dangerX = v.x;
          dangerZ = v.z;
          break;
        }
      }
    }

    if (isThreatened) {
      ped.state = 'fleeing';
      ped.fleeTimer = 3.0;
      // Flee directly away from danger
      const dx = ped.x - dangerX;
      const dz = ped.z - dangerZ;
      ped.rotation = Math.atan2(dx, dz);
      ped.speed = 4.8; // Sprint away
    } else if (ped.state === 'fleeing') {
      ped.fleeTimer -= dt;
      if (ped.fleeTimer <= 0) {
        ped.state = 'walking';
        ped.speed = ped.walkSpeed;
      }
    }

    // 3. State: Waiting at sidewalk corner
    if (ped.state === 'waiting') {
      ped.waitTime -= dt;
      if (ped.waitTime <= 0) {
        ped.state = 'walking';
        ped.speed = ped.walkSpeed;
        ped.waypointIndex = (ped.waypointIndex + 1) % ped.route.length;
        const nextWp = ped.route[ped.waypointIndex];
        ped.targetX = nextWp.x;
        ped.targetZ = nextWp.z;
      }
      continue;
    }

    // 4. State: Walking along route
    if (ped.state === 'walking' || ped.state === 'fleeing') {
      if (ped.state === 'walking') {
        const dx = ped.targetX - ped.x;
        const dz = ped.targetZ - ped.z;
        const dist = Math.sqrt(dx * dx + dz * dz);

        if (dist < 1.2) {
          // Reached waypoint: 30% chance to pause/wait, else continue to next
          if (Math.random() < 0.28) {
            ped.state = 'waiting';
            ped.waitTime = 2.0 + Math.random() * 2.5;
            continue;
          } else {
            ped.waypointIndex = (ped.waypointIndex + 1) % ped.route.length;
            const nextWp = ped.route[ped.waypointIndex];
            ped.targetX = nextWp.x;
            ped.targetZ = nextWp.z;
          }
        } else {
          // Face target smoothly
          const targetAngle = Math.atan2(dx, dz);
          // Angle interpolation
          let diff = targetAngle - ped.rotation;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          ped.rotation += diff * Math.min(dt * 6.0, 1.0);
        }
      }

      // Move forward in current facing direction
      const step = ped.speed * dt;
      ped.x += Math.sin(ped.rotation) * step;
      ped.z += Math.cos(ped.rotation) * step;

      // Animate leg swinging
      ped.legPhase += ped.speed * dt * 4.5;
    }
  }
}

// Update Traffic NPC Cars (Waypoints, speed control, collision avoidance)
export function updateTrafficCars(
  vehicles: Vehicle[],
  waypoints: Record<string, RoadWaypoint>,
  player: Player,
  dt: number
): void {
  for (const v of vehicles) {
    if (v.driver !== 'npc' || v.isParked) continue;

    // 1. Waypoint target following
    if (!v.currentWaypointId || !waypoints[v.currentWaypointId]) {
      // Pick nearest waypoint
      let nearestId = '';
      let minDist = Infinity;
      for (const id in waypoints) {
        const wp = waypoints[id];
        const distSq = (v.x - wp.x) ** 2 + (v.z - wp.z) ** 2;
        if (distSq < minDist) {
          minDist = distSq;
          nearestId = id;
        }
      }
      v.currentWaypointId = nearestId || undefined;
    }

    if (v.currentWaypointId && waypoints[v.currentWaypointId]) {
      const curWp = waypoints[v.currentWaypointId];
      const toWpX = curWp.x - v.x;
      const toWpZ = curWp.z - v.z;
      const distToWp = Math.sqrt(toWpX * toWpX + toWpZ * toWpZ);

      // Advance to next waypoint if close
      if (distToWp < 5.0) {
        if (curWp.next && curWp.next.length > 0) {
          // Pick randomly among branches at intersection
          const nextIdx = Math.floor(Math.random() * curWp.next.length);
          v.currentWaypointId = curWp.next[nextIdx];
        }
      }

      // Calculate steering toward current waypoint
      const targetAngle = Math.atan2(toWpX, toWpZ);
      let angleDiff = targetAngle - v.rotation;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

      v.targetSteering = Math.max(-0.55, Math.min(0.55, angleDiff * 1.6));
    }

    // 2. Obstacle / Vehicle ahead detection (Sensor raycast)
    let mustBrake = false;
    let targetCruiseSpeed = 14.0; // Normal city cruise speed

    const fwdX = Math.sin(v.rotation);
    const fwdZ = Math.cos(v.rotation);

    for (const other of vehicles) {
      if (other.id === v.id) continue;
      const toOtherX = other.x - v.x;
      const toOtherZ = other.z - v.z;
      const forwardProj = toOtherX * fwdX + toOtherZ * fwdZ;
      const sideProj = Math.abs(toOtherX * -fwdZ + toOtherZ * fwdX);

      // If car is directly in front within 10 meters and within lane width (3.2m)
      if (forwardProj > 0.5 && forwardProj < 11.0 && sideProj < 3.0) {
        mustBrake = true;
        targetCruiseSpeed = Math.min(targetCruiseSpeed, Math.max(0, other.speed - 2));
      }
    }

    // Also stop for player on foot if in front
    if (player.state === 'on_foot') {
      const toPlayerX = player.x - v.x;
      const toPlayerZ = player.z - v.z;
      const forwardProj = toPlayerX * fwdX + toPlayerZ * fwdZ;
      const sideProj = Math.abs(toPlayerX * -fwdZ + toPlayerZ * fwdX);
      if (forwardProj > 0.5 && forwardProj < 9.0 && sideProj < 2.5) {
        mustBrake = true;
        targetCruiseSpeed = 0;
      }
    }

    // 3. Speed & Physics integration
    if (mustBrake || v.speed > targetCruiseSpeed) {
      v.speed = Math.max(0, v.speed - v.brakeForce * 0.8 * dt);
      v.isBraking = true;
    } else {
      v.speed = Math.min(targetCruiseSpeed, v.speed + v.acceleration * 0.7 * dt);
      v.isBraking = false;
    }

    // Smooth steering interpolation
    v.steeringAngle += (v.targetSteering - v.steeringAngle) * Math.min(dt * 8, 1);

    // Apply vehicle kinematic rotation based on speed and wheelbase
    const turnRate = (v.speed / v.wheelbase) * Math.tan(v.steeringAngle);
    v.rotation += turnRate * dt;

    // Position integration
    v.x += Math.sin(v.rotation) * v.speed * dt;
    v.z += Math.cos(v.rotation) * v.speed * dt;
    v.wheelRotation += (v.speed / 0.4) * dt;

    if (v.collisionCooldown > 0) {
      v.collisionCooldown -= dt;
    }
  }
}

// Update Police Pursuit AI & Wanted System
export function updatePoliceAI(
  policeVehicles: Vehicle[],
  player: Player,
  playerVehicle: Vehicle | null,
  wantedState: WantedState,
  dt: number,
  onBusted?: () => void
): void {
  const pX = player.state === 'driving' && playerVehicle ? playerVehicle.x : player.x;
  const pZ = player.state === 'driving' && playerVehicle ? playerVehicle.z : player.z;
  const pSpeed = player.state === 'driving' && playerVehicle ? Math.abs(playerVehicle.speed) : Math.sqrt(player.vx * player.vx + player.vz * player.vz);

  // If not wanted, police remain in patrol / idle mode
  if (wantedState.level <= 0) {
    for (const pv of policeVehicles) {
      pv.sirenActive = false;
      if (pv.isParked) continue;
      // Normal patrol speed
      pv.speed = Math.max(0, pv.speed - pv.friction * dt);
    }
    return;
  }

  // Active Pursuit!
  let closestDist = Infinity;

  for (const pv of policeVehicles) {
    pv.isParked = false; // Unleash parked police units!
    pv.sirenActive = true;
    pv.sirenTimer += dt * 10;

    const dx = pX - pv.x;
    const dz = pZ - pv.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    if (dist < closestDist) closestDist = dist;

    // Steer aggressively toward player
    const targetAngle = Math.atan2(dx, dz);
    let angleDiff = targetAngle - pv.rotation;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

    pv.targetSteering = Math.max(-0.6, Math.min(0.6, angleDiff * 2.0));
    pv.steeringAngle += (pv.targetSteering - pv.steeringAngle) * Math.min(dt * 10, 1);

    // Pursuit speed logic
    const chaseSpeed = 26 + wantedState.level * 4.0;
    if (pv.speed < chaseSpeed) {
      pv.speed += pv.acceleration * dt;
    }

    // Kinematic motion
    const turnRate = (pv.speed / pv.wheelbase) * Math.tan(pv.steeringAngle);
    pv.rotation += turnRate * dt;

    pv.x += Math.sin(pv.rotation) * pv.speed * dt;
    pv.z += Math.cos(pv.rotation) * pv.speed * dt;
    pv.wheelRotation += (pv.speed / 0.4) * dt;

    if (pv.collisionCooldown > 0) {
      pv.collisionCooldown -= dt;
    }

    // Busted condition: Police within 4.5m and player stopped for sustained time
    if (dist < 4.5 && pSpeed < 2.0) {
      wantedState.spottedTimer += dt;
      if (wantedState.spottedTimer > 3.2) {
        if (onBusted) onBusted();
      }
    } else {
      wantedState.spottedTimer = Math.max(0, wantedState.spottedTimer - dt * 0.5);
    }
  }

  // Evasion logic: If player managed to pull away (> 60m from closest police)
  if (closestDist > 60) {
    wantedState.isEvading = true;
    wantedState.evadeTimer -= dt;

    if (wantedState.evadeTimer <= 0) {
      // Heat dropped!
      wantedState.level = Math.max(0, wantedState.level - 1);
      wantedState.stars = wantedState.level;
      wantedState.evadeTimer = wantedState.maxEvadeTimer;
      if (wantedState.level === 0) {
        wantedState.isEvading = false;
        wantedState.offenseText = 'Escaped!';
      }
    }
  } else {
    // Re-spotted!
    wantedState.isEvading = false;
    wantedState.evadeTimer = wantedState.maxEvadeTimer;
  }
}
