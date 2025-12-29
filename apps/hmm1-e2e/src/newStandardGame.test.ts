import { expect, test } from './utils';

test.beforeEach(async ({ newStandardGameScreen }) => {
  await newStandardGameScreen.goto();
});

test('displays screen', async ({ newStandardGameScreen }) => {
  await expect(newStandardGameScreen.locator).toBeVisible();
});

test('displays new standard game window', async ({ newStandardGameScreen, page }) => {
  await expect(newStandardGameScreen.newStandardGameWindow).toBeVisible();

  await expect(newStandardGameScreen.gameDifficultyGroup).toBeVisible();

  await expect(newStandardGameScreen.getGameDifficultyOption('easy')).toBeVisible();
  await expect(newStandardGameScreen.getGameDifficultyOption('normal')).toBeVisible();
  await expect(newStandardGameScreen.getGameDifficultyOption('hard')).toBeVisible();
  await expect(newStandardGameScreen.getGameDifficultyOption('expert')).toBeVisible();

  await expect(newStandardGameScreen.getGameDifficultyOption('normal')).toBeChecked();

  await expect(newStandardGameScreen.kingOfTheHillCheckbox).toBeVisible();
  await expect(newStandardGameScreen.kingOfTheHillCheckbox).not.toBeChecked();

  await expect(newStandardGameScreen.okayButton).toBeVisible();
  await expect(newStandardGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png');
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newStandardGameScreen }) => {
  await newStandardGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
