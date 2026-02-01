import { expect, test } from './utils';

test.beforeEach(async ({ hostDirectConnectGameScreen }) => {
  await hostDirectConnectGameScreen.goto();
});

test('displays screen', async ({ hostDirectConnectGameScreen }) => {
  await hostDirectConnectGameScreen.verifyIsCurrentScreen();
});

test('displays waiting for connection', async ({ hostDirectConnectGameScreen, page }) => {
  await hostDirectConnectGameScreen.verifyWaitingForConnection();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancelled', async ({ hostDirectConnectGameScreen, mainScreen }) => {
  await hostDirectConnectGameScreen.cancel();

  await mainScreen.verifyIsCurrentScreen();
});
