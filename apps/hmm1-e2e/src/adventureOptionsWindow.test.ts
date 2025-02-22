import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/adventure/adventure-options');
});

test('matches screenshot', async ({ page }) => {
  await expect(page.locator('#app')).toHaveScreenshot('adventure-options-window.png');
});

test('renders view world info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /view world/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('view-world-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders view puzzle info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /view puzzle/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('view-puzzle-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders cast spell info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /cast spell/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('cast-spell-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders dig info', async ({ page }) => {
  const button = await page.getByRole('button', { name: /dig/i }).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.locator('#app')).toHaveScreenshot('dig-info.png', {
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
