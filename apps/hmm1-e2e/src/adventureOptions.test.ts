import { expect, test } from './utils';

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();

  await adventureScreen.selectAdventureOptions();
});

test('displays adventure options', async ({ adventureOptionsWindow, page }) => {
  await adventureOptionsWindow.verifyIsOpen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.21 });
});

test.describe('view world', () => {
  test('displays view world info', async ({ adventureOptionsWindow, page }) => {
    await adventureOptionsWindow.showViewWorldInfo();

    await adventureOptionsWindow.verifyViewWorldInfoShown();

    await expect(page).toHaveScreenshot('view-world-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('view puzzle', () => {
  test('displays view puzzle info', async ({ adventureOptionsWindow, page }) => {
    await adventureOptionsWindow.showViewPuzzleInfo();

    await adventureOptionsWindow.verifyViewPuzzleInfoShown();

    await expect(page).toHaveScreenshot('view-puzzle-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('cast spell', () => {
  test('displays cast spell info', async ({ adventureOptionsWindow, page }) => {
    await adventureOptionsWindow.showCastSpellInfo();

    await adventureOptionsWindow.verifyCastSpellInfoShown();

    await expect(page).toHaveScreenshot('cast-spell-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('dig', () => {
  test('displays dig info', async ({ adventureOptionsWindow, page }) => {
    await adventureOptionsWindow.showDigInfo();

    await adventureOptionsWindow.verifyDigInfoShown();

    await expect(page).toHaveScreenshot('cast-spell-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('okay', () => {
  test('displays okay info', async ({ adventureOptionsWindow, page }) => {
    await adventureOptionsWindow.showOkayInfo();

    await adventureOptionsWindow.verifyOkayInfoShown();

    await expect(page).toHaveScreenshot('okay-info.png', { maxDiffPixelRatio: 0.32 });
  });

  test('closes adventure options when okay is selected', async ({ adventureOptionsWindow }) => {
    await adventureOptionsWindow.selectOkay();

    await adventureOptionsWindow.verifyIsClosed();
  });
});
