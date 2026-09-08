import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', navigationLabel: 'Top' },
  { path: '/projects', navigationLabel: 'Projects' },
  { path: '/team', navigationLabel: 'Team' },
];

for (const sitePage of pages) {
  test(`render ${sitePage.path}`, async ({ page }) => {
    await page.goto(sitePage.path);
    await expect(page).toHaveScreenshot();

    const heading = page.locator('h1');
    const currentNavigationItem = page.locator('nav a[aria-current="page"]');
    const imageAltTexts = await page.locator('img').evaluateAll((images) =>
      images.map((image) => image.alt.trim()),
    );
    const workImageAltTexts = await page.locator('.work img').evaluateAll((images) =>
      images.map((image) => image.alt.trim()),
    );

    await expect(heading).toHaveCount(1);
    await expect(heading).not.toHaveText('');
    await expect(currentNavigationItem).toHaveCount(1);
    await expect(currentNavigationItem).toHaveText(sitePage.navigationLabel);
    expect(imageAltTexts.every(Boolean)).toBe(true);
    expect(new Set(workImageAltTexts).size).toBe(workImageAltTexts.length);
  });
}
