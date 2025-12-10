import { expect, test } from './utils';

test.beforeEach(async ({ newGameScreen }) => {
  await newGameScreen.goto();
});

test('displays screen', async ({ newGameScreen }) => {
  await expect(newGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newGameScreen, page }) => {
  await expect(newGameScreen.menu).toBeVisible();

  await expect(newGameScreen.standardGameButton).toBeVisible();
  await expect(newGameScreen.campaignGameButton).toBeVisible();
  await expect(newGameScreen.multiPlayerGameButton).toBeVisible();
  await expect(newGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays standard game info', async ({ mouseRightDown, newGameScreen, page }) => {
  await mouseRightDown(newGameScreen.standardGameButton);

  await expect(newGameScreen.standardGameInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('standard-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays campaign game info', async ({ mouseRightDown, newGameScreen, page }) => {
  await mouseRightDown(newGameScreen.campaignGameButton);

  await expect(newGameScreen.campaignGameInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('campaign-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new campaign game screen when campaign game is clicked', async ({
  newCampaignGameScreen,
  newGameScreen,
}) => {
  await newGameScreen.campaignGameButton.click();

  await expect(newCampaignGameScreen.locator).toBeVisible();
});

test('displays multi-player game info', async ({ mouseRightDown, newGameScreen, page }) => {
  await mouseRightDown(newGameScreen.multiPlayerGameButton);

  await expect(newGameScreen.multiPlayerGameInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('multi-player-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new multi-player game screen when multi-player game is clicked', async ({
  newGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newGameScreen.multiPlayerGameButton.click();

  await expect(newMultiPlayerGameScreen.locator).toBeVisible();
});

test('displays cancel info', async ({ mouseRightDown, newGameScreen, page }) => {
  await mouseRightDown(newGameScreen.cancelButton);

  await expect(newGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is clicked', async ({ mainScreen, newGameScreen }) => {
  await newGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
