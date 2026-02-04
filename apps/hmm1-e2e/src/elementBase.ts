import type { Locator, Page } from '@playwright/test';

import { Modal } from './modal';
import { mouseRightDown } from './utils';

export abstract class ElementBase {
  private readonly infoModal?: Modal;

  public constructor(protected readonly page: Page, protected readonly locator: Locator, info?: RegExp) {
    if (info) {
      this.infoModal = new Modal(page, info);
    }
  }

  public async showInfo() {
    await mouseRightDown(this.page, this.locator);
  }

  public async verifyInfoShown() {
    if (!this.infoModal) {
      throw new Error('Info not availabe');
    }

    await this.infoModal.verifyShown();
  }
}
