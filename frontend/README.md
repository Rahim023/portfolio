Frontend scaffold overview

Structure:
- src/components: UI components (NavBar, Footer, PhotoGrid, etc.)
- src/pages: Page components used by the router (Home, Projects, Contact)
- src/utils: helper utilities

Guidelines for readability (for hiring managers):
- Components export via `src/components/index.js` so pages import from `../components`.
- Keep component CSS next to the component and use consistent filenames (ComponentName.jsx + ComponentName.css).
- Page-level components live in `src/pages` and are exported in `src/pages/index.js` (optional).
- Lenis provides smooth scrolling and GSAP ScrollTrigger reveals elements marked with `data-scroll-reveal`. Both are disabled when reduced motion is requested.
- The mobile navigation closes after choosing a page or resume link, when clicking outside it, or with Escape.
- The welcome lanyard appears until dismissed once per browser tab session; page and section navigation do not reopen it.
- The About section's skills book opens by click or keyboard; select a page to zoom. Escape returns from a zoomed page, then closes the book.
- The book's decorative OGL illustration pauses offscreen and is static when reduced motion is requested; the book remains usable without WebGL.
- On the Projects page, drag the carousel, use its arrow keys, or choose a project from the list to update the case study. Category filters, direct case-study URLs, and an expandable live preview remain available.
- The resume links open an in-page PDF viewer at `/resume`. The dial completes only after the PDF is fetched and verified; the viewer also provides a direct-open link and a retry on failure.
- Route chunks use a Comet Dial while loading, and desktop navigation uses animated jelly chips with standard link and button semantics.

To run locally:

```bash
cd frontend
npm install
npm run dev
```
