import * as THREE from 'three';
import { DinosaurRig } from './DinosaurRig';
import { AnimationMode } from '../types/dinosaur';

export class AnimationController {
  private rig: DinosaurRig;
  public currentMode: AnimationMode = 'idle';
  private targetMode: AnimationMode = 'idle';
  private transitionWeight: number = 1.0;
  private prevMode: AnimationMode = 'idle';

  private clockTime: number = 0;
  private roarTimer: number = 0;
  public readonly roarDuration: number = 2.8;

  // Camera shake intensity callback
  public onCameraShake?: (intensity: number) => void;
  // Roar completion callback
  public onRoarComplete?: () => void;

  constructor(rig: DinosaurRig) {
    this.rig = rig;
  }

  public setMode(mode: AnimationMode) {
    if (this.currentMode === mode && mode !== 'roar') return;

    this.prevMode = this.currentMode;
    this.targetMode = mode;
    this.transitionWeight = 0.0;

    if (mode === 'roar') {
      this.roarTimer = 0.0;
    }

    this.currentMode = mode;
  }

  public update(delta: number) {
    // Clamp delta to prevent huge jumps
    const dt = Math.min(delta, 0.1);
    this.clockTime += dt;

    if (this.transitionWeight < 1.0) {
      this.transitionWeight = Math.min(1.0, this.transitionWeight + dt * 4.0);
    }

    if (this.currentMode === 'roar') {
      this.roarTimer += dt;
      if (this.roarTimer >= this.roarDuration) {
        this.setMode('idle');
        if (this.onRoarComplete) {
          this.onRoarComplete();
        }
      }
    }

    switch (this.currentMode) {
      case 'idle':
        this.updateIdle(dt);
        break;
      case 'walk':
        this.updateWalk(dt);
        break;
      case 'roar':
        this.updateRoar(dt);
        break;
    }
  }

  // -------------------------------------------------------------------------
  // IDLE ANIMATION
  // -------------------------------------------------------------------------
  private updateIdle(_dt: number) {
    const t = this.clockTime;
    const rig = this.rig;

    // 1. Breathing (subtle vertical rise and gentle chest expansion)
    const breathCycle = Math.sin(t * 1.8);
    const breathY = breathCycle * 0.035;
    rig.body.position.y = THREE.MathUtils.lerp(rig.body.position.y, rig.baseBodyY + breathY, 0.15);
    rig.body.rotation.x = THREE.MathUtils.lerp(rig.body.rotation.x, breathCycle * 0.015, 0.15);
    rig.body.rotation.z = THREE.MathUtils.lerp(rig.body.rotation.z, Math.sin(t * 0.9) * 0.012, 0.15);

    // 2. Head look-around (slow alert prehistoric scan)
    const headYaw = Math.sin(t * 0.8) * 0.12 + Math.sin(t * 0.3) * 0.08;
    const headPitch = Math.cos(t * 1.2) * 0.06 - 0.04;
    const headRoll = Math.cos(t * 0.8) * 0.03;

    rig.neck.rotation.y = THREE.MathUtils.lerp(rig.neck.rotation.y, headYaw * 0.4, 0.1);
    rig.neck.rotation.x = THREE.MathUtils.lerp(rig.neck.rotation.x, headPitch * 0.3, 0.1);

    rig.head.rotation.y = THREE.MathUtils.lerp(rig.head.rotation.y, headYaw * 0.6, 0.12);
    rig.head.rotation.x = THREE.MathUtils.lerp(rig.head.rotation.x, headPitch * 0.7, 0.12);
    rig.head.rotation.z = THREE.MathUtils.lerp(rig.head.rotation.z, headRoll, 0.1);

    // Jaw stays closed during idle, with tiny occasional murmur
    rig.lowerJaw.rotation.x = THREE.MathUtils.lerp(rig.lowerJaw.rotation.x, Math.max(0, Math.sin(t * 3.5) * 0.03 - 0.02), 0.2);

    // 3. Tail harmonic wave (counter-balancing)
    const tailWave1 = Math.sin(t * 1.5) * 0.08;
    const tailWave2 = Math.sin(t * 1.5 - 0.6) * 0.12;
    const tailWave3 = Math.sin(t * 1.5 - 1.2) * 0.16;

    rig.tailBase.rotation.y = THREE.MathUtils.lerp(rig.tailBase.rotation.y, tailWave1, 0.1);
    rig.tailMid.rotation.y = THREE.MathUtils.lerp(rig.tailMid.rotation.y, tailWave2, 0.1);
    rig.tailTip.rotation.y = THREE.MathUtils.lerp(rig.tailTip.rotation.y, tailWave3, 0.1);

    rig.tailBase.rotation.x = THREE.MathUtils.lerp(rig.tailBase.rotation.x, -0.05 + breathCycle * 0.01, 0.1);
    rig.tailMid.rotation.x = THREE.MathUtils.lerp(rig.tailMid.rotation.x, 0.02, 0.1);

    // 4. Forearms idle twitch
    rig.armL.rotation.x = THREE.MathUtils.lerp(rig.armL.rotation.x, 0.35 + Math.sin(t * 2.2) * 0.04, 0.15);
    rig.armR.rotation.x = THREE.MathUtils.lerp(rig.armR.rotation.x, 0.35 + Math.cos(t * 2.0) * 0.04, 0.15);

    // 5. Hind legs anchored on ground
    rig.thighL.rotation.x = THREE.MathUtils.lerp(rig.thighL.rotation.x, 0, 0.15);
    rig.shinL.rotation.x = THREE.MathUtils.lerp(rig.shinL.rotation.x, 0, 0.15);
    rig.footL.rotation.x = THREE.MathUtils.lerp(rig.footL.rotation.x, 0, 0.15);

    rig.thighR.rotation.x = THREE.MathUtils.lerp(rig.thighR.rotation.x, 0, 0.15);
    rig.shinR.rotation.x = THREE.MathUtils.lerp(rig.shinR.rotation.x, 0, 0.15);
    rig.footR.rotation.x = THREE.MathUtils.lerp(rig.footR.rotation.x, 0, 0.15);

    rig.thighL.position.y = THREE.MathUtils.lerp(rig.thighL.position.y, rig.baseBodyY, 0.15);
    rig.thighR.position.y = THREE.MathUtils.lerp(rig.thighR.position.y, rig.baseBodyY, 0.15);
  }

