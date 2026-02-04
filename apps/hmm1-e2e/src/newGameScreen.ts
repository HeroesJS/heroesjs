import type { Page } from '@playwright/test';

import { Button } from './button';
import { NewHotSeatGameScreen } from './newHotSeatGameScreen';
import { NewMultiPlayerGameScreen } from './newMultiPlayerGameScreen';
import { Screen } from './screen';

export class NewGameScreen extends Screen {
  public readonly standardGame: Button;
  public readonly campaignGame: Button;
  public readonly multiPlayerGame: Button;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^new game screen$/i);

    this.standardGame = new Button(page, /^standard game$/i, /^a single player game playing out a single map\.$/i);
    this.campaignGame = new Button(
      page,
      /^campaign game$/i,
      /^a single player game playing through a series of maps\.$/i
    );
    this.multiPlayerGame = new Button(
      page,
      /^multi-player game$/i,
      /^a multi-player game, with several human players competing against each other on a single map\.$/i
    );

    this.cancel = new Button(page, /^cancel$/i, /^cancel back to the main menu\.$/i);
  }

  public goto() {
    return this.page.goto('/new-game');
  }

  public async startNewHotSeatGame(playerCount: number) {
    await this.multiPlayerGame.select();

    await new NewMultiPlayerGameScreen(this.page).hotSeat.select();

    await new NewHotSeatGameScreen(this.page).forPlayers(playerCount).select();
  }
}
