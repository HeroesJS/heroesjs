import { screen } from '@testing-library/react';

import { PlayerColor } from '@heroesjs/hmm1-core';
import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { PlayerColorJewel } from './PlayerColorJewel';

describe(PlayerColorJewel, () => {
  it('renders colors', () => {
    renderWithProviders(<PlayerColorJewel value={PlayerColor.Blue} />);

    expect(screen.getByRole('radiogroup', { name: /banner color/i })).toBeInTheDocument();

    expect(screen.getByRole('radio', { name: /blue/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /green/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /red/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /yellow/i })).toBeInTheDocument();
  });

  it('renders color as selected', () => {
    renderWithProviders(<PlayerColorJewel value={PlayerColor.Red} />);

    expect(screen.getByRole('radio', { name: /red/i })).toHaveAttribute('aria-checked', 'true');
  });

  it('renders change button', () => {
    renderWithProviders(<PlayerColorJewel value={PlayerColor.Green} />);

    expect(screen.getByRole('button', { name: /change banner color/i })).toBeInTheDocument();
  });

  it('calls handler when change button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<PlayerColorJewel onClick={handler} value={PlayerColor.Yellow} />);

    await user.click(screen.getByRole('button', { name: /change banner color/i }));

    expect(handler).toHaveBeenCalled();
  });
});
