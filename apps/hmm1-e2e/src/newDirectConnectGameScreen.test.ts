import { expect, test } from './utils';

test.beforeEach(async ({ newDirectConnectGameScreen }) => {
  await newDirectConnectGameScreen.goto();
});

test('displays screen', async ({ newDirectConnectGameScreen, page }) => {
  await newDirectConnectGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host info', async ({ newDirectConnectGameScreen, page }) => {
  await newDirectConnectGameScreen.host.showInfo();

  await newDirectConnectGameScreen.host.verifyInfoShown();

  await expect(page).toHaveScreenshot('host-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host direct connect game screen when host is selected', async ({
  hostDirectConnectGameScreen,
  newDirectConnectGameScreen,
}) => {
  await newDirectConnectGameScreen.host.select();

  await hostDirectConnectGameScreen.verifyIsCurrentScreen();
});

test('displays guest info', async ({ newDirectConnectGameScreen, page }) => {
  await newDirectConnectGameScreen.guest.showInfo();

  await newDirectConnectGameScreen.guest.verifyInfoShown();

  await expect(page).toHaveScreenshot('guest-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays join direct connect game screen when guest is selected', async ({
  joinDirectConnectGameScreen,
  newDirectConnectGameScreen,
}) => {
  await newDirectConnectGameScreen.guest.select();

  await joinDirectConnectGameScreen.verifyIsCurrentScreen();
});

test('displays cancel info', async ({ newDirectConnectGameScreen, page }) => {
  await newDirectConnectGameScreen.cancel.showInfo();

  await newDirectConnectGameScreen.cancel.verifyInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is selected', async ({ mainScreen, newDirectConnectGameScreen }) => {
  await newDirectConnectGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
