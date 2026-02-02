import { expect, test } from './utils';

test.beforeEach(async ({ newGameScreen }) => {
  await newGameScreen.goto();
});

test('displays screen', async ({ newGameScreen, page }) => {
  await newGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays standard game info', async ({ newGameScreen, page }) => {
  await newGameScreen.showStandardGameInfo();

  await newGameScreen.verifyStandardGameInfoShown();

  await expect(page).toHaveScreenshot('standard-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new standard game screen when standard is selected', async ({
  newGameScreen,
  newStandardGameScreen,
}) => {
  await newGameScreen.selectStandardGame();

  await newStandardGameScreen.verifyIsCurrentScreen();
});

test('displays campaign game info', async ({ newGameScreen, page }) => {
  await newGameScreen.showCampaignGameInfo();

  await newGameScreen.verifyCampaiangGameInfoShown();

  await expect(page).toHaveScreenshot('campaign-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new campaign game screen when campaign game is selected', async ({
  newCampaignGameScreen,
  newGameScreen,
}) => {
  await newGameScreen.selectCampaignGame();

  await newCampaignGameScreen.verifyIsCurrentScreen();
});

test('displays multi-player game info', async ({ newGameScreen, page }) => {
  await newGameScreen.showMultiPlayerGameInfo();

  await newGameScreen.verifyMultiPlayerGameInfoShown();

  await expect(page).toHaveScreenshot('multi-player-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new multi-player game screen when multi-player game is selected', async ({
  newGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newGameScreen.selectMultiPlayerGame();

  await newMultiPlayerGameScreen.verifyIsCurrentScreen();
});

test('displays cancel info', async ({ newGameScreen, page }) => {
  await newGameScreen.showCancelInfo();

  await newGameScreen.verifyCancelInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is selected', async ({ mainScreen, newGameScreen }) => {
  await newGameScreen.selectCancel();

  await mainScreen.verifyIsCurrentScreen();
});
