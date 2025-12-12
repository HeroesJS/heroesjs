import { expect, test } from './utils';

test.beforeEach(async ({ newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.goto();
});

test('displays screen', async ({ newMultiPlayerGameScreen }) => {
  await expect(newMultiPlayerGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newMultiPlayerGameScreen, page }) => {
  await expect(newMultiPlayerGameScreen.menu).toBeVisible();

  await expect(newMultiPlayerGameScreen.hotSeatButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.networkButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.modemButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.directConnectButton).toBeVisible();
  await expect(newMultiPlayerGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays hot seat info', async ({ mouseRightDown, newMultiPlayerGameScreen, page }) => {
  await mouseRightDown(newMultiPlayerGameScreen.hotSeatButton);

  await expect(newMultiPlayerGameScreen.hotSeatInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('hot-seat-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new hot seat game screen when hot seat is clicked', async ({
  newHotSeatGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newMultiPlayerGameScreen.hotSeatButton.click();

  await expect(newHotSeatGameScreen.locator).toBeVisible();
});

test('displays network info', async ({ mouseRightDown, newMultiPlayerGameScreen, page }) => {
  await mouseRightDown(newMultiPlayerGameScreen.networkButton);

  await expect(newMultiPlayerGameScreen.networkInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('network-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new network game screen when network is clicked', async ({
  newMultiPlayerGameScreen,
  newNetworkGameScreen,
}) => {
  await newMultiPlayerGameScreen.networkButton.click();

  await expect(newNetworkGameScreen.locator).toBeVisible();
});

test('displays modem info', async ({ mouseRightDown, newMultiPlayerGameScreen, page }) => {
  await mouseRightDown(newMultiPlayerGameScreen.modemButton);

  await expect(newMultiPlayerGameScreen.modemInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('modem-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays direct connect info', async ({ mouseRightDown, newMultiPlayerGameScreen, page }) => {
  await mouseRightDown(newMultiPlayerGameScreen.directConnectButton);

  await expect(newMultiPlayerGameScreen.directConnectInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('direct-connect-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays cancel info', async ({ mouseRightDown, newMultiPlayerGameScreen, page }) => {
  await mouseRightDown(newMultiPlayerGameScreen.cancelButton);

  await expect(newMultiPlayerGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is clicked', async ({ mainScreen, newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
