import type { Locator, Page } from '@playwright/test';

export class NewStandardGameScreen {
  public readonly locator: Locator;

  public readonly newStandardGameWindow: Locator;

  public readonly gameDifficultyGroup: Locator;

  public readonly kingOfTheHillCheckbox: Locator;

  public readonly okayButton: Locator;
  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new standard game/i });

    this.newStandardGameWindow = page.getByRole('dialog', { name: /new standard game window/i });

    this.gameDifficultyGroup = page.getByRole('radiogroup', { name: /game difficulty/i });
    this.kingOfTheHillCheckbox = page.getByRole('checkbox', { name: /king of the hill/i });

    this.okayButton = page.getByRole('button', { name: /okay/i });
    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/standard');
  }

  public getGameDifficultyOption(option: string) {
    return this.page.getByRole('radio', { name: new RegExp(option, 'i') });
  }
}
