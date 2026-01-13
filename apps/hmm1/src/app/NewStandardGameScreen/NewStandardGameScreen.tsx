import { useState } from 'react';

import { defaultGameDifficulty, defaultPlayerColor, getDefaultOpponentSettings } from '../core';
import { FileSelectorWindow } from '../FileSelectorWindow';
import { MainScreen } from '../MainScreen';
import { mapSupportsHumanPlayers } from '../map';
import { NewStandardGameWindow } from '../NewStandardGameWindow';
import { scenarios } from '../scenario';

interface NewStandardGameScreenProps {
  readonly onCancelClick?: () => void;
}

export function NewStandardGameScreen({ onCancelClick }: NewStandardGameScreenProps) {
  const [gameDifficulty, setGameDifficulty] = useState(defaultGameDifficulty);
  const [opponentSettings, setOpponentSettings] = useState(getDefaultOpponentSettings(0));
  const [playerColor, setPlayerColor] = useState(defaultPlayerColor);
  const [kingOfTheHill, setKingOfTheHill] = useState(false);

  const validScenarios = scenarios.filter((scenario) => mapSupportsHumanPlayers(scenario.fileName, 1));

  const [isSelectingScenario, setIsSelectingScenario] = useState(false);

  const [scenarioFileName, setScenarioFileName] = useState('AES31000.MAP');
  const [scenarioFileNameBackup, setScenarioFileNameBackup] = useState('');

  const selectedScenario = scenarios.find((s) => s.fileName === scenarioFileName);

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
