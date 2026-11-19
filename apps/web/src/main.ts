import * as THREE from 'three';
import { setupScene } from './scene/setupScene';
import { createRoom } from './objects/room';
import { createFurniture, createFurnitureItem, type FurnitureItem } from './objects/furniture';
import type { FurnitureType } from './objects/furnitureCatalog';
import { createCatalogPanel } from './ui/catalogPanel';
import './style.css';

const container = document.querySelector<HTMLElement>('#viewport');
if (!container) throw new Error('#viewport element not found');

const catalogContainer = document.querySelector<HTMLElement>('#catalog-panel');
if (!catalogContainer) throw new Error('#catalog-panel element not found');

const { scene, camera, renderer, controls } = setupScene(container);

const room = createRoom({ width: 5, depth: 5, height: 2.6 });
scene.add(room);

const furnitureGroup = new THREE.Group();
furnitureGroup.name = 'furniture';
scene.add(furnitureGroup);

const furnitureItems: FurnitureItem[] = [];

function addFurniture(item: FurnitureItem): void {
    furnitureItems.push(item);
    furnitureGroup.add(createFurniture(item));
}

addFurniture(createFurnitureItem("sofa", 0, -1.5));
addFurniture(createFurnitureItem("table", 0, 0));
addFurniture(createFurnitureItem("chair", 1.2, 0));

createCatalogPanel(catalogContainer, (type: FurnitureType) => {
    addFurniture(createFurnitureItem(type));
});

for (const item of furnitureItems) {
    const mesh = createFurniture(item);
    furnitureGroup.add(mesh);
}

renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
});
