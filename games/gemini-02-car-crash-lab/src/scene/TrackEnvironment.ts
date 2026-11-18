import * as THREE from 'three';
import { VEHICLE_SPECS } from '../physics/constants';

export class TrackEnvironment {
  public group: THREE.Group;
  private cameraTowerLights: THREE.Mesh[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.buildTrack();
    this.buildImpactZone();
    this.buildGantryTruss();
    this.buildDistanceMarkers();
    this.buildCameraTowers();
    this.buildPerimeterBarriers();
  }

  private buildTrack() {
    // Main asphalt runway
    const runwayGeo = new THREE.PlaneGeometry(16, 85);
    const runwayMat = new THREE.MeshStandardMaterial({
      color: 0x181e29,
      roughness: 0.85,
      metalness: 0.1
    });
    const runway = new THREE.Mesh(runwayGeo, runwayMat);
    runway.rotation.x = -Math.PI / 2;
    runway.position.set(0, 0, -10);
    runway.receiveShadow = true;
    this.group.add(runway);

    // Surrounding concrete facility floor
    const floorGeo = new THREE.PlaneGeometry(70, 110);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0c1017,
      roughness: 0.95,
      metalness: 0.05
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -0.01, -10);
    floor.receiveShadow = true;
    this.group.add(floor);

    // Runway Center Guidance Line
    const centerLineGeo = new THREE.PlaneGeometry(0.2, 75);
    const centerLineMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
    const centerLine = new THREE.Mesh(centerLineGeo, centerLineMat);
    centerLine.rotation.x = -Math.PI / 2;
    centerLine.position.set(0, 0.005, -12);
    this.group.add(centerLine);

    // Lateral boundary lines (yellow lines at edges of 8m runway)
    const edgeLineGeo = new THREE.PlaneGeometry(0.15, 80);
    const edgeLineMat = new THREE.MeshBasicMaterial({ color: 0xeab308 });
    
    const leftEdge = new THREE.Mesh(edgeLineGeo, edgeLineMat);
    leftEdge.rotation.x = -Math.PI / 2;
    leftEdge.position.set(-4.5, 0.006, -10);
    this.group.add(leftEdge);

