import { AdventureScreen } from './adventureScreen';
import { expect, test as testBase } from './utils';

const test = testBase.extend<{
  readonly actions: AdventureScreen['actions'];
}>({
  actions: async ({ adventureScreen: { actions } }, use) => await use(actions),
});

test.beforeEach(async ({ adventureScreen }) => {
  await adventureScreen.goto();
});

test('displays screen', async ({ adventureScreen, page }) => {
  await adventureScreen.verifyIsCurrentScreen();

  await expect(page).toHaveScreenshot('screenshot.png', { maxDiffPixelRatio: 0.49 });
});

test.skip('next hero is disabled when no heroes are recruited', async ({ actions }) => {
  await actions.nextHero.verifyDisabled();
});

test('displays next hero info', async ({ actions, page }) => {
  await actions.nextHero.showInfo();

  await actions.nextHero.verifyInfoShown();

  await expect(page).toHaveScreenshot('next-hero-info.png', { maxDiffPixelRatio: 0.41 });
});

test.skip('move is disabled when no movement path is set', async ({ actions }) => {
  await actions.move.verifyDisabled();
});

test('displays move info', async ({ actions, page }) => {
  await actions.move.showInfo();

  await actions.move.verifyInfoShown();

  await expect(page).toHaveScreenshot('move-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays kingdom overview info', async ({ actions, page }) => {
  await actions.kingdomOverview.showInfo();

  await actions.kingdomOverview.verifyInfoShown();

  await expect(page).toHaveScreenshot('kingdom-overview-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays end turn info', async ({ actions, page }) => {
  await actions.endTurn.showInfo();

  await actions.endTurn.verifyInfoShown();

  await expect(page).toHaveScreenshot('end-turn-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays adventure options info', async ({ actions, page }) => {
  await actions.adventureOptions.showInfo();

  await actions.adventureOptions.verifyInfoShown();

  await expect(page).toHaveScreenshot('adventure-options-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays adventure options when adventure options is selected', async ({ actions, adventureScreen }) => {
  await actions.adventureOptions.select();

  await adventureScreen.adventureOptions.verifyIsOpen();
});

test('displays game options info', async ({ actions, page }) => {
  await actions.gameOptions.showInfo();

  await actions.gameOptions.verifyInfoShown();

  await expect(page).toHaveScreenshot('game-options-info.png', { maxDiffPixelRatio: 0.37 });
});

test('displays game options when game options is selected', async ({ actions, adventureScreen }) => {
  await actions.gameOptions.select();

  await adventureScreen.gameOptions.verifyIsOpen();
});
