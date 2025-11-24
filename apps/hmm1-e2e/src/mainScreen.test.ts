import { expect, test } from '@playwright/test';

test('displays main screen', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('main', { name: /main screen/i })).toBeVisible();

  await expect(page).toHaveScreenshot('main-screen.png');
});
