import { FlowSample, SimGrid, Vehicle } from './types'
import { clamp } from './util'

export const FLOAT_START = 0.18
export const FLOW_K = 620
export const DRAG = 1.7
export const TORQUE_K = 1.4
export const GROUND_FRICTION = 7
export const MAX_OBJECT_SPEED = 8
export const MAX_OBJECT_SPIN = 3

function collideBuildings(sim: SimGrid, v: Vehicle): void {
  for (const b of sim.buildings) {
    const ex = b.w * 0.5 + v.radius * 0.7
    const ez = b.d * 0.5 + v.radius * 0.7
    const dx = v.x - b.x
    const dz = v.z - b.z
    if (Math.abs(dx) < ex && Math.abs(dz) < ez) {
      const ox = ex - Math.abs(dx)
      const oz = ez - Math.abs(dz)
      if (ox < oz) {
        v.x = b.x + Math.sign(dx || 1) * ex
        v.vx *= -0.15
      } else {
        v.z = b.z + Math.sign(dz || 1) * ez
        v.vz *= -0.15
      }
    }
  }
}

export function updateVehicles(sim: SimGrid, dt: number): void {
  const flow: FlowSample = { x: 0, z: 0 }
  const lim = sim.half - 4

  for (const v of sim.vehicles) {
    const depth = sim.sampleDepth(v.x, v.z)
    sim.sampleFlow(v.x, v.z, flow)

    if (depth > FLOAT_START) {
      const ax = (flow.x * depth * FLOW_K) / v.mass
      const az = (flow.z * depth * FLOW_K) / v.mass
      v.vx += ax * dt
      v.vz += az * dt

      const fx = Math.cos(v.rot)
      const fz = -Math.sin(v.rot)
      const cross = fx * flow.z - fz * flow.x
      v.angVel += (cross * depth * TORQUE_K * dt) / v.mass
      v.angVel *= Math.exp(-2 * dt)
      v.vx *= Math.exp(-DRAG * dt)
      v.vz *= Math.exp(-DRAG * dt)

      const sp = Math.hypot(v.vx, v.vz)
      if (sp > MAX_OBJECT_SPEED) {
        const s = MAX_OBJECT_SPEED / sp
        v.vx *= s
        v.vz *= s
      }
      if (v.angVel > MAX_OBJECT_SPIN) v.angVel = MAX_OBJECT_SPIN
      else if (v.angVel < -MAX_OBJECT_SPIN) v.angVel = -MAX_OBJECT_SPIN
    } else {
      const damp = Math.exp(-GROUND_FRICTION * dt)
      v.vx *= damp
      v.vz *= damp
      v.angVel *= Math.exp(-8 * dt)
      if (Math.abs(v.vx) < 0.02) v.vx = 0
      if (Math.abs(v.vz) < 0.02) v.vz = 0
      if (Math.abs(v.angVel) < 0.01) v.angVel = 0
    }

    if (!Number.isFinite(v.vx)) v.vx = 0
    if (!Number.isFinite(v.vz)) v.vz = 0
    if (!Number.isFinite(v.angVel)) v.angVel = 0

    v.x += v.vx * dt
    v.z += v.vz * dt
    v.rot += v.angVel * dt

    if (v.x < -lim) {
      v.x = -lim
      v.vx = Math.abs(v.vx) * 0.3
    } else if (v.x > lim) {
      v.x = lim
      v.vx = -Math.abs(v.vx) * 0.3
    }
    if (v.z < -lim) {
      v.z = -lim
      v.vz = Math.abs(v.vz) * 0.3
    } else if (v.z > lim) {
      v.z = lim
      v.vz = -Math.abs(v.vz) * 0.3
    }

    collideBuildings(sim, v)

    if (!Number.isFinite(v.x)) v.x = v.initial.x
    if (!Number.isFinite(v.z)) v.z = v.initial.z

    const g = sim.sampleTerrain(v.x, v.z)
    const d = sim.sampleDepth(v.x, v.z)
    if (d > FLOAT_START) {
      const surface = g + d
      v.y = Math.max(g, surface - v.h * 0.25)
    } else {
      v.y = g
    }
  }
}

export function updatePeople(sim: SimGrid, dt: number): void {
  const flow: FlowSample = { x: 0, z: 0 }
  const lim = sim.half - 3

  for (const p of sim.people) {
    const depth = sim.sampleDepth(p.x, p.z)
    if (depth > 0.5 && !p.caught) {
      p.caught = true
      p.state = 'swept'
    }

    if (p.state === 'safe') {
      p.y = sim.sampleTerrain(p.x, p.z)
      continue
    }

    if (p.caught) {
      sim.sampleFlow(p.x, p.z, flow)
      p.x += flow.x * dt * 0.9
      p.z += flow.z * dt * 0.9
      const g = sim.sampleTerrain(p.x, p.z)
      p.y = g + Math.min(depth, 1.2) * 0.6
    } else {
      const dx = p.targetX - p.x
      const dz = p.targetZ - p.z
      const dist = Math.hypot(dx, dz)
      if (dist < 3 && depth < 0.15) {
        p.state = 'safe'
        continue
      }
      if (dist > 0.001) {
        const nx = dx / dist
        const nz = dz / dist
        const step = p.speed * dt
        const nxp = p.x + nx * step
        const nzp = p.z + nz * step
        if (!sim.isObstacleAt(nxp, nzp)) {
          p.x = nxp
          p.z = nzp
        } else {
          const tx = -nz
          const tz = nx
          const sx = p.x + tx * step
          const sz = p.z + tz * step
          if (!sim.isObstacleAt(sx, sz)) {
            p.x = sx
            p.z = sz
          }
        }
      }
      p.y = sim.sampleTerrain(p.x, p.z)
    }

    p.x = clamp(p.x, -lim, lim)
    p.z = clamp(p.z, -lim, lim)
    if (!Number.isFinite(p.x)) p.x = p.initial.x
    if (!Number.isFinite(p.z)) p.z = p.initial.z
  }
}