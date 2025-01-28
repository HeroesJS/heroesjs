import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /new game/i }).click();

  await page.getByRole('button', { name: /campaign game/i }).click();
});

test('renders scenario 1 info', async ({ page }) => {
  await page.getByRole('button', { name: /play lord ironfist/i }).click();

  await expect(page.locator('#app')).toHaveScreenshot('scenario-1-info.png');
});
