import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { MultiPlayerGameTypeMenu } from './MultiPlayerGameTypeMenu';

describe(MultiPlayerGameTypeMenu, () => {
  it('should render', () => {
    renderWithProviders(<MultiPlayerGameTypeMenu />);

    expect(screen.getByRole('menu', { name: /multi-player game type menu/i }));
  });

  describe('hot seat button', () => {
    it('should render', () => {
      renderWithProviders(<MultiPlayerGameTypeMenu />);

      expect(screen.getByRole('button', { name: /hot seat/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onHotSeatClick={handler} />);

      await user.click(screen.getByRole('button', { name: /hot seat/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('network button', () => {
    it('should render', () => {
      renderWithProviders(<MultiPlayerGameTypeMenu />);

      expect(screen.getByRole('button', { name: /network/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onNetworkClick={handler} />);

      await user.click(screen.getByRole('button', { name: /network/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('modem button', () => {
    it('should render', () => {
      renderWithProviders(<MultiPlayerGameTypeMenu />);

      expect(screen.getByRole('button', { name: /modem/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onModemClick={handler} />);

      await user.click(screen.getByRole('button', { name: /modem/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('direct connect button', () => {
    it('should render', () => {
      renderWithProviders(<MultiPlayerGameTypeMenu />);

      expect(screen.getByRole('button', { name: /direct connect/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onDirectConnectClick={handler} />);

      await user.click(screen.getByRole('button', { name: /direct connect/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<MultiPlayerGameTypeMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
