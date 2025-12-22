import { expect, test } from './utils';

test.beforeEach(async ({ creditsScreen }) => {
  await creditsScreen.goto();
});

test('displays screen', async ({ creditsScreen }) => {
  await expect(creditsScreen.locator).toBeVisible();
});

test('displays entries', async ({ creditsScreen, page }) => {
  await expect(creditsScreen.designedAndDirectedList).toBeVisible();

  await expect(
    creditsScreen.designedAndDirectedList.getByRole('listitem', { name: /jon van caneghem/i })
  ).toBeVisible();

  await expect(creditsScreen.additionalDesignList).toBeVisible();

  await expect(creditsScreen.additionalDesignList.getByRole('listitem', { name: /phil steinmeyer/i })).toBeVisible();
  await expect(
    creditsScreen.additionalDesignList.getByRole('listitem', { name: /debbie van caneghem/i })
  ).toBeVisible();

  await expect(creditsScreen.leadProgrammingList).toBeVisible();

  await expect(creditsScreen.leadProgrammingList.getByRole('listitem', { name: /phil steinmeyer/i })).toBeVisible();

  await expect(creditsScreen.programmingList).toBeVisible();

  await expect(creditsScreen.programmingList.getByRole('listitem', { name: /mark caldwell/i })).toBeVisible();
  await expect(creditsScreen.programmingList.getByRole('listitem', { name: /george ruof/i })).toBeVisible();
  await expect(creditsScreen.programmingList.getByRole('listitem', { name: /todd hendrix/i })).toBeVisible();
  await expect(creditsScreen.programmingList.getByRole('listitem', { name: /bob rakosky/i })).toBeVisible();
  await expect(creditsScreen.programmingList.getByRole('listitem', { name: /michael sean clement/i })).toBeVisible();

  await expect(creditsScreen.artDirectorList).toBeVisible();

  await expect(creditsScreen.artDirectorList.getByRole('listitem', { name: /julia ulano/i })).toBeVisible();

  await expect(creditsScreen.artistsList).toBeVisible();

  await expect(creditsScreen.artistsList.getByRole('listitem', { name: /bonita long-hemsath/i })).toBeVisible();
  await expect(creditsScreen.artistsList.getByRole('listitem', { name: /joel payne/i })).toBeVisible();
  await expect(creditsScreen.artistsList.getByRole('listitem', { name: /mike winterbauer/i })).toBeVisible();

  await expect(creditsScreen.musicAndSoundDesignList).toBeVisible();

  await expect(creditsScreen.musicAndSoundDesignList.getByRole('listitem', { name: /rob king/i })).toBeVisible();

  await expect(creditsScreen.orchestralArrangementsList).toBeVisible();

  await expect(creditsScreen.orchestralArrangementsList.getByRole('listitem', { name: /paul romero/i })).toBeVisible();

  await expect(creditsScreen.writingAndManualList).toBeVisible();

  await expect(creditsScreen.writingAndManualList.getByRole('listitem', { name: /rozita tolouey/i })).toBeVisible();
  await expect(creditsScreen.writingAndManualList.getByRole('listitem', { name: /deane rettig/i })).toBeVisible();
  await expect(creditsScreen.writingAndManualList.getByRole('listitem', { name: /bruce schlickbernd/i })).toBeVisible();

  await expect(creditsScreen.scenariosList).toBeVisible();

  await expect(creditsScreen.scenariosList.getByRole('listitem', { name: /jon van caneghem/i })).toBeVisible();
  await expect(creditsScreen.scenariosList.getByRole('listitem', { name: /christian vanover/i })).toBeVisible();
  await expect(creditsScreen.scenariosList.getByRole('listitem', { name: /clayton retzer/i })).toBeVisible();
  await expect(creditsScreen.scenariosList.getByRole('listitem', { name: /mark palczynski/i })).toBeVisible();

  await expect(creditsScreen.qaManagerList).toBeVisible();

  await expect(creditsScreen.qaManagerList.getByRole('listitem', { name: /peter ryu/i })).toBeVisible();

  await expect(creditsScreen.testingList).toBeVisible();

  await expect(creditsScreen.testingList.getByRole('listitem', { name: /bryan farina/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /douglas rothman/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /pavel vesely/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /walter johnson/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /scott white/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /mark caldwell/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /george ruof/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /scott mcdaniel/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /benjamin bent/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /deane rettig/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /clayton retzer/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /craig konas/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /mark palczynski/i })).toBeVisible();
  await expect(creditsScreen.testingList.getByRole('listitem', { name: /christian vanover/i })).toBeVisible();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.03 });
});
