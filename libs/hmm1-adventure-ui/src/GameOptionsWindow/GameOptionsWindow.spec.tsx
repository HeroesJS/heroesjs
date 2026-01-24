import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { GameOptionsWindow } from './GameOptionsWindow';

describe(GameOptionsWindow, () => {
  it('should render', () => {
    renderWithProviders(<GameOptionsWindow open />);

    expect(screen.getByRole('region', { name: /^game options window$/i })).toBeInTheDocument();
  });

  describe('new game button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^new game$/i })).toBeInTheDocument();
    });

    it('should render confirmation modal when clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^new game$/i }));

      expect(
        screen.getByRole('dialog', { name: /^are you sure you want to restart\? \(your current game will be lost\)$/i })
      );
    });

    it('should close confirmation modal when no is clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^new game$/i }));

      await user.click(screen.getByRole('button', { name: /^no$/i }));

      expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('should call handler when yes is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onNewGameClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^new game$/i }));

      await user.click(screen.getByRole('button', { name: /^yes$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('load game button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^load game$/i })).toBeInTheDocument();
    });

    it('should render confirmation modal when clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^load game$/i }));

      expect(
        screen.getByRole('dialog', {
          name: /^are you sure you want to load a new game\? \(your current game will be lost\)$/i,
        })
      );
    });

    it('should close confirmation modal when no is clicked', async () => {
      const { user } = renderWithProviders(<GameOptionsWindow open />);

      await user.click(screen.getByRole('button', { name: /^load game$/i }));

      await user.click(screen.getByRole('button', { name: /^no$/i }));

      expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('should call handler when yes is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<GameOptionsWindow onLoadGameClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^load game$/i }));

      await user.click(screen.getByRole('button', { name: /^yes$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('save game button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^save game$/i })).toBeInTheDocument();
    });
  });

  describe('quit button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^quit$/i })).toBeInTheDocument();
    });
  });

  describe('okay button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^okay$/i })).toBeInTheDocument();
    });
  });

  describe('info button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^info$/i })).toBeInTheDocument();
    });
  });
});
