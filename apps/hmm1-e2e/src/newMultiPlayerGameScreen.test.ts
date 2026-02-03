import { expect, test } from './utils';

test.beforeEach(async ({ newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.goto();
});

test('displays screen', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays hot seat info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.hotSeat.showInfo();

  await newMultiPlayerGameScreen.hotSeat.verifyInfoShown();

  await expect(page).toHaveScreenshot('hot-seat-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new hot seat game screen when hot seat is selected', async ({
  newHotSeatGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newMultiPlayerGameScreen.hotSeat.select();

  await newHotSeatGameScreen.verifyIsCurrentScreen();
});

test('displays network info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.network.showInfo();

  await newMultiPlayerGameScreen.network.verifyInfoShown();

  await expect(page).toHaveScreenshot('network-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new network game screen when network is selected', async ({
  newMultiPlayerGameScreen,
  newNetworkGameScreen,
}) => {
  await newMultiPlayerGameScreen.network.select();

  await newNetworkGameScreen.verifyIsCurrentScreen();
});

test('displays modem info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.modem.showInfo();

  await newMultiPlayerGameScreen.modem.verifyInfoShown();

  await expect(page).toHaveScreenshot('modem-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new modem game screen when modem is selected', async ({
  newModemGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newMultiPlayerGameScreen.modem.select();

  await newModemGameScreen.verifyIsCurrentScreen();
});

test('displays direct connect info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.directConnect.showInfo();

  await newMultiPlayerGameScreen.directConnect.verifyInfoShown();

  await expect(page).toHaveScreenshot('direct-connect-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new direct connect game screen when direct connect is selected', async ({
  newDirectConnectGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newMultiPlayerGameScreen.directConnect.select();

  await newDirectConnectGameScreen.verifyIsCurrentScreen();
});

test('displays cancel info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.cancel.showInfo();

  await newMultiPlayerGameScreen.cancel.verifyInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is selected', async ({ mainScreen, newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
