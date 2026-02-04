import { expect, test } from './utils';

test.beforeEach(async ({ joinModemGameScreen }) => {
  await joinModemGameScreen.goto();
});

test('waits for ring', async ({ joinModemGameScreen, page }) => {
  await joinModemGameScreen.waitingForRing.verifyShown();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancelled', async ({ joinModemGameScreen, mainScreen }) => {
  await joinModemGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
