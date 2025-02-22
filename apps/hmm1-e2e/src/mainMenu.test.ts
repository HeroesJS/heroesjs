import { expect, test } from '@playwright/test';

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
