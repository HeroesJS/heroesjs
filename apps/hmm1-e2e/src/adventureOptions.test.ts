import { AdventureScreen } from './adventureScreen';
import { expect, test as testBase } from './utils';

const test = testBase.extend<{
  readonly adventureOptions: AdventureScreen['adventureOptions'];
}>({
  adventureOptions: async ({ adventureScreen: { adventureOptions } }, use) => await use(adventureOptions),
});

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();

  await adventureScreen.actions.adventureOptions.select();
});

test('displays adventure options', async ({ adventureOptions, page }) => {
  await adventureOptions.verifyIsOpen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.21 });
});

test.describe('view world', () => {
  test('displays view world info', async ({ adventureOptions, page }) => {
    await adventureOptions.viewWorld.showInfo();

    await adventureOptions.viewWorld.verifyInfoShown();

    await expect(page).toHaveScreenshot('view-world-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('view puzzle', () => {
  test('displays view puzzle info', async ({ adventureOptions, page }) => {
    await adventureOptions.viewPuzzle.showInfo();

    await adventureOptions.viewPuzzle.verifyInfoShown();

    await expect(page).toHaveScreenshot('view-puzzle-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('cast spell', () => {
  test('displays cast spell info', async ({ adventureOptions, page }) => {
    await adventureOptions.castSpell.showInfo();

    await adventureOptions.castSpell.verifyInfoShown();

    await expect(page).toHaveScreenshot('cast-spell-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('dig', () => {
  test('displays dig info', async ({ adventureOptions, page }) => {
    await adventureOptions.dig.showInfo();

    await adventureOptions.dig.verifyInfoShown();

    await expect(page).toHaveScreenshot('cast-spell-info.png', { maxDiffPixelRatio: 0.32 });
  });
});

test.describe('okay', () => {
  test('displays okay info', async ({ adventureOptions, page }) => {
    await adventureOptions.okay.showInfo();

    await adventureOptions.okay.verifyInfoShown();

    await expect(page).toHaveScreenshot('okay-info.png', { maxDiffPixelRatio: 0.32 });
  });

  test('closes adventure options when okay is selected', async ({ adventureOptions }) => {
    await adventureOptions.okay.select();

    await adventureOptions.verifyIsClosed();
  });
});
