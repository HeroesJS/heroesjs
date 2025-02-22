import { expect, test } from '@playwright/test';

test.describe('game type menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/game/new');
  });

  test('renders menu', async ({ page }) => {
    await expect(page.locator('#app')).toHaveScreenshot('menu.png');
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

    await expect(page.locator('#app')).toHaveScreenshot('campaign-game-info.png', {
      maxDiffPixelRatio: 0.01,
    });
  });

  test('renders multi-player game info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /multi-player game/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('multi-player-game-info.png', {
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
});
