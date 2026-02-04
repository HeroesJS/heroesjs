import type { Page } from '@playwright/test';

import { ElementBase } from './elementBase';
import { expect } from './utils';

export class LabelledText extends ElementBase {
  public constructor(page: Page, label: RegExp, info: RegExp) {
    super(page, page.getByLabel(label), info);
  }

  public async verifyContent(content: RegExp) {
    await expect(this.locator).toHaveText(content);
  }
}
