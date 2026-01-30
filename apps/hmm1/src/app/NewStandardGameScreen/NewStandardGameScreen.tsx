import { useState } from 'react';
import { useParams } from 'react-router';

import {
  defaultGameDifficulty,
  defaultPlayerColor,
  GameDifficulty,
  getDefaultOpponentSettings,
  getDifficultyRating,
  mapSupportsHumanPlayers,
  MaxPlayerCount,
  noOpponent,
  OpponentSettings,
  PlayerColor,
  Scenario,
  scenarios,
} from '@heroesjs/hmm1-core';
import { FileSelectorWindow, MainScreen, NewStandardGameWindow } from '@heroesjs/hmm1-main-ui';

interface GameSettings {
  readonly gameDifficulty: GameDifficulty;
  readonly opponents: OpponentSettings;
  readonly playerColor: PlayerColor;
  readonly kingOfTheHill: boolean;
  readonly scenario: Pick<Scenario, 'fileName' | 'name'>;
}

const defaultSinglePlayerScenario: GameSettings['scenario'] = {
  fileName: 'AES31000.MAP',
  name: 'Claw ( Easy )',
};

const defaultMultiPlayerScenario: GameSettings['scenario'] = {
  fileName: 'CNM51234.MAP',
  name: 'Around the Bay',
};

let lastUsedGameSettings: GameSettings = {
  gameDifficulty: defaultGameDifficulty,
  kingOfTheHill: false,
  opponents: getDefaultOpponentSettings(),
  playerColor: defaultPlayerColor,
  scenario: defaultSinglePlayerScenario,
};

function filterOpponents(opponents: OpponentSettings): OpponentSettings {
  const opponentsOnly = opponents.filter((o) => o !== noOpponent);

  return opponentsOnly.concat(new Array(MaxPlayerCount - 1 - opponentsOnly.length).fill(noOpponent));
}

interface NewStandardGameScreenProps {
  readonly onCancelClick?: () => void;
  readonly onOkayClick?: () => void;
}

export function NewStandardGameScreen({ onCancelClick, onOkayClick }: NewStandardGameScreenProps) {
  const params = useParams<'playerCount'>();

  const playerCount = Number(params.playerCount ?? 1);

  const humanOpponentsCount = playerCount - 1;

  const [gameDifficulty, setGameDifficulty] = useState(lastUsedGameSettings.gameDifficulty);
  const [opponentSettings, setOpponentSettings] = useState(filterOpponents(lastUsedGameSettings.opponents));
  const [playerColor, setPlayerColor] = useState(lastUsedGameSettings.playerColor);
  const [kingOfTheHill, setKingOfTheHill] = useState(lastUsedGameSettings.kingOfTheHill);

  const validScenarios = scenarios.filter((scenario) => mapSupportsHumanPlayers(scenario.fileName, 1));

  const [isSelectingScenario, setIsSelectingScenario] = useState(false);

  const [scenarioFileName, setScenarioFileName] = useState(
    playerCount !== 1 ? defaultMultiPlayerScenario.fileName : lastUsedGameSettings.scenario.fileName
  );
  const [scenarioFileNameBackup, setScenarioFileNameBackup] = useState('');

  const selectedScenario = scenarios.find((s) => s.fileName === scenarioFileName);

  const rating = getDifficultyRating({
    gameDifficulty,
    humanOpponentsCount,
    kingOfTheHill,
    mapDifficulty: selectedScenario!.difficulty,
    mapSize: selectedScenario!.size,
    opponentSettings,
  });

  const handleOkayClick = () => {
    lastUsedGameSettings = {
      gameDifficulty,
      kingOfTheHill,
      opponents: opponentSettings,
      playerColor,
      scenario: {
        fileName: selectedScenario!.fileName,
        name: selectedScenario!.name,
      },
    };

    onOkayClick?.();
  };

  return (
    <MainScreen label="New Standard Game">
      {isSelectingScenario ? (
        <FileSelectorWindow
          items={validScenarios.map((scenario) => ({
            label: scenario.name,
            value: scenario.fileName,
          }))}
          onCancelClick={() => {
            setScenarioFileName(scenarioFileNameBackup);

            setIsSelectingScenario(false);
          }}
          onItemSelect={setScenarioFileName}
          onOkayClick={() => setIsSelectingScenario(false)}
          scenarioDetail={selectedScenario}
          showScenarioDetail
          value={scenarioFileName}
          x={310}
          y={14}
        />
      ) : (
        <NewStandardGameWindow
          difficultyRating={rating}
          gameDifficulty={gameDifficulty}
          humanOpponentsCount={humanOpponentsCount}
          kingOfTheHill={kingOfTheHill}
          onCancelClick={onCancelClick}
          onGameDifficultyChange={setGameDifficulty}
          onKingOfTheHillChange={setKingOfTheHill}
          onOkayClick={handleOkayClick}
          onOpponentSettingsChange={setOpponentSettings}
          onPlayerColorChange={setPlayerColor}
          onSelectScenarioClick={() => {
            setScenarioFileNameBackup(scenarioFileName);

            setIsSelectingScenario(true);
          }}
          opponentSettings={opponentSettings}
          playerColor={playerColor}
          scenarioName={selectedScenario?.name}
          x={310}
          y={14}
        />
      )}
    </MainScreen>
  );
}
