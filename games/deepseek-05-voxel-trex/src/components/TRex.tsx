import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { VoxelPart } from './VoxelPart'
import { MODEL, PIVOTS } from '../voxel/buildTrex'
import { computeTargets, createPose, dampPose } from '../animation/pose'
import type { AnimState } from '../types'

type GroupRef = THREE.Group | null

export function TRex({ anim }: { anim: AnimState }) {
  const animRef = useRef<AnimState>(anim)
  animRef.current = anim

  const body = useRef<GroupRef>(null)
  const neck = useRef<GroupRef>(null)
  const head = useRef<GroupRef>(null)
  const jaw = useRef<GroupRef>(null)
  const tail0 = useRef<GroupRef>(null)
  const tail1 = useRef<GroupRef>(null)
  const tail2 = useRef<GroupRef>(null)
  const tail3 = useRef<GroupRef>(null)
  const tail4 = useRef<GroupRef>(null)
  const hipL = useRef<GroupRef>(null)
  const hipR = useRef<GroupRef>(null)
  const kneeL = useRef<GroupRef>(null)
  const kneeR = useRef<GroupRef>(null)
  const ankleL = useRef<GroupRef>(null)
  const ankleR = useRef<GroupRef>(null)
  const armL = useRef<GroupRef>(null)
  const armR = useRef<GroupRef>(null)
  const foreL = useRef<GroupRef>(null)
  const foreR = useRef<GroupRef>(null)

  const time = useRef(0)
  const pose = useRef(createPose())
  const target = useRef(createPose())

  useFrame((_, rawDelta) => {
    const dt = Math.min(rawDelta, 0.1)
    time.current += dt

    computeTargets(animRef.current, time.current, target.current)
    dampPose(pose.current, target.current, dt)
    const c = pose.current

    if (body.current) {
      body.current.position.set(PIVOTS.body[0], PIVOTS.body[1] + c.bodyY, PIVOTS.body[2])
      body.current.rotation.set(c.bodyPitch, c.bodyYaw, c.bodyRoll)
    }
    if (neck.current) neck.current.rotation.set(c.neckPitch, c.neckYaw, 0)
    if (head.current) head.current.rotation.set(c.headPitch, c.headYaw, c.headRoll)
    if (jaw.current) jaw.current.rotation.x = c.jaw * 0.7

    const tailRefs = [tail0, tail1, tail2, tail3, tail4]
    for (let i = 0; i < tailRefs.length; i++) {
      const g = tailRefs[i].current
      if (g) g.rotation.y = c.tail[i]
    }

    const hip = [hipL, hipR]
    const knee = [kneeL, kneeR]
    const ankle = [ankleL, ankleR]
    const arm = [armL, armR]
    const fore = [foreL, foreR]
    for (let s = 0; s < 2; s++) {
      const hg = hip[s].current
      if (hg) hg.rotation.x = c.hip[s]
      const kg = knee[s].current
      if (kg) kg.rotation.x = c.knee[s]
      const ag = ankle[s].current
      if (ag) ag.rotation.x = c.ankle[s]
      const amg = arm[s].current
      if (amg) amg.rotation.x = c.arm[s]
      const fg = fore[s].current
      if (fg) fg.rotation.x = c.fore[s]
    }
  })

  return (
    <group>
      <group ref={body} position={PIVOTS.body}>
        <VoxelPart voxels={MODEL.body} />

        <group ref={neck} position={PIVOTS.neck}>
          <VoxelPart voxels={MODEL.neck} />
          <group ref={head} position={PIVOTS.head}>
            <VoxelPart voxels={MODEL.head} />
            <group ref={jaw} position={PIVOTS.jaw}>
              <VoxelPart voxels={MODEL.jaw} />
            </group>
          </group>
        </group>

        <group ref={tail0} position={PIVOTS.tail}>
          <VoxelPart voxels={MODEL.tail[0]} />
          <group ref={tail1} position={PIVOTS.tailSeg} rotation={[0.02, 0, 0]}>
            <VoxelPart voxels={MODEL.tail[1]} />
            <group ref={tail2} position={PIVOTS.tailSeg} rotation={[0.03, 0, 0]}>
              <VoxelPart voxels={MODEL.tail[2]} />
              <group ref={tail3} position={PIVOTS.tailSeg} rotation={[0.04, 0, 0]}>
                <VoxelPart voxels={MODEL.tail[3]} />
                <group ref={tail4} position={PIVOTS.tailSeg} rotation={[0.04, 0, 0]}>
                  <VoxelPart voxels={MODEL.tail[4]} />
                </group>
              </group>
            </group>
          </group>
        </group>

        <group ref={hipL} position={[-PIVOTS.leg[0], PIVOTS.leg[1], PIVOTS.leg[2]]}>
          <VoxelPart voxels={MODEL.thigh} />
          <group ref={kneeL} position={PIVOTS.knee}>
            <VoxelPart voxels={MODEL.shin} />
            <group ref={ankleL} position={PIVOTS.ankle}>
              <VoxelPart voxels={MODEL.foot} />
            </group>
          </group>
        </group>

        <group ref={hipR} position={[PIVOTS.leg[0], PIVOTS.leg[1], PIVOTS.leg[2]]}>
          <VoxelPart voxels={MODEL.thigh} />
          <group ref={kneeR} position={PIVOTS.knee}>
            <VoxelPart voxels={MODEL.shin} />
            <group ref={ankleR} position={PIVOTS.ankle}>
              <VoxelPart voxels={MODEL.foot} />
            </group>
          </group>
        </group>

        <group ref={armL} position={[-PIVOTS.arm[0], PIVOTS.arm[1], PIVOTS.arm[2]]}>
          <VoxelPart voxels={MODEL.upperArm} />
          <group ref={foreL} position={PIVOTS.forearm}>
            <VoxelPart voxels={MODEL.forearm} />
          </group>
        </group>

        <group ref={armR} position={[PIVOTS.arm[0], PIVOTS.arm[1], PIVOTS.arm[2]]}>
          <VoxelPart voxels={MODEL.upperArm} />
          <group ref={foreR} position={PIVOTS.forearm}>
            <VoxelPart voxels={MODEL.forearm} />
          </group>
        </group>
      </group>
    </group>
  )
}