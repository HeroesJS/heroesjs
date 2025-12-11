import { screen } from '@testing-library/react';
import { range } from 'lodash';

import { renderWithProviders } from '../testUtils';
import { PlayerCountMenu } from './PlayerCountMenu';

describe(PlayerCountMenu, () => {
  it('should render', () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('menu', { name: /player count menu/i })).toBeInTheDocument();
  });

  describe.each(range(2, 5))('$i players button', (count) => {
    it('should render', () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', { name: new RegExp(`${count} players`, 'i') })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<PlayerCountMenu onValueClick={handler} />);

      await user.click(screen.getByRole('button', { name: new RegExp(`${count} players`, 'i') }));

      expect(handler).toHaveBeenCalledWith<[number]>(count);
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<PlayerCountMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
