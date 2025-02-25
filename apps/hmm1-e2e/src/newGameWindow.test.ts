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
  const option = await page.getByRole('option', { name: /easy/i }).boundingBox();

  await page.mouse.move(option!.x, option!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('game-difficulty-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders opponent setting info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /change opponent 1 setting/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('opponent-setting-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders player color info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /change banner color/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('player-color-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders king of the hill info', async ({ page }) => {
  const checkbox = await page.getByRole('checkbox', { name: /king of the hill/i }).boundingBox();

  await page.mouse.move(checkbox!.x, checkbox!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('king-of-the-hill-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders scenario selection info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /select scenario/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('scenario-selection-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders rating info', async ({ page }) => {
  const text = await page.getByText(/difficulty rating: 50%/i).boundingBox();

  await page.mouse.move(text!.x, text!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('rating-info.png', {
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

test('renders no opponents error', async ({ page }) => {
  for (const control of [1, 2, 3].flatMap((opponentNo) =>
    [1, 2, 3].map(() => page.getByRole('button', { name: new RegExp(`change opponent ${opponentNo} setting`, 'i') })),
  )) {
    await control.click();
  }

  await page.getByRole('button', { name: /okay/i }).click();

  await expect(page.locator('#app')).toHaveScreenshot('no-opponents-error.png', {
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

test('renders scenario selection', async ({ page }) => {
  await page.goto('/game/new/standard/scenario/');

  await expect(page.locator('#app')).toHaveScreenshot('scenario-selection.png', {
    maxDiffPixelRatio: 0.01,
  });
});
