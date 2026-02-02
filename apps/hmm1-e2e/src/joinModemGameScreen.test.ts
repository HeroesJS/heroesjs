import { expect, test } from './utils';

test.beforeEach(async ({ joinModemGameScreen }) => {
  await joinModemGameScreen.goto();
});

test('waits for ring', async ({ joinModemGameScreen, page }) => {
  await joinModemGameScreen.verifyWaitingForRing();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancelled', async ({ joinModemGameScreen, mainScreen }) => {
  await joinModemGameScreen.cancel();

  await mainScreen.verifyIsCurrentScreen();
});
