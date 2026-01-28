import { expect, test } from './utils';

test.beforeEach(async ({ mainScreen }) => {
  await mainScreen.goto();
});

test('displays screen', async ({ mainScreen }) => {
  await expect(mainScreen.locator).toBeVisible();
});

test('displays menu', async ({ mainScreen, page }) => {
  await expect(mainScreen.menu).toBeVisible();

  await expect(mainScreen.newGameButton).toBeVisible();
  await expect(mainScreen.loadGameButton).toBeVisible();
  await expect(mainScreen.viewHighScoresButton).toBeVisible();
  await expect(mainScreen.viewCreditsButton).toBeVisible();
  await expect(mainScreen.quitButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new game info', async ({ mainScreen, mouseRightDown, page }) => {
  await mouseRightDown(mainScreen.newGameButton);

  await expect(mainScreen.newGameInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('new-game-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays load game info', async ({ mainScreen, mouseRightDown, page }) => {
  await mouseRightDown(mainScreen.loadGameButton);

  await expect(mainScreen.loadGameInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('load-game-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays view high scores info', async ({ mainScreen, mouseRightDown, page }) => {
  await mouseRightDown(mainScreen.viewHighScoresButton);

  await expect(mainScreen.viewHighScoresInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('view-high-scores-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays high scores screen when view high scores button is clicked', async ({
  highScoresScreen,
  mainScreen,
}) => {
  await mainScreen.viewHighScoresButton.click();

  await expect(highScoresScreen.locator).toBeVisible();
});

test('displays view credits info', async ({ mainScreen, mouseRightDown, page }) => {
  await mouseRightDown(mainScreen.viewCreditsButton);

  await expect(mainScreen.viewCreditsInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('view-credits-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays credits screen when view credits button is clicked', async ({ creditsScreen, mainScreen }) => {
  await mainScreen.viewCreditsButton.click();

  await expect(creditsScreen.locator).toBeVisible();
});

test('displays quit info', async ({ mainScreen, mouseRightDown, page }) => {
  await mouseRightDown(mainScreen.quitButton);

  await expect(mainScreen.quitInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('quit-info.png', { maxDiffPixelRatio: 0.05 });
});
