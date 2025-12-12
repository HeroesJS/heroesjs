import { expect, test } from './utils';

test.beforeEach(async ({ newNetworkGameScreen }) => {
  await newNetworkGameScreen.goto();
});

test('displays screen', async ({ newNetworkGameScreen }) => {
  await expect(newNetworkGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newNetworkGameScreen, page }) => {
  await expect(newNetworkGameScreen.menu).toBeVisible();

  await expect(newNetworkGameScreen.hostButton).toBeVisible();
  await expect(newNetworkGameScreen.guestButton).toBeVisible();
  await expect(newNetworkGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host info', async ({ mouseRightDown, newNetworkGameScreen, page }) => {
  await mouseRightDown(newNetworkGameScreen.hostButton);

  await expect(newNetworkGameScreen.hostInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('host-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays guest info', async ({ mouseRightDown, newNetworkGameScreen, page }) => {
  await mouseRightDown(newNetworkGameScreen.guestButton);

  await expect(newNetworkGameScreen.guestInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('guest-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays cancel info', async ({ mouseRightDown, newNetworkGameScreen, page }) => {
  await mouseRightDown(newNetworkGameScreen.cancelButton);

  await expect(newNetworkGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newNetworkGameScreen }) => {
  await newNetworkGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
