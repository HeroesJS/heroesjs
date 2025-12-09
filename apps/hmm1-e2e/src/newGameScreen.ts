import type { Locator, Page } from '@playwright/test';

export class NewGameScreen {
  public readonly menu: Locator;

  public readonly standardGameButton: Locator;
  public readonly standardGameInfoModal: Locator;

  public readonly campaignGameButton: Locator;
  public readonly campaignGameInfoModal: Locator;

  public readonly multiPlayerGameButton: Locator;
  public readonly multiPlayerGameInfoModal: Locator;

  public readonly cancelButton: Locator;
  public readonly cancelInfoModal: Locator;

  constructor(private readonly page: Page) {
    this.menu = page.getByRole('menu', { name: /new game menu/i });

    this.standardGameButton = page.getByRole('button', { name: /standard game/i });
    this.standardGameInfoModal = page.getByRole('dialog', { name: /a single player game playing out a single map\./i });

    this.campaignGameButton = page.getByRole('button', { name: /campaign game/i });
    this.campaignGameInfoModal = page.getByRole('dialog', {
      name: /a single player game playing through a series of maps\./i,
    });

    this.multiPlayerGameButton = page.getByRole('button', { name: /multi-player game/i });
    this.multiPlayerGameInfoModal = page.getByRole('dialog', {
      name: /a multi-player game, with several human players competing against each other on a single map\./i,
    });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }

  public goto() {
    return this.page.goto('/new-game');
  }
}
