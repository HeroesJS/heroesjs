import { expect, test } from './utils';

test.beforeEach(async ({ newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.goto();
});

test('displays screen', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays hot seat info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.showHotSeatInfo();

  await newMultiPlayerGameScreen.verifyHotSeatInfoShown();

  await expect(page).toHaveScreenshot('hot-seat-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new hot seat game screen when hot seat is selected', async ({
  newHotSeatGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newMultiPlayerGameScreen.selectHotSeat();

  await newHotSeatGameScreen.verifyIsCurrentScreen();
});

test('displays network info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.showNetworkInfo();

  await newMultiPlayerGameScreen.verifyNetworkInfoShown();

  await expect(page).toHaveScreenshot('network-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new network game screen when network is selected', async ({
  newMultiPlayerGameScreen,
  newNetworkGameScreen,
}) => {
  await newMultiPlayerGameScreen.selectNetwork();

  await newNetworkGameScreen.verifyIsCurrentScreen();
});

test('displays modem info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.showModemInfo();

  await newMultiPlayerGameScreen.verifyModemInfoShown();

  await expect(page).toHaveScreenshot('modem-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new modem game screen when modem is selected', async ({
  newModemGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newMultiPlayerGameScreen.selectModem();

  await newModemGameScreen.verifyIsCurrentScreen();
});

test('displays direct connect info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.showDirectConnectInfo();

  await newMultiPlayerGameScreen.verifyDirectConnectInfoShown();

  await expect(page).toHaveScreenshot('direct-connect-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays new direct connect game screen when direct connect is selected', async ({
  newDirectConnectGameScreen,
  newMultiPlayerGameScreen,
}) => {
  await newMultiPlayerGameScreen.selectDirectConnect();

  await expect(newDirectConnectGameScreen.locator).toBeVisible();
});

test('displays cancel info', async ({ newMultiPlayerGameScreen, page }) => {
  await newMultiPlayerGameScreen.showCancelInfo();

  await newMultiPlayerGameScreen.verifyCancelInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is selected', async ({ mainScreen, newMultiPlayerGameScreen }) => {
  await newMultiPlayerGameScreen.selectCancel();

  await mainScreen.verifyIsCurrentScreen();
});
