import { expect, test } from './utils';

test.beforeEach(async ({ highScoresScreen }) => {
  await highScoresScreen.goto();
});

test('displays screen', async ({ highScoresScreen }) => {
  await expect(highScoresScreen.locator).toBeVisible();

  await expect(highScoresScreen.exitButton).toBeVisible();
});

test('displays main screen when exit is clicked', async ({ highScoresScreen, mainScreen }) => {
  await highScoresScreen.exitButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
