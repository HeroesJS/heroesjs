import type { Locator, Page } from '@playwright/test';

import { Window } from './window';
import { Button } from './button';

export class FileSelectorWindow extends Window {
  readonly itemList: Locator;

  readonly okay: Button;
  readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^file selector window$/i);

    this.itemList = page.getByRole('listbox', { name: /^items$/i });

    this.okay = new Button(page, /^okay$/i);
    this.cancel = new Button(page, /^cancel$/i);
  }

  public getItem(name: RegExp) {
    return this.itemList.getByRole('option', { name });
  }
}
