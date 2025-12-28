import type { Locator, Page } from '@playwright/test';

export class HighScoresScreen {
  public readonly locator: Locator;

  public readonly standardGameScoresTable: Locator;

  public readonly playerHeader: Locator;
  public readonly landHeader: Locator;
  public readonly scoreHeader: Locator;
  public readonly titleHeader: Locator;

  public readonly exitButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /high scores/i });

    this.standardGameScoresTable = page.getByRole('table', { name: /standard game/i });

    this.playerHeader = page.getByRole('columnheader', { name: /player/i });
    this.landHeader = page.getByRole('columnheader', { name: /land/i });
    this.scoreHeader = page.getByRole('columnheader', { name: /score/i });
    this.titleHeader = page.getByRole('columnheader', { name: /title/i });

    this.exitButton = page.getByRole('button', { name: /exit/i });
  }

  public goto() {
    return this.page.goto('/high-scores');
  }

  public getEntry(index: number) {
    return this.page.getByRole('row').nth(index);
  }
}
