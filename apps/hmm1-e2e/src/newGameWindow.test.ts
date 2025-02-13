import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/game/new/standard');
});

test('renders new game window', async ({ page }) => {
  await expect(page.locator('#app')).toHaveScreenshot('new-game-window.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders game difficulty info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /easy/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('game-difficulty-info.png');
});

test('renders opponent setting info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /opponent 1 setting/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('opponent-setting-info.png');
});

test('renders player color info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /player color/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('player-color-info.png');
});

test('renders king of the hill info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /king of the hill/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('king-of-the-hill-info.png');
});

test('renders scenario selection info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /select scenario/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('scenario-selection-info.png');
});

test('renders rating info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /rating/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('rating-info.png');
});

test('renders okay info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /okay/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('okay-info.png');
});

test('renders cancel info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /cancel/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('cancel-info.png');
});

test('renders scenario selection', async ({ page }) => {
  await page.goto('/game/new/standard/scenario/');

  await expect(page.locator('#app')).toHaveScreenshot('scenario-selection.png', {
    maxDiffPixelRatio: 0.01,
  });
});
