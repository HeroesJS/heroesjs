import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { NewStandardGameWindow } from './NewStandardGameWindow';

describe(NewStandardGameWindow, () => {
  it('should render', () => {
    renderWithProviders(<NewStandardGameWindow />);

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should render labels', () => {
    renderWithProviders(<NewStandardGameWindow />);

    expect(screen.getByText(/choose game difficulty:/i)).toBeInTheDocument();
    expect(screen.getByText(/customize opponents:/i)).toBeInTheDocument();
    expect(screen.getByText(/choose color:/i)).toBeInTheDocument();
    expect(screen.getByText(/king of the hill:/i)).toBeInTheDocument();
    expect(screen.getByText(/choose scenario:/i)).toBeInTheDocument();
    expect(screen.getByText(/claw \( easy \)/i)).toBeInTheDocument();
    expect(screen.getByText(/difficulty rating: 60%/i)).toBeInTheDocument();
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(<NewStandardGameWindow />);

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should call okay handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<NewStandardGameWindow onOkayClick={handler} />);

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<NewStandardGameWindow />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call cancel handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<NewStandardGameWindow onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
