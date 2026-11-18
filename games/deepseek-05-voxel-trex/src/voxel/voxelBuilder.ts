import * as THREE from 'three'

export interface Voxel {
  x: number
  y: number
  z: number
  color: string
}

const tmpColor = new THREE.Color()

function hash3(x: number, y: number, z: number): number {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 2147483647)) | 0
  h = Math.imul(h ^ (h >>> 13), 1274126177) | 0
  h = h ^ (h >>> 16)
  return (h >>> 0) / 4294967295
}

export function varyColor(hex: string, x: number, y: number, z: number, amount = 0.1): string {
  tmpColor.set(hex)
  const f = 1 + (hash3(x, y, z) - 0.5) * 2 * amount
  tmpColor.r = Math.min(1, Math.max(0, tmpColor.r * f))
  tmpColor.g = Math.min(1, Math.max(0, tmpColor.g * f))
  tmpColor.b = Math.min(1, Math.max(0, tmpColor.b * f))
  return '#' + tmpColor.getHexString()
}

/**
 * A sparse voxel grid. Voxels are snapped to an integer lattice, which makes
 * the model behave like real blocky voxel geometry rather than a smooth mesh.
 * Duplicate positions overwrite each other so primitives can be layered.
 */
export class VoxelSet {
  private map = new Map<string, Voxel>()

  private put(x: number, y: number, z: number, color: string): void {
    const xi = Math.round(x)
    const yi = Math.round(y)
    const zi = Math.round(z)
    this.map.set(`${xi},${yi},${zi}`, {
      x: xi,
      y: yi,
      z: zi,
      color: varyColor(color, xi, yi, zi),
    })
  }

  add(x: number, y: number, z: number, color: string): void {
    this.put(x, y, z, color)
  }

  box(
    x0: number,
    x1: number,
    y0: number,
    y1: number,
    z0: number,
    z1: number,
    color: string,
  ): void {
    const ax = Math.min(x0, x1)
    const bx = Math.max(x0, x1)
    const ay = Math.min(y0, y1)
    const by = Math.max(y0, y1)
    const az = Math.min(z0, z1)
    const bz = Math.max(z0, z1)
    for (let x = Math.ceil(ax); x <= Math.floor(bx); x++) {
      for (let y = Math.ceil(ay); y <= Math.floor(by); y++) {
        for (let z = Math.ceil(az); z <= Math.floor(bz); z++) {
          this.put(x, y, z, color)
        }
      }
    }
  }

  ellipsoid(
    cx: number,
    cy: number,
    cz: number,
    rx: number,
    ry: number,
    rz: number,
    color: string,
  ): void {
    const x0 = Math.floor(cx - rx)
    const x1 = Math.ceil(cx + rx)
    const y0 = Math.floor(cy - ry)
    const y1 = Math.ceil(cy + ry)
    const z0 = Math.floor(cz - rz)
    const z1 = Math.ceil(cz + rz)
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        for (let z = z0; z <= z1; z++) {
          const dx = (x - cx) / rx
          const dy = (y - cy) / ry
          const dz = (z - cz) / rz
          if (dx * dx + dy * dy + dz * dz <= 1) {
            this.put(x, y, z, color)
          }
        }
      }
    }
  }

  /**
   * Capsule / tapered cylinder voxelizer. The radius is interpolated along the
   * segment and every lattice point inside the swept sphere is filled. This
   * keeps limbs and the tail connected with real round volume.
   */
  capsule(
    ax: number,
    ay: number,
    az: number,
    bx: number,
    by: number,
    bz: number,
    r0: number,
    r1: number,
    color: string,
  ): void {
    const abx = bx - ax
    const aby = by - ay
    const abz = bz - az
    const len2 = abx * abx + aby * aby + abz * abz || 1
    const rmax = Math.max(r0, r1)
    const x0 = Math.floor(Math.min(ax, bx) - rmax) - 1
    const x1 = Math.ceil(Math.max(ax, bx) + rmax) + 1
    const y0 = Math.floor(Math.min(ay, by) - rmax) - 1
    const y1 = Math.ceil(Math.max(ay, by) + rmax) + 1
    const z0 = Math.floor(Math.min(az, bz) - rmax) - 1
    const z1 = Math.ceil(Math.max(az, bz) + rmax) + 1
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        for (let z = z0; z <= z1; z++) {
          let t = ((x - ax) * abx + (y - ay) * aby + (z - az) * abz) / len2
          t = t < 0 ? 0 : t > 1 ? 1 : t
          const px = ax + abx * t
          const py = ay + aby * t
          const pz = az + abz * t
          const r = r0 + (r1 - r0) * t
          const dx = x - px
          const dy = y - py
          const dz = z - pz
          if (dx * dx + dy * dy + dz * dz <= r * r) {
            this.put(x, y, z, color)
          }
        }
      }
    }
  }

  recolor(predicate: (v: Voxel) => boolean, color: string): void {
    for (const v of this.map.values()) {
      if (predicate(v)) {
        v.color = varyColor(color, v.x, v.y, v.z)
      }
    }
  }

  get count(): number {
    return this.map.size
  }

  toArray(): Voxel[] {
    return Array.from(this.map.values())
  }
}