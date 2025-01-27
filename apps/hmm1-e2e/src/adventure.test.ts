import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/adventure');
});

test('matches screenshot', async ({ page }) => {
  await expect(page.locator('#app')).toHaveScreenshot('adventure-screen.png', {
    mask: [
      page.getByRole('main', { name: /adventure map/i }),
      page.getByRole('note', { name: /world map/i }),
      page.getByRole('note', { name: /status window/i }),
    ],
    maxDiffPixelRatio: 0,
  });
});

test.describe('adventure options', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: /adventure options/i }).click();
  });

  test('matches screenshot', async ({ page }) => {
    await expect(page.getByRole('dialog', { name: /adventure options/i })).toHaveScreenshot('adventure-options.png');
  });
});
