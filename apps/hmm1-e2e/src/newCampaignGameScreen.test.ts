import { expect, test } from './utils';

test.beforeEach(async ({ newCampaignGameScreen }) => {
  await newCampaignGameScreen.goto();
});

test('displays screen', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord ironfist info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.showPlayLordIronfistInfo();

  await newCampaignGameScreen.verifyPlayLordIronfistInfoShown();

  await expect(page).toHaveScreenshot('play-lord-ironfist-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord slayer info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.showPlayLordSlayerInfo();

  await newCampaignGameScreen.verifyPlayLordSlayerInfoShown();

  await expect(page).toHaveScreenshot('play-lord-slayer-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play queen lamanda info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.showPlayQueenLamandaInfo();

  await newCampaignGameScreen.verifyPlayQueenLamandaInfoShown();

  await expect(page).toHaveScreenshot('play-queen-lamanda-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord alamar info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.showPlayLordAlamarInfo();

  await newCampaignGameScreen.verifyPlayLordAlamarInfoShown();

  await expect(page).toHaveScreenshot('play-lord-alamar-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays cancel info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.showCancelInfo();

  await newCampaignGameScreen.verifyCancelInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is selected', async ({ mainScreen, newCampaignGameScreen }) => {
  await newCampaignGameScreen.selectCancel();

  await mainScreen.verifyIsCurrentScreen();
});
