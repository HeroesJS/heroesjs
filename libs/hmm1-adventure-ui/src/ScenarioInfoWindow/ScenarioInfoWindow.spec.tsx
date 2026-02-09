import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { ScenarioInfoWindow } from './ScenarioInfoWindow';
import {
  GameDifficulty,
  MapDifficulty,
  MapSize,
  noOpponent,
  OpponentDifficulty,
  PlayerColor,
} from '@heroesjs/hmm1-core';

describe(ScenarioInfoWindow, () => {
  it('should render', () => {
    renderWithProviders(
      <ScenarioInfoWindow
        difficultyRating={60}
        gameDifficulty={GameDifficulty.Easy}
        humanOpponentsCount={1}
        kingOfTheHill={false}
        open
        opponents={[OpponentDifficulty.Smart, OpponentDifficulty.Dumb, noOpponent]}
        playerColor={PlayerColor.Yellow}
        scenario={{
          description: 'Scenario Description',
          difficulty: MapDifficulty.Tough,
          name: 'Scenario Name',
          size: MapSize.Large,
        }}
      />
    );

    expect(screen.getByRole('region', { name: /^scenario info$/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/^scenario:$/i)).toHaveTextContent(/^scenario name$/i);
    expect(screen.getByLabelText(/^game setting:$/i)).toHaveTextContent(/^easy$/i);
    expect(screen.getByLabelText(/^opponents:$/i)).toHaveTextContent(/^human-harddumbnone$/i);
    expect(screen.getByLabelText(/^color:$/i)).toHaveTextContent(/^yellow$/i);
    expect(screen.getByLabelText(/^king of the hill:$/i)).toHaveTextContent(/^no$/i);
    expect(screen.getByLabelText(/^rating:$/i)).toHaveTextContent(/^60%$/i);

    expect(screen.getByLabelText(/^size:$/i)).toHaveTextContent(/^large$/i);
    expect(screen.getByLabelText(/^difficulty:$/i)).toHaveTextContent(/^tough$/i);
    expect(screen.getByLabelText(/^description:$/i)).toHaveTextContent(/^scenario description$/i);

    expect(screen.getByRole('button', { name: /^okay$/i })).toBeInTheDocument();
  });

  it('should call handler when okay button is clicked', async () => {
    const handler = vitest.fn();

    const { user } = renderWithProviders(<ScenarioInfoWindow onOkayClick={handler} open />);

    await user.click(screen.getByRole('button', { name: /^okay$/i }));

    expect(handler).toHaveBeenCalled();
  });
});
