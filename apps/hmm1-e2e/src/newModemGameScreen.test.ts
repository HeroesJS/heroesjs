import { expect, test } from './utils';

test.beforeEach(async ({ newModemGameScreen }) => {
  await newModemGameScreen.goto();
});

test('displays screen', async ({ newModemGameScreen }) => {
  await expect(newModemGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newModemGameScreen, page }) => {
  await expect(newModemGameScreen.menu).toBeVisible();

  await expect(newModemGameScreen.hostButton).toBeVisible();
  await expect(newModemGameScreen.guestButton).toBeVisible();
  await expect(newModemGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newModemGameScreen }) => {
  await newModemGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
