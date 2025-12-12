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
  });
});
