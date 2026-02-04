import type { Page } from '@playwright/test';

import { Button } from './button';
import { Modal } from './modal';
import { Screen } from './screen';

export class JoinDirectConnectGameScreen extends Screen {
  public readonly waitingForConnection: Modal;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^join direct connect game screen$/i);

    this.waitingForConnection = new Modal(
      page,
      /^waiting for other computer to log in to direct connection\. Press 'cancel' to abort\.$/i
    );

    this.cancel = new Button(page, /^cancel$/i);
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/direct-connect/join');
  }
}
