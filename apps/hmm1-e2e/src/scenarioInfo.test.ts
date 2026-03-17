import { expect, test } from './utils';

test('displays scenario info when info is clicked', async ({ adventureScreen, newStandardGameScreen, page }) => {
  await newStandardGameScreen.goto();

  await newStandardGameScreen.selectGameSettings({
    gameDifficulty: /^normal$/i,
    kingOfTheHill: false,
    opponents: [/^average$/i, /^average$/i, /^average$/i],
    playerColor: /^blue$/i,
    scenario: /^claw \( easy \)$/i,
  });

  await adventureScreen.actions.gameOptions.select();

  await adventureScreen.gameOptions.info.select();

  await adventureScreen.scenarioInfo.verifyIsOpen();

  await adventureScreen.scenarioInfo.verifyInfo({
    difficultyRating: /^60%$/i,
    gameDifficulty: /^normal$/i,
    kingOfTheHill: /^no$/i,
    opponents: [/^average$/i, /^average$/i, /^average$/i],
    playerColor: /^blue$/i,
    scenarioDescription: /^the griffons will protect you until you are ready to make your move\.$/i,
    scenarioDifficulty: /^easy$/i,
    scenarioName: /^claw \( easy \)$/i,
    scenarioSize: /^small$/i,
  });

  await expect(page).toHaveScreenshot('scenario-info.png', { maxDiffPixelRatio: 0.18 });

  await adventureScreen.scenarioInfo.okay.select();

  await adventureScreen.scenarioInfo.verifyIsClosed();
});
