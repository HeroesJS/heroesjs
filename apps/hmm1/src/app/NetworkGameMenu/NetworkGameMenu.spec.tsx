import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { NetworkGameMenu } from './NetworkGameMenu';

describe(NetworkGameMenu, () => {
  it('should render', () => {
    renderWithProviders(<NetworkGameMenu />);

    expect(screen.getByRole('menu', { name: /network game menu/i }));
  });

  describe('host button', () => {
    it('should render', () => {
      renderWithProviders(<NetworkGameMenu />);

      expect(screen.getByRole('button', { name: /host/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<NetworkGameMenu onHostClick={handler} />);

      await user.click(screen.getByRole('button', { name: /host/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('guest button', () => {
    it('should render', () => {
      renderWithProviders(<NetworkGameMenu />);

      expect(screen.getByRole('button', { name: /guest/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<NetworkGameMenu onGuestClick={handler} />);

      await user.click(screen.getByRole('button', { name: /guest/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<NetworkGameMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<NetworkGameMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
