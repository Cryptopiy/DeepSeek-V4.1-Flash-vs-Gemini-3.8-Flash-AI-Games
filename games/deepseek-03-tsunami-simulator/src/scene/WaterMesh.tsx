import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { buildWaterGeometry, updateWaterGeometry } from './geometry'
import { useSim } from './SimContext'

const vertexShader = /* glsl */ `
#include <common>
#include <fog_pars_vertex>
attribute float depth;
varying float vDepth;
varying vec2 vXZ;
void main() {
  vDepth = depth;
  vXZ = vec2(position.x, position.z);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`

const fragmentShader = /* glsl */ `
#include <common>
#include <fog_pars_fragment>
uniform float uTime;
varying float vDepth;
varying vec2 vXZ;
void main() {
  float d = max(vDepth, 0.0);
  float f = clamp(d / 7.0, 0.0, 1.0);
  vec3 shallow = vec3(0.42, 0.78, 0.86);
  vec3 deep = vec3(0.02, 0.16, 0.42);
  vec3 col = mix(shallow, deep, f);
  float ripple = sin(vXZ.x * 0.55 + uTime * 1.8) * sin(vXZ.y * 0.65 - uTime * 1.3);
  col += ripple * 0.04 * (1.0 - f);
  float alpha = smoothstep(0.0, 0.22, d) * mix(0.5, 0.93, f);
  gl_FragColor = vec4(col, alpha);
  #include <fog_fragment>
}
`

export function WaterMesh() {
  const { sim, bus } = useSim()

  const { geo, depths } = useMemo(() => buildWaterGeometry(sim), [sim])

  const material = useMemo(() => {
    const uniforms = THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      { uTime: { value: 0 } },
    ])
    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      fog: true,
    })
  }, [])

  useEffect(() => {
    updateWaterGeometry(sim, geo, depths)
    return bus.add(() => {
      updateWaterGeometry(sim, geo, depths)
      material.uniforms.uTime.value = sim.time
    })
  }, [sim, bus, geo, depths, material])

  return (
    <mesh geometry={geo} material={material} frustumCulled={false} renderOrder={2} />
  )
}