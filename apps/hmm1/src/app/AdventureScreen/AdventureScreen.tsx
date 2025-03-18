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
import { Town } from '@heroesjs/hmm1-core';

import { FileSelectorWindow } from '../FileSelectorWindow';
import {
  selectGameOptions,
  setAutoSave,
  setEffectsVolume,
  setMovementSpeed,
  setMusicVolume,
  setShowPath,
  setViewEnemyMovement,
} from '../gameOptionsSlice';
import {
  selectCurrentCampaignScenario,
  selectCurrentGame,
  selectCurrentStandardScenario,
  selectHero,
} from '../gameSlice';
import { HeroScreen } from '../HeroScreen';
import { useAppDispatch, useAppSelector } from '../hooks';

export const AdventureScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const game = useAppSelector(selectCurrentGame);
  const standardScenario = useAppSelector(selectCurrentStandardScenario);
  const campaignScenario = useAppSelector(selectCurrentCampaignScenario);

  const handleHeroLocatorClick = (index: number) => {
    if (game.selectedHeroIndex !== index) {
      dispatch(selectHero(index));

      return;
    }

    navigate(`hero/${index}`);
  };

  const gameOptions = useAppSelector(selectGameOptions);

  return (
    <AdventureWindow
      renderActionButtons={() => (
        <AdventureButtons
          moveDisabled
          onAdventureOptionsClick={() => navigate('adventure-options')}
          onGameOptionsClick={() => navigate('game-options')}
        />
      )}
      renderHeroLocators={() =>
        game.heroes.map((hero, index) => (
          <Locator
            key={index}
            onClick={() => handleHeroLocatorClick(index)}
            selected={index === game.selectedHeroIndex}
          >
            <HeroLocator hero={hero.id} mobility={hero.mobility} x={5} y={5} />
          </Locator>
        ))
      }
      renderTownLocators={() => (
        <Locator>
          <TownLocator castle town={Town.Farm} />
        </Locator>
      )}
    >
      <Routes>
        <Route
          element={<HeroScreen onExitClick={() => navigate('../..', { relative: 'path' })} />}
          path="hero/:index"
        />
        <Route
          element={
            <AdventureOptionsWindow onConfirmClick={() => navigate('..', { relative: 'path' })} x={160} y={40} />
          }
          path="adventure-options"
        />
        <Route
          element={
            <GameOptionsWindow
              autoSave={gameOptions.autoSave}
              effectsVolume={gameOptions.effectsVolume}
              movementSpeed={gameOptions.movementSpeed}
              musicVolume={gameOptions.musicVolume}
              onAutoSaveChange={(value) => dispatch(setAutoSave(value))}
              onConfirmClick={() => navigate('..', { relative: 'path' })}
              onEffectsVolumeChange={(value) => dispatch(setEffectsVolume(value))}
              onInfoClick={() => navigate('../scenario-info', { relative: 'path' })}
              onLoadGameClick={() => navigate('/game/load')}
              onMovementSpeedChange={(value) => dispatch(setMovementSpeed(value))}
              onMusicVolumeChange={(value) => dispatch(setMusicVolume(value))}
              onNewGameClick={() => navigate('/game/new')}
              onQuitClick={() => navigate('/')}
              onSaveGameClick={() => navigate('../save-game', { relative: 'path' })}
              onShowPathChange={(value) => dispatch(setShowPath(value))}
              onViewEnemyMovementChange={(value) => dispatch(setViewEnemyMovement(value))}
              showPath={gameOptions.showPath}
              viewEnemyMovement={gameOptions.viewEnemyMovement}
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
              gameDifficulty={game.gameDifficulty}
              kingOfTheHill={game.kingOfTheHill}
              onConfirmClick={() => navigate('..', { relative: 'path' })}
              opponentSettings={game.opponentSettings}
              playerColor={game.playerColor}
              scenario={standardScenario}
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
              scenario={campaignScenario}
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
