import { useState } from 'react';
import { useParams } from 'react-router';

import { defaultGameDifficulty, defaultPlayerColor, getDefaultOpponentSettings } from '../core';
import { FileSelectorWindow } from '../FileSelectorWindow';
import { MainScreen } from '../MainScreen';
import { mapSupportsHumanPlayers } from '../map';
import { NewStandardGameWindow } from '../NewStandardGameWindow';
import { getDifficultyRating } from '../rating';
import { scenarios } from '../scenario';

interface NewStandardGameScreenProps {
  readonly onCancelClick?: () => void;
}

export function NewStandardGameScreen({ onCancelClick }: NewStandardGameScreenProps) {
  const params = useParams<'playerCount'>();

  const playerCount = Number(params.playerCount ?? 1);

  const [gameDifficulty, setGameDifficulty] = useState(defaultGameDifficulty);
  const [opponentSettings, setOpponentSettings] = useState(getDefaultOpponentSettings(playerCount - 1));
  const [playerColor, setPlayerColor] = useState(defaultPlayerColor);
  const [kingOfTheHill, setKingOfTheHill] = useState(false);

  const validScenarios = scenarios.filter((scenario) => mapSupportsHumanPlayers(scenario.fileName, 1));

  const [isSelectingScenario, setIsSelectingScenario] = useState(false);

  const [scenarioFileName, setScenarioFileName] = useState(playerCount !== 1 ? 'CNM51234.MAP' : 'AES31000.MAP');
  const [scenarioFileNameBackup, setScenarioFileNameBackup] = useState('');

  const selectedScenario = scenarios.find((s) => s.fileName === scenarioFileName);

  const rating = getDifficultyRating({
    gameDifficulty,
    kingOfTheHill,
    mapDifficulty: selectedScenario!.difficulty,
    mapSize: selectedScenario!.size,
    opponentSettings,
  });

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
          kingOfTheHill={kingOfTheHill}
          onCancelClick={onCancelClick}
          onGameDifficultyChange={setGameDifficulty}
          onKingOfTheHillChange={setKingOfTheHill}
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
