import { expect, test } from './utils';

test.beforeEach(async ({ newStandardGameScreen, playerCount }) => {
  await newStandardGameScreen.goto(playerCount);
});

test('displays screen', async ({ newStandardGameScreen }) => {
  await expect(newStandardGameScreen.locator).toBeVisible();
});

test('displays window', async ({ newStandardGameScreen, page }) => {
  await expect(newStandardGameScreen.window).toBeVisible();

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

  test('displays game difficulty info', async ({ mouseRightDown, newStandardGameScreen, page }) => {
    await mouseRightDown(newStandardGameScreen.gameDifficultyRadioGroup);

    await expect(newStandardGameScreen.gameDifficultyInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('game-difficulty-info.png', { maxDiffPixelRatio: 0.01 });
  });

  test('allows to change difficulty', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.getGameDifficultyRadio(/hard/i).click();

    await expect(newStandardGameScreen.getGameDifficultyRadio(/hard/i)).toBeChecked();
  });
});

test.describe('opponents', () => {
  test.describe('computer opponent', () => {
    test('displays opponent', async ({ newStandardGameScreen }) => {
      await expect(newStandardGameScreen.opponentSettingsLabel).toBeVisible();

      await expect(newStandardGameScreen.getOpponentSettingOption(1, /average/i)).toBeChecked();
    });

    test('allows to cycle through settings', async ({ newStandardGameScreen }) => {
      for (const setting of [/smart/i, /genius/i, /none/i, /dumb/i, /average/i]) {
        await newStandardGameScreen.getOpponentSetting(1).click();

        await expect(newStandardGameScreen.getOpponentSettingOption(1, setting)).toBeChecked();
      }
    });

    test('displays opponent info', async ({ newStandardGameScreen, mouseRightDown, page }) => {
      await mouseRightDown(newStandardGameScreen.getOpponentSetting(1));

      await expect(newStandardGameScreen.computerOpponentSettingInfoModal).toBeVisible();

      await expect(page).toHaveScreenshot('computer-opponent-info.png', { maxDiffPixelRatio: 0.01 });
    });
  });

  test.describe('human opponent', () => {
    test.use({
      playerCount: 2,
    });

    test('displays opponent', async ({ newStandardGameScreen }) => {
      await expect(newStandardGameScreen.getOpponentSettingOption(1, /human normal/i)).toBeVisible();
    });

    test('allows to cycle through settings', async ({ newStandardGameScreen }) => {
      for (const setting of [/human hard/i, /human expert/i, /human easy/i, /human normal/i]) {
        await newStandardGameScreen.getOpponentSetting(1).click();

        await expect(newStandardGameScreen.getOpponentSettingOption(1, setting)).toBeVisible();
      }
    });

    test('displays opponent info', async ({ mouseRightDown, newStandardGameScreen, page }) => {
      await mouseRightDown(newStandardGameScreen.getOpponentSetting(1));

      await expect(newStandardGameScreen.humanOpponentSettingInfoModal).toBeVisible();

      await expect(page).toHaveScreenshot('human-opponent-info.png', { maxDiffPixelRatio: 0.01 });
    });
  });
});

test.describe('player color', () => {
  test('displays color', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.getPlayerColorOption(/blue/i)).toBeChecked();
  });

  test('allows to cycle through colors', async ({ newStandardGameScreen }) => {
    for (const color of [/green/i, /red/i, /yellow/i, /blue/i]) {
      await newStandardGameScreen.playerColor.click();

      await expect(newStandardGameScreen.getPlayerColorOption(color)).toBeChecked();
    }
  });

  test('displays player color info when right-clicked', async ({ mouseRightDown, newStandardGameScreen, page }) => {
    await mouseRightDown(newStandardGameScreen.playerColor);

    await expect(newStandardGameScreen.playerColorInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('player-color-info.png', { maxDiffPixelRatio: 0.01 });
  });
});

