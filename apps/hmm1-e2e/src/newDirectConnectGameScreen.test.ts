import { expect, test } from './utils';

test.beforeEach(async ({ newDirectConnectGameScreen }) => {
  await newDirectConnectGameScreen.goto();
});

test('displays screen', async ({ newDirectConnectGameScreen }) => {
  await expect(newDirectConnectGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newDirectConnectGameScreen, page }) => {
  await expect(newDirectConnectGameScreen.menu).toBeVisible();

  await expect(newDirectConnectGameScreen.hostButton).toBeVisible();
  await expect(newDirectConnectGameScreen.guestButton).toBeVisible();
  await expect(newDirectConnectGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host info', async ({ mouseRightDown, newDirectConnectGameScreen, page }) => {
  await mouseRightDown(newDirectConnectGameScreen.hostButton);

  await expect(newDirectConnectGameScreen.hostInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('host-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host direct connect game screen when host is clicked', async ({
  hostDirectConnectGameScreen,
  newDirectConnectGameScreen,
}) => {
  await newDirectConnectGameScreen.hostButton.click();

  await expect(hostDirectConnectGameScreen.locator).toBeVisible();
});

test('displays guest info', async ({ mouseRightDown, newDirectConnectGameScreen, page }) => {
  await mouseRightDown(newDirectConnectGameScreen.guestButton);

  await expect(newDirectConnectGameScreen.guestInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('guest-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays join direct connect game screen when guest is clicked', async ({
  joinDirectConnectGameScreen,
  newDirectConnectGameScreen,
}) => {
  await newDirectConnectGameScreen.guestButton.click();

  await expect(joinDirectConnectGameScreen.locator).toBeVisible();
});

test('displays cancel info', async ({ mouseRightDown, newDirectConnectGameScreen, page }) => {
  await mouseRightDown(newDirectConnectGameScreen.cancelButton);

  await expect(newDirectConnectGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newDirectConnectGameScreen }) => {
  await newDirectConnectGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
