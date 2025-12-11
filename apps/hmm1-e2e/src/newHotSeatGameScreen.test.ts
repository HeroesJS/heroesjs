import { expect, test } from './utils';

test.beforeEach(async ({ newHotSeatGameScreen }) => {
  await newHotSeatGameScreen.goto();
});

test('displays screen', async ({ newHotSeatGameScreen }) => {
  await expect(newHotSeatGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newHotSeatGameScreen, page }) => {
  await expect(newHotSeatGameScreen.menu).toBeVisible();

  await expect(newHotSeatGameScreen.twoPlayersButton).toBeVisible();
  await expect(newHotSeatGameScreen.threePlayersButton).toBeVisible();
  await expect(newHotSeatGameScreen.fourPlayersButton).toBeVisible();
  await expect(newHotSeatGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('returns to main screen when cancel is clicked', async ({ newHotSeatGameScreen, mainScreen }) => {
  await newHotSeatGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
