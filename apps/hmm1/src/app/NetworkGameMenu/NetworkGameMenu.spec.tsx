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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<NetworkGameMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /host/i }));

      expect(
        screen.getByRole('dialog', {
          name: /the host sets up the game options\. there can only be one host per network game\./i,
        })
      ).toBeInTheDocument();
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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<NetworkGameMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /guest/i }));

      expect(
        screen.getByRole('dialog', {
          name: /the guest waits for the host to set up the game, then is automatically added in\. there can only be one guest per network game\./i,
        })
      ).toBeInTheDocument();
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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<NetworkGameMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /cancel/i }));

      expect(screen.getByRole('dialog', { name: /cancel back to the main menu\./i })).toBeInTheDocument();
    });
  });
});
