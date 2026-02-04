import { expect, test } from './utils';

test.beforeEach(async ({ mainScreen }) => {
  await mainScreen.goto();
});

test('displays screen', async ({ mainScreen, page }) => {
  await mainScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new game info', async ({ mainScreen, page }) => {
  await mainScreen.newGame.showInfo();

  await mainScreen.newGame.verifyInfoShown();

  await expect(page).toHaveScreenshot('new-game-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays new game screen when new game is selected', async ({ newGameScreen, mainScreen }) => {
  await mainScreen.newGame.select();

  await newGameScreen.verifyIsCurrentScreen();
});

test('displays load game info', async ({ mainScreen, page }) => {
  await mainScreen.loadGame.showInfo();

  await mainScreen.loadGame.verifyInfoShown();

  await expect(page).toHaveScreenshot('load-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays load game screen when load game is selected', async ({ loadGameScreen, mainScreen }) => {
  await mainScreen.loadGame.select();

  await loadGameScreen.verifyIsCurrentScreen();
});

test('displays view high scores info', async ({ mainScreen, page }) => {
  await mainScreen.viewHighScores.showInfo();

  await mainScreen.viewHighScores.verifyInfoShown();

  await expect(page).toHaveScreenshot('view-high-scores-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays high scores screen when view high scores is selected', async ({ highScoresScreen, mainScreen }) => {
  await mainScreen.viewHighScores.select();

  await highScoresScreen.verifyIsCurrentScreen();
});

test('displays view credits info', async ({ mainScreen, page }) => {
  await mainScreen.viewCredits.showInfo();

  await mainScreen.viewCredits.verifyInfoShown();

  await expect(page).toHaveScreenshot('view-credits-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays credits screen when view credits is selected', async ({ creditsScreen, mainScreen }) => {
  await mainScreen.viewCredits.select();

  await creditsScreen.verifyIsCurrentScreen();
});

test('displays quit info', async ({ mainScreen, page }) => {
  await mainScreen.quit.showInfo();

  await mainScreen.quit.verifyInfoShown();

  await expect(page).toHaveScreenshot('quit-info.png', { maxDiffPixelRatio: 0.05 });
});
