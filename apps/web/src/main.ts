import * as THREE from 'three';
import { setupScene } from './scene/setupScene';
import { createRoom } from './objects/room';
import './style.css';

const container = document.querySelector<HTMLElement>('#viewport');
if (!container) throw new Error('#viewport element not found');

const { scene, camera, renderer, controls } = setupScene(container);
const room = createRoom({ width: 5, depth: 5, height: 2.6 });
scene.add(room);

const boxGeometry = new THREE.BoxGeometry(2, 0.8, 0.9);
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#6b7280'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = 0.4;
box.castShadow = true;
scene.add(box);

renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
});
