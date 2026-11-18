import { useMemo } from 'react'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
varying vec3 vPos;
void main() {
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = /* glsl */ `
varying vec3 vPos;
void main() {
  float h = normalize(vPos).y;
  vec3 top = vec3(0.22, 0.45, 0.72);
  vec3 horizon = vec3(0.72, 0.82, 0.9);
  vec3 c = mix(horizon, top, smoothstep(-0.02, 0.55, h));
  gl_FragColor = vec4(c, 1.0);
}
`

export function SkyDome() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
      }),
    [],
  )

  return (
    <mesh material={material} scale={[2600, 2600, 2600]} renderOrder={-1}>
      <sphereGeometry args={[1, 32, 16]} />
    </mesh>
  )
}