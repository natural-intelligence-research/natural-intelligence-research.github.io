# Visual regression tests

The tests compare screenshots of `/`, `/projects`, and `/team` in desktop Chromium and mobile Chromium.

Build the site from the repository root, then run the tests:

```sh
docker compose run --rm jekyll jekyll build
cd vrt
npm ci
npx playwright install chromium
npm test
```

Playwright serves the generated `_site/` directory on port 4173 for the duration of the test run.

Use `npm run test:update` only when a reviewed visual change intentionally updates the baseline images.
