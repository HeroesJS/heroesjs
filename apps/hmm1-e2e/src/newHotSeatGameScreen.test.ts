import { expect, test } from './utils';

const playerCounts: readonly number[] = [2, 3, 4];

test.beforeEach(async ({ newHotSeatGameScreen }) => {
  await newHotSeatGameScreen.goto();
});

test('displays screen', async ({ newHotSeatGameScreen, page }) => {
  await newHotSeatGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

playerCounts.forEach((count) => {
  test.describe(`${count} players`, () => {
    test(`displays ${count} players info`, async ({ newHotSeatGameScreen, page }) => {
      await newHotSeatGameScreen.forPlayers(count).showInfo();

      await newHotSeatGameScreen.forPlayers(count).verifyInfoShown;

      await expect(page).toHaveScreenshot(`${count}-players-info.png`, { maxDiffPixelRatio: 0.01 });
    });

    const opponentsCount = count - 1;

    test(`displays new game screen with ${opponentsCount} human opponent(s) when ${count} players is selected`, async ({
      newHotSeatGameScreen,
      newStandardGameScreen,
    }) => {
      await newHotSeatGameScreen.forPlayers(count).select();

      await newStandardGameScreen.verifyIsCurrentScreen();

      await newStandardGameScreen.verifyHumanOpponentsCount(opponentsCount);
    });
  });
});

test('displays cancel info', async ({ newHotSeatGameScreen, page }) => {
  await newHotSeatGameScreen.cancel.showInfo();

  await newHotSeatGameScreen.cancel.verifyInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is selected', async ({ newHotSeatGameScreen, mainScreen }) => {
  await newHotSeatGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
