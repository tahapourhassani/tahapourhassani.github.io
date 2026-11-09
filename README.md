# Taha Pourhassani — Personal Website

React + Vite + Tailwind CSS. Personal portfolio, About and Resume.

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

The portfolio includes four project panels, a four-slide research gallery, three playable films, About, a complete online Resume and email/LinkedIn/GitHub contact links. Both CV buttons download `public/resume/Taha-Pourhassani-CV.pdf`.

The public PDF is exported directly from the user's final approved Word CV, kept outside this repository. For future updates, export that Word document without rebuilding from earlier draft scripts. The current education entry is M1, September 2026–September 2027 expected. No phone number, street address or third-party reference details are published.

Build with `npm run build`. GitHub Actions builds and deploys `dist` to GitHub Pages on pushes to `main`. Live address: https://tahapourhassani.github.io/.

## Validation

Check desktop, tablet and mobile widths for horizontal overflow and image loading. Check navigation, both PDF downloads, the engineering-project disclosure, all four research slides, video playback metadata and dialog closing by button/Escape. Confirm the downloaded CV matches the approved Word source and review its pages after any export.

## Public content boundaries

Only website files and approved public portfolio media belong in this repository. NLP and computer-vision project source code, the full research deck, credentials and private client materials must stay outside it. The website's own browser-delivered HTML/CSS/JavaScript is public when deployed.

NLP credit: research review and presentation of the Microsoft/Miroculus case study, not original implementation or benchmark results. Automotive credit: AI-assisted opening arc and most zoom movements, not original filming or final editing. YANI credit: concept, AI image/video generation and editing.
