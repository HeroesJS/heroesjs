import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { HighScoresScreen } from './HighScoresScreen';

describe(HighScoresScreen, () => {
  it('should render', () => {
    renderWithProviders(<HighScoresScreen />);

    expect(screen.getByRole('main', { name: /high scores/i })).toBeInTheDocument();
  });

  describe('exit button', () => {
    it('should render', () => {
      renderWithProviders(<HighScoresScreen />);

      expect(screen.getByRole('button', { name: /exit/i })).toBeInTheDocument();
    });

    it('should call exit click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<HighScoresScreen onExitClick={handler} />);

      await user.click(screen.getByRole('button', { name: /exit/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
