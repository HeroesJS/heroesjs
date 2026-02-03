import type { Page } from '@playwright/test';

import { Button } from './button';
import { Screen } from './screen';

export class NewModemGameScreen extends Screen {
  public readonly host: Button;
  public readonly guest: Button;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^new modem game screen$/i);

    this.host = new Button(
      page,
      /^host \(dials\)$/i,
      /^the host sets up the game options, chooses the number to dial, and places the call\.$/i
    );
    this.guest = new Button(
      page,
      /^guest \(answers\)$/i,
      /^the guest waits for the host to call and set up the game\.$/i
    );

    this.cancel = new Button(page, /^cancel$/i, /^cancel back to the main menu\.$/i);
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem');
  }
}
