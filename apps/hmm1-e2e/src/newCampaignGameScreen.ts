import type { Page } from '@playwright/test';

import { Button } from './button';
import { Screen } from './screen';

export class NewCampaignGameScreen extends Screen {
  public readonly playLordIronfist: Button;
  public readonly playLordSlayer: Button;
  public readonly playQueenLamanda: Button;
  public readonly playLordAlamar: Button;

  public readonly cancel: Button;

  constructor(page: Page) {
    super(page, /^new campaign game screen$/i);

    this.playLordIronfist = new Button(page, /^play lord ironfist$/i, /^play the role of lord ironfist\.$/i);
    this.playLordSlayer = new Button(page, /^play lord slayer$/i, /^play the role of lord slayer\.$/i);
    this.playQueenLamanda = new Button(page, /^play queen lamanda$/i, /^play the role of queen lamanda\.$/i);
    this.playLordAlamar = new Button(page, /^play lord alamar$/i, /^play the role of lord alamar\.$/i);

    this.cancel = new Button(page, /^cancel$/i, /^cancel back to the main menu\.$/i);
  }

  public goto() {
    return this.page.goto('/new-game/campaign');
  }
}
