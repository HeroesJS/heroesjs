import { expect, test } from './utils';

test.beforeEach(async ({ newModemGameScreen }) => {
  await newModemGameScreen.goto();
});

test('displays screen', async ({ newModemGameScreen }) => {
  await expect(newModemGameScreen.locator).toBeVisible();
});

test('displays menu', async ({ newModemGameScreen, page }) => {
  await expect(newModemGameScreen.menu).toBeVisible();

  await expect(newModemGameScreen.hostButton).toBeVisible();
  await expect(newModemGameScreen.guestButton).toBeVisible();
  await expect(newModemGameScreen.cancelButton).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays host info', async ({ mouseRightDown, newModemGameScreen, page }) => {
  await mouseRightDown(newModemGameScreen.hostButton);

  await expect(newModemGameScreen.hostInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('host-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays guest info', async ({ mouseRightDown, newModemGameScreen, page }) => {
  await mouseRightDown(newModemGameScreen.guestButton);

  await expect(newModemGameScreen.guestInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('guest-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays join modem game screen when guest is clicked', async ({ joinModemGameScreen, newModemGameScreen }) => {
  await newModemGameScreen.guestButton.click();

  await expect(joinModemGameScreen.locator).toBeVisible();
});

test('displays cancel info', async ({ mouseRightDown, newModemGameScreen, page }) => {
  await mouseRightDown(newModemGameScreen.cancelButton);

  await expect(newModemGameScreen.cancelInfoModal).toBeVisible();

  await expect(page).toHaveScreenshot('cancel-info.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when cancel is clicked', async ({ mainScreen, newModemGameScreen }) => {
  await newModemGameScreen.cancelButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
