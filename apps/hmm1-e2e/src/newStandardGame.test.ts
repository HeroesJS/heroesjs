import { expect, test } from './utils';

test.beforeEach(async ({ newStandardGameScreen, playerCount }) => {
  await newStandardGameScreen.goto(playerCount);
});

test('displays screen', async ({ newStandardGameScreen, page }) => {
  await newStandardGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test.describe('game difficulty', () => {
  test('displays options', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.gameDifficulty.verifyOptions(/^easy$/i, /^normal$/i, /^hard$/i, /^expert$/i);

    await newStandardGameScreen.gameDifficulty.verifyOptionSelected(/^normal$/i);
  });

  test('displays game difficulty info', async ({ newStandardGameScreen, page }) => {
    await newStandardGameScreen.gameDifficulty.showInfo();

    await newStandardGameScreen.gameDifficulty.verifyInfoShown();

    await expect(page).toHaveScreenshot('game-difficulty-info.png', { maxDiffPixelRatio: 0.01 });
  });

  test('allows to change difficulty', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.gameDifficulty.selectOption(/^hard$/i);

    await newStandardGameScreen.gameDifficulty.verifyOptionSelected(/^hard$/i);
  });
});

test.describe('opponents', () => {
  test.describe('computer opponent', () => {
    test('displays opponent', async ({ newStandardGameScreen }) => {
      await newStandardGameScreen.opponents.verifyOptionsSelected(/^average$/i, /^average$/i, /^average$/i);
    });

    test('allows to cycle through settings', async ({ newStandardGameScreen }) => {
      for (const setting of [/^smart$/i, /^genius$/i, /^none$/i, /^dumb$/i, /^average$/i]) {
        await newStandardGameScreen.opponents.selectOption(0, setting);

        await newStandardGameScreen.opponents.verifyOptionSelected(0, setting);
      }
    });

    test('displays opponent info', async ({ newStandardGameScreen, page }) => {
      await newStandardGameScreen.opponents.showOptionInfo(1);

      await newStandardGameScreen.computerOpponentInfo.verifyShown();

      await expect(page).toHaveScreenshot('computer-opponent-info.png', { maxDiffPixelRatio: 0.01 });
    });
  });

  test.describe('human opponent', () => {
    test.use({
      playerCount: 2,
    });

    test('displays opponent', async ({ newStandardGameScreen }) => {
      await newStandardGameScreen.opponents.verifyOptionSelected(0, /^human normal$/i);
    });

    test('allows to cycle through settings', async ({ newStandardGameScreen }) => {
      for (const setting of [/^human hard$/i, /^human expert$/i, /^human easy$/i, /^human normal$/i]) {
        await newStandardGameScreen.opponents.selectOption(0, setting);

        await newStandardGameScreen.opponents.verifyOptionSelected(0, setting);
      }
    });

    test('displays opponent info', async ({ newStandardGameScreen, page }) => {
      await newStandardGameScreen.opponents.showOptionInfo(0);

      await newStandardGameScreen.humanOpponentInfo.verifyShown();

      await expect(page).toHaveScreenshot('human-opponent-info.png', { maxDiffPixelRatio: 0.01 });
    });
  });
});

test.describe('player color', () => {
  test('displays color', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.playerColor.verifySelected(/^blue$/i);
  });

  test('allows to cycle through colors', async ({ newStandardGameScreen }) => {
    for (const color of [/^green$/i, /^red$/i, /^yellow$/i, /^blue$/i]) {
      await newStandardGameScreen.playerColor.select(color);

      await newStandardGameScreen.playerColor.verifySelected(color);
    }
  });

  test('displays player color info', async ({ newStandardGameScreen, page }) => {
    await newStandardGameScreen.playerColor.showInfo();

    await newStandardGameScreen.playerColor.verifyInfoShown();

    await expect(page).toHaveScreenshot('player-color-info.png', { maxDiffPixelRatio: 0.01 });
  });
});

test.describe('king of the hill', () => {
  test('displays option', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.kingOfTheHill.verifyEnabled(false);
  });

  test('displays king of the hill info', async ({ newStandardGameScreen, page }) => {
    await newStandardGameScreen.kingOfTheHill.showInfo();

    await newStandardGameScreen.kingOfTheHill.verifyInfoShown();

    await expect(page).toHaveScreenshot('king-of-the-hill-info.png', { maxDiffPixelRatio: 0.02 });
  });

  test('allows to change option', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.kingOfTheHill.selectEnabled(true);

    await newStandardGameScreen.kingOfTheHill.verifyEnabled(true);
  });
});

test.describe('scenario', () => {
  test('selects default scenario for single-player game', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.scenarioSelector.verifySelected(/^claw \( easy \)$/i);
  });

  test.describe(() => {
    test.use({
      playerCount: 2,
    });

    test('selects default scenario for multi-player game', async ({ newStandardGameScreen }) => {
      await newStandardGameScreen.scenarioSelector.verifySelected(/^around the bay$/i);
    });
  });

  test('displays scenario selection info', async ({ newStandardGameScreen, page }) => {
    await newStandardGameScreen.scenarioSelector.showInfo();

    await newStandardGameScreen.scenarioSelector.verifyInfoShown();

    await expect(page).toHaveScreenshot('select-scenario-info.png', { maxDiffPixelRatio: 0.01 });
  });

  test('displays scenario selector', async ({ newStandardGameScreen, page }) => {
    await newStandardGameScreen.scenarioSelector.open();

    await newStandardGameScreen.scenarioSelector.verifyIsOpen();

    await expect(page).toHaveScreenshot('scenario-selection.png', { maxDiffPixelRatio: 0.01 });
  });

  test('displays screen when cancel is selected', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.scenarioSelector.open();

    await newStandardGameScreen.scenarioSelector.cancel();

    await newStandardGameScreen.verifyIsCurrentScreen();
  });

  test('selects scenario', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.scenarioSelector.open();

    await newStandardGameScreen.scenarioSelector.pick(/^around the bay$/i);

    await newStandardGameScreen.scenarioSelector.confirm();

    await newStandardGameScreen.scenarioSelector.verifySelected(/^around the bay$/i);
  });

  test('preserves selection when scenario is changed and cancel is selected', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.scenarioSelector.open();

    await newStandardGameScreen.scenarioSelector.pick(/^around the bay$/i);

    await newStandardGameScreen.scenarioSelector.cancel();

    await newStandardGameScreen.scenarioSelector.verifySelected(/^claw \( easy \)$/i);
  });
});

