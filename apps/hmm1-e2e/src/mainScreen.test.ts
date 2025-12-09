import { expect, test } from '@playwright/test';

test('displays main screen', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('main', { name: /main screen/i })).toBeVisible();
});

test.describe('main menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays main menu', async ({ page }) => {
    await expect(page.getByRole('menu', { name: /main menu/i })).toBeVisible();

    await expect(page.getByRole('button', { name: /new game/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /load game/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /view high scores/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /view credits/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /quit/i })).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays new game info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /new game/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /start a single or multi-player game\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-new-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays load game info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /load game/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /load a previously saved game\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-load-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view high scores info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /view high scores/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /view the high score screen\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-high-scores-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays view credits info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /view credits/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /view the credits screen\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-view-credits-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays quit info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /quit/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(
      page.getByRole('dialog', { name: /quit heroes of might and magic and return to the dos prompt\./i })
    ).toBeVisible();

    await expect(page).toHaveScreenshot('main-menu-quit-info.png', { maxDiffPixelRatio: 0.05 });
  });
});

test.describe('new game menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: /new game/i }).click();

    await page.getByRole('menu', { name: /new game menu/i }).waitFor();
  });

  test('displays new game menu', async ({ page }) => {
    await expect(page.getByRole('menu', { name: /new game menu/i })).toBeVisible();

    await expect(page.getByRole('button', { name: /standard game/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /campaign game/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /multi-player game/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /cancel/i })).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays standard game info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /standard game/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /a single player game playing out a single map\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-standard-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays campaign game info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /campaign game/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(
      page.getByRole('dialog', { name: /a single player game playing through a series of maps\./i })
    ).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-campaign-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays multi-player game info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /multi-player game/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(
      page.getByRole('dialog', {
        name: /a multi-player game, with several human players competing against each other on a single map\./i,
      })
    ).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-multi-player-game-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /cancel/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /cancel back to the main menu\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('new-game-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ page }) => {
    await page.getByRole('button', { name: /cancel/i }).click();

    await expect(page.getByRole('menu', { name: /main menu/i })).toBeVisible();
  });
});

test.describe('campaign menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: /new game/i }).click();

    await page.getByRole('button', { name: /campaign game/i }).click();

    await page.getByRole('menu', { name: /campaign menu/i }).waitFor();
  });

  test('displays campaign menu', async ({ page }) => {
    await expect(page.getByRole('menu', { name: /campaign menu/i })).toBeVisible();

    await expect(page.getByRole('button', { name: /play lord ironfist/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /play lord slayer/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /play queen lamanda/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /play lord alamar/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /cancel/i })).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord ironfist info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /play lord ironfist/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /play the role of lord ironfist\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-ironfist-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord slayer info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /play lord slayer/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /play the role of lord slayer\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-slayer-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play queen lamanda info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /play queen lamanda/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /play the role of queen lamanda\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-queen-lamanda-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays play lord alamar info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /play lord alamar/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /play the role of lord alamar\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-play-lord-alamar-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('displays cancel info', async ({ page }) => {
    const button = (await page.getByRole('button', { name: /cancel/i }).boundingBox())!;

    await page.mouse.move(button.x, button.y);
    await page.mouse.down({ button: 'right' });

    await expect(page.getByRole('dialog', { name: /cancel back to the main menu\./i })).toBeVisible();

    await expect(page).toHaveScreenshot('campaign-menu-cancel-info.png', { maxDiffPixelRatio: 0.05 });
  });

  test('returns to main menu when cancel is clicked', async ({ page }) => {
    await page.getByRole('button', { name: /cancel/i }).click();

    await expect(page.getByRole('menu', { name: /main menu/i })).toBeVisible();
  });
});
