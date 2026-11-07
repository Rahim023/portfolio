Frontend scaffold overview

Structure:
- src/components: UI components (NavBar, Footer, PhotoGrid, etc.)
- src/pages: Page components used by the router (Home, Projects, Contact)
- src/utils: helper utilities

Guidelines for readability (for hiring managers):
- Components export via `src/components/index.js` so pages import from `../components`.
- Keep component CSS next to the component and use consistent filenames (ComponentName.jsx + ComponentName.css).
- Page-level components live in `src/pages` and are exported in `src/pages/index.js` (optional).

To run locally:

```bash
cd frontend
npm install
npm run dev
```
