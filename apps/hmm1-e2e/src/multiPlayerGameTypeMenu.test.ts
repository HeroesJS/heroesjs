import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/game/new/multi-player');
});

test('renders menu', async ({ page }) => {
  await expect(page.locator('#app')).toHaveScreenshot('menu.png');
});

test('renders hot seat info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /hot seat/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('hot-seat-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders network info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /network/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('network-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders modem info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /modem/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('modem-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders direct connect info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /direct connect/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('direct-connect-info.png', {
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