    const rightEdge = new THREE.Mesh(edgeLineGeo, edgeLineMat);
    rightEdge.rotation.x = -Math.PI / 2;
    rightEdge.position.set(4.5, 0.006, -10);
    this.group.add(rightEdge);
  }

  private buildImpactZone() {
    // Impact zone pad with calibration grid
    const padGeo = new THREE.PlaneGeometry(10, 8);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Dark grey base
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, 512, 512);

      // Yellow/Black Hazard Stripes on perimeter
      ctx.lineWidth = 16;
      ctx.strokeStyle = '#eab308';
      ctx.strokeRect(8, 8, 496, 496);

      // 1-meter calibration grid lines
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(234, 179, 8, 0.35)';
      for (let i = 64; i < 512; i += 64) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 512);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i);
        ctx.stroke();
      }

      // Large Target Circle in center (Z = 0)
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(256, 256, 80, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(256, 256, 160, 0, Math.PI * 2);
      ctx.stroke();

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(256, 30);
      ctx.lineTo(256, 482);
      ctx.moveTo(30, 256);
      ctx.lineTo(482, 256);
      ctx.stroke();

      // Text "IMPACT ZONE 0.0m"
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('CRASH DATUM // 0.0m', 256, 220);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;

    const padMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.65,
      metalness: 0.2
    });

    const pad = new THREE.Mesh(padGeo, padMat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(0, 0.01, VEHICLE_SPECS.impactZoneZ);
    pad.receiveShadow = true;
    this.group.add(pad);
  }

  private buildGantryTruss() {
    const trussGroup = new THREE.Group();
    const trussMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.3
    });

    // 2 Vertical gantry pillars
    const pillarGeo = new THREE.BoxGeometry(0.5, 7.5, 0.5);
    const leftPillar = new THREE.Mesh(pillarGeo, trussMat);
    leftPillar.position.set(-6.5, 3.75, 0);
    leftPillar.castShadow = true;
    trussGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(pillarGeo, trussMat);
    rightPillar.position.set(6.5, 3.75, 0);
    rightPillar.castShadow = true;
    trussGroup.add(rightPillar);

    // Cross beam overhead
    const beamGeo = new THREE.BoxGeometry(13.5, 0.6, 0.6);
    const beam = new THREE.Mesh(beamGeo, trussMat);
    beam.position.set(0, 7.2, 0);
    beam.castShadow = true;
    trussGroup.add(beam);

    // Overhead high-intensity spotlights aimed at impact zone
    const spotX = [-3.5, -1.2, 1.2, 3.5];
    for (const x of spotX) {
      const lampHousingGeo = new THREE.CylinderGeometry(0.3, 0.45, 0.5, 12);
      const lampMat = new THREE.MeshStandardMaterial({ color: 0x1e293b });
      const lamp = new THREE.Mesh(lampHousingGeo, lampMat);
      lamp.position.set(x, 6.8, 0);
      lamp.rotation.x = Math.PI;
      trussGroup.add(lamp);

      const spotLight = new THREE.SpotLight(0xffffff, 2.5);
      spotLight.position.set(x, 6.6, 0);
      spotLight.target.position.set(x * 0.4, 0, 0);
      spotLight.angle = 0.5;
      spotLight.penumbra = 0.4;
      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      trussGroup.add(spotLight);
      trussGroup.add(spotLight.target);
    }

    this.group.add(trussGroup);
  }

  private buildDistanceMarkers() {
    const distances = [-40, -30, -20, -10, 5, 15, 25];
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.5,
      metalness: 0.4
    });

    for (const dist of distances) {
      // Left and right trackside signboards
      for (const side of [-5.5, 5.5]) {
        const postGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 8);
        const post = new THREE.Mesh(postGeo, markerMat);
        post.position.set(side, 0.7, dist);
        this.group.add(post);

        // Sign board
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, 128, 64);
          ctx.lineWidth = 4;
          ctx.strokeStyle = '#eab308';
          ctx.strokeRect(2, 2, 124, 60);

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 26px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${dist > 0 ? '+' : ''}${dist}m`, 64, 32);
        }

        const tex = new THREE.CanvasTexture(canvas);
        const boardGeo = new THREE.BoxGeometry(0.8, 0.4, 0.05);
        const boardMat = new THREE.MeshBasicMaterial({ map: tex });
        const board = new THREE.Mesh(boardGeo, boardMat);
        board.position.set(side, 1.3, dist);
        board.rotation.y = side < 0 ? Math.PI / 4 : -Math.PI / 4;
        this.group.add(board);
      }

      // Transverse line on track floor
      const lineGeo = new THREE.PlaneGeometry(8, 0.1);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0x475569 });
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.007, dist);
      this.group.add(line);
    }
  }

  private buildCameraTowers() {
    // 2 High speed camera posts at trackside
    const towerPositions = [
      { x: -5.8, z: 2.0 },
      { x: 5.8, z: 2.0 },
      { x: -5.8, z: -10.0 }
    ];

    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.6,
      roughness: 0.4
    });

    for (const pos of towerPositions) {
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 2.2, 12), towerMat);
      stand.position.set(pos.x, 1.1, pos.z);
      this.group.add(stand);

      // Camera body
      const camBody = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.6), towerMat);
      camBody.position.set(pos.x, 2.2, pos.z);
      camBody.lookAt(0, 0.8, 0);
      this.group.add(camBody);

      // Camera lens
      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.14, 0.25, 16),
        new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.1 })
      );
      lens.rotation.x = Math.PI / 2;
      lens.position.set(0, 0, 0.35);
      camBody.add(lens);

      // Red recording tally LED
      const ledGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const ledMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(0, 0.16, 0.25);
      camBody.add(led);
      this.cameraTowerLights.push(led);
    }
  }

  private buildPerimeterBarriers() {
    // Left & Right crash arena guard walls
    const wallGeo = new THREE.BoxGeometry(0.4, 1.2, 85);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.7,
      metalness: 0.3
    });

    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.position.set(-8.0, 0.6, -10);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    this.group.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeo, wallMat);
    rightWall.position.set(8.0, 0.6, -10);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    this.group.add(rightWall);
  }

  public update(timeS: number) {
    // Blink camera tally lights
    const isLit = Math.floor(timeS * 2) % 2 === 0;
    for (const led of this.cameraTowerLights) {
      (led.material as THREE.MeshBasicMaterial).color.setHex(isLit ? 0xef4444 : 0x550000);
    }
  }
}
