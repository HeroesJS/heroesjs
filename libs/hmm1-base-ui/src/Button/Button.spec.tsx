import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import * as assets from './assets';
import { Button } from './Button';

describe(Button, () => {
  it('renders', async () => {
    renderWithProviders(<Button assets={assets.button} label="Label" />);

    expect(screen.getByRole('button', { name: /label/i }));
  });

  it('renders enabled image', async () => {
    renderWithProviders(<Button assets={assets.button} label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', assets.button.enabled);
  });

  it('renders disabled image when mouse pressed', async () => {
    const { user } = renderWithProviders(<Button assets={assets.button} label="Label" />);

    await user.pointer([
      {
        target: screen.getByRole('button', { name: /label/i }),
      },
      {
        keys: '[MouseLeft>]',
      },
    ]);

    expect(screen.getByRole('img')).toHaveAttribute('src', assets.button.disabled);
  });

  it('renders enabled image when mouse released', async () => {
    const { user } = renderWithProviders(<Button assets={assets.button} label="Label" />);

    await user.pointer({
      keys: '[MouseLeft>][/MouseLeft]',
      target: screen.getByRole('button', { name: /label/i }),
    });

    expect(screen.getByRole('img')).toHaveAttribute('src', assets.button.enabled);
  });

  it('calls handler when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Button assets={assets.button} label="Label" onClick={handler} />);

    await user.click(screen.getByRole('button', { name: /label/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders enabled image when mouse pressed and out', async () => {
    const { container, user } = renderWithProviders(<Button assets={assets.button} label="Label" />);

    await user.pointer([
      {
        keys: '[MouseLeft>]',
        target: screen.getByRole('button', { name: /label/i }),
      },
      {
        target: container,
      },
    ]);

    expect(screen.getByRole('img')).toHaveAttribute('src', assets.button.enabled);
  });

  it('renders disabled image when mouse pressed and over againt', async () => {
    const { container, user } = renderWithProviders(<Button assets={assets.button} label="Label" />);

    await user.pointer([
      {
        keys: '[MouseLeft>]',
        target: screen.getByRole('button', { name: /label/i }),
      },
      {
        target: container,
      },
      {
        target: screen.getByRole('button', { name: /label/i }),
      },
    ]);

    expect(screen.getByRole('img')).toHaveAttribute('src', assets.button.disabled);
  });

  it('disables', async () => {
    renderWithProviders(<Button assets={assets.button} disabled label="Label" />);

    expect(screen.getByRole('button', { name: /label/i })).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders disabled image when disabled', async () => {
    renderWithProviders(<Button assets={assets.button} disabled label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', assets.button.disabled);
  });
});
