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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /hot seat/i }));

      expect(
        screen.getByRole('dialog', {
          name: /play a hot seat game, where 2 to 4 players play around the same computer, switching into the 'hot seat' when it is their turn\./i,
        })
      ).toBeInTheDocument();
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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /network/i }));

      expect(
        screen.getByRole('dialog', {
          name: /play a network game, where 2 players use their own computers connected through a lan \(local area network\)\./i,
        })
      ).toBeInTheDocument();
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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /modem/i }));

      expect(
        screen.getByRole('dialog', {
          name: /play a modem game, where 2 players use ther own computers connected over the phone lines using modems\./i,
        })
      ).toBeInTheDocument();
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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /direct connect/i }));

      expect(
        screen.getByRole('dialog', {
          name: /play a direct connect game, where 2 players use ther own computers directly connected through their serial port by a null modem\./i,
        })
      ).toBeInTheDocument();
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

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<MultiPlayerGameTypeMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /cancel/i }));

      expect(screen.getByRole('dialog', { name: /cancel back to the main menu\./i })).toBeInTheDocument();
    });
  });
});
