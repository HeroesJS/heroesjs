import type { Locator, Page } from '@playwright/test';

export class NewMultiPlayerGameScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly hotSeatButton: Locator;
  public readonly hotSeatInfoModal: Locator;

  public readonly networkButton: Locator;
  public readonly networkInfoModal: Locator;

  public readonly modemButton: Locator;
  public readonly modemInfoModal: Locator;

  public readonly directConnectButton: Locator;
  public readonly directConnectInfoModal: Locator;

  public readonly cancelButton: Locator;
  public readonly cancelInfoModal: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new multi-player game screen/i });

    this.menu = page.getByRole('menu', { name: /multi-player game type menu/i });

    this.hotSeatButton = page.getByRole('button', { name: /hot seat/i });
    this.hotSeatInfoModal = page.getByRole('dialog', {
      name: /play a hot seat game, where 2 to 4 players play around the same computer, switching into the 'hot seat' when it is their turn\./i,
    });

    this.networkButton = page.getByRole('button', { name: /network/i });
    this.networkInfoModal = page.getByRole('dialog', {
      name: /play a network game, where 2 players use their own computers connected through a lan \(local area network\)\./i,
    });

    this.modemButton = page.getByRole('button', { name: /modem/i });
    this.modemInfoModal = page.getByRole('dialog', {
      name: /play a modem game, where 2 players use ther own computers connected over the phone lines using modems\./i,
    });

    this.directConnectButton = page.getByRole('button', { name: /direct connect/i });
    this.directConnectInfoModal = page.getByRole('dialog', {
      name: /play a direct connect game, where 2 players use ther own computers directly connected through their serial port by a null modem\./i,
    });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player');
  }
}
