import * as THREE from 'three';
import { setupScene } from './scene/setupScene';
import { createRoom } from './objects/room';
import { createFurniture, createFurnitureItem, type FurnitureItem } from './objects/furniture';
import './style.css';

const container = document.querySelector<HTMLElement>('#viewport');
if (!container) throw new Error('#viewport element not found');

const { scene, camera, renderer, controls } = setupScene(container);

const room = createRoom({ width: 5, depth: 5, height: 2.6 });
scene.add(room);

const furnitureGroup = new THREE.Group();
furnitureGroup.name = 'furniture';
scene.add(furnitureGroup);

const furnitureItems: FurnitureItem[] = [
    createFurnitureItem("sofa", 0, -1.5),
    createFurnitureItem("table", 0, 0),
    createFurnitureItem("chair", 1.2, 0),
];

for (const item of furnitureItems) {
    const mesh = createFurniture(item);
    furnitureGroup.add(mesh);
}

renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
});
