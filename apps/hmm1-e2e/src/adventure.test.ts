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

test.describe('standard scenario info', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adventure/scenario-info');
  });

  test('matches screenshot', async ({ page }) => {
    await expect(page.getByRole('dialog', { name: /scenario info window/i })).toHaveScreenshot(
      'standard-scenario-info-window.png',
    );
  });
});

test.describe('campaign scenario info', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adventure/campaign-scenario-info');
  });

  test('matches screenshot', async ({ page }) => {
    await expect(page.getByRole('dialog', { name: /scenario info window/i })).toHaveScreenshot(
      'campaign-scenario-info-window.png',
      { maxDiffPixelRatio: 0.02 },
    );
  });
});
