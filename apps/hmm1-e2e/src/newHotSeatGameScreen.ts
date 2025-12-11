import type { Locator, Page } from '@playwright/test';

export class NewHotSeatGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly twoPlayersButton: Locator;
  public readonly threePlayersButton: Locator;
  public readonly fourPlayersButton: Locator;
  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new hot seat game screen/i });

    this.menu = page.getByRole('menu', { name: /player count menu/i });

    this.twoPlayersButton = page.getByRole('button', { name: /2 players/i });
    this.threePlayersButton = page.getByRole('button', { name: /3 players/i });
    this.fourPlayersButton = page.getByRole('button', { name: /4 players/i });
    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/hot-seat');
  }
}
