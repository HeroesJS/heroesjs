import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/adventure/game-options');
});

test('matches screenshot', async ({ page }) => {
  await expect(page.locator('#app')).toHaveScreenshot('game-options-window.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders new game info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /new game/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('new-game-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders load game info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /load game/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('load-game-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders save game info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /save game/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('save-game-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders quit info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /quit/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('quit-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders music info', async ({ page }) => {
  const option = await page.getByRole('option', { name: /music/i }).boundingBox();

  await page.mouse.move(option!.x, option!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('music-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders effects info', async ({ page }) => {
  const option = await page.getByRole('option', { name: /effects/i }).boundingBox();

  await page.mouse.move(option!.x, option!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('effects-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders movement speed info', async ({ page }) => {
  const option = await page.getByRole('option', { name: /speed/i }).boundingBox();

  await page.mouse.move(option!.x, option!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('movement-speed-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders auto save info', async ({ page }) => {
  const option = await page.getByRole('option', { name: /auto save/i }).boundingBox();

  await page.mouse.move(option!.x, option!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('auto-save-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders show path info', async ({ page }) => {
  const option = await page.getByRole('option', { name: /show path/i }).boundingBox();

  await page.mouse.move(option!.x, option!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('show-path-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders view enemy movement info', async ({ page }) => {
  const option = await page.getByRole('option', { name: /view enemy movement/i }).boundingBox();

  await page.mouse.move(option!.x, option!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('view-enemy-movement-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders okay info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /okay/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('okay-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders info info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /info/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('info-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});
