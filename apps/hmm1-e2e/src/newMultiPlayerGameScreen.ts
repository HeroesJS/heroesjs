import type { Locator, Page } from '@playwright/test';

export class NewMultiPlayerGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly hotSeatButton: Locator;
  public readonly networkButton: Locator;
  public readonly modemButton: Locator;
  public readonly directConnectButton: Locator;
  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new multi-player game screen/i });

    this.menu = page.getByRole('menu', { name: /multi-player game type menu/i });

    this.hotSeatButton = page.getByRole('button', { name: /hot seat/i });
    this.networkButton = page.getByRole('button', { name: /network/i });
    this.modemButton = page.getByRole('button', { name: /modem/i });
    this.directConnectButton = page.getByRole('button', { name: /direct connect/i });
    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player');
  }
}
