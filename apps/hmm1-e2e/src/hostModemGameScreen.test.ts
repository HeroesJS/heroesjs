import { expect, test } from './utils';

test.beforeEach(async ({ hostModemGameScreen }) => {
  await hostModemGameScreen.goto();
});

test('displays screen', async ({ hostModemGameScreen }) => {
  await hostModemGameScreen.verifyIsCurrentScreen();
});

test('prompts to enter telephone number', async ({ hostModemGameScreen, page }) => {
  await hostModemGameScreen.verifyTelephoneNumberPrompt();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('dials a telephone number', async ({ hostModemGameScreen, page }) => {
  await hostModemGameScreen.enterTelephoneNumber('12345');

  await expect(page).toHaveScreenshot('numberEntered.png', { maxDiffPixelRatio: 0.01 });

  await hostModemGameScreen.confirmTelephoneNumber();

  await hostModemGameScreen.verifyDialing('12345');

  await expect(page).toHaveScreenshot('dialingNumber.png', { maxDiffPixelRatio: 0.01 });
});

test('allows to dial an empty telephone number', async ({ hostModemGameScreen }) => {
  await hostModemGameScreen.dial('');

  await hostModemGameScreen.verifyDialing('');
});

test('displays main screen when dialing is cancelled', async ({ hostModemGameScreen, mainScreen }) => {
  await hostModemGameScreen.dial('12345');

  await hostModemGameScreen.cancelDialing();

  await mainScreen.verifyIsCurrentScreen();
});
