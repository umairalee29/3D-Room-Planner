import * as THREE from "three";

export interface SceneContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
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
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const hemisphereLight = new THREE.HemisphereLight("#ffffff", "#8d8d8d", 1.5);
  scene.add(hemisphereLight);

  const sun = new THREE.DirectionalLight("#ffffff", 2);
  sun.position.set(5, 10, 5);
  scene.add(sun);

  return { scene, camera, renderer };
}
