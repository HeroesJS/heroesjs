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

test('displays 2 players info', async ({ mouseRightDown, newHotSeatGameScreen, page }) => {
  await mouseRightDown(newHotSeatGameScreen.twoPlayersButton);

  await expect(newHotSeatGameScreen.twoPlayersInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('2-players-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays 3 players info', async ({ mouseRightDown, newHotSeatGameScreen, page }) => {
  await mouseRightDown(newHotSeatGameScreen.threePlayersButton);

  await expect(newHotSeatGameScreen.threePlayersInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('3-players-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays 4 players info', async ({ mouseRightDown, newHotSeatGameScreen, page }) => {
  await mouseRightDown(newHotSeatGameScreen.fourPlayersButton);

  await expect(newHotSeatGameScreen.fourPlayersInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('4-players-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays cancel info', async ({ mouseRightDown, newHotSeatGameScreen, page }) => {
  await mouseRightDown(newHotSeatGameScreen.cancelButton);

  await expect(newHotSeatGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('returns to main screen when cancel is clicked', async ({ newHotSeatGameScreen, mainScreen }) => {
  await newHotSeatGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
