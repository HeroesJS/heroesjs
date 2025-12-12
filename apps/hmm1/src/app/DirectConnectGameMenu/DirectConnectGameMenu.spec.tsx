import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { DirectConnectGameMenu } from './DirectConnectGameMenu';

describe(DirectConnectGameMenu, () => {
  it('should render', () => {
    renderWithProviders(<DirectConnectGameMenu />);

    expect(screen.getByRole('menu', { name: /direct connect game menu/i }));
  });

  describe('host button', () => {
    it('should render', () => {
      renderWithProviders(<DirectConnectGameMenu />);

      expect(screen.getByRole('button', { name: /host/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<DirectConnectGameMenu onHostClick={handler} />);

      await user.click(screen.getByRole('button', { name: /host/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('guest button', () => {
    it('should render', () => {
      renderWithProviders(<DirectConnectGameMenu />);

      expect(screen.getByRole('button', { name: /guest/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<DirectConnectGameMenu onGuestClick={handler} />);

      await user.click(screen.getByRole('button', { name: /guest/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<DirectConnectGameMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<DirectConnectGameMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
