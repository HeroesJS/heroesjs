import { expect, test as testBase } from '@playwright/test';

import { MainScreen, NewCampaignGameScreen, NewGameScreen } from './mainScreen';

interface Fixtures {
  readonly mainScreen: MainScreen;
  readonly newCampaignGameScreen: NewCampaignGameScreen;
  readonly newGameScreen: NewGameScreen;
}

const test = testBase.extend<Fixtures>({
  mainScreen: async ({ page }, use) => await use(new MainScreen(page)),
  newCampaignGameScreen: async ({ page }, use) => await use(new NewCampaignGameScreen(page)),
  newGameScreen: async ({ page }, use) => await use(new NewGameScreen(page)),
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
    await expect(mainScreen.menu).toBeVisible();

    await expect(mainScreen.newGameButton).toBeVisible();
    await expect(mainScreen.loadGameButton).toBeVisible();
    await expect(mainScreen.viewHighScoresButton).toBeVisible();
    await expect(mainScreen.viewCreditsButton).toBeVisible();
    await expect(mainScreen.quitButton).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays new game info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.newGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.newGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-new-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays load game info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.loadGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.loadGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-load-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view high scores info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.viewHighScoresButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.viewHighScoresInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-high-scores-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view credits info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.viewCreditsButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.viewCreditsInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-credits-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays quit info', async ({ mainScreen, page }) => {
    const button = (await mainScreen.quitButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(mainScreen.quitInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-quit-info.png', { maxDiffPixelRatio: 0.05 });
  });
});

test.describe('new game menu', () => {
  test.beforeEach(async ({ mainScreen, newGameScreen }) => {
    await mainScreen.goto();

    await mainScreen.newGameButton.click();

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

  test('displays standard game info', async ({ newGameScreen, page }) => {
    const button = (await newGameScreen.standardGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newGameScreen.standardGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-standard-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays campaign game info', async ({ newGameScreen, page }) => {
    const button = (await newGameScreen.campaignGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newGameScreen.campaignGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-campaign-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays multi-player game info', async ({ newGameScreen, page }) => {
    const button = (await newGameScreen.multiPlayerGameButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newGameScreen.multiPlayerGameInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-multi-player-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ newGameScreen, page }) => {
    const button = (await newGameScreen.cancelButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newGameScreen.cancelInfoButton).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ newGameScreen, mainScreen }) => {
    await newGameScreen.cancelButton.click();

    await expect(mainScreen.menu).toBeVisible();
  });
});

test.describe('campaign menu', () => {
  test.beforeEach(async ({ newCampaignGameScreen, newGameScreen, mainScreen }) => {
    await mainScreen.goto();

    await mainScreen.newGameButton.click();

    await newGameScreen.campaignGameButton.click();

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

  test('displays play lord ironfist info', async ({ newCampaignGameScreen, page }) => {
    const button = (await newCampaignGameScreen.playLordIronfistButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newCampaignGameScreen.playLordIronfistInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-ironfist-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord slayer info', async ({ newCampaignGameScreen, page }) => {
    const button = (await newCampaignGameScreen.playLordSlayerButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newCampaignGameScreen.playLordSlayerInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-slayer-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play queen lamanda info', async ({ newCampaignGameScreen, page }) => {
    const button = (await newCampaignGameScreen.playQueenLamandaButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newCampaignGameScreen.playQueenLamandaInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-queen-lamanda-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord alamar info', async ({ newCampaignGameScreen, page }) => {
    const button = (await newCampaignGameScreen.playLordAlamarButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newCampaignGameScreen.playLordAlamarInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-alamar-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ newCampaignGameScreen, page }) => {
    const button = (await newCampaignGameScreen.cancelButton.boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(newCampaignGameScreen.cancelInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ newCampaignGameScreen, mainScreen }) => {
    await newCampaignGameScreen.cancelButton.click();

    await expect(mainScreen.menu).toBeVisible();
  });
});
