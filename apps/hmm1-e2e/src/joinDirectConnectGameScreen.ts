import { Locator, Page } from '@playwright/test';

export class JoinDirectConnectGameScreen {
  public readonly locator: Locator;

  public readonly waitingForConnectionModal: Locator;

  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /join direct connect game screen/i });

    this.waitingForConnectionModal = page.getByRole('dialog', {
      name: /waiting for other computer to log in to direct connection\. Press 'cancel' to abort\./i,
    });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/direct-connect/join');
  }
}
