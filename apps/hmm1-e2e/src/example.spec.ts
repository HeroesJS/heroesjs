import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(await page.title()).toBe('Hmm1');
});

test('matches screenshot', async ({ page }) => {
  await page.goto('/');

  await expect(await page.locator('#app')).toHaveScreenshot('screenshot.png');
});
