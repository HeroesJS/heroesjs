import { expect, test } from './utils';

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();

  await adventureScreen.selectGameOptions();
});

test('displays game options', async ({ gameOptionsWindow, page }) => {
  await gameOptionsWindow.verifyIsOpen();

  await expect(page).toHaveScreenshot('game-options-window.png', { maxDiffPixelRatio: 0.12 });
});

test.describe('new game', () => {
  test('displays new game info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showNewGameInfo();

    await gameOptionsWindow.verifyNewGameInfoShown();

    await expect(page).toHaveScreenshot('new-game-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('displays confirmation modal when new game is selected', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.selectNewGame();

    await gameOptionsWindow.verifyNewGameConfirmationShown();

    await expect(page).toHaveScreenshot('new-game-confirmation.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes new game confirmation modal when no is selected', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.selectNewGame();

    await gameOptionsWindow.selectNo();

    await gameOptionsWindow.verifyNewGameConfirmationHidden();
  });

  test('displays new game screen when new game confirmation modal is open and yes is selected', async ({
    gameOptionsWindow,
    newGameScreen,
  }) => {
    await gameOptionsWindow.selectNewGame();

    await gameOptionsWindow.selectYes();

    await newGameScreen.verifyIsCurrentScreen();
  });
});

test.describe('save game', () => {
  test('displays save game info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showSaveGameInfo();

    await gameOptionsWindow.verifySaveGameInfoShown();

    await expect(page).toHaveScreenshot('save-game-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('load game', () => {
  test('displays load game info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showLoadGameInfo();

    await gameOptionsWindow.verifyLoadGameInfoShown();

    await expect(page).toHaveScreenshot('load-game-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('displays confirmation modal when load game is selected', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.selectLoadGame();

    await gameOptionsWindow.verifyLoadGameConfirmationShown();

    await expect(page).toHaveScreenshot('load-game-confirmation.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes load game confirmation modal when no is selected', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.selectLoadGame();

    await gameOptionsWindow.selectNo();

    await gameOptionsWindow.verifyLoadGameConfirmationHidden();
  });

  test('displays load game screen when load game confirmation modal is open and yes is selected', async ({
    gameOptionsWindow,
    loadGameScreen,
  }) => {
    await gameOptionsWindow.selectLoadGame();

    await gameOptionsWindow.selectYes();

    await loadGameScreen.verifyIsCurrentScreen();
  });
});

test.describe('quit', () => {
  test('displays quit info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showQuitInfo();

    await gameOptionsWindow.verifyQuitInfoShown();

    await expect(page).toHaveScreenshot('quit-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('displays quit confirmation modal when quit is selected', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.selectQuit();

    await gameOptionsWindow.verifyQuitConfirmationShown();

    await expect(page).toHaveScreenshot('quit-confirmation.png', { maxDiffPixelRatio: 0.09 });
  });

  test('closes quit confirmation modal when no is selected', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.selectQuit();

    await gameOptionsWindow.selectNo();

    await gameOptionsWindow.verifyQuitConfirmationHidden();
  });

  test('displays main screen when quit confirmation modal is open and yes is selected', async ({
    gameOptionsWindow,
    mainScreen,
  }) => {
    await gameOptionsWindow.selectQuit();

    await gameOptionsWindow.selectYes();

    await mainScreen.verifyIsCurrentScreen();
  });
});

test.describe('music volume', () => {
  test('maximum music volume is selected by default', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.verifyMusicVolumeSelected(/^on$/i);
  });

  test('allows to cycle through music volumes', async ({ gameOptionsWindow }) => {
    for (const volume of [
      /^on - volume 9$/i,
      /^on - volume 8$/i,
      /^on - volume 7$/i,
      /^on - volume 6$/i,
      /^on - volume 5$/i,
      /^on - volume 4$/i,
      /^on - volume 3$/i,
      /^on - volume 2$/i,
      /^on - volume 1$/i,
      /^off$/i,
      /^on$/i,
    ]) {
      await gameOptionsWindow.selectMusicVolume(volume);

      await gameOptionsWindow.verifyMusicVolumeSelected(volume);
    }
  });

  test('displays music volume info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showMusicVolumeInfo();

    await gameOptionsWindow.verifyMusicVolumeInfoShown();

    await expect(page).toHaveScreenshot('music-volume-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('effects volume', () => {
  test('maximum effects volume is selected by default', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.verifyEffectsVolumeSelected(/^on$/i);
  });

  test('allows to cycle through effects volumes', async ({ gameOptionsWindow }) => {
    for (const volume of [
      /^on - volume 9$/i,
      /^on - volume 8$/i,
      /^on - volume 7$/i,
      /^on - volume 6$/i,
      /^on - volume 5$/i,
      /^on - volume 4$/i,
      /^on - volume 3$/i,
      /^on - volume 2$/i,
      /^on - volume 1$/i,
      /^off$/i,
      /^on$/i,
    ]) {
      await gameOptionsWindow.selectEffectsVolume(volume);

      await gameOptionsWindow.verifyEffectsVolumeSelected(volume);
    }
  });

  test('displays effects volume info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showEffectsVolumeInfo();

    await gameOptionsWindow.verifyEffectsVolumeInfoShown();

    await expect(page).toHaveScreenshot('effects-volume-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('movement speed', () => {
  test('gallop movement speed is selected by default', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.verifyMovementSpeedSelected(/^gallop$/i);
  });

  test('allows to cycle through movement speed options', async ({ gameOptionsWindow }) => {
    for (const option of [/^jump$/i, /^walk$/i, /^trot$/i, /^canter$/i, /^gallop$/i]) {
      await gameOptionsWindow.selectMovementSpeed(option);

      await gameOptionsWindow.verifyMovementSpeedSelected(option);
    }
  });

  test('displays movement speed info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showMovementSpeedInfo();

    await gameOptionsWindow.verifyMovementSpeedInfoShown();

    await expect(page).toHaveScreenshot('movement-speed-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('auto save', () => {
  test('displays auto save setting', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.verifyAutoSave(true);
  });

  test('allows to toggle auto save', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.selectAutoSave(false);

    await gameOptionsWindow.verifyAutoSave(false);

    await gameOptionsWindow.selectAutoSave(true);

    await gameOptionsWindow.verifyAutoSave(true);
  });

  test('displays auto save info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showAutoSaveInfo();

    await gameOptionsWindow.verifyAutoSaveInfoShown();

    await expect(page).toHaveScreenshot('auto-save-info.png', { maxDiffPixelRatio: 0.13 });
  });
});

test.describe('show path', () => {
  test('show path is enabled by default', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.verifyShowPath(true);
  });

  test('allows to toggle show path', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.selectShowPath(false);

    await gameOptionsWindow.verifyShowPath(false);

    await gameOptionsWindow.selectShowPath(true);

    await gameOptionsWindow.verifyShowPath(true);
  });

  test('displays show path info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showShowPathInfo();

    await gameOptionsWindow.verifyShowPathInfoShown();

    await expect(page).toHaveScreenshot('show-path-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('view enemy movement', () => {
  test('view enemy movement is enabled by default', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.verifyViewEnemyMovement(true);
  });

  test('allows to toggle view enemy movement', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.selectViewEnemyMovement(false);

    await gameOptionsWindow.verifyViewEnemyMovement(false);

    await gameOptionsWindow.selectViewEnemyMovement(true);

    await gameOptionsWindow.verifyViewEnemyMovement(true);
  });

  test('displays view enemy movement info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showViewEnemyMovementInfo();

    await gameOptionsWindow.verifyViewEnemyMovementInfoShown();

    await expect(page).toHaveScreenshot('view-enemy-movement-info.png', { maxDiffPixelRatio: 0.13 });
  });
});

test.describe('okay', () => {
  test('displays okay info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showOkayInfo();

    await gameOptionsWindow.verifyOkayInfoShown();

    await expect(page).toHaveScreenshot('okay-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes game options window when okay is selected', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.selectOkay();

    await gameOptionsWindow.verifyIsClosed();
  });
});

test.describe('info', () => {
  test('displays info info', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.showInfoInfo();

    await gameOptionsWindow.verifyInfoInfoShown();

    await expect(page).toHaveScreenshot('info-info.png', { maxDiffPixelRatio: 0.12 });
  });
});
