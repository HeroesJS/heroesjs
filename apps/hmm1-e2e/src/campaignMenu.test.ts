import test, {expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/game/new/campaign');
});

test('renders menu', async ({page}) => {
  await expect(page.locator('#app')).toHaveScreenshot('menu.png');
});

test('renders play lord ironfist info', async ({page}) => {
  const button = await page.getByRole('button', {name: /play lord ironfist/i}).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({button: 'right'});

  await expect(page.locator('#app')).toHaveScreenshot('play-lord-ironfist-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders play lord slayer info', async ({page}) => {
  const button = await page.getByRole('button', {name: /play lord slayer/i}).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({button: 'right'});

  await expect(page.locator('#app')).toHaveScreenshot('play-lord-slayer-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders play queen lamanda info', async ({page}) => {
  const button = await page.getByRole('button', {name: /play queen lamanda/i}).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({button: 'right'});

  await expect(page.locator('#app')).toHaveScreenshot('play-queen-lamanda-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders play lord alamar info', async ({page}) => {
  const button = await page.getByRole('button', {name: /play lord alamar/i}).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({button: 'right'});

  await expect(page.locator('#app')).toHaveScreenshot('play-lord-alamar-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});

test('renders cancel info', async ({page}) => {
  const button = await page.getByRole('button', {name: /cancel/i}).boundingBox();

  await page.mouse.move(button!.x, button!.y);
  await page.mouse.down({button: 'right'});

  await expect(page.locator('#app')).toHaveScreenshot('cancel-info.png', {
    maxDiffPixelRatio: 0.01,
  });
});
