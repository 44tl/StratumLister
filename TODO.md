# Production Fixes - TODO

## Issue 1: Empty Pages (Build Script)
- [x] Create `scripts/copy-pages.mjs` with robust ES module copy logic
- [x] Update `package.json` build script to use the new script


## Issue 2: highlight.js CSS Module Resolution
- [x] Remove `highlight.js` from `package.json` devDependencies
- [x] Remove `marked` from `package.json` devDependencies (also CDN-only)
- [x] Remove `dompurify` from `package.json` devDependencies (also CDN-only)


## Cleanup: Remove Offline/PWA Mentions from Changelogs
- [x] Search changelog files for offline/PWA mentions
- [x] Remove offline-related content from changelogs


## Verification
- [x] Run `npm install` to sync dependency changes
- [x] Run `npm run build` to verify copy script works
- [x] Verify `dist/pages/` exists with all markdown files (94 files confirmed)
