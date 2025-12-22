import { expect, test } from './utils';

test.beforeEach(async ({ creditsScreen }) => {
  await creditsScreen.goto();
});

test('displays screen', async ({ creditsScreen }) => {
  await expect(creditsScreen.locator).toBeVisible();
});
