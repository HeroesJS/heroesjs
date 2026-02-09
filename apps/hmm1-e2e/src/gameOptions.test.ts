import { AdventureScreen } from './adventureScreen';
import { expect, test as testBase } from './utils';

const test = testBase.extend<{
  readonly gameOptions: AdventureScreen['gameOptions'];
  readonly scenarioInfo: AdventureScreen['scenarioInfo'];
}>({
  gameOptions: async ({ adventureScreen: { gameOptions } }, use) => await use(gameOptions),
  scenarioInfo: async ({ adventureScreen: { scenarioInfo } }, use) => await use(scenarioInfo),
});

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();

  await adventureScreen.actions.gameOptions.select();
});

test('displays game options', async ({ gameOptions, page }) => {
  await gameOptions.verifyIsOpen();

  await expect(page).toHaveScreenshot('game-options-window.png', { maxDiffPixelRatio: 0.12 });
});

test.describe('new game', () => {
  test('displays new game info', async ({ gameOptions, page }) => {
    await gameOptions.newGame.showInfo();

    await gameOptions.newGame.verifyInfoShown();

    await expect(page).toHaveScreenshot('new-game-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('displays confirmation modal when new game is selected', async ({ gameOptions, page }) => {
    await gameOptions.newGame.select();

    await gameOptions.newGameConfirmation.verifyShown();

    await expect(page).toHaveScreenshot('new-game-confirmation.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes new game confirmation modal when no is selected', async ({ gameOptions }) => {
    await gameOptions.newGame.select();

    await gameOptions.newGameConfirmation.selectDeny();

    await gameOptions.newGameConfirmation.verifyHidden();
  });

  test('displays new game screen when new game confirmation modal is open and yes is selected', async ({
    gameOptions,
    newGameScreen,
  }) => {
    await gameOptions.newGame.select();

    await gameOptions.newGameConfirmation.selectConfirm();

    await newGameScreen.verifyIsCurrentScreen();
  });
});

test.describe('save game', () => {
  test('displays save game info', async ({ gameOptions, page }) => {
    await gameOptions.saveGame.showInfo();

    await gameOptions.saveGame.verifyInfoShown();

    await expect(page).toHaveScreenshot('save-game-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('load game', () => {
  test('displays load game info', async ({ gameOptions, page }) => {
    await gameOptions.loadGame.showInfo();

    await gameOptions.loadGame.verifyInfoShown();

    await expect(page).toHaveScreenshot('load-game-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('displays confirmation modal when load game is selected', async ({ gameOptions, page }) => {
    await gameOptions.loadGame.select();

    await gameOptions.loadGameConfirmation.verifyShown();

    await expect(page).toHaveScreenshot('load-game-confirmation.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes load game confirmation modal when no is selected', async ({ gameOptions }) => {
    await gameOptions.loadGame.select();

    await gameOptions.loadGameConfirmation.selectDeny();

    await gameOptions.loadGameConfirmation.verifyHidden();
  });

  test('displays load game screen when load game confirmation modal is open and yes is selected', async ({
    gameOptions,
    loadGameScreen,
  }) => {
    await gameOptions.loadGame.select();

    await gameOptions.loadGameConfirmation.selectConfirm();

    await loadGameScreen.verifyIsCurrentScreen();
  });
});

test.describe('quit', () => {
  test('displays quit info', async ({ gameOptions, page }) => {
    await gameOptions.quit.showInfo();

    await gameOptions.quit.verifyInfoShown();

    await expect(page).toHaveScreenshot('quit-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('displays quit confirmation modal when quit is selected', async ({ gameOptions, page }) => {
    await gameOptions.quit.select();

    await gameOptions.quitConfirmation.verifyShown();

    await expect(page).toHaveScreenshot('quit-confirmation.png', { maxDiffPixelRatio: 0.09 });
  });

  test('closes quit confirmation modal when no is selected', async ({ gameOptions }) => {
    await gameOptions.quit.select();

    await gameOptions.quitConfirmation.selectDeny();

    await gameOptions.quitConfirmation.verifyHidden();
  });

  test('displays main screen when quit confirmation modal is open and yes is selected', async ({
    gameOptions,
    mainScreen,
  }) => {
    await gameOptions.quit.select();

    await gameOptions.quitConfirmation.selectConfirm();

    await mainScreen.verifyIsCurrentScreen();
  });
});

test.describe('music volume', () => {
  test('maximum music volume is selected by default', async ({ gameOptions }) => {
    await gameOptions.musicVolume.verifySelected(/^on$/i);
  });

  test('allows to cycle through music volumes', async ({ gameOptions }) => {
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
      await gameOptions.musicVolume.select(volume);

      await gameOptions.musicVolume.verifySelected(volume);
    }
  });

  test('displays music volume info', async ({ gameOptions, page }) => {
    await gameOptions.musicVolume.showInfo();

    await gameOptions.musicVolume.verifyInfoShown();

    await expect(page).toHaveScreenshot('music-volume-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('effects volume', () => {
  test('maximum effects volume is selected by default', async ({ gameOptions }) => {
    await gameOptions.effectsVolume.verifySelected(/^on$/i);
  });

  test('allows to cycle through effects volumes', async ({ gameOptions }) => {
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
      await gameOptions.effectsVolume.select(volume);

      await gameOptions.effectsVolume.verifySelected(volume);
    }
  });

  test('displays effects volume info', async ({ gameOptions, page }) => {
    await gameOptions.effectsVolume.showInfo();

    await gameOptions.effectsVolume.verifyInfoShown();

    await expect(page).toHaveScreenshot('effects-volume-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('movement speed', () => {
  test('gallop movement speed is selected by default', async ({ gameOptions }) => {
    await gameOptions.movementSpeed.verifySelected(/^gallop$/i);
  });

  test('allows to cycle through movement speed options', async ({ gameOptions }) => {
    for (const option of [/^jump$/i, /^walk$/i, /^trot$/i, /^canter$/i, /^gallop$/i]) {
      await gameOptions.movementSpeed.select(option);

      await gameOptions.movementSpeed.verifySelected(option);
    }
  });

  test('displays movement speed info', async ({ gameOptions, page }) => {
    await gameOptions.movementSpeed.showInfo();

    await gameOptions.movementSpeed.verifyInfoShown();

    await expect(page).toHaveScreenshot('movement-speed-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('auto save', () => {
  test('displays auto save setting', async ({ gameOptions }) => {
    await gameOptions.autoSave.verifyEnabled(true);
  });

  test('allows to toggle auto save', async ({ gameOptions }) => {
    await gameOptions.autoSave.selectEnabled(false);

    await gameOptions.autoSave.verifyEnabled(false);

    await gameOptions.autoSave.selectEnabled(true);

    await gameOptions.autoSave.verifyEnabled(true);
  });

  test('displays auto save info', async ({ gameOptions, page }) => {
    await gameOptions.autoSave.showInfo();

    await gameOptions.autoSave.verifyInfoShown();

    await expect(page).toHaveScreenshot('auto-save-info.png', { maxDiffPixelRatio: 0.13 });
  });
});

test.describe('show path', () => {
  test('show path is enabled by default', async ({ gameOptions }) => {
    await gameOptions.showPath.verifyEnabled(true);
  });

  test('allows to toggle show path', async ({ gameOptions }) => {
    await gameOptions.showPath.selectEnabled(false);

    await gameOptions.showPath.verifyEnabled(false);

    await gameOptions.showPath.selectEnabled(true);

    await gameOptions.showPath.verifyEnabled(true);
  });

  test('displays show path info', async ({ gameOptions, page }) => {
    await gameOptions.showPath.showInfo();

    await gameOptions.showPath.verifyInfoShown();

    await expect(page).toHaveScreenshot('show-path-info.png', { maxDiffPixelRatio: 0.12 });
  });
});

test.describe('view enemy movement', () => {
  test('view enemy movement is enabled by default', async ({ gameOptions }) => {
    await gameOptions.viewEnemyMovement.verifyEnabled(true);
  });

  test('allows to toggle view enemy movement', async ({ gameOptions }) => {
    await gameOptions.viewEnemyMovement.selectEnabled(false);

    await gameOptions.viewEnemyMovement.verifyEnabled(false);

    await gameOptions.viewEnemyMovement.selectEnabled(true);

    await gameOptions.viewEnemyMovement.verifyEnabled(true);
  });

  test('displays view enemy movement info', async ({ gameOptions, page }) => {
    await gameOptions.viewEnemyMovement.showInfo();

    await gameOptions.viewEnemyMovement.verifyInfoShown();

    await expect(page).toHaveScreenshot('view-enemy-movement-info.png', { maxDiffPixelRatio: 0.13 });
  });
});

test.describe('okay', () => {
  test('displays okay info', async ({ gameOptions, page }) => {
    await gameOptions.okay.showInfo();

    await gameOptions.okay.verifyInfoShown();

    await expect(page).toHaveScreenshot('okay-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes game options window when okay is selected', async ({ gameOptions }) => {
    await gameOptions.okay.select();

    await gameOptions.verifyIsClosed();
  });
});

test.describe('info', () => {
  test('displays info info', async ({ gameOptions, page }) => {
    await gameOptions.info.showInfo();

    await gameOptions.info.verifyInfoShown();

    await expect(page).toHaveScreenshot('info-info.png', { maxDiffPixelRatio: 0.12 });
  });

  test('displays scenario info when info is clicked', async ({ gameOptions, page, scenarioInfo }) => {
    await gameOptions.info.select();

    await scenarioInfo.verifyIsOpen();

    await expect(page).toHaveScreenshot('scenario-info.png', { maxDiffPixelRatio: 0.02 });
  });
});
