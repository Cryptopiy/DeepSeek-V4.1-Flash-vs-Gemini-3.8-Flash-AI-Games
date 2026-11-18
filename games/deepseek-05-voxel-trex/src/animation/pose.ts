import type { AnimState } from '../types'

export interface Pose {
  bodyY: number
  bodyPitch: number
  bodyRoll: number
  bodyYaw: number
  neckPitch: number
  neckYaw: number
  headPitch: number
  headYaw: number
  headRoll: number
  jaw: number
  tail: number[]
  hip: number[]
  knee: number[]
  ankle: number[]
  arm: number[]
  fore: number[]
}

export function createPose(): Pose {
  return {
    bodyY: 0,
    bodyPitch: 0,
    bodyRoll: 0,
    bodyYaw: 0,
    neckPitch: 0,
    neckYaw: 0,
    headPitch: 0,
    headYaw: 0,
    headRoll: 0,
    jaw: 0.03,
    tail: [0, 0, 0, 0, 0],
    hip: [0, 0],
    knee: [0, 0],
    ankle: [0, 0],
    arm: [0, 0],
    fore: [0, 0],
  }
}

export function copyPose(src: Pose, dst: Pose): void {
  dst.bodyY = src.bodyY
  dst.bodyPitch = src.bodyPitch
  dst.bodyRoll = src.bodyRoll
  dst.bodyYaw = src.bodyYaw
  dst.neckPitch = src.neckPitch
  dst.neckYaw = src.neckYaw
  dst.headPitch = src.headPitch
  dst.headYaw = src.headYaw
  dst.headRoll = src.headRoll
  dst.jaw = src.jaw
  for (let i = 0; i < 5; i++) dst.tail[i] = src.tail[i]
  for (let i = 0; i < 2; i++) {
    dst.hip[i] = src.hip[i]
    dst.knee[i] = src.knee[i]
    dst.ankle[i] = src.ankle[i]
    dst.arm[i] = src.arm[i]
    dst.fore[i] = src.fore[i]
  }
}

function smoothstep(x: number): number {
  const t = x < 0 ? 0 : x > 1 ? 1 : x
  return t * t * (3 - 2 * t)
}

function reset(target: Pose): void {
  target.bodyY = 0
  target.bodyPitch = 0
  target.bodyRoll = 0
  target.bodyYaw = 0
  target.neckPitch = 0
  target.neckYaw = 0
  target.headPitch = 0
  target.headYaw = 0
  target.headRoll = 0
  target.jaw = 0.03
  for (let i = 0; i < 5; i++) target.tail[i] = 0
  for (let i = 0; i < 2; i++) {
    target.hip[i] = 0
    target.knee[i] = 0
    target.ankle[i] = 0
    target.arm[i] = 0
    target.fore[i] = 0
  }
}

function idleTargets(t: number, o: Pose): void {
  o.bodyY = Math.sin(t * 1.4) * 0.12
  o.bodyPitch = Math.sin(t * 1.4) * 0.012
  o.neckPitch = Math.sin(t * 0.9 + 0.5) * 0.04
  o.headPitch = Math.sin(t * 1.1) * 0.05
  o.headYaw = Math.sin(t * 0.45) * 0.1
  o.jaw = 0.02 + 0.015 * (0.5 + 0.5 * Math.sin(t * 1.4))
  for (let i = 0; i < 5; i++) o.tail[i] = Math.sin(t * 1.1 - i * 0.6) * 0.07
  o.arm[0] = Math.sin(t * 0.9) * 0.06
  o.arm[1] = Math.sin(t * 0.9 + 1.7) * 0.06
  o.fore[0] = Math.sin(t * 1.3) * 0.08
  o.fore[1] = Math.sin(t * 1.3 + 1.3) * 0.08
}

function walkTargets(t: number, o: Pose): void {
  const ph = t * 4.2
  o.bodyY = Math.abs(Math.sin(ph)) * 0.22 - 0.1
  o.bodyPitch = 0.04 * Math.sin(ph * 2)
  o.bodyRoll = 0.03 * Math.sin(ph)
  o.neckPitch = 0.03 * Math.sin(ph * 2 + 0.8)
  o.headPitch = 0.04 * Math.sin(ph * 2 + 1.2)
  o.headYaw = 0.05 * Math.sin(ph * 0.5)
  o.jaw = 0.03
  for (let s = 0; s < 2; s++) {
    const off = s === 0 ? 0 : Math.PI
    const swing = Math.sin(ph + off)
    o.hip[s] = swing * 0.6
    o.knee[s] = 0.5 * (1 - Math.cos(ph + off)) * 0.6
    o.ankle[s] = -o.hip[s] * 0.4 + o.knee[s] * 0.3
    o.arm[s] = -swing * 0.2
    o.fore[s] = Math.sin(ph + off) * 0.15
  }
  for (let i = 0; i < 5; i++) o.tail[i] = Math.sin(ph * 0.9 - i * 0.7) * 0.12
}

function roarTargets(t: number, o: Pose): void {
  const period = 3.2
  const lt = t % period
  let open: number
  if (lt < 0.3) open = smoothstep(lt / 0.3)
  else if (lt < 1.5) open = 1
  else if (lt < 2.1) open = 1 - smoothstep((lt - 1.5) / 0.6)
  else open = 0

  o.jaw = open
  o.headPitch = -0.4 * open
  o.neckPitch = -0.18 * open
  o.bodyPitch = 0.06 * open
  o.bodyY = -0.15 * open
  o.bodyRoll = 0.02 * open * Math.sin(t * 30)
  o.headYaw = 0.05 * Math.sin(t * 2) * open
  for (let i = 0; i < 5; i++) o.tail[i] = Math.sin(t * 1.3 - i * 0.6) * 0.09 + 0.05 * open
  for (let s = 0; s < 2; s++) {
    o.arm[s] = -0.15 * open
    o.fore[s] = -0.2 * open
  }
}

export function computeTargets(state: AnimState, t: number, out: Pose): void {
  reset(out)
  if (state === 'walk') walkTargets(t, out)
  else if (state === 'roar') roarTargets(t, out)
  else idleTargets(t, out)
}

export function dampPose(pose: Pose, target: Pose, dt: number, rate = 14): void {
  const k = 1 - Math.exp(-rate * Math.min(dt, 0.1))
  pose.bodyY += (target.bodyY - pose.bodyY) * k
  pose.bodyPitch += (target.bodyPitch - pose.bodyPitch) * k
  pose.bodyRoll += (target.bodyRoll - pose.bodyRoll) * k
  pose.bodyYaw += (target.bodyYaw - pose.bodyYaw) * k
  pose.neckPitch += (target.neckPitch - pose.neckPitch) * k
  pose.neckYaw += (target.neckYaw - pose.neckYaw) * k
  pose.headPitch += (target.headPitch - pose.headPitch) * k
  pose.headYaw += (target.headYaw - pose.headYaw) * k
  pose.headRoll += (target.headRoll - pose.headRoll) * k
  pose.jaw += (target.jaw - pose.jaw) * k
  for (let i = 0; i < 5; i++) pose.tail[i] += (target.tail[i] - pose.tail[i]) * k
  for (let i = 0; i < 2; i++) {
    pose.hip[i] += (target.hip[i] - pose.hip[i]) * k
    pose.knee[i] += (target.knee[i] - pose.knee[i]) * k
    pose.ankle[i] += (target.ankle[i] - pose.ankle[i]) * k
    pose.arm[i] += (target.arm[i] - pose.arm[i]) * k
    pose.fore[i] += (target.fore[i] - pose.fore[i]) * k
  }
}