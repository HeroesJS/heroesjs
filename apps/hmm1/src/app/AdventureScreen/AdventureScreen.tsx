import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  AdventureButtons,
  AdventureOptionsWindow,
  AdventureWindow,
  CampaignScenarioInfoWindow,
  GameOptionsWindow,
  HeroLocator,
  Locator,
  StandardScenarioInfoWindow,
  TownLocator,
} from '@heroesjs/hmm1-adventure-ui';
import {
  campaignScenarios,
  GameDifficulty,
  HeroId,
  OpponentDifficulty,
  PlayerColor,
  scenarios,
  Town,
} from '@heroesjs/hmm1-core';

import { FileSelectorWindow } from '../FileSelectorWindow';

export const AdventureScreen = () => {
  const navigate = useNavigate();

  const scenario = scenarios[0];

  return (
    <AdventureWindow
      renderActionButtons={() => (
        <AdventureButtons
          moveDisabled
          onAdventureOptionsClick={() => navigate('adventure-options')}
          onGameOptionsClick={() => navigate('game-options')}
        />
      )}
      renderHeroLocators={() => (
        <Locator selected>
          <HeroLocator hero={HeroId.Dimitri} mobility={14} x={5} y={5} />
        </Locator>
      )}
      renderTownLocators={() => (
        <Locator>
          <TownLocator castle town={Town.Farm} />
        </Locator>
      )}
    >
      <Routes>
        <Route
          element={
            <AdventureOptionsWindow onConfirmClick={() => navigate('..', { relative: 'path' })} x={160} y={40} />
          }
          path="adventure-options"
        />
        <Route
          element={
            <GameOptionsWindow
              onInfoClick={() => navigate('../scenario-info', { relative: 'path' })}
              onLoadGameClick={() => navigate('/game/load')}
              onNewGameClick={() => navigate('/game/new')}
              onOkayClick={() => navigate('..', { relative: 'path' })}
              onQuitClick={() => navigate('/')}
              onSaveGameClick={() => navigate('../save-game', { relative: 'path' })}
              x={160}
              y={10}
            />
          }
          path="game-options"
        />
        <Route
          element={
            <FileSelectorWindow
              onCancelClick={() => navigate('..', { relative: 'path' })}
              onConfirmClick={() => navigate('..', { relative: 'path' })}
            />
          }
          path="save-game"
        />
        <Route
          element={
            <StandardScenarioInfoWindow
              gameDifficulty={GameDifficulty.Normal}
              kingOfTheHill={false}
              onConfirmClick={() => navigate('..', { relative: 'path' })}
              opponentSettings={[OpponentDifficulty.Average, OpponentDifficulty.Average, OpponentDifficulty.Average]}
              playerColor={PlayerColor.Blue}
              scenario={scenario}
              x={159}
              y={14}
            />
          }
          path="scenario-info"
        />
        <Route
          element={
            <CampaignScenarioInfoWindow
              allowRestart
              onConfirmClick={() => navigate('..', { relative: 'path' })}
              onRestartClick={() => navigate('/adventure')}
              scenario={campaignScenarios[0]}
              x={105}
              y={96}
            />
          }
          path="campaign-scenario-info"
        />
      </Routes>
    </AdventureWindow>
  );
};
