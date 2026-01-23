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