  // -------------------------------------------------------------------------
  // WALK ANIMATION (Alternating bipedal locomotion)
  // -------------------------------------------------------------------------
  private updateWalk(_dt: number) {
    const speed = 3.6;
    const phaseL = this.clockTime * speed;
    const phaseR = phaseL + Math.PI; // 180 degrees offset
    const rig = this.rig;

    // Torso dynamics:
    // Bobbing down twice per step (on foot strike)
    const bob = Math.abs(Math.sin(phaseL)) * 0.10;
    rig.body.position.y = rig.baseBodyY - 0.05 + bob;

    // Lateral hip weight shift towards supporting leg
    const hipShift = Math.sin(phaseL) * 0.09;
    rig.body.position.x = hipShift;
    rig.body.rotation.z = -hipShift * 0.35;
    rig.body.rotation.y = Math.cos(phaseL) * 0.07;
    // Slight forward pitch of body in stride
    rig.body.rotation.x = 0.08 + Math.sin(phaseL * 2) * 0.03;

    // Left Leg Cycle
    const sinL = Math.sin(phaseL);
    const cosL = Math.cos(phaseL);
    // Forward / backward stride
    rig.thighL.rotation.x = -sinL * 0.55;
    // Knee flexes during swing forward (when sinL < 0)
    rig.shinL.rotation.x = sinL < 0 ? Math.abs(sinL) * 0.85 : 0.08;
    // Foot articulates to peel off and land flat
    rig.footL.rotation.x = sinL > 0 ? -sinL * 0.45 : sinL * 0.25;

    // Right Leg Cycle
    const sinR = Math.sin(phaseR);
    const cosR = Math.cos(phaseR);
    rig.thighR.rotation.x = -sinR * 0.55;
    rig.shinR.rotation.x = sinR < 0 ? Math.abs(sinR) * 0.85 : 0.08;
    rig.footR.rotation.x = sinR > 0 ? -sinR * 0.45 : sinR * 0.25;

    // Dynamic thigh base sync with body bob
    rig.thighL.position.y = rig.baseBodyY - 0.05 + bob;
    rig.thighR.position.y = rig.baseBodyY - 0.05 + bob;
    rig.thighL.position.x = -0.95 + hipShift * 0.5;
    rig.thighR.position.x = 0.95 + hipShift * 0.5;

    // Tail counter-balance (sways opposite to hips)
    rig.tailBase.rotation.y = -hipShift * 1.5;
    rig.tailMid.rotation.y = -Math.sin(phaseL - 0.8) * 0.22;
    rig.tailTip.rotation.y = -Math.sin(phaseL - 1.5) * 0.32;

    rig.tailBase.rotation.x = -0.05 + Math.sin(phaseL * 2) * 0.04;

    // Head reacts to footsteps
    rig.neck.rotation.x = -Math.sin(phaseL * 2) * 0.05;
    rig.head.rotation.x = Math.sin(phaseL * 2) * 0.06 - 0.05;
    rig.head.rotation.y = -hipShift * 0.5;

    // Arms swing with gait
    rig.armL.rotation.x = 0.35 + sinL * 0.25;
    rig.armR.rotation.x = 0.35 + sinR * 0.25;

    // Mouth closed during steady walk
    rig.lowerJaw.rotation.x = 0.04;
  }

