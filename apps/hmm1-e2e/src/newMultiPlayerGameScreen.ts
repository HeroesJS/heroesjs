import type { Page } from '@playwright/test';

import { Button } from './button';
import { Screen } from './screen';

export class NewMultiPlayerGameScreen extends Screen {
  public readonly hotSeat: Button;
  public readonly network: Button;
  public readonly modem: Button;
  public readonly directConnect: Button;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^new multi-player game screen$/i);

    this.hotSeat = new Button(
      page,
      /^hot seat$/i,
      /^play a hot seat game, where 2 to 4 players play around the same computer, switching into the 'hot seat' when it is their turn\.$/i
    );
    this.network = new Button(
      page,
      /^network$/i,
      /^play a network game, where 2 players use their own computers connected through a lan \(local area network\)\.$/i
    );
    this.modem = new Button(
      page,
      /^modem$/i,
      /^play a modem game, where 2 players use ther own computers connected over the phone lines using modems\.$/i
    );
    this.directConnect = new Button(
      page,
      /^direct connect$/i,
      /^play a direct connect game, where 2 players use ther own computers directly connected through their serial port by a null modem\.$/i
    );

    this.cancel = new Button(page, /^cancel$/i, /^cancel back to the main menu\.$/i);
  }

  public goto() {
    return this.page.goto('/new-game/multi-player');
  }
}
