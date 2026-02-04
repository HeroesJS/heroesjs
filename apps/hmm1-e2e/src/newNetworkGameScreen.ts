import type { Page } from '@playwright/test';

import { Button } from './button';
import { Screen } from './screen';

export class NewNetworkGameScreen extends Screen {
  public readonly host: Button;
  public readonly guest: Button;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^new network game screen$/i);

    this.host = new Button(
      page,
      /^host$/i,
      /^the host sets up the game options. There can only be one host per network game\.$/i
    );
    this.guest = new Button(
      page,
      /^guest$/i,
      /^the guest waits for the host to set up the game, then is automatically added in\. there can only be one guest per network game\.$/i
    );

    this.cancel = new Button(page, /^cancel$/i, /^cancel back to the main menu\.$/i);
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/network');
  }
}
