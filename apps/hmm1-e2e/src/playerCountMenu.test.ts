import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/game/new/multi-player/hot-seat');
});

test('renders menu', async ({ page }) => {
  await expect(page.locator('#app')).toHaveScreenshot('menu.png');
});

test('renders 2 player info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /2 players/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('2-players-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders 3 player info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /3 players/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('3-players-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders 4 player info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /4 players/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('4-players-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders cancel info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /cancel/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('cancel-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});
