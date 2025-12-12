import { expect, test } from './utils';

test.beforeEach(async ({ newDirectConnectGameScreen }) => {
  await newDirectConnectGameScreen.goto();
});

test('displays screen', async ({ newDirectConnectGameScreen }) => {
  await expect(newDirectConnectGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newDirectConnectGameScreen, page }) => {
  await expect(newDirectConnectGameScreen.menu).toBeVisible();

  await expect(newDirectConnectGameScreen.hostButton).toBeVisible();
  await expect(newDirectConnectGameScreen.guestButton).toBeVisible();
  await expect(newDirectConnectGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newDirectConnectGameScreen }) => {
  await newDirectConnectGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
