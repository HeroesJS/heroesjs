import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class HostDirectConnectGameScreen extends Screen {
  private readonly waitingForConnectionModal: Locator;

  private readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page, /^host direct connect game screen$/i);

    this.waitingForConnectionModal = page.getByRole('dialog', {
      name: /^waiting for other computer to log in to direct connection\. Press 'cancel' to abort\.$/i,
    });

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/direct-connect/host');
  }

  public async verifyWaitingForConnection() {
    await expect(this.waitingForConnectionModal).toBeVisible();
  }

  public async cancel() {
    await this.cancelButton.click();
  }
}
