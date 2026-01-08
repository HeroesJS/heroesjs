import { Locator, Page } from '@playwright/test';

export class NewStandardGameScreen {
  public readonly locator: Locator;

  public readonly window: Locator;

  public readonly gameDifficultyLabel: Locator;
  public readonly gameDifficultyRadioGroup: Locator;

  public readonly opponentSettingsLabel: Locator;
  public readonly playerColorLabel: Locator;
  public readonly kingOfTheHillLabel: Locator;
  public readonly scenarioSelectionLabel: Locator;
  public readonly scenarioLabel: Locator;
  public readonly difficultyRatingLabel: Locator;

  public readonly okayButton: Locator;
  public readonly cancelButton: Locator;

  constructor(private page: Page) {
    this.locator = page.getByRole('main', { name: /new standard game/i });

    this.window = page.getByRole('region', { name: /new standard game/i });

    this.gameDifficultyLabel = page.getByText(/choose game difficulty:/i);
    this.gameDifficultyRadioGroup = page.getByRole('radiogroup', { name: /game difficulty/i });

    this.opponentSettingsLabel = page.getByText(/customize opponents:/i);
    this.playerColorLabel = page.getByText(/choose color:/i);
    this.kingOfTheHillLabel = page.getByText(/king of the hill:/i);
    this.scenarioSelectionLabel = page.getByText(/choose scenario:/i);
    this.scenarioLabel = page.getByText(/claw \( easy \)/i);
    this.difficultyRatingLabel = page.getByText(/difficulty rating: 60%/i);

    this.okayButton = page.getByRole('button', { name: /okay/i });
    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/standard');
  }

  public getGameDifficultyRadio(option: RegExp) {
    return this.gameDifficultyRadioGroup.getByRole('radio', { name: option });
  }
}
