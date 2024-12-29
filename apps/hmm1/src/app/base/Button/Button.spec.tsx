import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils';

import disabledImage from './assets/disabled.jpg';
import enabledImage from './assets/enabled.jpg';
import { Button, type ButtonAssets } from './Button';

describe(Button, () => {
  const assets: ButtonAssets = {
    disabled: disabledImage,
    enabled: enabledImage,
  };

  it('renders', async () => {
    renderWithProviders(<Button assets={assets} label="Label" />);

    expect(screen.getByRole('button', { name: /label/i }));
  });

  it('renders enabled image', async () => {
    renderWithProviders(<Button assets={assets} label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', enabledImage);
  });

  it('renders disabled image when mouse pressed', async () => {
    const { user } = renderWithProviders(<Button assets={assets} label="Label" />);

    await user.pointer({
      keys: '[MouseLeft>]',
      target: screen.getByRole('button', { name: /label/i }),
    });

    expect(screen.getByRole('img')).toHaveAttribute('src', disabledImage);
  });

  it('renders enabled image when mouse released', async () => {
    const { user } = renderWithProviders(<Button assets={assets} label="Label" />);

    await user.pointer({
      keys: '[MouseLeft>][/MouseLeft]',
      target: screen.getByRole('button', { name: /label/i }),
    });

    expect(screen.getByRole('img')).toHaveAttribute('src', enabledImage);
  });

  it('calls handler when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Button assets={assets} label="Label" onClick={handler} />);

    await user.click(screen.getByRole('button', { name: /label/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('renders enabled image when mouse pressed and out', async () => {
    const { container, user } = renderWithProviders(<Button assets={assets} label="Label" />);

    await user.pointer([
      {
        keys: '[MouseLeft>]',
        target: screen.getByRole('button', { name: /label/i }),
      },
      {
        target: container,
      },
    ]);

    expect(screen.getByRole('img')).toHaveAttribute('src', enabledImage);
  });

  it('renders disabled image when mouse pressed and over againt', async () => {
    const { container, user } = renderWithProviders(<Button assets={assets} label="Label" />);

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

    expect(screen.getByRole('img')).toHaveAttribute('src', disabledImage);
  });

  it('disables', async () => {
    renderWithProviders(<Button assets={assets} disabled label="Label" />);

    expect(screen.getByRole('button', { name: /label/i })).toBeDisabled();
  });

  it('renders disabled image when disabled', async () => {
    renderWithProviders(<Button assets={assets} disabled label="Label" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', disabledImage);
  });
});
