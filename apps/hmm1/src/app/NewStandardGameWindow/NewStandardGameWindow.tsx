import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { GameDifficulty, OpponentSetting, PlayerColor, playerColorLabel, playerColors } from '../core';
import { CycleToggle } from '../CycleToggle';
import type { PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { Window } from '../Window';
import { background, cancel, kingOfTheHillAssets, okay, playerColorAssets } from './assets';
import { GameDifficultySelector } from './GameDifficultySelector';
import { OpponentSettingsSelector } from './OpponentSettingsSelector';

interface NewStandardGameWindowProps extends PositionProps {
  readonly gameDifficulty: GameDifficulty;
  readonly kingOfTheHill?: boolean;
  readonly onCancelClick?: () => void;
  readonly onGameDifficultyChange?: (value: GameDifficulty) => void;
  readonly onKingOfTheHillChange?: (value: boolean) => void;
  readonly onOkayClick?: () => void;
  readonly onOpponentSettingsChange?: (value: readonly OpponentSetting[]) => void;
  readonly onPlayerColorChange?: (value: PlayerColor) => void;
  readonly opponentSettings: readonly OpponentSetting[];
  readonly playerColor: PlayerColor;
}

export function NewStandardGameWindow({
  gameDifficulty,
  kingOfTheHill,
  onCancelClick,
  onGameDifficultyChange,
  onKingOfTheHillChange,
  onOkayClick,
  onOpponentSettingsChange,
  onPlayerColorChange,
  opponentSettings,
  playerColor,
  x,
  y,
}: NewStandardGameWindowProps) {
  return (
    <Window
      background={background}
      height={NewStandardGameWindow.height}
      label="New Standard Game"
      width={NewStandardGameWindow.width}
      open
      x={x}
      y={y}
    >
      <Text size="large" x={60} y={22}>
        Choose Game Difficulty:
      </Text>
      <GameDifficultySelector
        label="Game Difficulty"
        onChange={onGameDifficultyChange}
        value={gameDifficulty}
        x={19}
        y={36}
      />
      <Text size="large" x={70} y={132}>
        Customize Opponents:
      </Text>
      <OpponentSettingsSelector onChange={onOpponentSettingsChange} value={opponentSettings} x={55} y={149} />
      <Text size="large" x={26} y={254}>
        Choose Color:
      </Text>
      <CycleToggle
        label="Player Color"
        onChange={onPlayerColorChange}
        options={playerColors}
        value={playerColor}
        x={51}
        y={270}
      >
        {(value) => <img alt={playerColorLabel[value]} src={playerColorAssets[value]} />}
      </CycleToggle>
      <Text size="large" x={169} y={254}>
        King of the Hill:
      </Text>
      <Checkbox
        assets={kingOfTheHillAssets}
        checked={kingOfTheHill}
        label="King of the Hill"
        onChange={onKingOfTheHillChange}
        x={210}
        y={272}
      />
      <Text size="large" x={91} y={338}>
        Choose Scenario:
      </Text>
      <Text size="large" x={95} y={355}>
        Claw ( Easy )
      </Text>
      <Text size="large" x={78} y={388}>
        Difficulty Rating: 60%
      </Text>
      <Button assets={okay} label="Okay" onClick={onOkayClick} x={24} y={412} />
      <Button assets={cancel} label="Cancel" onClick={onCancelClick} x={201} y={412} />
    </Window>
  );
}

NewStandardGameWindow.width = 322 - 2;
NewStandardGameWindow.height = 459;
