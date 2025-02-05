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
    maxDiffPixelRatio: 0.1,
  });
});

test.describe('adventure options', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: /adventure options/i }).click();
  });

  test('matches screenshot', async ({ page }) => {
    await expect(page.locator('#app')).toHaveScreenshot('adventure-options-window.png');
  });
});

test.describe('game options', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adventure/game-options');
  });

  test('matches screenshot', async ({ page }) => {
    await expect(page.locator('#app')).toHaveScreenshot('game-options-window.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});

test.describe('standard scenario info', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adventure/scenario-info');
  });

  test('matches screenshot', async ({ page }) => {
    await expect(page.locator('#app')).toHaveScreenshot('standard-scenario-info-window.png', {
      maxDiffPixelRatio: 0.1,
    });
  });
});

test.describe('campaign scenario info', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adventure/campaign-scenario-info');
  });

  test('matches screenshot', async ({ page }) => {
    await expect(page.locator('#app')).toHaveScreenshot('campaign-scenario-info-window.png', {
      maxDiffPixelRatio: 0.02,
    });
  });
});
