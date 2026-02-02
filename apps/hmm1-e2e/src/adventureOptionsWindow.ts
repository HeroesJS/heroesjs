import type { Locator, Page } from '@playwright/test';

import { Window } from './window';
import { expect } from './utils';

export class AdventureOptionsWindow extends Window {
  private readonly viewWorldButton: Locator;
  private readonly viewWorldInfoModal: Locator;

  private readonly viewPuzzleButton: Locator;
  private readonly viewPuzzleInfoModal: Locator;

  private readonly castSpellButton: Locator;
  private readonly castSpellInfoModal: Locator;

  private readonly digButton: Locator;
  private readonly digInfoModal: Locator;

  private readonly okayButton: Locator;
  private readonly okayInfoModal: Locator;

  public constructor(page: Page) {
    super(page, /^adventure options window$/i);

    this.viewWorldButton = page.getByRole('button', { name: /^view world$/i });
    this.viewWorldInfoModal = page.getByRole('dialog', { name: /^view the entire world\.$/i });

    this.viewPuzzleButton = page.getByRole('button', { name: /^view puzzle$/i });
    this.viewPuzzleInfoModal = page.getByRole('dialog', { name: /^view the obelisk puzzle\.$/i });

    this.castSpellButton = page.getByRole('button', { name: /^cast spell$/i });
    this.castSpellInfoModal = page.getByRole('dialog', { name: /^cast an adventure spell\.$/i });

    this.digButton = page.getByRole('button', { name: /^dig$/i });
    this.digInfoModal = page.getByRole('dialog', { name: /^dig for the ultimate artifact\.$/i });

    this.okayButton = page.getByRole('button', { name: /^okay$/i });
    this.okayInfoModal = page.getByRole('dialog', { name: /^dig for the ultimate artifact\.$/i });
  }

  public async showViewWorldInfo() {
    await this.mouseRightDown(this.viewWorldButton);
  }

  public async verifyViewWorldInfoShown() {
    await expect(this.viewWorldInfoModal).toBeVisible();
  }

  public async selectViewWorld() {
    await this.viewWorldButton.click();
  }

  public async showViewPuzzleInfo() {
    await this.mouseRightDown(this.viewPuzzleButton);
  }

  public async verifyViewPuzzleInfoShown() {
    await expect(this.viewPuzzleInfoModal).toBeVisible();
  }

  public async selectViewPuzzle() {
    await this.viewPuzzleButton.click();
  }

  public async showCastSpellInfo() {
    await this.mouseRightDown(this.castSpellButton);
  }

  public async verifyCastSpellInfoShown() {
    await expect(this.castSpellInfoModal).toBeVisible();
  }

  public async selectCastSpell() {
    await this.castSpellButton.click();
  }

  public async showDigInfo() {
    await this.mouseRightDown(this.digButton);
  }

  public async verifyDigInfoShown() {
    await expect(this.digInfoModal).toBeVisible();
  }

  public async selectDig() {
    await this.digButton.click();
  }

  public async showOkayInfo() {
    await this.mouseRightDown(this.okayButton);
  }

  public async verifyOkayInfoShown() {
    await expect(this.okayInfoModal).toBeVisible();
  }

  public async selectOkay() {
    await this.okayButton.click();
  }
}
