import { expect, test } from './utils';

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();

  await adventureScreen.adventureOptionsButton.click();
});

test('displays adventure options window', async ({ adventureOptionsWindow, page }) => {
  await expect(adventureOptionsWindow.locator).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.21 });
});
