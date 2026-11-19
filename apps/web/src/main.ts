import * as THREE from 'three';
import { setupScene } from './scene/setupScene';
import './style.css';

const container = document.querySelector<HTMLDivElement>('#viewport');
if (!container) throw new Error('#viewport element not found');

const { scene, camera, renderer, controls } = setupScene(container);

const boxGeometry = new THREE.BoxGeometry(2, 0.8, 0.9);
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#6b7280'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
});
