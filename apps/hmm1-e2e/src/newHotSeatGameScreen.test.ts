import { expect, test } from './utils';

test.beforeEach(async ({ newHotSeatGameScreen }) => {
  await newHotSeatGameScreen.goto();
});

test('displays screen', async ({ newHotSeatGameScreen }) => {
  await expect(newHotSeatGameScreen.locator).toBeVisible();
});
