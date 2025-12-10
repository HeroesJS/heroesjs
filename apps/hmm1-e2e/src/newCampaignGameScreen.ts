import type { Locator, Page } from '@playwright/test';

export class NewCampaignGameScreen {
  public readonly menu: Locator;

  public readonly playLordIronfistButton: Locator;
  public readonly playLordIronfistInfoModal: Locator;

  public readonly playLordSlayerButton: Locator;
  public readonly playLordSlayerInfoModal: Locator;

  public readonly playQueenLamandaButton: Locator;
  public readonly playQueenLamandaInfoModal: Locator;

  public readonly playLordAlamarButton: Locator;
  public readonly playLordAlamarInfoModal: Locator;

  public readonly cancelButton: Locator;
  public readonly cancelInfoModal: Locator;

  constructor(private readonly page: Page) {
    this.menu = page.getByRole('menu', { name: /campaign menu/i });

    this.playLordIronfistButton = page.getByRole('button', { name: /play lord ironfist/i });
    this.playLordIronfistInfoModal = page.getByRole('dialog', { name: /play the role of lord ironfist\./i });

    this.playLordSlayerButton = page.getByRole('button', { name: /play lord slayer/i });
    this.playLordSlayerInfoModal = page.getByRole('dialog', { name: /play the role of lord slayer\./i });

    this.playQueenLamandaButton = page.getByRole('button', { name: /play queen lamanda/i });
    this.playQueenLamandaInfoModal = page.getByRole('dialog', { name: /play the role of queen lamanda\./i });

    this.playLordAlamarButton = page.getByRole('button', { name: /play lord alamar/i });
    this.playLordAlamarInfoModal = page.getByRole('dialog', { name: /play the role of lord alamar\./i });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }

  public goto() {
    return this.page.goto('/new-game/campaign');
  }
}