  // -------------------------------------------------------------------------
  // ROAR ANIMATION (Dramatic windup, wide articulated jaw, screen shake)
  // -------------------------------------------------------------------------
  private updateRoar(_dt: number) {
    const t = this.roarTimer;
    const rig = this.rig;

    if (t < 0.6) {
      // Phase 1: Windup / Inhale (0 to 0.6s)
      // Dino recoils backward, lowers jaw slightly, expands chest
      const p = t / 0.6;
      rig.body.position.y = THREE.MathUtils.lerp(rig.baseBodyY, rig.baseBodyY - 0.12, p);
      rig.body.position.z = THREE.MathUtils.lerp(0, -0.25, p);
      rig.body.rotation.x = THREE.MathUtils.lerp(0, -0.15, p);

      rig.neck.rotation.x = THREE.MathUtils.lerp(0, -0.2, p);
      rig.head.rotation.x = THREE.MathUtils.lerp(0, -0.1, p);
      rig.lowerJaw.rotation.x = THREE.MathUtils.lerp(0, 0.15, p);

      rig.tailBase.rotation.x = THREE.MathUtils.lerp(0, 0.15, p);

      if (this.onCameraShake) this.onCameraShake(0);
    } else if (t < 2.2) {
      // Phase 2: FULL ROAR! (0.6 to 2.2s)
      // Body lunges forward, head cranes upward, jaw drops wide (~40 degrees)!
      const roarPhase = (t - 0.6) / 1.6; // 0 to 1
      const pulse = Math.sin(roarPhase * Math.PI); // rises then sustains

      // Powerful vocal shudder
      const vocalVibration = Math.sin(t * 35.0) * 0.035 * pulse;

      rig.body.position.y = THREE.MathUtils.lerp(rig.baseBodyY, rig.baseBodyY + 0.1, pulse);
      rig.body.position.z = THREE.MathUtils.lerp(0, 0.35, pulse);
      rig.body.rotation.x = THREE.MathUtils.lerp(0, 0.12, pulse) + vocalVibration * 0.5;

      // Neck cranes up and forward
      rig.neck.rotation.x = THREE.MathUtils.lerp(0, 0.28, pulse) + vocalVibration;
      // Head tilts up towards the sky
      rig.head.rotation.x = THREE.MathUtils.lerp(0, -0.35, pulse) + vocalVibration;
      rig.head.rotation.y = Math.sin(t * 12.0) * 0.04 * pulse;

      // JAW OPENS WIDE! Real hinge pivot articulation
      // Lower jaw drops to ~0.72 radians (~41 degrees open!)
      const maxJawOpen = 0.72;
      rig.lowerJaw.rotation.x = THREE.MathUtils.lerp(0.15, maxJawOpen, pulse) + vocalVibration * 0.8;

      // Arms flare outward aggressively
      rig.armL.rotation.x = 0.2 - pulse * 0.3;
      rig.armL.rotation.z = 0.2 + pulse * 0.35;
      rig.armR.rotation.x = 0.2 - pulse * 0.3;
      rig.armR.rotation.z = -0.2 - pulse * 0.35;

      // Tail flexes for stability
      rig.tailBase.rotation.x = -pulse * 0.25;
      rig.tailMid.rotation.x = -pulse * 0.15;
      rig.tailTip.rotation.y = Math.sin(t * 8.0) * 0.25 * pulse;

      // Camera shake! Peak during initial roar burst
      if (this.onCameraShake) {
        const shakeIntensity = pulse * 0.045 * (1 + Math.sin(t * 30.0) * 0.5);
        this.onCameraShake(shakeIntensity);
      }
    } else {
      // Phase 3: Settle / Jaw Closes (2.2 to 2.8s)
      const p = (t - 2.2) / 0.6; // 0 to 1
      rig.body.position.y = THREE.MathUtils.lerp(rig.baseBodyY + 0.1, rig.baseBodyY, p);
      rig.body.position.z = THREE.MathUtils.lerp(0.35, 0, p);
      rig.body.rotation.x = THREE.MathUtils.lerp(0.12, 0, p);

      rig.neck.rotation.x = THREE.MathUtils.lerp(0.28, 0, p);
      rig.head.rotation.x = THREE.MathUtils.lerp(-0.35, 0, p);
      rig.head.rotation.y = THREE.MathUtils.lerp(rig.head.rotation.y, 0, p);

      // Jaw closes smoothly
      rig.lowerJaw.rotation.x = THREE.MathUtils.lerp(0.72, 0, p);

      rig.armL.rotation.set(0.35, 0.1, 0.15);
      rig.armR.rotation.set(0.35, -0.1, -0.15);

      rig.tailBase.rotation.set(0, 0, 0);
      rig.tailMid.rotation.set(0, 0, 0);
      rig.tailTip.rotation.set(0, 0, 0);

      if (this.onCameraShake) this.onCameraShake(0);
    }
  }
}
