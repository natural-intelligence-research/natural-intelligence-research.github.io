# Primer Dependency Inventory

This document records the current Primer dependencies before replacing them with site-owned styles. It is a migration reference and does not change the rendered site.

## Theme Entry Points

| Location | Current dependency | Replacement direction |
| --- | --- | --- |
| `_config.yml` | `theme: jekyll-theme-primer` | Remove after all base styles are owned by this site. |
| `assets/css/style.scss` | `@import "{{ site.theme }}"` | Remove after the site-owned base stylesheet reproduces the current rendering. |

## Template Classes

| Location | Primer class | Current responsibility | Replacement direction |
| --- | --- | --- | --- |
| `_layouts/default.html` | `container-lg` | Centers content and constrains page width. | Add and use `site-container`. |
| `_layouts/default.html` | `markdown-body` | Provides element defaults for headings, links, lists, images, code, and definition lists. | Add and use `site-content`. |
| `_layouts/default.html` | `text-center` | Centers the footer copyright text. | Replace with a footer-owned class. |

## CSS Dependencies

`style.scss` currently relies on Primer defaults for the document baseline and uses `.markdown-body` selectors to override Primer's definition-list rules for work metadata. The following behavior must be reproduced before removing the import:

- document typography, colors, and link presentation
- heading, paragraph, list, image, and code spacing
- container width and responsive horizontal padding
- definition-list defaults used by team and information content
- footer text alignment and all anchor-link presentation

## Migration Order

1. Add site-owned container, content, and footer utility classes with styles that match the current screenshots.
2. Replace the Primer classes in the default layout and update scoped selectors.
3. Add explicit base element styles for the remaining Primer-provided rendering.
4. Remove the SCSS import, then remove the Jekyll theme setting.

Each step must pass the desktop and mobile visual regression suite without updating the baseline images. Intentional design changes are handled separately from this migration.
