import { expect, test } from './utils';

test.beforeEach(async ({ joinModemGameScreen }) => {
  await joinModemGameScreen.goto();
});

test('displays waiting for ring modal', async ({ joinModemGameScreen, page }) => {
  await expect(joinModemGameScreen.waitingForRingModal).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ joinModemGameScreen, mainScreen }) => {
  await joinModemGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
