# Taha Pourhassani — Personal Website

React + Vite + Tailwind CSS. Phase 2 homepage.

## Open the local preview

On this Mac, double-click `start.command`. Keep its Terminal window open while viewing the website. Press Control+C in that window to stop it.

The project-local Node.js runtime lives in the workspace's `.tools` directory, outside this repository. Nothing is installed system-wide.

With Node.js 24 installed elsewhere:

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Current milestone

The initial homepage is implemented locally using the exact approved headline, biography and palette, with generated Moai/Eiffel hero art, four project panels, a four-slide research gallery and three playable films. The résumé PDF is pending; its button is intentionally disabled and says Resume coming soon.

Desktop/mobile browser checks cover 1440, 768, 390 and 320 pixels, image loading, film metadata, dialog closing, and browser errors. Deployment uses GitHub Actions to build the site and publish `dist` to GitHub Pages whenever `main` changes. Live address: https://tahapourhassani.github.io/. The résumé PDF remains pending.

## Public content boundaries

Only website files and approved public portfolio media belong in this repository. NLP and computer-vision project source code, the full research deck, credentials and private client materials must stay outside it. The website's own browser-delivered HTML/CSS/JavaScript is public when deployed.

NLP credit: research review and presentation of the Microsoft/Miroculus case study, not original implementation or benchmark results. Automotive credit: AI-assisted opening arc and most zoom movements, not original filming or final editing. YANI credit: concept, AI image/video generation and editing.
