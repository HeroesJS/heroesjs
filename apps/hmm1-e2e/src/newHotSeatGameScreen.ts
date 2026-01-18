import type { Locator, Page } from '@playwright/test';

export class NewHotSeatGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly twoPlayersButton: Locator;
  public readonly twoPlayersInfoModal: Locator;

  public readonly threePlayersButton: Locator;
  public readonly threePlayersInfoModal: Locator;

  public readonly fourPlayersButton: Locator;
  public readonly fourPlayersInfoModal: Locator;

  public readonly cancelButton: Locator;
  public readonly cancelInfoModal: Locator;

  public readonly playerCountButtons: Readonly<Record<number, Locator>>;
  public readonly playerCountInfoModals: Readonly<Record<number, Locator>>;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new hot seat game screen/i });

    this.menu = page.getByRole('menu', { name: /player count menu/i });

    this.twoPlayersButton = page.getByRole('button', { name: /2 players/i });
    this.twoPlayersInfoModal = page.getByRole('dialog', {
      name: /play with 2 human players, and optionally, up to 2 additional computer players\./i,
    });

    this.threePlayersButton = page.getByRole('button', { name: /3 players/i });
    this.threePlayersInfoModal = page.getByRole('dialog', {
      name: /play with 3 human players, and optionally 1 computer player\./i,
    });

    this.fourPlayersButton = page.getByRole('button', { name: /4 players/i });
    this.fourPlayersInfoModal = page.getByRole('dialog', { name: /play with 4 human players\./i });

    this.playerCountButtons = {
      2: this.twoPlayersButton,
      3: this.threePlayersButton,
      4: this.fourPlayersButton,
    };

    this.playerCountInfoModals = {
      2: this.twoPlayersInfoModal,
      3: this.threePlayersInfoModal,
      4: this.fourPlayersInfoModal,
    };

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/hot-seat');
  }
}
