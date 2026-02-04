import { expect, test } from './utils';

test.beforeEach(async ({ newCampaignGameScreen }) => {
  await newCampaignGameScreen.goto();
});

test('displays screen', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord ironfist info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.playLordIronfist.showInfo();

  await newCampaignGameScreen.playLordIronfist.verifyInfoShown();

  await expect(page).toHaveScreenshot('play-lord-ironfist-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord slayer info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.playLordSlayer.showInfo();

  await newCampaignGameScreen.playLordSlayer.verifyInfoShown();

  await expect(page).toHaveScreenshot('play-lord-slayer-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play queen lamanda info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.playQueenLamanda.showInfo();

  await newCampaignGameScreen.playQueenLamanda.verifyInfoShown();

  await expect(page).toHaveScreenshot('play-queen-lamanda-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord alamar info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.playLordAlamar.showInfo();

  await newCampaignGameScreen.playLordAlamar.verifyInfoShown();

  await expect(page).toHaveScreenshot('play-lord-alamar-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays cancel info', async ({ newCampaignGameScreen, page }) => {
  await newCampaignGameScreen.cancel.showInfo();

  await newCampaignGameScreen.cancel.verifyInfoShown();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is selected', async ({ mainScreen, newCampaignGameScreen }) => {
  await newCampaignGameScreen.cancel.select();

  await mainScreen.verifyIsCurrentScreen();
});
