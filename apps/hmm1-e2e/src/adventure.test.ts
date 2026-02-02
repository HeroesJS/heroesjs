import { expect, test } from './utils';

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();
});

test('displays screen', async ({ adventureScreen, page }) => {
  await adventureScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.49 });
});

test.skip('next hero is disabled when no heroes are recruited', async ({ adventureScreen }) => {
  await adventureScreen.verifyNextHeroDisabled();
});

test('displays next hero info', async ({ adventureScreen, page }) => {
  await adventureScreen.showNextHeroInfo();

  await adventureScreen.verifyNextHeroInfoShown();

  await expect(page).toHaveScreenshot('next-hero-info.png', { maxDiffPixelRatio: 0.41 });
});

test.skip('move is disabled when no movement path is set', async ({ adventureScreen }) => {
  await adventureScreen.verifyMoveDisabled();
});

test('displays move info', async ({ adventureScreen, page }) => {
  await adventureScreen.showMoveInfo();

  await adventureScreen.verifyMoveInfoShown();

  await expect(page).toHaveScreenshot('move-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays kingdom overview info', async ({ adventureScreen, page }) => {
  await adventureScreen.showKingdomOverviewInfo();

  await adventureScreen.verifyKingdomOverviewInfoShown();

  await expect(page).toHaveScreenshot('kingdom-overview-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays end turn info', async ({ adventureScreen, page }) => {
  await adventureScreen.showEndTurnInfo();

  await adventureScreen.verifyEndTurnInfoShown();

  await expect(page).toHaveScreenshot('end-turn-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays adventure options info', async ({ adventureScreen, page }) => {
  await adventureScreen.showAdventureOptionsInfo();

  await adventureScreen.verifyAdventureOptionsInfoShown();

  await expect(page).toHaveScreenshot('adventure-options-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays adventure options when adventure options is selected', async ({
  adventureScreen,
  adventureOptionsWindow,
}) => {
  await adventureScreen.selectAdventureOptions();

  await expect(adventureOptionsWindow.locator).toBeVisible();
});

test('displays game options info', async ({ adventureScreen, page }) => {
  await adventureScreen.showGameOptionsInfo();

  await adventureScreen.verifyGameOptionsInfoShown();

  await expect(page).toHaveScreenshot('game-options-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays game options when game options is selected', async ({ adventureScreen, gameOptionsWindow }) => {
  await adventureScreen.selectGameOptions();

  await expect(gameOptionsWindow.locator).toBeVisible();
});
