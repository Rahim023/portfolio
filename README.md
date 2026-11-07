Portfolio — Abdul Rahim

This repository contains a polished full‑stack portfolio project showcasing production‑ready web apps, a responsive front end, and a small Node/Express backend. The goal is to present clean code, real authentication flows, and UI polish for hiring managers.

Quick start
- Install dependencies and run the frontend:
  - cd frontend
  - npm install
  - npm run dev
- Start the backend (separate terminal):
  - cd backend
  - npm install
  - npm run dev

What’s inside (high level)
- frontend/: React app (components, pages, styles). Key components exported from `src/components/index.js` for simple imports.
- backend/: Express API with auth, project, and contact routes; DB config in `config/db.js`.
- public/: static assets and build outputs.

Highlights
- Responsive, mobile-first design and accessible patterns.
- Framer Motion and subtle animations for polish.
- Auth flow (JWT), protected routes, and example CRUD endpoints.
- Interactive components: PhotoGrid, NavBar, dynamic LogoLoop.

Developer notes
- Use the barrel export (`src/components/index.js`) to import components: `import { NavBar, PhotoGrid } from './components'`.
- Images live in `frontend/public/images` — use lazy loading for performance.
- To prepare production builds, run `npm run build` in `frontend` and deploy the `build/` folder.

If you want the longer docs split back into separate guides, tell me which sections to extract (deploy, testing, design). 
