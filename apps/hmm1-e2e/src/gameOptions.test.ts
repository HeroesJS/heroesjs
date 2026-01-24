import { expect, test } from './utils';

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();

  await adventureScreen.gameOptionsButton.click();
});

test('displays game options', async ({ gameOptionsWindow, page }) => {
  await expect(gameOptionsWindow.locator).toBeVisible();

  await expect(gameOptionsWindow.newGameButton).toBeVisible();
  await expect(gameOptionsWindow.loadGameButton).toBeVisible();
  await expect(gameOptionsWindow.saveGameButton).toBeVisible();
  await expect(gameOptionsWindow.quitButton).toBeVisible();

  await expect(gameOptionsWindow.okayButton).toBeVisible();
  await expect(gameOptionsWindow.infoButton).toBeVisible();

  await expect(page).toHaveScreenshot('game-options-window.png', { maxDiffPixelRatio: 0.12 });
});

test.describe('new game', () => {
  test('displays confirmation modal when new game button is clicked', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.newGameButton.click();

    await expect(gameOptionsWindow.newGameConfirmationModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-confirmation.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes new game confirmation modal when no button is clicked', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.newGameButton.click();

    await gameOptionsWindow.noButton.click();

    await expect(gameOptionsWindow.newGameConfirmationModal).toBeHidden();
  });

  test('displays new game screen when new game confirmation modal is open and yes button is clicked', async ({
    gameOptionsWindow,
    newGameScreen,
  }) => {
    await gameOptionsWindow.newGameButton.click();

    await gameOptionsWindow.yesButton.click();

    await expect(newGameScreen.locator).toBeVisible();
  });
});

test.describe('load game', () => {
  test('displays confirmation modal when load game button is clicked', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.loadGameButton.click();

    await expect(gameOptionsWindow.loadGameConfirmationModal).toBeVisible();

    await expect(page).toHaveScreenshot('load-game-confirmation.png', { maxDiffPixelRatio: 0.12 });
  });

  test('closes load game confirmation modal when no button is clicked', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.loadGameButton.click();

    await gameOptionsWindow.noButton.click();

    await expect(gameOptionsWindow.loadGameConfirmationModal).toBeHidden();
  });

  test('displays load game screen when load game confirmation modal is open and yes button is clicked', async ({
    gameOptionsWindow,
    loadGameScreen,
  }) => {
    await gameOptionsWindow.loadGameButton.click();

    await gameOptionsWindow.yesButton.click();

    await expect(loadGameScreen.locator).toBeVisible();
  });
});

test.describe('quit', () => {
  test('displays quit confirmation modal when quit button is clicked', async ({ gameOptionsWindow, page }) => {
    await gameOptionsWindow.quitButton.click();

    await expect(gameOptionsWindow.quitConfirmationModal).toBeVisible();

    await expect(page).toHaveScreenshot('quit-confirmation.png', { maxDiffPixelRatio: 0.09 });
  });

  test('closes quit confirmation modal when no button is clicked', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.quitButton.click();

    await gameOptionsWindow.noButton.click();

    await expect(gameOptionsWindow.quitConfirmationModal).toBeHidden();
  });

  test('displays main screen when quit confirmation modal is open and yes button is clicked', async ({
    gameOptionsWindow,
    mainScreen,
  }) => {
    await gameOptionsWindow.quitButton.click();

    await gameOptionsWindow.yesButton.click();

    await expect(mainScreen.locator).toBeVisible();
  });
});

test.describe('music volume', () => {
  test('displays music volume setting', async ({ gameOptionsWindow }) => {
    await expect(gameOptionsWindow.musicVolumeToggle).toBeVisible();

    await expect(gameOptionsWindow.getMusicVolumeOption(/^on$/i)).toBeChecked();
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
      await gameOptionsWindow.musicVolumeToggle.click();

      await expect(gameOptionsWindow.getMusicVolumeOption(volume)).toBeChecked();
    }
  });
});

test.describe('effects volume', () => {
  test('displays effects volume setting', async ({ gameOptionsWindow }) => {
    await expect(gameOptionsWindow.effectsVolumeToggle).toBeVisible();

    await expect(gameOptionsWindow.getEffectsVolumeOption(/^on$/i)).toBeChecked();
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
      await gameOptionsWindow.effectsVolumeToggle.click();

      await expect(gameOptionsWindow.getEffectsVolumeOption(volume)).toBeChecked();
    }
  });
});

test.describe('movement speed', () => {
  test('displays movement speed setting', async ({ gameOptionsWindow }) => {
    await expect(gameOptionsWindow.movementSpeedToggle).toBeVisible();

    await expect(gameOptionsWindow.getMovementSpeedOption(/^gallop$/i)).toBeVisible();
  });

  test('allows to cycle through movement speed options', async ({ gameOptionsWindow }) => {
    for (const option of [/^jump$/i, /^walk$/i, /^trot$/i, /^canter$/i, /^gallop$/i]) {
      await gameOptionsWindow.movementSpeedToggle.click();

      await expect(gameOptionsWindow.getMovementSpeedOption(option)).toBeVisible();
    }
  });
});

test.describe('auto save', () => {
  test('displays auto save setting', async ({ gameOptionsWindow }) => {
    await expect(gameOptionsWindow.autoSaveCheckbox).toBeVisible();

    await expect(gameOptionsWindow.autoSaveCheckbox).toBeChecked();
  });

  test('allows to toggle auto save', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.autoSaveCheckbox.click();

    await expect(gameOptionsWindow.autoSaveCheckbox).not.toBeChecked();

    await gameOptionsWindow.autoSaveCheckbox.click();

    await expect(gameOptionsWindow.autoSaveCheckbox).toBeChecked();
  });
});

test.describe('show path', () => {
  test('displays show path setting', async ({ gameOptionsWindow }) => {
    await expect(gameOptionsWindow.showPathCheckbox).toBeVisible();

    await expect(gameOptionsWindow.showPathCheckbox).toBeChecked();
  });

  test('allows to toggle show path', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.showPathCheckbox.click();

    await expect(gameOptionsWindow.showPathCheckbox).not.toBeChecked();

    await gameOptionsWindow.showPathCheckbox.click();

    await expect(gameOptionsWindow.showPathCheckbox).toBeChecked();
  });
});

test.describe('view enemy movement', () => {
  test('displays view enemy movement setting', async ({ gameOptionsWindow }) => {
    await expect(gameOptionsWindow.viewEnemyMovementCheckbox).toBeVisible();

    await expect(gameOptionsWindow.viewEnemyMovementCheckbox).toBeChecked();
  });

  test('allows to toggle view enemy movement', async ({ gameOptionsWindow }) => {
    await gameOptionsWindow.viewEnemyMovementCheckbox.click();

    await expect(gameOptionsWindow.viewEnemyMovementCheckbox).not.toBeChecked();

    await gameOptionsWindow.viewEnemyMovementCheckbox.click();

    await expect(gameOptionsWindow.viewEnemyMovementCheckbox).toBeChecked();
  });
});

test('closes game options window when okay is clicked', async ({ gameOptionsWindow }) => {
  await gameOptionsWindow.okayButton.click();

  await expect(gameOptionsWindow.locator).toBeHidden();
});
