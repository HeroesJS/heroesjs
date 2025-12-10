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

test.describe('new game menu', () => {
  test.beforeEach(async ({ newGameScreen }) => {
    await newGameScreen.goto();

    await newGameScreen.menu.waitFor();
  });

  test('displays new game menu', async ({ newGameScreen, page }) => {
    await expect(newGameScreen.menu).toBeVisible();

    await expect(newGameScreen.standardGameButton).toBeVisible();
    await expect(newGameScreen.campaignGameButton).toBeVisible();
    await expect(newGameScreen.multiPlayerGameButton).toBeVisible();
    await expect(newGameScreen.cancelButton).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays standard game info', async ({ mouseRightDown, newGameScreen, page }) => {
    await mouseRightDown(newGameScreen.standardGameButton);

    await expect(newGameScreen.standardGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-standard-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays campaign game info', async ({ mouseRightDown, newGameScreen, page }) => {
    await mouseRightDown(newGameScreen.campaignGameButton);

    await expect(newGameScreen.campaignGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-campaign-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays multi-player game info', async ({ mouseRightDown, newGameScreen, page }) => {
    await mouseRightDown(newGameScreen.multiPlayerGameButton);

    await expect(newGameScreen.multiPlayerGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-multi-player-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ mouseRightDown, newGameScreen, page }) => {
    await mouseRightDown(newGameScreen.cancelButton);

    await expect(newGameScreen.cancelInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ mainScreen, newGameScreen }) => {
    await newGameScreen.cancelButton.click();

    await expect(mainScreen.locator).toBeVisible();
  });
});

test.describe('campaign menu', () => {
  test.beforeEach(async ({ newCampaignGameScreen }) => {
    await newCampaignGameScreen.goto();

    await newCampaignGameScreen.menu.waitFor();
  });

  test('displays campaign menu', async ({ newCampaignGameScreen, page }) => {
    await expect(newCampaignGameScreen.menu).toBeVisible();

    await expect(newCampaignGameScreen.playLordIronfistButton).toBeVisible();
    await expect(newCampaignGameScreen.playLordSlayerButton).toBeVisible();
    await expect(newCampaignGameScreen.playQueenLamandaButton).toBeVisible();
    await expect(newCampaignGameScreen.playLordAlamarButton).toBeVisible();
    await expect(newCampaignGameScreen.cancelButton).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord ironfist info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
    await mouseRightDown(newCampaignGameScreen.playLordIronfistButton);

    await expect(newCampaignGameScreen.playLordIronfistInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-ironfist-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord slayer info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
    await mouseRightDown(newCampaignGameScreen.playLordSlayerButton);

    await expect(newCampaignGameScreen.playLordSlayerInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-slayer-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play queen lamanda info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
    await mouseRightDown(newCampaignGameScreen.playQueenLamandaButton);

    await expect(newCampaignGameScreen.playQueenLamandaInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-queen-lamanda-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord alamar info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
    await mouseRightDown(newCampaignGameScreen.playLordAlamarButton);

    await expect(newCampaignGameScreen.playLordAlamarInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-alamar-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
    await mouseRightDown(newCampaignGameScreen.cancelButton);

    await expect(newCampaignGameScreen.cancelInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ mainScreen, newCampaignGameScreen }) => {
    await newCampaignGameScreen.cancelButton.click();

    await expect(mainScreen.menu).toBeVisible();
  });
});
