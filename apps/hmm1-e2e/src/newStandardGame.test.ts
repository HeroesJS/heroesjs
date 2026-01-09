import { expect, test } from './utils';

test.beforeEach(async ({ newStandardGameScreen }) => {
  await newStandardGameScreen.goto();
});

test('displays screen', async ({ newStandardGameScreen }) => {
  await expect(newStandardGameScreen.locator).toBeVisible();
});

test('displays window', async ({ newStandardGameScreen, page }) => {
  await expect(newStandardGameScreen.window).toBeVisible();

  await expect(newStandardGameScreen.gameDifficultyLabel).toBeVisible();
  await expect(newStandardGameScreen.opponentSettingsLabel).toBeVisible();
  await expect(newStandardGameScreen.playerColorLabel).toBeVisible();
  await expect(newStandardGameScreen.kingOfTheHillLabel).toBeVisible();
  await expect(newStandardGameScreen.scenarioSelectionLabel).toBeVisible();
  await expect(newStandardGameScreen.scenarioLabel).toBeVisible();
  await expect(newStandardGameScreen.difficultyRatingLabel).toBeVisible();

  await expect(newStandardGameScreen.okayButton).toBeVisible();
  await expect(newStandardGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.02 });
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newStandardGameScreen }) => {
  await newStandardGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
