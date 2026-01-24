import { expect, test } from './utils';

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();
});

test('displays screen', async ({ adventureScreen, page }) => {
  await expect(adventureScreen.locator).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.49 });
});

test('displays adventure buttons', async ({ adventureScreen }) => {
  await expect(adventureScreen.nextHeroButton).toBeVisible();
  await expect(adventureScreen.moveButton).toBeVisible();
  await expect(adventureScreen.kingdomOverviewButton).toBeVisible();
  await expect(adventureScreen.endTurnButton).toBeVisible();
  await expect(adventureScreen.adventureOptionsButton).toBeVisible();
  await expect(adventureScreen.gameOptionsButton).toBeVisible();
});

test.skip('next hero button is disabled when no heroes available', async ({ adventureScreen }) => {
  await expect(adventureScreen.nextHeroButton).toBeDisabled();
});

test('displays next hero button info', async ({ adventureScreen, mouseRightDown, page }) => {
  await mouseRightDown(adventureScreen.nextHeroButton);

  await expect(adventureScreen.nextHeroInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('next-hero-info.png', { maxDiffPixelRatio: 0.41 });
});

test.skip('move button is disabled when no movement path is selected', async ({ adventureScreen }) => {
  await expect(adventureScreen.moveButton).toBeDisabled();
});

test('displays move button info', async ({ adventureScreen, mouseRightDown, page }) => {
  await mouseRightDown(adventureScreen.moveButton);

  await expect(adventureScreen.moveInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('move-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays kingdom overview button info', async ({ adventureScreen, mouseRightDown, page }) => {
  await mouseRightDown(adventureScreen.kingdomOverviewButton);

  await expect(adventureScreen.kingdomOverviewInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('kingdom-overview-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays end turn button info', async ({ adventureScreen, mouseRightDown, page }) => {
  await mouseRightDown(adventureScreen.endTurnButton);

  await expect(adventureScreen.endTurnInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('end-turn-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays adventure options button info', async ({ adventureScreen, mouseRightDown, page }) => {
  await mouseRightDown(adventureScreen.adventureOptionsButton);

  await expect(adventureScreen.adventureOptionsInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('adventure-options-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays game options button info', async ({ adventureScreen, mouseRightDown, page }) => {
  await mouseRightDown(adventureScreen.gameOptionsButton);

  await expect(adventureScreen.gameOptionsInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('game-options-info.png', { maxDiffPixelRatio: 0.37 });
});

test.describe('game options', () => {
  test.beforeEach(async ({ adventureScreen }) => {
    await adventureScreen.gameOptionsButton.click();
  });

  test('displays game options window when game options button is clicked', async ({ gameOptionsWindow, page }) => {
    await expect(gameOptionsWindow.locator).toBeVisible();

    await expect(gameOptionsWindow.newGameButton).toBeVisible();
    await expect(gameOptionsWindow.loadGameButton).toBeVisible();
    await expect(gameOptionsWindow.saveGameButton).toBeVisible();
    await expect(gameOptionsWindow.quitButton).toBeVisible();

    await expect(gameOptionsWindow.okayButton).toBeVisible();
    await expect(gameOptionsWindow.infoButton).toBeVisible();

    await expect(page).toHaveScreenshot('game-options-window.png', { maxDiffPixelRatio: 0.12 });
  });

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
