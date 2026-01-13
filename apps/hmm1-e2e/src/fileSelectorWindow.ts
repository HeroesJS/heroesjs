import type { Locator, Page } from '@playwright/test';

export class FileSelectorWindow {
  readonly locator: Locator;

  readonly itemList: Locator;

  readonly okayButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.locator = page.getByRole('dialog', { name: /file selector window/i });

    this.itemList = page.getByRole('listbox', { name: /items/i });

    this.okayButton = page.getByRole('button', { name: /okay/i });
    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public getItem(name: RegExp) {
    return this.itemList.getByRole('option', { name });
  }
}