test.describe('king of the hill', () => {
  test('displays option', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.kingOfTheHillCheckbox).not.toBeChecked();
  });

  test('displays king of the hill info', async ({ newStandardGameScreen, mouseRightDown, page }) => {
    await mouseRightDown(newStandardGameScreen.kingOfTheHillCheckbox);

    await expect(newStandardGameScreen.kingOfTheHillInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('king-of-the-hill-info.png', { maxDiffPixelRatio: 0.01 });
  });

  test('allows to change option', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.kingOfTheHillCheckbox.click();

    await expect(newStandardGameScreen.kingOfTheHillCheckbox).toBeChecked();
  });
});

test.describe('scenario', () => {
  test('displays option', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.scenarioSelectionLabel).toBeVisible();

    await expect(newStandardGameScreen.scenarioLabel).toHaveText(/claw \( easy \)/i);
    await expect(newStandardGameScreen.selectScenarioButton).toBeVisible();
  });

  test('displays scenario selection info', async ({ mouseRightDown, newStandardGameScreen, page }) => {
    await mouseRightDown(newStandardGameScreen.selectScenarioButton);

    await expect(newStandardGameScreen.selectScenarioInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('select-scenario-info.png', { maxDiffPixelRatio: 0.01 });
  });

  test('displays scenario selection window', async ({ newStandardGameScreen, page }) => {
    await newStandardGameScreen.selectScenarioButton.click();

    await expect(page).toHaveScreenshot('scenario-selection.png', { maxDiffPixelRatio: 0.01 });
  });

  test('displays screen when cancel button is clicked', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.selectScenarioButton.click();

    await newStandardGameScreen.fileSelector.cancelButton.click();

    await expect(newStandardGameScreen.locator).toBeVisible();
  });

  test('preserves selection when scenario is changed and cancel button is clicked', async ({
    newStandardGameScreen,
  }) => {
    await newStandardGameScreen.selectScenarioButton.click();

    await newStandardGameScreen.fileSelector.getItem(/around the bay/i).click();

    await newStandardGameScreen.cancelButton.click();

    await expect(newStandardGameScreen.scenarioLabel).toHaveText(/claw \( easy \)/i);
  });
});

test.describe('difficulty rating', () => {
  test('displays difficulty rating', async ({ newStandardGameScreen }) => {
    await expect(newStandardGameScreen.difficultyRating).toHaveText(/60%/i);
  });

  test('displays difficulty rating info', async ({ mouseRightDown, newStandardGameScreen, page }) => {
    await mouseRightDown(newStandardGameScreen.difficultyRating);

    await expect(newStandardGameScreen.difficultyRatingInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('difficulty-rating-info.png', { maxDiffPixelRatio: 0.01 });
  });
});

test('displays okay button info', async ({ mouseRightDown, newStandardGameScreen, page }) => {
  await mouseRightDown(newStandardGameScreen.okayButton);

  await expect(newStandardGameScreen.okayInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('okay-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays no opponents modal when no opponents are selected and okay button is clicked', async ({
  newStandardGameScreen,
  page,
}) => {
  for (const opponentNumber of [1, 2, 3]) {
    while (await newStandardGameScreen.getOpponentSettingOption(opponentNumber, /none/i).isHidden()) {
      await newStandardGameScreen.getOpponentSetting(opponentNumber).click();
    }
  }

  await newStandardGameScreen.okayButton.click();

  await expect(newStandardGameScreen.noOpponentsModal).toBeVisible();

  await expect(page).toHaveScreenshot('no-opponents-modal.png', { maxDiffPixelRatio: 0.01 });
});

test('displays adventure screen when some opponents are selected and okay button is clicked', async ({
  adventureScreen,
  newStandardGameScreen,
}) => {
  await newStandardGameScreen.okayButton.click();

  await expect(adventureScreen.locator).toBeVisible();
});

test('displays cancel button info', async ({ mouseRightDown, newStandardGameScreen, page }) => {
  await mouseRightDown(newStandardGameScreen.cancelButton);

  await expect(newStandardGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel button is clicked', async ({ mainScreen, newStandardGameScreen }) => {
  await newStandardGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
