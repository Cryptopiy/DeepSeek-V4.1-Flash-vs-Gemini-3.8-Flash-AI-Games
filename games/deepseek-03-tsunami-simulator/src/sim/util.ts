export const clamp = (v: number, a: number, b: number): number =>
  v < a ? a : v > b ? b : v

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t

export const smoothstep01 = (t: number): number => {
  const x = clamp(t, 0, 1)
  return x * x * (3 - 2 * x)
}

export const safeNumber = (v: number, fallback = 0): number =>
  Number.isFinite(v) ? v : fallback