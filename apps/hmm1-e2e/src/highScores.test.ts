import { expect, test } from './utils';

test.beforeEach(async ({ highScoresScreen }) => {
  await highScoresScreen.goto();
});

test('displays screen', async ({ highScoresScreen }) => {
  await expect(highScoresScreen.locator).toBeVisible();

  await expect(highScoresScreen.exitButton).toBeVisible();
});

test('displays standard game scores', async ({ highScoresScreen, page }) => {
  await expect(highScoresScreen.standardGameScoresTable).toBeVisible();

  await expect(highScoresScreen.playerHeader).toBeVisible();
  await expect(highScoresScreen.landHeader).toBeVisible();
  await expect(highScoresScreen.scoreHeader).toBeVisible();
  await expect(highScoresScreen.titleHeader).toBeVisible();

  await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /lord kilburn/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /the jester/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /130/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /cavalry/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /tsabu/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /two if by sea/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /110/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /ogre/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /sir galant/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /knight's quest/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /90/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /elf/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /thundax/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /crossroads/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /70/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /wolf/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /lord haart/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /shangri-la/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /60/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /dwarf/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /ariel/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /river's end/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /50/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /gargoyle/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /rebecca/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /pathways/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /40/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /orc/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /sandro/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /squirrel lake/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /30/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /rogue/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /crodo/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /continentia/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /20/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /sprite/i })).toBeVisible();

  await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /barok/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /the claw/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /10/i })).toBeVisible();
  await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /goblin/i })).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.01 });
});

test('displays main screen when exit is clicked', async ({ highScoresScreen, mainScreen }) => {
  await highScoresScreen.exitButton.click();

  await expect(mainScreen.locator).toBeVisible();
});