test.describe('difficulty rating', () => {
  test('displays difficulty rating', async ({ newStandardGameScreen }) => {
    await newStandardGameScreen.difficultyRating.verifyContent(/^60%$/i);
  });

  test('displays difficulty rating info', async ({ newStandardGameScreen, page }) => {
    await newStandardGameScreen.difficultyRating.showInfo();

    await newStandardGameScreen.difficultyRating.verifyInfoShown();

    await expect(page).toHaveScreenshot('difficulty-rating-info.png', { maxDiffPixelRatio: 0.01 });
  });
});

test('displays okay info', async ({ newStandardGameScreen, page }) => {
  await newStandardGameScreen.okay.showInfo();

  await newStandardGameScreen.okay.verifyInfoShown();

  await expect(page).toHaveScreenshot('okay-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays no opponents modal when no opponents are selected and okay is selected', async ({
  newStandardGameScreen,
  page,
}) => {
  await newStandardGameScreen.opponents.selectOptions(/^none$/i, /^none$/i, /^none$/i);

  await newStandardGameScreen.okay.select();

  await newStandardGameScreen.noOpponentsError.verifyShown();

  await expect(page).toHaveScreenshot('no-opponents-modal.png', { maxDiffPixelRatio: 0.01 });
});

test('displays adventure screen when some opponents are selected and okay is selected', async ({
  adventureScreen,
  newStandardGameScreen,
}) => {
  await newStandardGameScreen.okay.select();

  await adventureScreen.verifyIsCurrentScreen();
});

test('displays cancel info', async ({ newStandardGameScreen, page }) => {
  await newStandardGameScreen.cancel.showInfo();

  await newStandardGameScreen.cancel.verifyInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is selected', async ({ mainScreen, newStandardGameScreen }) => {
  await newStandardGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});

test.describe('preserving settings', () => {
  test('restores last used settings', async ({ adventureScreen, newGameScreen, newStandardGameScreen }) => {
    await newStandardGameScreen.selectGameSettings({
      gameDifficulty: /^hard$/i,
      kingOfTheHill: true,
      opponents: [/^smart$/i, /^genius$/i, /^none$/i],
      playerColor: /^green$/i,
      scenario: /^around the bay$/i,
    });

    await newStandardGameScreen.okay.select();

    await adventureScreen.startNewGame();

    await newGameScreen.standardGame.select();

    await newStandardGameScreen.verifyGameSettingsSelected({
      gameDifficulty: /^hard$/i,
      kingOfTheHill: true,
      opponents: [/^smart$/i, /^genius$/i, /^none$/i],
      playerColor: /^green$/i,
      scenario: /^around the bay$/i,
    });
  });

  test('puts set opponents first', async ({ adventureScreen, newGameScreen, newStandardGameScreen }) => {
    await newStandardGameScreen.opponents.selectOptions(/^none$/i, /^none$/i, /^smart$/i);

    await newStandardGameScreen.okay.select();

    await adventureScreen.startNewGame();

    await newGameScreen.standardGame.select();

    await newStandardGameScreen.opponents.verifyOptionsSelected(/^smart$/i, /^none$/i, /^none$/i);
  });

  test('converts computer opponents to human opponents', async ({
    adventureScreen,
    newGameScreen,
    newStandardGameScreen,
  }) => {
    await newStandardGameScreen.opponents.selectOptions(/^average$/i, /^smart$/i, /^genius$/i);

    await newStandardGameScreen.okay.select();

    await adventureScreen.startNewGame();

    await newGameScreen.startNewHotSeatGame(4);

    await newStandardGameScreen.opponents.verifyOptionsSelected(/^human normal$/i, /^human hard$/i, /^human expert$/i);
  });

  test('allows unset human opponents', async ({ adventureScreen, newGameScreen, newStandardGameScreen }) => {
    await newStandardGameScreen.opponents.selectOptions(/^average$/i, /^smart$/i, /^none$/i);

    await newStandardGameScreen.okay.select();

    await adventureScreen.startNewGame();

    await newGameScreen.startNewHotSeatGame(4);

    await newStandardGameScreen.opponents.verifyOptionsSelected(/^human normal$/i, /^human hard$/i, /^human$/i);
  });

  test.describe(() => {
    test.use({
      playerCount: 4,
    });

    test('converts human opponents to computer opponents', async ({
      adventureScreen,
      newGameScreen,
      newStandardGameScreen,
    }) => {
      await newStandardGameScreen.opponents.selectOptions(/^human hard$/i, /^human expert$/i, /^human easy$/i);

      await newStandardGameScreen.okay.select();

      await adventureScreen.startNewGame();

      await newGameScreen.standardGame.select();

      await newStandardGameScreen.opponents.verifyOptionsSelected(/^smart$/i, /^genius$/i, /^dumb$/i);
    });
  });
});
