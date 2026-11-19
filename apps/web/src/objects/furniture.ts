import * as THREE from 'three';
import { FURNITURE_CATALOG, type FurnitureType } from './furnitureCatalog';

export interface FurnitureItem {
    id: string;
    type: FurnitureType;
    x: number;
    z: number;
    rotationY: number;
    color: string;
}

export function createFurnitureItem(type: FurnitureType, x = 0, z = 0): FurnitureItem {
    return {
        id: crypto.randomUUID(),
        type,
        x,
        z,
        rotationY: 0,
        color: FURNITURE_CATALOG[type].color,
    };
}

const geometryCache = new Map<FurnitureType, THREE.BoxGeometry>();

function getGeometry(type: FurnitureType): THREE.BoxGeometry {
    const cached = geometryCache.get(type);
    if (cached) return cached;

    const { width, height, depth } = FURNITURE_CATALOG[type];
    const geometry = new THREE.BoxGeometry(width, height, depth);
    geometryCache.set(type, geometry);
    return geometry;
}

export function createFurniture(item: FurnitureItem): THREE.Mesh {
    const definition = FURNITURE_CATALOG[item.type];
    const geometry = getGeometry(item.type);
    const material = new THREE.MeshStandardMaterial({ color: item.color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(item.x, definition.height / 2, item.z);
    mesh.rotation.y = item.rotationY;
    mesh.castShadow = true;
    mesh.name = item.type;
    mesh.userData.furnitureId = item.id;
    return mesh;
}