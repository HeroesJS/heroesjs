import {screen} from '@testing-library/react';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {Modal} from './Modal';

describe(Modal, () => {
  describe('yes/no type', () => {
    it('renders yes button', () => {
      renderWithProviders(<Modal open type="yesNo" />);

      expect(screen.getByRole('button', {name: /yes/i})).toBeInTheDocument();
    });

    it('calls confirm handler when yes button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<Modal onConfirmClick={handler} open type="yesNo" />);

      await user.click(screen.getByRole('button', {name: /yes/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders no button', () => {
      renderWithProviders(<Modal open type="yesNo" />);

      expect(screen.getByRole('button', {name: /no/i})).toBeInTheDocument();
    });

    it('calls cancel handler when no button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<Modal onCancelClick={handler} open type="yesNo" />);

      await user.click(screen.getByRole('button', {name: /no/i}));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('okay/cancel type', () => {
    it('renders okay button', () => {
      renderWithProviders(<Modal open type="okayCancel" />);

      expect(screen.getByRole('button', {name: /okay/i})).toBeInTheDocument();
    });

    it('calls confirm handler when okay button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<Modal onConfirmClick={handler} open type="okayCancel" />);

      await user.click(screen.getByRole('button', {name: /okay/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders cancel button', () => {
      renderWithProviders(<Modal open type="okayCancel" />);

      expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    it('calls cancel handler when cancel button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<Modal onCancelClick={handler} open type="okayCancel" />);

      await user.click(screen.getByRole('button', {name: /cancel/i}));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('okay type', () => {
    it('renders okay button', () => {
      renderWithProviders(<Modal open type="okay" />);

      expect(screen.getByRole('button', {name: /okay/i})).toBeInTheDocument();
    });

    it('calls confirm handler when okay button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<Modal onConfirmClick={handler} open type="okay" />);

      await user.click(screen.getByRole('button', {name: /okay/i}));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('cancel type', () => {
    it('renders cancel button', () => {
      renderWithProviders(<Modal open type="cancel" />);

      expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    it('calls cancel handler when cancel button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<Modal onCancelClick={handler} open type="cancel" />);

      await user.click(screen.getByRole('button', {name: /cancel/i}));

      expect(handler).toHaveBeenCalled();
    });
  });
});
