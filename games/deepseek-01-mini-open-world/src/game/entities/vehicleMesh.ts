import * as THREE from 'three';

export function buildVehicleMesh(
  bodyColor: number,
  kind: 'parked' | 'traffic' | 'police' | 'mission'
): THREE.Group {
  const group = new THREE.Group();

  const isPolice = kind === 'police';
  const bodyMat = new THREE.MeshStandardMaterial({
    color: isPolice ? 0x1b1f2a : bodyColor,
    metalness: 0.35,
    roughness: 0.45
  });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x9fd0ff,
    metalness: 0.1,
    roughness: 0.15,
    transparent: true,
    opacity: 0.85
  });

  const body = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.7, 4.3), bodyMat);
  body.position.y = 0.78;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.62, 2.1), glassMat);
  cabin.position.set(0, 1.36, -0.15);
  cabin.castShadow = true;
  group.add(cabin);

  const bumperMat = new THREE.MeshStandardMaterial({ color: 0x22252d, roughness: 0.8 });
  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.25, 0.3), bumperMat);
  frontBumper.position.set(0, 0.55, 2.12);
  group.add(frontBumper);
  const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.25, 0.3), bumperMat);
  rearBumper.position.set(0, 0.55, -2.12);
  group.add(rearBumper);

  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x14161b, roughness: 0.9 });
  const wheels: THREE.Mesh[] = [];
  const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.32, 14);
  const wheelPos: Array<[number, number]> = [
    [0.98, 1.4],
    [-0.98, 1.4],
    [0.98, -1.4],
    [-0.98, -1.4]
  ];
  for (const [wx, wz] of wheelPos) {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(wx, 0.38, wz);
    wheel.castShadow = true;
    group.add(wheel);
    wheels.push(wheel);
  }

  const headMat = new THREE.MeshStandardMaterial({
    color: 0xfff4c2,
    emissive: 0xfff0b0,
    emissiveIntensity: 0.9
  });
  for (const hx of [0.62, -0.62]) {
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.1), headMat);
    head.position.set(hx, 0.9, 2.17);
    group.add(head);
  }

  const tailMat = new THREE.MeshStandardMaterial({
    color: 0xff3b30,
    emissive: 0xff2010,
    emissiveIntensity: 0.8
  });
  for (const tx of [0.66, -0.66]) {
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.1), tailMat);
    tail.position.set(tx, 0.9, -2.17);
    group.add(tail);
  }

  let lightBar: THREE.Mesh[] | undefined;
  if (isPolice) {
    lightBar = [];
    const redMat = new THREE.MeshStandardMaterial({
      color: 0xff2233,
      emissive: 0xff1122,
      emissiveIntensity: 1.5
    });
    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x2255ff,
      emissive: 0x2244ff,
      emissiveIntensity: 1.5
    });
    const barGeo = new THREE.BoxGeometry(0.7, 0.22, 0.6);
    const red = new THREE.Mesh(barGeo, redMat);
    red.position.set(0.4, 1.78, -0.1);
    const blue = new THREE.Mesh(barGeo, blueMat);
    blue.position.set(-0.4, 1.78, -0.1);
    group.add(red, blue);
    lightBar.push(red, blue);
  }

  group.userData = { wheels, lightBar, bodyMaterial: bodyMat };
  return group;
}