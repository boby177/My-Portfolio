# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site: a single-page React 18 app bootstrapped with Create React App (`react-scripts` 5). No router, no state library, no backend. Live deployment is on AWS Amplify (URL in README.md); a `gh-pages` deploy script also exists.

## Commands

- `npm start` — dev server at http://localhost:3000 (CRA lint errors show in the console)
- `npm run build` — production build into `build/`
- `npm test` — Jest via react-scripts in watch mode; for a single file / non-watch run: `npm test -- src/App.test.js --watchAll=false`
- `npm run deploy` — builds then publishes `build/` to GitHub Pages via `gh-pages`

Linting is CRA's built-in ESLint config (`react-app`, `react-app/jest` in package.json); there is no separate lint script.

Both `package-lock.json` and `yarn.lock` are present, and a `.yarnrc.yml` (`nodeLinker: node-modules`) was recently added for Yarn Berry. Keep whichever lockfile matches the package manager you use in sync.

Note: `src/App.test.js` is the unmodified CRA template test (looks for "learn react") and will fail against the current app.

## Architecture

- `src/App.js` renders a fixed `Sidebar` plus a single `<main>` that stacks section components in order: Home → About → Services → Resume → Portfolio → Contact. Navigation is purely anchor-based: each section has an `id` (`home`, `about`, `services`, `resume`, `work`, `contact`) that the Sidebar's `href="#..."` links target, with `scroll-behavior: smooth` in `index.css`. Adding/removing a section means updating both `App.js` and the Sidebar links.
- `src/components/<section>/` — each section is one folder with a `PascalCase.jsx` component and its own lowercase `.css` file imported by the component. Some components in the tree (`blog`, `pricing`, `testimonials`) exist but are not rendered in `App.js`.
- Content lives in data arrays, not in markup:
  - `components/portfolio/Menu.jsx` — project list (`id`, `image`, `title`, `category`, `link`). Images are imported from `src/assets/project-imgs/`. `Portfolio.jsx` filters on `category`, and its filter buttons are hard-coded to `Website`, `Mobile`, `Game` — a new category needs a new button there.
  - `components/resume/Data.jsx` — timeline entries; `Resume.jsx` splits them into two columns by `category` (`"education"` vs `"experience"`).
- Styling is plain CSS using BEM-ish class names (`work__card`, `nav__link`) and global design tokens (colors, font sizes, radius, shadow) defined as CSS variables in `src/index.css`, with a 1024px breakpoint. `bootstrap`/`react-bootstrap` and `swiper` are dependencies but the core layout does not rely on them.
- Icons come from CDN stylesheets/scripts in `public/index.html`: Simple Line Icons (`icon-*` classes, used throughout) and a Font Awesome kit.
- `Contact.jsx` sends the form via EmailJS (`@emailjs/browser`) with service/template/public-key IDs inlined in the component; form field `name` attributes must match the EmailJS template variables.
