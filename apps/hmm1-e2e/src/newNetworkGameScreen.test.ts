import { expect, test } from './utils';

test.beforeEach(async ({ newNetworkGameScreen }) => {
  await newNetworkGameScreen.goto();
});

test('displays screen', async ({ newNetworkGameScreen }) => {
  await expect(newNetworkGameScreen.locator).toBeVisible();
});
