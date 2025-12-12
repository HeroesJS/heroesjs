import type { Locator, Page } from '@playwright/test';

export class NewDirectConnectGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly hostButton: Locator;
  public readonly guestButton: Locator;
  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new direct connect game screen/i });

    this.menu = page.getByRole('menu', { name: /modem game menu/i });

    this.hostButton = page.getByRole('button', { name: /host \(dials\)/i });
    this.guestButton = page.getByRole('button', { name: /guest \(answers\)/i });
    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/direct-connect');
  }
}
