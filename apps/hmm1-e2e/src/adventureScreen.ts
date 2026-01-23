import type { Locator, Page } from '@playwright/test';

export class AdventureScreen {
  public readonly locator: Locator;

  public readonly nextHeroButton: Locator;
  public readonly moveButton: Locator;
  public readonly kingdomOverviewButton: Locator;
  public readonly endTurnButton: Locator;
  public readonly adventureOptionsButton: Locator;
  public readonly gameOptionsButton: Locator;

  public constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /^adventure screen$/i });

    this.nextHeroButton = page.getByRole('button', { name: /^next hero$/i });
    this.moveButton = page.getByRole('button', { name: /^move$/i });
    this.kingdomOverviewButton = page.getByRole('button', { name: /^kingdom overview$/i });
    this.endTurnButton = page.getByRole('button', { name: /^end turn$/i });
    this.adventureOptionsButton = page.getByRole('button', { name: /^adventure options$/i });
    this.gameOptionsButton = page.getByRole('button', { name: /game options/i });
  }

  public async goto() {
    return this.page.goto('/adventure');
  }
}
