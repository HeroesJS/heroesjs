import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';

export class HighScoresScreen extends Screen {
  public readonly standardGameScoresTable: Locator;
  public readonly campaignGameScoresTable: Locator;

  public readonly playerHeader: Locator;
  public readonly landHeader: Locator;
  public readonly scoreHeader: Locator;
  public readonly leaderHeader: Locator;
  public readonly daysHeader: Locator;
  public readonly titleHeader: Locator;

  public readonly standardButton: Locator;
  public readonly campaignButton: Locator;

  public readonly exitButton: Locator;

  constructor(page: Page) {
    super(page, /^high scores$/i);

    this.standardGameScoresTable = page.getByRole('table', { name: /standard game/i });
    this.campaignGameScoresTable = page.getByRole('table', { name: /campaign game/i });

    this.playerHeader = page.getByRole('columnheader', { name: /player/i });
    this.landHeader = page.getByRole('columnheader', { name: /land/i });
    this.scoreHeader = page.getByRole('columnheader', { name: /score/i });
    this.leaderHeader = page.getByRole('columnheader', { name: /leader/i });
    this.daysHeader = page.getByRole('columnheader', { name: /days/i });
    this.titleHeader = page.getByRole('columnheader', { name: /title/i });

    this.standardButton = page.getByRole('button', { name: /standard/i });
    this.campaignButton = page.getByRole('button', { name: /campaign/i });

    this.exitButton = page.getByRole('button', { name: /exit/i });
  }

  public goto() {
    return this.page.goto('/high-scores');
  }

  public getEntry(index: number) {
    return this.page.getByRole('row').nth(index);
  }
}
