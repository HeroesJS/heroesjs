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
