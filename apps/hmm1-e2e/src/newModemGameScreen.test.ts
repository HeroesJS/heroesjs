import { expect, test } from './utils';

test.beforeEach(async ({ newModemGameScreen }) => {
  await newModemGameScreen.goto();
});

test('displays screen', async ({ newModemGameScreen, page }) => {
  await newModemGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host info', async ({ newModemGameScreen, page }) => {
  await newModemGameScreen.host.showInfo();

  await newModemGameScreen.host.verifyInfoShown();

  await expect(page).toHaveScreenshot('host-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host modem game screen when host selected', async ({ hostModemGameScreen, newModemGameScreen }) => {
  await newModemGameScreen.host.select();

  await hostModemGameScreen.verifyIsCurrentScreen();
});

test('displays guest info', async ({ newModemGameScreen, page }) => {
  await newModemGameScreen.guest.showInfo();

  await newModemGameScreen.guest.verifyInfoShown();

  await expect(page).toHaveScreenshot('guest-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays join modem game screen when guest selected', async ({ joinModemGameScreen, newModemGameScreen }) => {
  await newModemGameScreen.guest.select();

  await joinModemGameScreen.verifyIsCurrentScreen();
});

test('displays cancel info', async ({ newModemGameScreen, page }) => {
  await newModemGameScreen.cancel.showInfo();

  await newModemGameScreen.cancel.verifyInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancelled', async ({ mainScreen, newModemGameScreen }) => {
  await newModemGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
