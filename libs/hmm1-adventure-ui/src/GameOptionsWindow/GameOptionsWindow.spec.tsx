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
  });

  describe('load game button', () => {
    it('should render', () => {
      renderWithProviders(<GameOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^load game$/i })).toBeInTheDocument();
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
