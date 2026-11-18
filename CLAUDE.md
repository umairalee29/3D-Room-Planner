# 3D Room Planner

A web app for planning a room in 3D: set room size, place furniture,
move/rotate it, and save/load layouts.

## Stack

- **Web (`apps/web`)**: Vite, TypeScript (strict), plain Three.js (NOT React
  Three Fiber), Tailwind CSS for UI panels.
- **API (`apps/api`)**: Node, Express, TypeScript, Prisma ORM, SQLite.
- **Tests**: Vitest (unit), Supertest (API), Playwright (end-to-end).
- npm workspaces. Use `npm`, never yarn or pnpm.

## Commands (run from repo root)

- `npm run dev` – start web (5173) and API (4000)
- `npm test` – run all tests
- `npm run lint` – ESLint + type check

## Structure

- `apps/web/src/scene/` – Three.js scene, camera, lights, renderer
- `apps/web/src/objects/` – room and furniture meshes
- `apps/web/src/ui/` – Tailwind UI panels (DOM, not React)
- `apps/api/src/routes/` – Express routes
- `apps/api/prisma/` – schema and migrations
- `docs/` – architecture, ui, backend, data. Update docs when behaviour changes.

## Rules

- TypeScript strict mode. No `any`; use proper types or `unknown`.
- Dispose Three.js geometries, materials and textures when removing objects.
- Keep the render loop free of allocations (no `new Vector3()` per frame).
- Every new feature or bug fix comes with a test.
- Conventional Commits: feat:, fix:, docs:, test:, chore:, refactor:.
- Small, focused changes. Explain the plan before large edits.

## Secrets

- Never read, print or commit `.env`. Use `.env.example` for key names.
- `VITE_` variables are public (shipped to the browser). Never put secrets in them.

## About the developer

Senior front-end engineer, new to Three.js. Explain Three.js concepts
briefly when introducing them.
