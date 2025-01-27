import { screen } from '@testing-library/react';

import { GameDifficulty, OpponentDifficulty, PlayerColor, ScenarioDifficulty, ScenarioSize } from '@heroesjs/hmm1-core';
import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { StandardScenarioInfoWindow } from './StandardScenarioInfoWindow';

describe(StandardScenarioInfoWindow, () => {
  it('renders info', () => {
    renderWithProviders(
      <StandardScenarioInfoWindow
        gameDifficulty={GameDifficulty.Hard}
        kingOfTheHill
        opponentSettings={[OpponentDifficulty.Dumb, OpponentDifficulty.Smart, OpponentDifficulty.Genius]}
        playerColor={PlayerColor.Blue}
        scenario={{
          description: 'Scenario Description',
          difficulty: ScenarioDifficulty.Tough,
          name: 'My Scenario',
          size: ScenarioSize.Large,
        }}
      />,
    );

    expect(screen.getByText(/my scenario/i)).toBeInTheDocument();
    expect(screen.getByText(/hard/i)).toBeInTheDocument();
    expect(screen.getByText(/dumb/i)).toBeInTheDocument();
    expect(screen.getByText(/smart/i)).toBeInTheDocument();
    expect(screen.getByText(/genius/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
    expect(screen.getByText(/110%/i)).toBeInTheDocument();
    expect(screen.getByText(/large/i)).toBeInTheDocument();
    expect(screen.getByText(/tough/i)).toBeInTheDocument();
    expect(screen.getByText(/scenario description/i)).toBeInTheDocument();
  });

  it('renders okay button', () => {
    renderWithProviders(<StandardScenarioInfoWindow />);

    expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
  });

  it('calls handler when okay button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<StandardScenarioInfoWindow onConfirmClick={handler} />);

    await user.click(screen.getByRole('button', { name: /okay/i }));

    expect(handler).toHaveBeenCalled();
  });
});
