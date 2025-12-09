import { expect, test as testBase } from '@playwright/test';

import { MainScreen } from './mainScreen';

const test = testBase.extend<{ mainScreen: MainScreen }>({
  mainScreen: async ({ page }, use) => await use(new MainScreen(page)),
});

test('displays main screen', async ({ mainScreen }) => {
  await mainScreen.goto();

  await expect(mainScreen.screen).toBeVisible();
});

test.describe('main menu', () => {
  test.beforeEach(async ({ mainScreen }) => {
    await mainScreen.goto();
  });

  test('displays main menu', async ({ mainScreen, page }) => {
    await expect(mainScreen.mainMenu.menu).toBeVisible();

    await expect(mainScreen.mainMenu.newGameButton).toBeVisible();
    await expect(mainScreen.mainMenu.loadGameButton).toBeVisible();
    await expect(mainScreen.mainMenu.viewHighScoresButton).toBeVisible();
    await expect(mainScreen.mainMenu.viewCreditsButton).toBeVisible();
    await expect(mainScreen.mainMenu.quitButton).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays new game info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.mainMenu.newGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.mainMenu.newGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-new-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays load game info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.mainMenu.loadGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.mainMenu.loadGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-load-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view high scores info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.mainMenu.viewHighScoresButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.mainMenu.viewHighScoresInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-high-scores-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view credits info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.mainMenu.viewCreditsButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.mainMenu.viewCreditsInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-credits-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays quit info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.mainMenu.quitButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.mainMenu.quitInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-quit-info.png', { maxDiffPixelRatio: 0.05 });
  });
});

test.describe('new game menu', () => {
  test.beforeEach(async ({ mainScreen }) => {
    await mainScreen.goto();

    await mainScreen.mainMenu.newGameButton.click();

    await mainScreen.gameTypeMenu.menu.waitFor();
  });

  test('displays new game menu', async ({ mainScreen, page }) => {
    await expect(mainScreen.gameTypeMenu.menu).toBeVisible();

    await expect(mainScreen.gameTypeMenu.standardGameButton).toBeVisible();
    await expect(mainScreen.gameTypeMenu.campaignGameButton).toBeVisible();
    await expect(mainScreen.gameTypeMenu.multiPlayerGameButton).toBeVisible();
    await expect(mainScreen.gameTypeMenu.cancelButton).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays standard game info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.gameTypeMenu.standardGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.gameTypeMenu.standardGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-standard-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays campaign game info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.gameTypeMenu.campaignGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.gameTypeMenu.campaignGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-campaign-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays multi-player game info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.gameTypeMenu.multiPlayerGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.gameTypeMenu.multiPlayerGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-multi-player-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.gameTypeMenu.cancelButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.gameTypeMenu.cancelInfoButton).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ mainScreen }) => {
    await mainScreen.gameTypeMenu.cancelButton.click();

    await expect(mainScreen.mainMenu.menu).toBeVisible();
  });
});

test.describe('campaign menu', () => {
  test.beforeEach(async ({ mainScreen }) => {
    await mainScreen.goto();

    await mainScreen.mainMenu.newGameButton.click();

    await mainScreen.gameTypeMenu.campaignGameButton.click();

    await mainScreen.campaignMenu.menu.waitFor();
  });

  test('displays campaign menu', async ({ mainScreen, page }) => {
    await expect(mainScreen.campaignMenu.menu).toBeVisible();

    await expect(mainScreen.campaignMenu.playLordIronfistButton).toBeVisible();
    await expect(mainScreen.campaignMenu.playLordSlayerButton).toBeVisible();
    await expect(mainScreen.campaignMenu.playQueenLamandaButton).toBeVisible();
    await expect(mainScreen.campaignMenu.playLordAlamarButton).toBeVisible();
    await expect(mainScreen.campaignMenu.cancelButton).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord ironfist info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.campaignMenu.playLordIronfistButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.campaignMenu.playLordIronfistInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-ironfist-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord slayer info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.campaignMenu.playLordSlayerButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.campaignMenu.playLordSlayerInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-slayer-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play queen lamanda info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.campaignMenu.playQueenLamandaButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.campaignMenu.playQueenLamandaInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-queen-lamanda-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord alamar info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.campaignMenu.playLordAlamarButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.campaignMenu.playLordAlamarInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-alamar-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.campaignMenu.cancelButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.campaignMenu.cancelInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ mainScreen }) => {
    await mainScreen.campaignMenu.cancelButton.click();

    await expect(mainScreen.mainMenu.menu).toBeVisible();
  });
});
