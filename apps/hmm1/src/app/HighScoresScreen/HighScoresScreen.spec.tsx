import { screen, within } from '@testing-library/react';

import { GameType } from '../core';
import { CampaignGameScore, HighScoresGameType, StandardGameScore } from '../highScores';
import { renderWithProviders } from '../testUtils';
import { HighScoresScreen } from './HighScoresScreen';

describe(HighScoresScreen, () => {
  it('should render', () => {
    renderWithProviders(<HighScoresScreen />);

    expect(screen.getByRole('main', { name: /high scores/i })).toBeInTheDocument();
  });

  describe('standard game', () => {
    it('should render headers', () => {
      renderWithProviders(<HighScoresScreen />);

      expect(screen.getByRole('table', { name: /standard game/i })).toBeInTheDocument();

      expect(screen.getByRole('columnheader', { name: /player/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /land/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /score/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /title/i })).toBeInTheDocument();
    });

    it('should render entries', () => {
      const entry: StandardGameScore = {
        player: 'Player Name',
        scenario: 'Scenario Name',
        score: 123,
        title: 'The Title',
      };

      renderWithProviders(<HighScoresScreen entries={{ standard: [entry] }} />);

      const row = screen.getAllByRole('row')[1];

      expect(within(row).getByRole('cell', { name: /player name/i })).toBeInTheDocument();
      expect(within(row).getByRole('cell', { name: /scenario name/i })).toBeInTheDocument();
      expect(within(row).getByRole('cell', { name: /123/i })).toBeInTheDocument();
      expect(within(row).getByRole('cell', { name: /the title/i })).toBeInTheDocument();
    });

    describe('standard button', () => {
      it('should render', () => {
        renderWithProviders(<HighScoresScreen />);

        expect(screen.getByRole('button', { name: /standard/i })).toBeInTheDocument();
      });

      it('should call game type change handler when clicked', async () => {
        const handler = vitest.fn();

        const { user } = renderWithProviders(<HighScoresScreen onGameTypeChange={handler} />);

        await user.click(screen.getByRole('button', { name: /standard/i }));

        expect(handler).toHaveBeenCalledWith<[HighScoresGameType]>(GameType.Campaign);
      });
    });
  });

  describe('campaign game', () => {
    it('should render headers', () => {
      renderWithProviders(<HighScoresScreen gameType={GameType.Campaign} />);

      expect(screen.getByRole('table', { name: /campaign game/i })).toBeInTheDocument();

      expect(screen.getByRole('columnheader', { name: /player/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /leader/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /days/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /title/i })).toBeInTheDocument();
    });

    it('should render entries', () => {
      const entry: CampaignGameScore = {
        days: 321,
        leader: 'Leader Name',
        player: 'Player Name',
        title: 'The Title',
      };

      renderWithProviders(<HighScoresScreen entries={{ campaign: [entry] }} gameType={GameType.Campaign} />);

      const row = screen.getAllByRole('row')[1];

      expect(within(row).getByRole('cell', { name: /player name/i })).toBeInTheDocument();
      expect(within(row).getByRole('cell', { name: /leader name/i })).toBeInTheDocument();
      expect(within(row).getByRole('cell', { name: /321/i })).toBeInTheDocument();
      expect(within(row).getByRole('cell', { name: /the title/i })).toBeInTheDocument();
    });

    describe('campaign button', () => {
      it('should render', () => {
        renderWithProviders(<HighScoresScreen gameType={GameType.Campaign} />);

        expect(screen.getByRole('button', { name: /campaign/i })).toBeInTheDocument();
      });

      it('should call game type change handler when clicked', async () => {
        const handler = vitest.fn();

        const { user } = renderWithProviders(
          <HighScoresScreen gameType={GameType.Campaign} onGameTypeChange={handler} />
        );

        await user.click(screen.getByRole('button', { name: /campaign/i }));

        expect(handler).toHaveBeenCalledWith<[HighScoresGameType]>(GameType.Standard);
      });
    });
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
