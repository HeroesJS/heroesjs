import { expect, test } from './utils';

test.beforeEach(async ({ joinDirectConnectGameScreen }) => {
  await joinDirectConnectGameScreen.goto();
});

test('displays waiting for connection modal', async ({ joinDirectConnectGameScreen, page }) => {
  await expect(joinDirectConnectGameScreen.waitingForConnectionModal).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ joinDirectConnectGameScreen, mainScreen }) => {
  await joinDirectConnectGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
