import type { Page } from '@playwright/test';

import { Button } from './button';
import { Modal } from './modal';
import { Screen } from './screen';

export class JoinModemGameScreen extends Screen {
  public readonly waitingForRing: Modal;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^join modem game screen$/i);

    this.waitingForRing = new Modal(page, /^waiting for ring\.\.\.$/i);

    this.cancel = new Button(page, /^cancel$/i);
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem/join');
  }
}
