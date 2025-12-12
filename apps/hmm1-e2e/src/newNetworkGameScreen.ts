import type { Locator, Page } from '@playwright/test';

export class NewNetworkGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly hostButton: Locator;
  public readonly guestButton: Locator;
  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new network game screen/i });

    this.menu = page.getByRole('menu', { name: /network game menu/i });

    this.hostButton = page.getByRole('button', { name: /host/i });
    this.guestButton = page.getByRole('button', { name: /guest/i });
    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/network');
  }
}
