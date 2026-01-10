import { expect, test } from './utils';

test.beforeEach(async ({ newStandardGameScreen }) => {
  await newStandardGameScreen.goto();
});

test('displays screen', async ({ newStandardGameScreen }) => {
  await expect(newStandardGameScreen.locator).toBeVisible();
});

test('displays window', async ({ newStandardGameScreen, page }) => {
  await expect(newStandardGameScreen.window).toBeVisible();

  await expect(newStandardGameScreen.difficultyRatingLabel).toBeVisible();

  await expect(newStandardGameScreen.okayButton).toBeVisible();
  await expect(newStandardGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test.describe('game difficulty', () => {
  test('displays options', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.gameDifficultyLabel).toBeVisible();

    await expect(newStandardGameScreen.gameDifficultyRadioGroup).toBeVisible();

    await expect(newStandardGameScreen.getGameDifficultyRadio(/easy/i)).toBeVisible();
    await expect(newStandardGameScreen.getGameDifficultyRadio(/normal/i)).toBeVisible();
    await expect(newStandardGameScreen.getGameDifficultyRadio(/hard/i)).toBeVisible();
    await expect(newStandardGameScreen.getGameDifficultyRadio(/expert/i)).toBeVisible();

    await expect(newStandardGameScreen.getGameDifficultyRadio(/normal/i)).toBeChecked();
  });

  test('allows to change difficulty', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.getGameDifficultyRadio(/hard/i).click();

    await expect(newStandardGameScreen.getGameDifficultyRadio(/hard/i)).toBeChecked();
  });
});

test.describe('opponent settings', () => {
  test('displays settings', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.opponentSettingsLabel).toBeVisible();

    await expect(newStandardGameScreen.getOpponentSettingOption(1, /average/i)).toBeChecked();
    await expect(newStandardGameScreen.getOpponentSettingOption(2, /average/i)).toBeChecked();
    await expect(newStandardGameScreen.getOpponentSettingOption(3, /average/i)).toBeChecked();
  });

  test('allows to cycle through options', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.getOpponentSettingOption(1, /average/i)).toBeChecked();

    await newStandardGameScreen.getOpponentSetting(1).click();

    await expect(newStandardGameScreen.getOpponentSettingOption(1, /smart/i)).toBeChecked();

    await newStandardGameScreen.getOpponentSetting(1).click();

    await expect(newStandardGameScreen.getOpponentSettingOption(1, /genius/i)).toBeChecked();

    await newStandardGameScreen.getOpponentSetting(1).click();

    await expect(newStandardGameScreen.getOpponentSettingOption(1, /none/i)).toBeChecked();

    await newStandardGameScreen.getOpponentSetting(1).click();

    await expect(newStandardGameScreen.getOpponentSettingOption(1, /dumb/i)).toBeChecked();

    await newStandardGameScreen.getOpponentSetting(1).click();

    await expect(newStandardGameScreen.getOpponentSettingOption(1, /average/i)).toBeChecked();
  });
});

test.describe('player color', () => {
  test('displays color', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.playerColorLabel).toBeVisible();

    await expect(newStandardGameScreen.getPlayerColorOption(/blue/i)).toBeChecked();
  });

  test('allows to cycle through colors', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.getPlayerColorOption(/blue/i)).toBeChecked();

    await newStandardGameScreen.getPlayerColor().click();

    await expect(newStandardGameScreen.getPlayerColorOption(/green/i)).toBeChecked();

    await newStandardGameScreen.getPlayerColor().click();

    await expect(newStandardGameScreen.getPlayerColorOption(/red/i)).toBeChecked();

    await newStandardGameScreen.getPlayerColor().click();

    await expect(newStandardGameScreen.getPlayerColorOption(/yellow/i)).toBeChecked();

    await newStandardGameScreen.getPlayerColor().click();

    await expect(newStandardGameScreen.getPlayerColorOption(/blue/i)).toBeChecked();
  });
});

test.describe('king of the hill', () => {
  test('displays option', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.kingOfTheHillLabel).toBeVisible();

    await expect(newStandardGameScreen.kingOfTheHillCheckbox).not.toBeChecked();
  });

  test('allows to change option', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.kingOfTheHillCheckbox.click();

    await expect(newStandardGameScreen.kingOfTheHillCheckbox).toBeChecked();
  });
});

test.describe('scenario', () => {
  test('displays option', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.scenarioSelectionLabel).toBeVisible();

    await expect(newStandardGameScreen.scenarioLabel).toHaveText('Claw ( Easy )');
    await expect(newStandardGameScreen.selectScenarioButton).toBeVisible();
  });
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newStandardGameScreen }) => {
  await newStandardGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
