# Visual regression tests

The tests compare screenshots of `/`, `/projects`, and `/team` in desktop Chromium and mobile Chromium.

Start the site from the repository root, then run the tests:

```sh
docker compose up
cd vrt
npm ci
npx playwright install chromium
npm test
```

Use `npm run test:update` only when a reviewed visual change intentionally updates the baseline images.
