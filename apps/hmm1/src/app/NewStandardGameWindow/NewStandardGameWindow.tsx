import styled from 'styled-components';

import {
  ComputerOpponentSetting,
  GameDifficulty,
  isHumanOpponentSetting,
  MaxPlayerCount,
  OpponentSetting,
  OpponentSettings,
  PlayerColor,
  playerColorLabel,
  playerColors,
} from '@heroesjs/hmm1-core';
import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import {
  Button,
  Checkbox,
  CycleToggle,
  Modal,
  PositionedComponent,
  Text,
  useInfoModal,
  Window,
} from '@heroesjs/hmm1-core-ui';

import { background, cancel, kingOfTheHillAssets, okay, playerColorAssets, scenario } from './assets';
import { GameDifficultySelector } from './GameDifficultySelector';
import { OpponentSettingsSelector } from './OpponentSettingsSelector';

interface NewStandardGameWindowProps extends PositionProps {
  readonly difficultyRating?: number;
  readonly gameDifficulty: GameDifficulty;
  readonly kingOfTheHill?: boolean;
  readonly onCancelClick?: () => void;
  readonly onGameDifficultyChange?: (value: GameDifficulty) => void;
  readonly onKingOfTheHillChange?: (value: boolean) => void;
  readonly onOkayClick?: () => void;
  readonly onOpponentSettingsChange?: (value: OpponentSettings) => void;
  readonly onPlayerColorChange?: (value: PlayerColor) => void;
  readonly onSelectScenarioClick?: () => void;
  readonly opponentSettings?: OpponentSettings;
  readonly playerColor: PlayerColor;
  readonly scenarioName?: string;
}

export function NewStandardGameWindow({
  difficultyRating = 0,
  gameDifficulty,
  kingOfTheHill,
  onCancelClick,
  onGameDifficultyChange,
  onKingOfTheHillChange,
  onOkayClick,
  onOpponentSettingsChange,
  onPlayerColorChange,
  onSelectScenarioClick,
  opponentSettings = new Array<OpponentSetting>(MaxPlayerCount - 1).fill(ComputerOpponentSetting.None),
  playerColor,
  scenarioName,
  x,
  y,
}: NewStandardGameWindowProps) {
  const gameDifficultyInfoModal = useInfoModal();
  const computerOpponentSettingInfoModal = useInfoModal();
  const humanOpponentSettingInfoModal = useInfoModal();
  const playerColorInfoModal = useInfoModal();
  const kingOfTheHillInfoModal = useInfoModal();
  const selectScenarioInfoModal = useInfoModal();
  const difficultyRatingInfoModal = useInfoModal();

  const okayInfoModal = useInfoModal();
  const cancelInfoModal = useInfoModal();

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
        onMouseDown={gameDifficultyInfoModal.onMouseDown}
        value={gameDifficulty}
        x={19}
        y={36}
      />
      <Modal open={gameDifficultyInfoModal.open} size={1} x={177} y={29}>
        Change the starting difficulty at which you will play.&nbsp;&nbsp;Higher difficulty levels start you off with
        fewer resources.
      </Modal>
      <Text size="large" x={70} y={132}>
        Customize Opponents:
      </Text>
      <OpponentSettingsSelector
        onChange={onOpponentSettingsChange}
        onOptionMouseDown={(e, setting) =>
          (isHumanOpponentSetting(setting)
            ? humanOpponentSettingInfoModal
            : computerOpponentSettingInfoModal
          ).onMouseDown(e)
        }
        value={opponentSettings}
        x={55}
        y={149}
      />
      <Modal open={computerOpponentSettingInfoModal.open} size={1} x={177} y={29}>
        Change the difficulty of this opponent.&nbsp;&nbsp;Smarter computer players are more aggressive and think longer
        for each turn.
      </Modal>
      <Modal open={humanOpponentSettingInfoModal.open} size={1} x={177} y={29}>
        Change the starting difficulty of another human player.&nbsp;&nbsp;Higher difficulty levels start you off with
        fewer resources.
      </Modal>
      <Text hidden id="playerColorLabel" size="large" x={26} y={254}>
        Choose Color:
      </Text>
      <CycleToggle
        labelId="playerColorLabel"
        onChange={onPlayerColorChange}
        onMouseDown={playerColorInfoModal.onMouseDown}
        options={playerColors}
        value={playerColor}
        x={51}
        y={270}
      >
        {(value) => <img alt={playerColorLabel[value]} src={playerColorAssets[value]} />}
      </CycleToggle>
      <Modal open={playerColorInfoModal.open} x={177} y={29}>
        Change your banner color.
      </Modal>
      <Text hidden id="kingOfTheHillLabel" size="large" x={169} y={254}>
        King of the Hill:
      </Text>
      <Checkbox
        assets={kingOfTheHillAssets}
        checked={kingOfTheHill}
        labelId="kingOfTheHillLabel"
        onChange={onKingOfTheHillChange}
        onMouseDown={kingOfTheHillInfoModal.onMouseDown}
        x={210}
        y={272}
      />
      <Modal open={kingOfTheHillInfoModal.open} size={2} x={177} y={29}>
        Challenge all computer players as 'King of the Hill'.&nbsp; Computer players will be offended by your
        boastfulness, and lay off each other in an attempt to beat you to a pulp.
      </Modal>
      <Text size="large" x={91} y={338}>
        Choose Scenario:
      </Text>
      <Input
        aria-label="Scenario"
        aria-readonly
        aria-required
        onClick={onSelectScenarioClick}
        onMouseDown={selectScenarioInfoModal.onMouseDown}
        role="textbox"
        x={24}
        y={354}
      >
        <Text align="center" size="large" width={248} x={0} y={1}>
          {scenarioName}
        </Text>
      </Input>
      <Button
        assets={scenario.select}
        label="Select Scenario"
        onClick={onSelectScenarioClick}
        onMouseDown={selectScenarioInfoModal.onMouseDown}
        x={273}
        y={354}
      />
      <Modal open={selectScenarioInfoModal.open} x={177} y={29}>
        Select which scenario to play.
      </Modal>
      <Text size="large" onMouseDown={difficultyRatingInfoModal.onMouseDown} x={78} y={388}>
        <span aria-hidden id="difficultyRatingLabel">
          Difficulty Rating:
        </span>{' '}
        <span aria-labelledby="difficultyRatingLabel">{difficultyRating}%</span>
      </Text>
      <Modal open={difficultyRatingInfoModal.open} size={1} x={177} y={29}>
        The difficulty rating reflects a combination of various settings for your game.&nbsp;&nbsp;This number will be
        applied to your final score.
      </Modal>
      <Button assets={okay} label="Okay" onClick={onOkayClick} onMouseDown={okayInfoModal.onMouseDown} x={24} y={412} />
      <Modal open={okayInfoModal.open} x={177} y={29}>
        Accept these settings and start a new game.
      </Modal>
      <Button
        assets={cancel}
        label="Cancel"
        onClick={onCancelClick}
        onMouseDown={cancelInfoModal.onMouseDown}
        x={201}
        y={412}
      />
      <Modal open={cancelInfoModal.open} x={177} y={29}>
        Return to the main menu.
      </Modal>
    </Window>
  );
}

NewStandardGameWindow.width = 322 - 2;
NewStandardGameWindow.height = 459;

const Input = styled(PositionedComponent)({
  backgroundImage: `url(${scenario.inputBackground})`,
  height: 20,
  width: 249,
});
