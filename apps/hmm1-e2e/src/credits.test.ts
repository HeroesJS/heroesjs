import { expect, test } from './utils';

test.beforeEach(async ({ creditsScreen }) => {
  await creditsScreen.goto();
});

test('displays screen', async ({ creditsScreen, page }) => {
  await creditsScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.03 });
});

test('displays credits', async ({ creditsScreen }) => {
  await creditsScreen.verifyDesignedAndDirectedCredits();
  await creditsScreen.verifyAdditionalDesignCredits();
  await creditsScreen.verifyLeadProgrammingCredits();
  await creditsScreen.verifyProgrammingCredits();
  await creditsScreen.verifyArtDirectorCredits();
  await creditsScreen.verifyArtistsCredits();

  await creditsScreen.verifyMusicAndSoundDesignCredits();
  await creditsScreen.verifyOrchestralArrangementsCredits();
  await creditsScreen.verifyWritingAndManualCredits();
  await creditsScreen.verifyScenariosCredits();
  await creditsScreen.verifyQaManagerCredits();
  await creditsScreen.verifyTestingCredits();
});

test('displays main screen when exited', async ({ creditsScreen, mainScreen }) => {
  await creditsScreen.exit();

  await mainScreen.verifyIsCurrentScreen();
});
