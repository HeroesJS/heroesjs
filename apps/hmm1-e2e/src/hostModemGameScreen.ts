import type { Page } from '@playwright/test';

import { Button } from './button';
import { Modal } from './modal';
import { Screen } from './screen';

export class HostModemGameScreen extends Screen {
  public readonly enterTelephoneNumberPrompt: Modal;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^host modem game screen$/i);

    this.enterTelephoneNumberPrompt = new Modal(page, /^please enter the telephone number\.$/i, /^telephone number$/i);

    this.cancel = new Button(page, /^cancel$/i);
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem/host');
  }

  public async verifyDialing(telephoneNumber: string) {
    await new Modal(this.page, new RegExp(`dialing... ${telephoneNumber}`.trimEnd(), 'i')).verifyShown();
  }
}
