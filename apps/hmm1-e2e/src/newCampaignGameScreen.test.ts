import { expect, test } from './utils';

test.beforeEach(async ({ newCampaignGameScreen }) => {
  await newCampaignGameScreen.goto();
});

test('displays screen', async ({ newCampaignGameScreen, page }) => {
  await expect(newCampaignGameScreen.locator).toBeVisible();

  await expect(newCampaignGameScreen.menu).toBeVisible();

  await expect(newCampaignGameScreen.playLordIronfistButton).toBeVisible();
  await expect(newCampaignGameScreen.playLordSlayerButton).toBeVisible();
  await expect(newCampaignGameScreen.playQueenLamandaButton).toBeVisible();
  await expect(newCampaignGameScreen.playLordAlamarButton).toBeVisible();
  await expect(newCampaignGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord ironfist info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
  await mouseRightDown(newCampaignGameScreen.playLordIronfistButton);

  await expect(newCampaignGameScreen.playLordIronfistInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('play-lord-ironfist-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord slayer info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
  await mouseRightDown(newCampaignGameScreen.playLordSlayerButton);

  await expect(newCampaignGameScreen.playLordSlayerInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('play-lord-slayer-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play queen lamanda info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
  await mouseRightDown(newCampaignGameScreen.playQueenLamandaButton);

  await expect(newCampaignGameScreen.playQueenLamandaInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('play-queen-lamanda-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays play lord alamar info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
  await mouseRightDown(newCampaignGameScreen.playLordAlamarButton);

  await expect(newCampaignGameScreen.playLordAlamarInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('play-lord-alamar-info.png', { maxDiffPixelRatio: 0.05 });
});

test('displays cancel info', async ({ mouseRightDown, newCampaignGameScreen, page }) => {
  await mouseRightDown(newCampaignGameScreen.cancelButton);

  await expect(newCampaignGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.05 });
});

test('returns to main screen when cancel is clicked', async ({ newCampaignGameScreen, mainScreen }) => {
  await newCampaignGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
