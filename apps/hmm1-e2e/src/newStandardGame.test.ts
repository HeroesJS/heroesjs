import { expect, test } from './utils';

test.beforeEach(async ({ newStandardGameScreen }) => {
  await newStandardGameScreen.goto();
});

test('displays screen', async ({ newStandardGameScreen }) => {
  await expect(newStandardGameScreen.locator).toBeVisible();
});
