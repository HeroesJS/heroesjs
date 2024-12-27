import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../testUtils';

import { Button, ButtonAssets } from './Button';

describe(Button, () => {
  const assets: ButtonAssets = {
    disabled: '',
    enabled: '',
  };

  it('renders', async () => {
    renderWithProviders(<Button assets={assets} label="Label" />);

    expect(screen.getByRole('button', { name: /label/i }));
  });

  it('calls handler when clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<Button assets={assets} label="Label" onClick={handler} />);

    await user.click(screen.getByRole('button', { name: /label/i }));

    expect(handler).toHaveBeenCalled();
  });

  it('disables', async () => {
    renderWithProviders(<Button assets={assets} disabled label="Label" />);

    expect(screen.getByRole('button', { name: /label/i })).toBeDisabled();
  });
});
