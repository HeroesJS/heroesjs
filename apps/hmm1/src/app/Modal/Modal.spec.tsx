import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { Modal } from './Modal';

describe(Modal, () => {
  it('should render', () => {
    renderWithProviders(<Modal open>CONTENT</Modal>);

    expect(screen.getByRole('dialog', { name: /content/i })).toBeInTheDocument();
  });

  it('should not render when not open', () => {
    renderWithProviders(<Modal open={false}>CONTENT</Modal>);

    expect(screen.queryByRole('dialog', { name: /content/i })).toBeNull();
  });

  describe('okay type', () => {
    it('should render okay button', () => {
      renderWithProviders(<Modal open type="okay" />);

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should call confirm handler when okay button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<Modal onConfirmClick={handler} open type="okay" />);

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel type', () => {
    it('should render cancel button', () => {
      renderWithProviders(<Modal open type="cancel" />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call cancel handler when cancel button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<Modal onCancelClick={handler} open type="cancel" />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('yes/no type', () => {
    it('should render yes button', () => {
      renderWithProviders(<Modal open type="yesNo" />);

      expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
    });

    it('should call confirm handler when yes button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<Modal onConfirmClick={handler} open type="yesNo" />);

      await user.click(screen.getByRole('button', { name: /yes/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render no button', () => {
      renderWithProviders(<Modal open type="yesNo" />);

      expect(screen.getByRole('button', { name: /no/i })).toBeInTheDocument();
    });

    it('should call cancel handler when no button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<Modal onCancelClick={handler} open type="yesNo" />);

      await user.click(screen.getByRole('button', { name: /no/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('okay/cancel type', () => {
    it('should render okay button', () => {
      renderWithProviders(<Modal open type="okayCancel" />);

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('should call confirm handler when okay button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<Modal onConfirmClick={handler} open type="okayCancel" />);

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('should render cancel button', () => {
      renderWithProviders(<Modal open type="okayCancel" />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call cancel handler when cancel button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<Modal onCancelClick={handler} open type="okayCancel" />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
