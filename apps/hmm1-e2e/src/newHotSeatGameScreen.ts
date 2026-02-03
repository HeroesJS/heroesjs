import type { Page } from '@playwright/test';

import { Button } from './button';
import { Screen } from './screen';

export class NewHotSeatGameScreen extends Screen {
  public readonly twoPlayers: Button;
  public readonly threePlayers: Button;
  public readonly fourPlayers: Button;

  public readonly cancel: Button;

  private readonly players: Readonly<Record<number, Button>>;

  constructor(page: Page) {
    super(page, /^new hot seat game screen$/i);

    this.twoPlayers = new Button(
      page,
      /^2 players$/i,
      /^play with 2 human players, and optionally, up to 2 additional computer players\.$/i
    );
    this.threePlayers = new Button(
      page,
      /^3 players$/i,
      /^play with 3 human players, and optionally 1 computer player\.$/i
    );
    this.fourPlayers = new Button(page, /^4 players$/i, /^play with 4 human players\.$/i);

    this.players = {
      2: this.twoPlayers,
      3: this.threePlayers,
      4: this.fourPlayers,
    };

    this.cancel = new Button(page, /^cancel$/i, /^cancel back to the main menu\.$/i);
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/hot-seat');
  }

  public forPlayers(count: number) {
    return this.players[count];
  }
}
