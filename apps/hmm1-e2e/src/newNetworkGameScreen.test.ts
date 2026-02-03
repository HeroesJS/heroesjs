import { expect, test } from './utils';

test.beforeEach(async ({ newNetworkGameScreen }) => {
  await newNetworkGameScreen.goto();
});

test('displays screen', async ({ newNetworkGameScreen, page }) => {
  await newNetworkGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host info', async ({ newNetworkGameScreen, page }) => {
  await newNetworkGameScreen.host.showInfo();

  await newNetworkGameScreen.host.verifyInfoShown();

  await expect(page).toHaveScreenshot('host-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays guest info', async ({ newNetworkGameScreen, page }) => {
  await newNetworkGameScreen.guest.showInfo();

  await newNetworkGameScreen.guest.verifyInfoShown();

  await expect(page).toHaveScreenshot('guest-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays cancel info', async ({ newNetworkGameScreen, page }) => {
  await newNetworkGameScreen.cancel.showInfo();

  await newNetworkGameScreen.cancel.verifyInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is selected', async ({ mainScreen, newNetworkGameScreen }) => {
  await newNetworkGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
