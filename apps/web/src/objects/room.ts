import * as THREE from 'three';

export interface RoomSize {
    width: number;
    depth: number;
    height: number;
}

const WALL_THICKNESS = 0.1;

export function createRoom(size: RoomSize): THREE.Group {
    const room = new THREE.Group();
    room.name = 'room';

    const floorGeometry = new THREE.PlaneGeometry(size.width, size.depth);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: '#d6c7a1' });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.name = 'floor';
    room.add(floor);

    const wallMaterial = new THREE.MeshStandardMaterial({ color: '#e5e7eb' });

    const backWallGeometry = new THREE.BoxGeometry(size.width, size.height, WALL_THICKNESS);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, size.height / 2, -size.depth / 2 - WALL_THICKNESS / 2);
    backWall.receiveShadow = true;
    backWall.name = 'backWall';
    room.add(backWall);

    const leftWallGeometry = new THREE.BoxGeometry(WALL_THICKNESS, size.height, size.depth);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.position.set(-size.width / 2 - WALL_THICKNESS / 2, size.height / 2, 0);
    leftWall.receiveShadow = true;
    leftWall.name = 'leftWall';
    room.add(leftWall);

    return room;
}