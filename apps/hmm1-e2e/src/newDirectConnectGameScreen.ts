import type { Locator, Page } from '@playwright/test';

export class NewDirectConnectGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly hostButton: Locator;
  public readonly hostInfoModal: Locator;

  public readonly guestButton: Locator;
  public readonly guestInfoModal: Locator;

  public readonly cancelButton: Locator;
  public readonly cancelInfoModal: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new direct connect game screen/i });

    this.menu = page.getByRole('menu', { name: /modem game menu/i });

    this.hostButton = page.getByRole('button', { name: /host \(dials\)/i });
    this.hostInfoModal = page.getByRole('dialog', {
      name: /the host sets up the game options, chooses the number to dial, and places the call\./i,
    });

    this.guestButton = page.getByRole('button', { name: /guest \(answers\)/i });
    this.guestInfoModal = page.getByRole('dialog', {
      name: /the guest waits for the host to call and set up the game\./i,
    });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/direct-connect');
  }
}
