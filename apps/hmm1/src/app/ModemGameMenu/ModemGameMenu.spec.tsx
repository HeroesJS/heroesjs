import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { ModemGameMenu } from './ModemGameMenu';

describe(ModemGameMenu, () => {
  it('should render', () => {
    renderWithProviders(<ModemGameMenu />);

    expect(screen.getByRole('menu', { name: /modem game menu/i }));
  });

  describe('host button', () => {
    it('should render', () => {
      renderWithProviders(<ModemGameMenu />);

      expect(screen.getByRole('button', { name: /host \(dials\)/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<ModemGameMenu onHostClick={handler} />);

      await user.click(screen.getByRole('button', { name: /host \(dials\)/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<ModemGameMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /host \(dials\)/i }));

      expect(
        screen.getByRole('dialog', {
          name: /the host sets up the game options, chooses the number to dial, and places the call\./i,
        })
      ).toBeInTheDocument();
    });
  });

  describe('guest button', () => {
    it('should render', () => {
      renderWithProviders(<ModemGameMenu />);

      expect(screen.getByRole('button', { name: /guest \(answers\)/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<ModemGameMenu onGuestClick={handler} />);

      await user.click(screen.getByRole('button', { name: /guest \(answers\)/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<ModemGameMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /guest \(answers\)/i }));

      expect(
        screen.getByRole('dialog', {
          name: /the guest waits for the host to call and set up the game\./i,
        })
      ).toBeInTheDocument();
    });
  });

  describe('config button', () => {
    it('should not render by default', () => {
      renderWithProviders(<ModemGameMenu />);

      expect(screen.queryByRole('button', { name: /config modem/i })).toBeNull();
    });

    it('should render when configuration allowed', () => {
      renderWithProviders(<ModemGameMenu allowConfiguration />);

      expect(screen.getByRole('button', { name: /config modem/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<ModemGameMenu allowConfiguration onConfigClick={handler} />);

      await user.click(screen.getByRole('button', { name: /config modem/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<ModemGameMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<ModemGameMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<ModemGameMenu />);

      await user.mouseRightDown(screen.getByRole('button', { name: /cancel/i }));

      expect(screen.getByRole('dialog', { name: /cancel back to the main menu\./i })).toBeInTheDocument();
    });
  });
});
