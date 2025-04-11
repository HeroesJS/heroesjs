import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Route, Routes, useNavigate} from 'react-router-dom';

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
import {Modal, useModal} from '@heroesjs/hmm1-base-ui';
import {
  campaignScenarios,
  GameDifficulty,
  MovementSpeed,
  OpponentDifficulty,
  PlayerColor,
  scenarios,
  type SoundVolume,
} from '@heroesjs/hmm1-core';

import {FileSelectorWindow} from '../FileSelectorWindow';
import {
  endTurn,
  getHeroes,
  getSelectedHeroIndex,
  getSelectedTownIndex,
  getTowns,
  selectHero,
  selectTown,
} from '../gameSlice';
import {HeroScreen} from '../HeroScreen';
import {useAppDispatch, useAppSelector} from '../hooks';

export const AdventureScreen = () => {
  const {t} = useTranslation(['core']);
  const dispatch = useAppDispatch();

  const notImplementedModal = useModal();

  const [musicVolume, setMusicVolume] = useState<SoundVolume>(10);
  const [effectsVolume, setEffectsVolume] = useState<SoundVolume>(10);
  const [movementSpeed, setMovementSpeed] = useState(MovementSpeed.Trot);
  const [autoSave, setAutoSave] = useState(true);
  const [showPath, setShowPath] = useState(true);
  const [viewEnemyMovement, setViewEnemyMovement] = useState(true);

  const navigate = useNavigate();

  const scenario = scenarios[0];

  const heroes = useAppSelector(getHeroes);
  const selectedHeroIndex = useAppSelector(getSelectedHeroIndex);

  const handleHeroLocatorClick = (index: number) => {
    if (selectedHeroIndex !== index) {
      dispatch(selectHero(index));

      return;
    }

    navigate(`hero/${index}`);
  };

  const towns = useAppSelector(getTowns);
  const selectedTownIndex = useAppSelector(getSelectedTownIndex);

  const handleTownLocatorClick = (index: number) => {
    if (selectedTownIndex !== index) {
      dispatch(selectTown(index));

      return;
    }

    notImplementedModal.open();
  };

  return (
    <AdventureWindow
      renderActionButtons={() => (
        <AdventureButtons
          moveDisabled
          onAdventureOptionsClick={() => navigate('adventure-options')}
          onEndTurnClick={() => dispatch(endTurn())}
          onGameOptionsClick={() => navigate('game-options')}
        />
      )}
      renderHeroLocators={() =>
        heroes.map((hero, index) => (
          <Locator key={index} onClick={() => handleHeroLocatorClick(index)} selected={index === selectedHeroIndex}>
            <HeroLocator hero={hero.id} mobility={hero.mobility} x={5} y={5} />
          </Locator>
        ))
      }
      renderTownLocators={() =>
        towns.map((town, index) => (
          <Locator key={index} onClick={() => handleTownLocatorClick(index)} selected={index === selectedTownIndex}>
            <TownLocator castle town={town.class} />
          </Locator>
        ))
      }
    >
      <Routes>
        <Route element={<HeroScreen onExitClick={() => navigate('../..', {relative: 'path'})} />} path="hero/:index" />
        <Route
          element={<AdventureOptionsWindow onConfirmClick={() => navigate('..', {relative: 'path'})} x={160} y={40} />}
          path="adventure-options"
        />
        <Route
          element={
            <GameOptionsWindow
              autoSave={autoSave}
              effectsVolume={effectsVolume}
              movementSpeed={movementSpeed}
              musicVolume={musicVolume}
              onAutoSaveChange={setAutoSave}
              onConfirmClick={() => navigate('..', {relative: 'path'})}
              onEffectsVolumeChange={setEffectsVolume}
              onInfoClick={() => navigate('../scenario-info', {relative: 'path'})}
              onLoadGameClick={() => navigate('/game/load')}
              onMovementSpeedChange={setMovementSpeed}
              onMusicVolumeChange={setMusicVolume}
              onNewGameClick={() => navigate('/game/new')}
              onQuitClick={() => navigate('/')}
              onSaveGameClick={() => navigate('../save-game', {relative: 'path'})}
              onShowPathChange={setShowPath}
              onViewEnemyMovementChange={setViewEnemyMovement}
              showPath={showPath}
              viewEnemyMovement={viewEnemyMovement}
              x={160}
              y={10}
            />
          }
          path="game-options"
        />
        <Route
          element={
            <FileSelectorWindow
              onCancelClick={() => navigate('..', {relative: 'path'})}
              onConfirmClick={() => navigate('..', {relative: 'path'})}
            />
          }
          path="save-game"
        />
        <Route
          element={
            <StandardScenarioInfoWindow
              gameDifficulty={GameDifficulty.Normal}
              kingOfTheHill={false}
              onConfirmClick={() => navigate('..', {relative: 'path'})}
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
              onConfirmClick={() => navigate('..', {relative: 'path'})}
              onRestartClick={() => navigate('/adventure')}
              scenario={campaignScenarios[0]}
              x={105}
              y={96}
            />
          }
          path="campaign-scenario-info"
        />
      </Routes>
      <Modal onConfirmClick={notImplementedModal.close} open={notImplementedModal.isOpen} type="okay" x={177} y={29}>
        {t('core:notImplemented')}
      </Modal>
    </AdventureWindow>
  );
};
