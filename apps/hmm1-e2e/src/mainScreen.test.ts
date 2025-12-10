import { expect, test } from './utils';

test('displays main screen', async ({ mainScreen }) => {
  await mainScreen.goto();

  await expect(mainScreen.locator).toBeVisible();
});

test.describe('main menu', () => {
  test.beforeEach(async ({ mainScreen }) => {
    await mainScreen.goto();
  });

  test('displays main menu', async ({ mainScreen, page }) => {
    await expect(mainScreen.menu).toBeVisible();

    await expect(mainScreen.newGameButton).toBeVisible();
    await expect(mainScreen.loadGameButton).toBeVisible();
    await expect(mainScreen.viewHighScoresButton).toBeVisible();
    await expect(mainScreen.viewCreditsButton).toBeVisible();
    await expect(mainScreen.quitButton).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays new game info', async ({ mainScreen, mouseRightDown, page }) => {
    await mouseRightDown(mainScreen.newGameButton);

    await expect(mainScreen.newGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-new-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays load game info', async ({ mainScreen, mouseRightDown, page }) => {
    await mouseRightDown(mainScreen.loadGameButton);

    await expect(mainScreen.loadGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-load-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view high scores info', async ({ mainScreen, mouseRightDown, page }) => {
    await mouseRightDown(mainScreen.viewHighScoresButton);

    await expect(mainScreen.viewHighScoresInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-high-scores-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view credits info', async ({ mainScreen, mouseRightDown, page }) => {
    await mouseRightDown(mainScreen.viewCreditsButton);

    await expect(mainScreen.viewCreditsInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-credits-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays quit info', async ({ mainScreen, mouseRightDown, page }) => {
    await mouseRightDown(mainScreen.quitButton);

    await expect(mainScreen.quitInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-quit-info.png', { maxDiffPixelRatio: 0.05 });
  });
});
