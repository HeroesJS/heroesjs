import type { Page } from '@playwright/test';

import { Button } from './button';
import { Window } from './window';

export class AdventureOptionsWindow extends Window {
  public readonly viewWorld: Button;
  public readonly viewPuzzle: Button;
  public readonly castSpell: Button;
  public readonly dig: Button;

  public readonly okay: Button;

  public constructor(page: Page) {
    super(page, /^adventure options window$/i);

    this.viewWorld = new Button(page, /^view world$/i, /^view the entire world\.$/i);
    this.viewPuzzle = new Button(page, /^view puzzle$/i, /^view the obelisk puzzle\.$/i);
    this.castSpell = new Button(page, /^cast spell$/i, /^cast an adventure spell\.$/i);
    this.dig = new Button(page, /^dig$/i, /^dig for the ultimate artifact\.$/i);

    this.okay = new Button(page, /^okay$/i, /^dig for the ultimate artifact\.$/i);
  }
}
