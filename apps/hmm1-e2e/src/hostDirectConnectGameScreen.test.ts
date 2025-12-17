import { expect, test } from './utils';

test.beforeEach(async ({ hostDirectConnectGameScreen }) => {
  await hostDirectConnectGameScreen.goto();
});

test('displays screen', async ({ hostDirectConnectGameScreen }) => {
  await expect(hostDirectConnectGameScreen.locator).toBeVisible();
});

test('displays waiting for connection modal', async ({ hostDirectConnectGameScreen, page }) => {
  await expect(hostDirectConnectGameScreen.waitingForConnectionModal).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ hostDirectConnectGameScreen, mainScreen }) => {
  await hostDirectConnectGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
