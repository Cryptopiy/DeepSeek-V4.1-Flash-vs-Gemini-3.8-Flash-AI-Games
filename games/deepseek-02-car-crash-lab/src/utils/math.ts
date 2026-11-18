export function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

/** Deterministic PRNG so the same configuration gives approximately the same run. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function normalizeDeg(d: number): number {
  return (((d + 180) % 360) + 360) % 360 - 180;
}

export function fmt(v: number, digits = 1): string {
  if (!isFinite(v)) return '0';
  return v.toFixed(digits);
}

export function formatForce(n: number): string {
  if (!isFinite(n)) return '0 N';
  if (Math.abs(n) >= 1_000_000) return `${(n / 1_000_000).toFixed(2)} MN`;
  if (Math.abs(n) >= 1_000) return `${(n / 1_000).toFixed(1)} kN`;
  return `${n.toFixed(0)} N`;
}

export function formatEnergy(j: number): string {
  if (!isFinite(j)) return '0 J';
  if (Math.abs(j) >= 1_000_000) return `${(j / 1_000_000).toFixed(2)} MJ`;
  if (Math.abs(j) >= 1_000) return `${(j / 1_000).toFixed(1)} kJ`;
  return `${j.toFixed(0)} J`;
}