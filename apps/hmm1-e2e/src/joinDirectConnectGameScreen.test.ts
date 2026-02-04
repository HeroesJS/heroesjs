import { expect, test } from './utils';

test.beforeEach(async ({ joinDirectConnectGameScreen }) => {
  await joinDirectConnectGameScreen.goto();
});

test('displays screen', async ({ joinDirectConnectGameScreen }) => {
  await joinDirectConnectGameScreen.verifyIsCurrentScreen();
});

test('waits for connection', async ({ joinDirectConnectGameScreen, page }) => {
  await joinDirectConnectGameScreen.waitingForConnection.verifyShown();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancelled', async ({ joinDirectConnectGameScreen, mainScreen }) => {
  await joinDirectConnectGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
