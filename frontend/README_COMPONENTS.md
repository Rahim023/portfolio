Project components structure

- src/components/index.js — barrel exports for easy imports
- Keep components and their CSS together (e.g., NavBar.jsx + NavBar.css)

Usage:
- import { NavBar, PhotoGrid, LogoLoop } from './components';

This helps hiring managers quickly scan components and reduces long relative import paths.