import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  expect(await page.title()).toBe('Hmm1');
});

test.describe('main menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders menu', async ({ page }) => {
    await expect(page.locator('#app')).toHaveScreenshot('main-menu.png');
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

  test('renders view high scores info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /view high scores/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('view-high-scores-info.png', {
      maxDiffPixelRatio: 0.01,
    });
  });

  test('renders view credits info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /view credits/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('view-credits-info.png', {
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
});

test.describe('game type menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/game/new');
  });

  test('renders standard game info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /standard game/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('standard-game-info.png', {
      maxDiffPixelRatio: 0.01,
    });
  });

  test('renders campaign game info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /campaign game/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('campaign-game-info.png');
  });

  test('renders multi-player game info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /multi-player game/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('multi-player-game-info.png');
  });

  test('renders cancel info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /cancel/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('cancel-info.png');
  });
});

test('renders new game window', async ({ page }) => {
  await page.goto('/game/new/standard/');

  await expect(page.locator('#app')).toHaveScreenshot('new-game-window.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders scenario selection', async ({ page }) => {
  await page.goto('/game/new/standard/scenario/');

  await expect(page.locator('#app')).toHaveScreenshot('scenario-selection.png', {
    maxDiffPixelRatio: 0.01,
  });
});
