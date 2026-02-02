import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class NewCampaignGameScreen extends Screen {
  private readonly playLordIronfistButton: Locator;
  private readonly playLordIronfistInfoModal: Locator;

  private readonly playLordSlayerButton: Locator;
  private readonly playLordSlayerInfoModal: Locator;

  private readonly playQueenLamandaButton: Locator;
  private readonly playQueenLamandaInfoModal: Locator;

  private readonly playLordAlamarButton: Locator;
  private readonly playLordAlamarInfoModal: Locator;

  private readonly cancelButton: Locator;
  private readonly cancelInfoModal: Locator;

  constructor(page: Page) {
    super(page, /^new campaign game screen$/i);

    this.playLordIronfistButton = page.getByRole('button', { name: /^play lord ironfist$/i });
    this.playLordIronfistInfoModal = page.getByRole('dialog', { name: /^play the role of lord ironfist\.$/i });

    this.playLordSlayerButton = page.getByRole('button', { name: /^play lord slayer$/i });
    this.playLordSlayerInfoModal = page.getByRole('dialog', { name: /^play the role of lord slayer\.$/i });

    this.playQueenLamandaButton = page.getByRole('button', { name: /^play queen lamanda$/i });
    this.playQueenLamandaInfoModal = page.getByRole('dialog', { name: /^play the role of queen lamanda\.$/i });

    this.playLordAlamarButton = page.getByRole('button', { name: /^play lord alamar$/i });
    this.playLordAlamarInfoModal = page.getByRole('dialog', { name: /^play the role of lord alamar\.$/i });

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /^cancel back to the main menu\.$/i });
  }

  public goto() {
    return this.page.goto('/new-game/campaign');
  }

  public async showPlayLordIronfistInfo() {
    await this.mouseRightDown(this.playLordIronfistButton);
  }

  public async verifyPlayLordIronfistInfoShown() {
    await expect(this.playLordIronfistInfoModal).toBeVisible();
  }

  public async showPlayLordSlayerInfo() {
    await this.mouseRightDown(this.playLordSlayerButton);
  }

  public async verifyPlayLordSlayerInfoShown() {
    await expect(this.playLordSlayerInfoModal).toBeVisible();
  }

  public async showPlayQueenLamandaInfo() {
    await this.mouseRightDown(this.playQueenLamandaButton);
  }

  public async verifyPlayQueenLamandaInfoShown() {
    await expect(this.playQueenLamandaInfoModal).toBeVisible();
  }

  public async showPlayLordAlamarInfo() {
    await this.mouseRightDown(this.playLordAlamarButton);
  }

  public async verifyPlayLordAlamarInfoShown() {
    await expect(this.playLordAlamarInfoModal).toBeVisible();
  }

  public async showCancelInfo() {
    await this.mouseRightDown(this.cancelButton);
  }

  public async verifyCancelInfoShown() {
    await expect(this.cancelInfoModal).toBeVisible();
  }

  public async selectCancel() {
    await this.cancelButton.click();
  }
}
