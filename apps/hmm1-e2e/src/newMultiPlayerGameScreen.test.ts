import { expect, test } from './utils';

test.beforeEach(async ({ newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.goto();
});

test('displays screen', async ({ newMultiPlayerGameScreen }) => {
  await expect(newMultiPlayerGameScreen.locator).toBeVisible();
});
