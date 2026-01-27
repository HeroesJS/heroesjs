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

test.describe('view puzzle', () => {
  test('displays view puzzle button info', async ({ adventureOptionsWindow, mouseRightDown, page }) => {
    await mouseRightDown(adventureOptionsWindow.viewPuzzleButton);

    await expect(adventureOptionsWindow.viewPuzzleInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('view-puzzle-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('cast spell', () => {
  test('displays cast spell button info', async ({ adventureOptionsWindow, mouseRightDown, page }) => {
    await mouseRightDown(adventureOptionsWindow.castSpellButton);

    await expect(adventureOptionsWindow.castSpellInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('cast-spell-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('dig', () => {
  test('displays dig button info', async ({ adventureOptionsWindow, mouseRightDown, page }) => {
    await mouseRightDown(adventureOptionsWindow.digButton);

    await expect(adventureOptionsWindow.digInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('cast-spell-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('okay', () => {
  test('displays okay button info', async ({ adventureOptionsWindow, mouseRightDown, page }) => {
    await mouseRightDown(adventureOptionsWindow.okayButton);

    await expect(adventureOptionsWindow.okayInfoModal).toBeVisible();

    await expect(page).toHaveScreenshot('okay-info.png', { maxDiffPixelRatio: 0.32 });
  });

  test('closes adventure options window when okay button is clicked', async ({ adventureOptionsWindow }) => {
    await adventureOptionsWindow.okayButton.click();

    await expect(adventureOptionsWindow.locator).toBeHidden();
  });
});
