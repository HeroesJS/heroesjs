import { expect, test } from './utils';

test.beforeEach(async ({ highScoresScreen }) => {
  await highScoresScreen.goto();
});

test('displays screen', async ({ highScoresScreen }) => {
  await highScoresScreen.verifyIsCurrentScreen();
});

test('displays standard game scores by default', async ({ highScoresScreen }) => {
  await highScoresScreen.verifyStandardGameScoresShown();
});

test('displays default standard game scores', async ({ highScoresScreen, page }) => {
  await highScoresScreen.verifyDefaultStandardGameEntries();

  await expect(page).toHaveScreenshot('standard-game.png', { maxDiffPixelRatio: 0.01 });
});

test('displays campaign game scores when selected', async ({ highScoresScreen }) => {
  await highScoresScreen.selectCampaignGameScores();

  await highScoresScreen.verifyCampaignGameScoresShown();
});

test.describe('campaign game scores', () => {
  test.beforeEach(async ({ highScoresScreen }) => {
    await highScoresScreen.selectCampaignGameScores();
  });

  test('displays default campaign game scores', async ({ highScoresScreen, page }) => {
    await highScoresScreen.verifyDefaultCampaignGameEntries();

    await expect(page).toHaveScreenshot('campaign-game.png', { maxDiffPixelRatio: 0.02 });
  });

  test('displays standard game scores when selected', async ({ highScoresScreen }) => {
    await highScoresScreen.selectStandardGameScores();

    await highScoresScreen.verifyStandardGameScoresShown();
  });
});

test('displays main screen when exited', async ({ highScoresScreen, mainScreen }) => {
  await highScoresScreen.exit();

  await mainScreen.verifyIsCurrentScreen();
});

test('displays last selected scores', async ({ highScoresScreen, mainScreen }) => {
  await highScoresScreen.selectCampaignGameScores();

  await highScoresScreen.exit();

  await mainScreen.viewHighScores.select();

  await highScoresScreen.verifyCampaignGameScoresShown();
});
