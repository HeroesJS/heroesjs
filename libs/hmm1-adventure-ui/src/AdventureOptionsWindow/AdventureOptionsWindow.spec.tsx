import {screen} from '@testing-library/react';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {AdventureOptionsWindow} from './AdventureOptionsWindow';

describe(AdventureOptionsWindow, () => {
  it('renders window', () => {
    renderWithProviders(<AdventureOptionsWindow />);

    expect(screen.getByRole('dialog', {name: /adventure options window/i})).toBeInTheDocument();
  });

  describe('view world button', () => {
    it('renders button', () => {
      renderWithProviders(<AdventureOptionsWindow />);

      expect(screen.getByRole('button', {name: /view world/i})).toBeInTheDocument();
    });

    it('class handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureOptionsWindow onViewWorldClick={handler} />);

      await user.click(screen.getByRole('button', {name: /view world/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<AdventureOptionsWindow />);

      await user.rightDown(screen.getByRole('button', {name: /view world/i}));

      expect(screen.getByText(/view the entire world\./i)).toBeInTheDocument();
    });
  });

  describe('view puzzle button', () => {
    it('renders button', () => {
      renderWithProviders(<AdventureOptionsWindow />);

      expect(screen.getByRole('button', {name: /view puzzle/i})).toBeInTheDocument();
    });

    it('class handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureOptionsWindow onViewPuzzleClick={handler} />);

      await user.click(screen.getByRole('button', {name: /view puzzle/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<AdventureOptionsWindow />);

      await user.rightDown(screen.getByRole('button', {name: /view puzzle/i}));

      expect(screen.getByText(/view the obelisk puzzle\./i)).toBeInTheDocument();
    });
  });

  describe('cast spell button', () => {
    it('renders button', () => {
      renderWithProviders(<AdventureOptionsWindow />);

      expect(screen.getByRole('button', {name: /cast spell/i})).toBeInTheDocument();
    });

    it('class handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureOptionsWindow onCastSpellClick={handler} />);

      await user.click(screen.getByRole('button', {name: /cast spell/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<AdventureOptionsWindow />);

      await user.rightDown(screen.getByRole('button', {name: /cast spell/i}));

      expect(screen.getByText(/cast an adventure spell\./i)).toBeInTheDocument();
    });
  });

  describe('dig button', () => {
    it('renders button', () => {
      renderWithProviders(<AdventureOptionsWindow />);

      expect(screen.getByRole('button', {name: /dig/i})).toBeInTheDocument();
    });

    it('class handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureOptionsWindow onDigClick={handler} />);

      await user.click(screen.getByRole('button', {name: /dig/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<AdventureOptionsWindow />);

      await user.rightDown(screen.getByRole('button', {name: /dig/i}));

      expect(screen.getByText(/dig for the ultimate artifact\./i)).toBeInTheDocument();
    });
  });

  describe('okay button', () => {
    it('renders button', () => {
      renderWithProviders(<AdventureOptionsWindow />);

      expect(screen.getByRole('button', {name: /okay/i})).toBeInTheDocument();
    });

    it('class handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<AdventureOptionsWindow onConfirmClick={handler} />);

      await user.click(screen.getByRole('button', {name: /okay/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<AdventureOptionsWindow />);

      await user.rightDown(screen.getByRole('button', {name: /okay/i}));

      expect(screen.getByText(/dig for the ultimate artifact\./i)).toBeInTheDocument();
    });
  });
});
