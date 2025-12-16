import { expect, test } from './utils';

test.beforeEach(async ({ hostModemGameScreen }) => {
  await hostModemGameScreen.goto();
});

test('displays screen', async ({ hostModemGameScreen }) => {
  await expect(hostModemGameScreen.locator).toBeVisible();
});

test('displays enter telephone number modal', async ({ hostModemGameScreen, page }) => {
  await expect(hostModemGameScreen.enterTelephoneNumberModal).toBeVisible();

  await expect(hostModemGameScreen.telephoneNumberInput).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays dialing modal when okay is clicked', async ({ hostModemGameScreen, page }) => {
  await hostModemGameScreen.okayButton.click();

  await expect(hostModemGameScreen.dialingModal).toBeVisible();

  await expect(page).toHaveScreenshot('dialing.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when dialing and cancel is clicked', async ({ hostModemGameScreen, mainScreen }) => {
  await hostModemGameScreen.okayButton.click();

  await hostModemGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
