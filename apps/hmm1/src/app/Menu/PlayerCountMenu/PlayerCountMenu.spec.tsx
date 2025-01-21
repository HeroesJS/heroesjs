import { screen } from '@testing-library/react';
import { range } from 'lodash';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { PlayerCountMenu } from './PlayerCountMenu';

describe(PlayerCountMenu, () => {
  it('renders', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('menu', { name: /player count menu/i })).toBeInTheDocument();
  });

  describe.each(range(2, 5))('%i players', (count) => {
    const countName = new RegExp(`${count} players`, 'i');

    it('renders count button', async () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', { name: countName })).toBeInTheDocument();
    });

    it('calls handler when count button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<PlayerCountMenu onCountClick={handler} />);

      await user.click(screen.getByRole('button', { name: countName }));

      expect(handler).toHaveBeenCalledWith(count);
    });
  });

  it('renders cancel button', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('calls handler when cancel button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<PlayerCountMenu onCancelClick={handler} />);

    await user.click(screen.getByRole('button', { name: /cancel/i }));

    expect(handler).toHaveBeenCalled();
  });
});
