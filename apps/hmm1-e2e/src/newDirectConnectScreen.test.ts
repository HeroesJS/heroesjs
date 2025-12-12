import { expect, test } from './utils';

test.beforeEach(async ({ newDirectConnectGameScreen }) => {
  await newDirectConnectGameScreen.goto();
});

test('displays screen', async ({ newDirectConnectGameScreen }) => {
  await expect(newDirectConnectGameScreen.locator).toBeVisible();
});
