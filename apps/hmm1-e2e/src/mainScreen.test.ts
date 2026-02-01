import { expect, test } from './utils';

test.beforeEach(async ({ mainScreen }) => {
  await mainScreen.goto();
});

test('displays screen', async ({ mainScreen, page }) => {
  await mainScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new game info', async ({ mainScreen, page }) => {
  await mainScreen.showNewGameInfo();

  await mainScreen.verifyNewGameInfoShown();

  await expect(page).toHaveScreenshot('new-game-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays new game screen when new game is selected', async ({ newGameScreen, mainScreen }) => {
  await mainScreen.selectNewGame();

  await newGameScreen.verifyIsCurrentScreen();
});

test('displays load game info', async ({ mainScreen, page }) => {
  await mainScreen.showLoadGameInfo();

  await mainScreen.verifyLoadGameInfoShown();

  await expect(page).toHaveScreenshot('load-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays load game screen when load game is selected', async ({ loadGameScreen, mainScreen }) => {
  await mainScreen.selectLoadGame();

  await loadGameScreen.verifyIsCurrentScreen();
});

test('displays view high scores info', async ({ mainScreen, page }) => {
  await mainScreen.showViewHighScoresInfo();

  await mainScreen.verifyViewHighScoresInfoShown();

  await expect(page).toHaveScreenshot('view-high-scores-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays high scores screen when view high scores is selected', async ({ highScoresScreen, mainScreen }) => {
  await mainScreen.selectViewHighScores();

  await highScoresScreen.verifyIsCurrentScreen();
});

test('displays view credits info', async ({ mainScreen, page }) => {
  await mainScreen.showViewCreditsInfo();

  await mainScreen.verifyViewCreditsInfoShown();

  await expect(page).toHaveScreenshot('view-credits-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays credits screen when view credits is selected', async ({ creditsScreen, mainScreen }) => {
  await mainScreen.selectViewCredits();

  await creditsScreen.verifyIsCurrentScreen();
});

test('displays quit info', async ({ mainScreen, page }) => {
  await mainScreen.showQuitInfo();

  await mainScreen.verifyQuitInfoShown();

  await expect(page).toHaveScreenshot('quit-info.png', { maxDiffPixelRatio: 0.05 });
});
