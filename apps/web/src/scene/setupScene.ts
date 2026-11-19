import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export interface SceneContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
}

export function setupScene(container: HTMLElement): SceneContext {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#f1f5f9");

  const camera = new THREE.PerspectiveCamera(
    59,
    container.clientWidth / container.clientHeight,
    0.1,
    100,
  );
  camera.position.set(6, 5, 6);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.set(0, 0, 0);
  controls.minDistance = 2;
  controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI / 2 - 0.05;

  const hemisphereLight = new THREE.HemisphereLight("#ffffff", "#8d8d8d", 1.5);
  scene.add(hemisphereLight);

  const sun = new THREE.DirectionalLight("#ffffff", 2);
  sun.position.set(5, 10, 5);
  scene.add(sun);

  const resizeObserver = new ResizeObserver(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  resizeObserver.observe(container);

  return { scene, camera, renderer, controls };
}
