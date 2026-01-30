import { expect, test } from './utils';

const playerCounts: readonly number[] = [2, 3, 4];

test.beforeEach(async ({ newHotSeatGameScreen }) => {
  await newHotSeatGameScreen.goto();
});

test('displays screen', async ({ newHotSeatGameScreen, page }) => {
  await expect(newHotSeatGameScreen.locator).toBeVisible();

  await expect(newHotSeatGameScreen.menu).toBeVisible();

  await expect(newHotSeatGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

playerCounts.forEach((count) => {
  test.describe(`${count} players`, () => {
    test(`displays ${count} players button`, async ({ newHotSeatGameScreen }) => {
      await expect(newHotSeatGameScreen.playerCountButtons[count]).toBeVisible();
    });

    test(`displays ${count} players button info`, async ({ mouseRightDown, newHotSeatGameScreen, page }) => {
      await mouseRightDown(newHotSeatGameScreen.playerCountButtons[count]);

      await expect(newHotSeatGameScreen.playerCountInfoModals[count]).toBeVisible();

      await expect(page).toHaveScreenshot(`${count}-players-info.png`, { maxDiffPixelRatio: 0.01 });
    });

    test(`displays new game screen with ${
      count - 1
    } human opponent(s) when ${count} players button is clicked`, async ({
      newHotSeatGameScreen,
      newStandardGameScreen,
      page,
    }) => {
      await newHotSeatGameScreen.playerCountButtons[count].click();

      await expect(newStandardGameScreen.locator).toBeVisible();

      expect(await newStandardGameScreen.getHumanOpponentsCount()).toBe(count - 1);

      await expect(page).toHaveScreenshot(`${count}-players-game.png`, { maxDiffPixelRatio: 0.01 });
    });
  });
});

test('displays cancel button info', async ({ mouseRightDown, newHotSeatGameScreen, page }) => {
  await mouseRightDown(newHotSeatGameScreen.cancelButton);

  await expect(newHotSeatGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel button is clicked', async ({ newHotSeatGameScreen, mainScreen }) => {
  await newHotSeatGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
