import { expect, test } from './utils';

test.beforeEach(async ({ highScoresScreen }) => {
  await highScoresScreen.goto();
});

test('displays screen', async ({ highScoresScreen }) => {
  await expect(highScoresScreen.locator).toBeVisible();

  await expect(highScoresScreen.exitButton).toBeVisible();
});

test('displays standard game scores by default', async ({ highScoresScreen }) => {
  await expect(highScoresScreen.standardGameScoresTable).toBeVisible();
});

test.describe('standard game scores', () => {
  test('displays scores', async ({ highScoresScreen }) => {
    await expect(highScoresScreen.standardGameScoresTable).toBeVisible();

    await expect(highScoresScreen.standardButton).toBeVisible();
  });

  test('displays entries', async ({ highScoresScreen, page }) => {
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

    await expect(page).toHaveScreenshot('standard-game.png', { maxDiffPixelRatio: 0.01 });
  });

  test('displays campaign game scores when standard button is clicked', async ({ highScoresScreen }) => {
    await highScoresScreen.standardButton.click();

    await expect(highScoresScreen.campaignGameScoresTable).toBeVisible();
  });
});

test.describe('campaign game scores', () => {
  test.beforeEach(async ({ highScoresScreen }) => {
    await highScoresScreen.standardButton.click();
  });

  test('displays scores', async ({ highScoresScreen }) => {
    await expect(highScoresScreen.campaignGameScoresTable).toBeVisible();

    await expect(highScoresScreen.campaignButton).toBeVisible();
  });

  test('displays entries', async ({ highScoresScreen, page }) => {
    await expect(highScoresScreen.playerHeader).toBeVisible();
    await expect(highScoresScreen.leaderHeader).toBeVisible();
    await expect(highScoresScreen.daysHeader).toBeVisible();
    await expect(highScoresScreen.titleHeader).toBeVisible();

    await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /maximus/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /lord ironfist/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /500/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(1).getByRole('cell', { name: /paladin/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /antoine/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /lord slayer/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /700/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(2).getByRole('cell', { name: /ghost/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /astra/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /queen lamanda/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /900/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(3).getByRole('cell', { name: /druid/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /agar/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /lord alamar/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /1200/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(4).getByRole('cell', { name: /griffin/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /vatawna/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /queen lamanda/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /1500/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(5).getByRole('cell', { name: /wolf/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /vesper/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /lord alamar/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /1700/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(6).getByRole('cell', { name: /dwarf/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /ambrose/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /lord ironfist/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /2000/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(7).getByRole('cell', { name: /gargoyle/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /troyan/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /queen lamanda/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /2400/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(8).getByRole('cell', { name: /orc/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /jojosh/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /lord slayer/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /3200/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(9).getByRole('cell', { name: /sprite/i })).toBeVisible();

    await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /wrathmont/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /lord alamar/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /4400/i })).toBeVisible();
    await expect(highScoresScreen.getEntry(10).getByRole('cell', { name: /peasant/i })).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-game.png', { maxDiffPixelRatio: 0.02 });
  });

  test('displays standard game scores when campaign button is clicked', async ({ highScoresScreen }) => {
    await highScoresScreen.campaignButton.click();

    await expect(highScoresScreen.standardGameScoresTable).toBeVisible();
  });
});

test('displays main screen when exit button is clicked', async ({ highScoresScreen, mainScreen }) => {
  await highScoresScreen.exitButton.click();

  await expect(mainScreen.locator).toBeVisible();
});

test('remembers last viewed scores', async ({ highScoresScreen, mainScreen }) => {
  await highScoresScreen.standardButton.click();

  await highScoresScreen.exitButton.click();

  await mainScreen.viewHighScoresButton.click();

  await expect(highScoresScreen.campaignGameScoresTable).toBeVisible();
});
