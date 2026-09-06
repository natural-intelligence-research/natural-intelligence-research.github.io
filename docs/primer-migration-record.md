# Primer Migration Record

The site no longer relies on the Primer Jekyll theme for rendering. This document records the completed migration and the safeguards used to preserve the existing design.

## Completed Changes

- Replaced `container-lg`, `markdown-body`, and `text-center` with the site-owned `site-container`, `site-content`, and `footer-copyright` classes.
- Added site-owned styles for layout, typography, links, lists, definition lists, images, and tables.
- Removed the `jekyll-theme-primer` SCSS import from `assets/css/style.scss`.
- Removed `theme: jekyll-theme-primer` from `_config.yml`.

## Verification

Each migration step passed the Jekyll build and the desktop and mobile visual regression suite without updating baseline images:

```sh
docker compose run --rm jekyll sh -c 'bundle install && bundle exec jekyll build'
docker run --rm --volume "$PWD:/work" --workdir /work/vrt \
  mcr.microsoft.com/playwright:v1.63.0-jammy sh -c 'npm ci && npm test'
```

`github-pages` remains the deployment dependency in `Gemfile`. It includes Primer among its transitive dependencies, but this site no longer imports or configures that theme.
