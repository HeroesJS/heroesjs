import { expect, test } from './utils';

test.beforeEach(async ({ newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.goto();
});

test('displays screen', async ({ newMultiPlayerGameScreen }) => {
  await expect(newMultiPlayerGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newMultiPlayerGameScreen, page }) => {
  await expect(newMultiPlayerGameScreen.menu).toBeVisible();

  await expect(newMultiPlayerGameScreen.hotSeatButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.networkButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.modemButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.directConnectButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is clicked', async ({ mainScreen, newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
