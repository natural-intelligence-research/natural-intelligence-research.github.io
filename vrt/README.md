# Visual regression tests

The tests compare screenshots of `/`, `/projects`, and `/team` in desktop Chromium and mobile Chromium.

Build the site from the repository root, then run the tests:

```sh
docker compose run --rm jekyll sh -c 'bundle install && bundle exec jekyll build'
docker run --rm --volume "$PWD:/work" --workdir /work/vrt mcr.microsoft.com/playwright:v1.63.0-jammy sh -c 'npm ci && npm test'
```

Playwright serves the generated `_site/` directory on port 4173 for the duration of the test run. The pinned Playwright image makes local and CI screenshot rendering consistent.

To update baselines after a reviewed visual change, replace `npm test` in the Docker command with `npm run test:update`.
