import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /view credits/i }).click();
});

test('url is /credits', async ({ page }) => {
  expect(page.url().endsWith('/credits')).toBe(true);
});

test('renders credits', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /credits/i })).toBeDefined();
});

test('matches screenshot', async ({ page }) => {
  await expect(await page.locator('#app')).toHaveScreenshot('credits.png', { maxDiffPixelRatio: 0.03 });
});

test('navigates to main menu when clicking anywhere', async ({ page }) => {
  await page.click('#app', { position: { x: 0, y: 0 } });

  await expect(page.getByRole('menu', { name: /main menu/i })).toBeDefined();
});
