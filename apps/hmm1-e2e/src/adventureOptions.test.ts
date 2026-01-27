import { expect, test } from './utils';

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();

  await adventureScreen.adventureOptionsButton.click();
});

test('displays adventure options window', async ({ adventureOptionsWindow, page }) => {
  await expect(adventureOptionsWindow.locator).toBeVisible();

  await expect(adventureOptionsWindow.viewWorldButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.21 });
});

test.describe('view world', () => {
  test('displays view world button info', async ({ adventureOptionsWindow, mouseRightDown, page }) => {
    await mouseRightDown(adventureOptionsWindow.viewWorldButton);

    await expect(adventureOptionsWindow.viewWorldInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('view-world-info.png', { maxDiffPixelRatio: 0.32 });
  });
});
