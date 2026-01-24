import type { Locator, Page } from '@playwright/test';

export class AdventureScreen {
  public readonly locator: Locator;

  public readonly nextHeroButton: Locator;
  public readonly nextHeroInfoModal: Locator;

  public readonly moveButton: Locator;
  public readonly moveInfoModal: Locator;

  public readonly kingdomOverviewButton: Locator;
  public readonly kingdomOverviewInfoModal: Locator;

  public readonly endTurnButton: Locator;
  public readonly endTurnInfoModal: Locator;

  public readonly adventureOptionsButton: Locator;
  public readonly adventureOptionsInfoModal: Locator;

  public readonly gameOptionsButton: Locator;
  public readonly gameOptionsInfoModal: Locator;

  public readonly gameOptionsWindow: GameOptionsWindow;

  public constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /^adventure screen$/i });

    this.nextHeroButton = page.getByRole('button', { name: /^next hero$/i });
    this.nextHeroInfoModal = page.getByRole('dialog', { name: /^next hero select the next hero\.$/i });

    this.moveButton = page.getByRole('button', { name: /^move$/i });
    this.moveInfoModal = page.getByRole('dialog', {
      name: /^continue movement continue the hero's movement along his current path\.$/i,
    });

    this.kingdomOverviewButton = page.getByRole('button', { name: /^kingdom overview$/i });
    this.kingdomOverviewInfoModal = page.getByRole('dialog', {
      name: /^kingdom summary view a summary of your kingdom\.$/i,
    });

    this.endTurnButton = page.getByRole('button', { name: /^end turn$/i });
    this.endTurnInfoModal = page.getByRole('dialog', {
      name: /^end turn end your turn and let the computer take its turn\.$/i,
    });

    this.adventureOptionsButton = page.getByRole('button', { name: /^adventure options$/i });
    this.adventureOptionsInfoModal = page.getByRole('dialog', {
      name: /^adventure options bring up the adventure options menu\.$/i,
    });

    this.gameOptionsButton = page.getByRole('button', { name: /game options/i });
    this.gameOptionsInfoModal = page.getByRole('dialog', {
      name: /^game options bring up the game options menu\.$/i,
    });

    this.gameOptionsWindow = new GameOptionsWindow(page);
  }

  public async goto() {
    return this.page.goto('/adventure');
  }
}

class GameOptionsWindow {
  public readonly locator: Locator;

  public readonly newGameButton: Locator;
  public readonly loadGameButton: Locator;
  public readonly saveGameButton: Locator;
  public readonly quitButton: Locator;

  public readonly okayButton: Locator;
  public readonly infoButton: Locator;

  constructor(page: Page) {
    this.locator = page.getByRole('region', { name: /^game options window$/i });

    this.newGameButton = page.getByRole('button', { name: /^new game$/i });
    this.loadGameButton = page.getByRole('button', { name: /^load game$/i });
    this.saveGameButton = page.getByRole('button', { name: /^save game$/i });
    this.quitButton = page.getByRole('button', { name: /^quit$/i });

    this.okayButton = page.getByRole('button', { name: /^okay$/i });
    this.infoButton = page.getByRole('button', { name: /^info$/i });
  }
}
