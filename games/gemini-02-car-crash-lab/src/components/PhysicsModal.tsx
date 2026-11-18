import React from 'react';
import { X, BookOpen, AlertCircle, Cpu, Zap, Activity } from 'lucide-react';

interface PhysicsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhysicsModal: React.FC<PhysicsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel p-6 border border-slate-700 bg-slate-900/95 text-slate-100 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-tech tracking-wide text-white">
                PHYSICS & DYNAMICS MODEL
              </h2>
              <p className="text-xs text-slate-400">
                Mathematical formulation, impact mechanics, and force calculation assumptions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          {/* Section 1: Conservation of Momentum & Impulse */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-2 mb-2 text-amber-400 font-semibold font-tech">
              <Cpu className="w-4 h-4" />
              <span>1. 3D RIGID-BODY COLLISION & IMPULSE DYNAMICS</span>
            </div>
            <p className="mb-2">
              The impact response is resolved using Newton-Euler rigid-body collision equations with restitution (<span className="text-amber-300 font-mono">e</span>) and contact friction (<span className="text-amber-300 font-mono">μ</span>).
            </p>
            <div className="bg-slate-950/80 p-3 rounded-lg font-mono text-xs text-amber-300/90 space-y-1 border border-slate-800">
              <p>v_rel = (v_car + ω_car × r_car) - (v_obs + ω_obs × r_obs)</p>
              <p>J_n = - (1 + e) · (v_rel · n) / [ m1⁻¹ + m2⁻¹ + (r1 × n)² · I1⁻¹ + (r2 × n)² · I2⁻¹ ]</p>
              <p>Δv = J / m,    Δω = (r × J) / I</p>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Off-center collisions (angle ≠ 0°) induce an asymmetric torque <span className="font-mono text-amber-300">τ = r × J</span>, causing realistic post-impact yaw spin, deflection, and lateral slide.
            </p>
          </div>

          {/* Section 2: Impact Force Estimation */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-2 mb-2 text-cyan-400 font-semibold font-tech">
              <Zap className="w-4 h-4" />
              <span>2. ESTIMATED IMPACT FORCE FORMULA & ASSUMPTIONS</span>
            </div>
            <p className="mb-2">
              Automotive crash impacts are transient dynamic events where peak force depends on the deceleration pulse duration (<span className="font-mono text-cyan-300">Δt</span>) and crumple zone displacement.
            </p>
            <div className="bg-slate-950/80 p-3 rounded-lg font-mono text-xs text-cyan-300/90 space-y-1 border border-slate-800">
              <p>F_avg = |J| / Δt_pulse   (where Δt ≈ 85–120 ms calibrated from Euro NCAP crash pulses)</p>
              <p>F_peak ≈ 1.85 · F_avg   (accounting for non-linear crumple rail buckling profile)</p>
              <p>F_metric_tons = F_peak / 9,806.65 N</p>
            </div>
            <div className="mt-2 flex items-start gap-2 text-xs text-slate-400 bg-cyan-950/30 p-2.5 rounded border border-cyan-800/40">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Explicit Assumption:</strong> Peak force is estimated assuming a representative modern crumple zone pulse duration (Δt = 95 ms for rigid barrier; lengthened up to 150 ms for movable/displaceable barriers as ground displacement prolongs impact time).
              </span>
            </div>
          </div>

          {/* Section 3: Damage Model */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold font-tech">
              <Activity className="w-4 h-4" />
              <span>3. NORMALIZED DAMAGE MODEL (0–100%)</span>
            </div>
            <p className="mb-2">
              Damage is derived from the net dissipated kinetic energy (<span className="font-mono text-emerald-300">ΔKE = KE_initial - KE_post</span>), modulated by obstacle stiffness (<span className="font-mono text-emerald-300">K_obs</span>) and the normal velocity component:
            </p>
            <div className="bg-slate-950/80 p-3 rounded-lg font-mono text-xs text-emerald-300/90 space-y-1 border border-slate-800">
              <p>E_effective = ΔKE · K_obs · (cos θ)^0.75</p>
              <p>Damage% = min(100, round((E_effective / E_ref) · 80))</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-700">
                <div className="text-emerald-400 font-bold">0 – 20%</div>
                <div className="text-slate-400">Minor</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-700">
                <div className="text-amber-400 font-bold">20 – 50%</div>
                <div className="text-slate-400">Moderate</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-700">
                <div className="text-orange-400 font-bold">50 – 80%</div>
                <div className="text-slate-400">Severe</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-700">
                <div className="text-red-400 font-bold">80 – 100%</div>
                <div className="text-slate-400">Catastrophic</div>
              </div>
            </div>
          </div>

          {/* Section 4: Obstacle Behavior */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <h3 className="font-semibold text-slate-200 mb-2 font-tech">4. OBSTACLE TYPES & DIVERGENT BEHAVIOR</h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li><strong className="text-slate-100">Reinforced Concrete Wall:</strong> Immovable mass (infinite inertia anchor). Absorbs 0% kinetic energy via motion; the vehicle absorbs maximum structural compression and experiences highest peak G-forces.</li>
              <li><strong className="text-slate-100">Heavy Barrier (2,000 kg):</strong> Movable concrete barrier with high ground Coulomb friction (μ = 0.70). Slides back several meters, attenuating peak forces on the vehicle.</li>
              <li><strong className="text-slate-100">Lightweight Barrier (220 kg):</strong> Easily displaced plastic barrier. Rapidly accelerates forward upon impact, substantially reducing vehicle cabin deceleration.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-700/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition"
          >
            Close Documentation
          </button>
        </div>
      </div>
    </div>
  );
};
