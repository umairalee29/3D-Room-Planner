# ADR 0001: Plain Three.js instead of React Three Fiber

**Status:** Accepted
**Date:** 2026-11-18

## Context

The goal is to learn core 3D web concepts (scene graph, cameras, lights,
raycasting, performance). React Three Fiber (R3F) wraps Three.js in React
components, which hides some of these details.

## Decision

Use plain Three.js with TypeScript. UI panels are plain DOM styled with Tailwind.

## Consequences

- ✅ Direct experience with the Three.js API and render loop.
- ✅ Full control over performance and memory (disposal).
- ❌ More manual wiring between UI and scene than React would need.
- Revisit if the UI grows complex enough to need a component framework.
