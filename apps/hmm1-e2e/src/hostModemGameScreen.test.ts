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

test('allows to dial a telephone number', async ({ hostModemGameScreen, page }) => {
  await hostModemGameScreen.telephoneNumberInput.fill('12345');

  await expect(page).toHaveScreenshot('numberEntered.png', { maxDiffPixelRatio: 0.01 });

  await hostModemGameScreen.telephoneNumberInput.press('Enter');

  await expect(hostModemGameScreen.dialingModal('12345')).toBeVisible();

  await expect(page).toHaveScreenshot('dialingNumber.png', { maxDiffPixelRatio: 0.01 });
});

test('allows to dial an empty telephone number', async ({ hostModemGameScreen, page }) => {
  await hostModemGameScreen.telephoneNumberInput.press('Enter');

  await expect(page).toHaveScreenshot('dialingEmpty.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when dialing and cancel is clicked', async ({ hostModemGameScreen, mainScreen }) => {
  await hostModemGameScreen.telephoneNumberInput.fill('12345');

  await hostModemGameScreen.telephoneNumberInput.press('Enter');

  await hostModemGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
