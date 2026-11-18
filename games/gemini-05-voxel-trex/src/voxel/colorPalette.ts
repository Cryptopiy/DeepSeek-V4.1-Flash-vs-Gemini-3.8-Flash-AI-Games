// Prehistoric palette with subtle procedural variation
export const PALETTE = {
  // Dorsal & main skin (Scales, upper body)
  skinDark: '#2c3e23',
  skinMid: '#3c5530',
  skinLight: '#4d6d3e',
  skinHighlight: '#5b8049',
  
  // Dorsal ridges / scutes (Spine osteoderms)
  scuteDark: '#1a2614',
  scuteMid: '#24341c',
  
  // Belly counter-shading (Ventral surface, jaw underside, chest)
  bellyDark: '#807e5c',
  bellyMid: '#96946e',
  bellyLight: '#aba880',
  bellyPale: '#bcb992',

  // Accent stripes / flank mottling
  stripe: '#25351c',
  
  // Mouth, gums & tongue
  mouthDark: '#4a1217',
  mouthGums: '#731e25',
  mouthTongue: '#942b36',
  
  // Teeth (Sharp serrated ivory)
  toothBase: '#dfdacb',
  toothTip: '#fffef0',
  
  // Eyes
  eyeAmber: '#f39c12',
  eyeGold: '#f1c40f',
  eyePupil: '#0c0c0c',
  eyeSclera: '#40321c',
  
  // Claws (Talons on feet and hands)
  clawDark: '#161616',
  clawMid: '#262422',
  clawTip: '#3b3835'
};

// Helper for deterministic subtle color variation
export function shadeVariation(baseHex: string, factor: number = 0.05, seed: number = 0): string {
  // Simple integer hash
  const hash = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  const delta = ((hash - Math.floor(hash)) - 0.5) * 2 * factor;

  const hex = baseHex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  const nr = clamp(r * (1 + delta));
  const ng = clamp(g * (1 + delta));
  const nb = clamp(b * (1 + delta));

  return `#${nr.toString(16).padStart(2, '0')}${ng.toString(16).padStart(2, '0')}${nb.toString(16).padStart(2, '0')}`;
}
