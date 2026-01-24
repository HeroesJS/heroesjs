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
  test('displays game options window when game options button is clicked', async ({ adventureScreen, page }) => {
    await adventureScreen.gameOptionsButton.click();

    await expect(adventureScreen.gameOptionsWindow.locator).toBeVisible();

    await expect(page).toHaveScreenshot('game-options-window.png', { maxDiffPixelRatio: 0.14 });
  });
});
