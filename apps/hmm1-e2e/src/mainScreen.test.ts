import { expect, test } from '@playwright/test';

test('displays main screen', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('main', { name: /main screen/i })).toBeVisible();
});

test('displays main menu', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('menu', { name: /main menu/i })).toBeVisible();

  await expect(page.getByRole('button', { name: /new game/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /load game/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /view high scores/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /view credits/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /quit/i })).toBeVisible();

  await expect(page).toHaveScreenshot('main-menu.png');
});

test('displays new game info', async ({ page }) => {
  await page.goto('/');

  const button = (await page.getByRole('button', { name: /new game/i }).boundingBox())!;

  await page.mouse.move(button.x, button.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.getByRole('dialog', { name: /start a single or multi-player game\./i })).toBeVisible();

  await expect(page).toHaveScreenshot('new-game-info.png');
});

test('displays load game info', async ({ page }) => {
  await page.goto('/');

  const button = (await page.getByRole('button', { name: /load game/i }).boundingBox())!;

  await page.mouse.move(button.x, button.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.getByRole('dialog', { name: /load a previously saved game\./i })).toBeVisible();

  await expect(page).toHaveScreenshot('load-game-info.png');
});

test('displays view high scores info', async ({ page }) => {
  await page.goto('/');

  const button = (await page.getByRole('button', { name: /view high scores/i }).boundingBox())!;

  await page.mouse.move(button.x, button.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.getByRole('dialog', { name: /view the high score screen\./i })).toBeVisible();

  await expect(page).toHaveScreenshot('view-high-scores-info.png');
});

test('displays view credits info', async ({ page }) => {
  await page.goto('/');

  const button = (await page.getByRole('button', { name: /view credits/i }).boundingBox())!;

  await page.mouse.move(button.x, button.y);
  await page.mouse.down({ button: 'right' });

  await expect(page.getByRole('dialog', { name: /view the credits screen\./i })).toBeVisible();

  await expect(page).toHaveScreenshot('view-credits-info.png');
});

test('displays quit info', async ({ page }) => {
  await page.goto('/');

  const button = (await page.getByRole('button', { name: /quit/i }).boundingBox())!;

  await page.mouse.move(button.x, button.y);
  await page.mouse.down({ button: 'right' });

  await expect(
    page.getByRole('dialog', { name: /quit heroes of might and magic and return to the dos prompt\./i })
  ).toBeVisible();

  await expect(page).toHaveScreenshot('quit-info.png');
});
