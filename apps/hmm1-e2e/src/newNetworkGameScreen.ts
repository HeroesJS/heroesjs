import type { Locator, Page } from '@playwright/test';

export class NewNetworkGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly hostButton: Locator;
  public readonly hostInfoModal: Locator;

  public readonly guestButton: Locator;
  public readonly guestInfoModal: Locator;

  public readonly cancelButton: Locator;
  public readonly cancelInfoModal: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new network game screen/i });

    this.menu = page.getByRole('menu', { name: /network game menu/i });

    this.hostButton = page.getByRole('button', { name: /host/i });
    this.hostInfoModal = page.getByRole('dialog', {
      name: /the host sets up the game options. There can only be one host per network game\./i,
    });

    this.guestButton = page.getByRole('button', { name: /guest/i });
    this.guestInfoModal = page.getByRole('dialog');

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/network');
  }
}
