import { expect, test } from '@playwright/test';

const paths: string[] = [
  '/',
  '/projects',
  '/team',
];

for (const path of paths) {
  test(`render ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveScreenshot();
  });
}
