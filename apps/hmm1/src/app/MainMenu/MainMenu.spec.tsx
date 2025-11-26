import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { MainMenu } from './MainMenu';

describe(MainMenu, () => {
  it('should render', () => {
    render(<MainMenu />);

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeInTheDocument();
  });

  describe('new game button', () => {
    it('should render', () => {
      render(<MainMenu />);

      expect(screen.getByRole('button', { name: /new game/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', () => {
      const handler = vitest.fn();

      render(<MainMenu onNewGameClick={handler} />);

      fireEvent.click(screen.getByRole('button', { name: /new game/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('load game button', () => {
    it('should render', () => {
      render(<MainMenu />);

      expect(screen.getByRole('button', { name: /load game/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', () => {
      const handler = vitest.fn();

      render(<MainMenu onLoadGameClick={handler} />);

      fireEvent.click(screen.getByRole('button', { name: /load game/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('view high scores button', () => {
    it('should render', () => {
      render(<MainMenu />);

      expect(screen.getByRole('button', { name: /view high scores/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', () => {
      const handler = vitest.fn();

      render(<MainMenu onViewHighScoresClick={handler} />);

      fireEvent.click(screen.getByRole('button', { name: /view high scores/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('view credits button', () => {
    it('should render', () => {
      render(<MainMenu />);

      expect(screen.getByRole('button', { name: /view credits/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', () => {
      const handler = vitest.fn();

      render(<MainMenu onViewCreditsClick={handler} />);

      fireEvent.click(screen.getByRole('button', { name: /view credits/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('quit button', () => {
    it('should render', () => {
      render(<MainMenu />);

      expect(screen.getByRole('button', { name: /quit/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', () => {
      const handler = vitest.fn();

      render(<MainMenu onQuitClick={handler} />);

      fireEvent.click(screen.getByRole('button', { name: /quit/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
