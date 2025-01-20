import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(await page.title()).toBe('Hmm1');
});

test('renders main menu', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#app')).toHaveScreenshot('main-menu.png');
});

test('renders new game window', async ({ page }) => {
  await page.goto('/game/new/standard/');

  await expect(page.locator('#app')).toHaveScreenshot('new-game-window.png');
});

test('renders scenario selection', async ({ page }) => {
  await page.goto('/game/new/standard/scenario/');

  await expect(page.locator('#app')).toHaveScreenshot('scenario-selection.png');
});
