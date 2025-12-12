import { expect, test } from './utils';

test.beforeEach(async ({ newModemGameScreen }) => {
  await newModemGameScreen.goto();
});

test('displays screen', async ({ newModemGameScreen }) => {
  await expect(newModemGameScreen.locator).toBeVisible();
});
