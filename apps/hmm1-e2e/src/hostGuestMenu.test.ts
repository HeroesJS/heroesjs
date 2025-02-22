import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/game/new/multi-player/network');
});

test('renders menu', async ({ page }) => {
  await expect(page.locator('#app')).toHaveScreenshot('menu.png');
});

test('renders host info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /host/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('host-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders guest info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /guest/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('guest-info.png', {
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

test.describe('detailed', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/game/new/multi-player/modem');
  });

  test('renders menu', async ({ page }) => {
    await expect(page.locator('#app')).toHaveScreenshot('menu-detailed.png');
  });

  test('renders host info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /host/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('host-detailed-info.png', {
      maxDiffPixelRatio: 0.01,
    });
  });

  test('renders guest info', async ({ page }) => {
    const button = await page.getByRole('button', { name: /guest/i }).boundingBox();

    await page.mouse.move(button!.x, button!.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.locator('#app')).toHaveScreenshot('guest-detailed-info.png', {
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
