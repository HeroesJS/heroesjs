import styled from 'styled-components';

import {
  GameDifficulty,
  MaxPlayerCount,
  noOpponent,
  OpponentSetting,
  OpponentSettings,
  PlayerColor,
  playerColorLabel,
  playerColors,
} from '@heroesjs/hmm1-core';
import { Button, Checkbox, CycleToggle, PositionedComponent, Text, useModal, Window } from '@heroesjs/hmm1-core-ui';

import { background, cancel, kingOfTheHillAssets, okay, playerColorAssets, scenario } from './assets';
import { GameDifficultySelector } from './GameDifficultySelector';
import { OpponentSettingsSelector } from './OpponentSettingsSelector';

interface NewStandardGameWindowProps {
  readonly difficultyRating?: number;
  readonly gameDifficulty: GameDifficulty;
  readonly humanOpponentsCount?: number;
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
  readonly x?: number;
  readonly y?: number;
}

export function NewStandardGameWindow({
  difficultyRating = 0,
  gameDifficulty,
  humanOpponentsCount = 0,
  kingOfTheHill,
  onCancelClick,
  onGameDifficultyChange,
  onKingOfTheHillChange,
  onOkayClick,
  onOpponentSettingsChange,
  onPlayerColorChange,
  onSelectScenarioClick,
  opponentSettings = new Array<OpponentSetting>(MaxPlayerCount - 1).fill(noOpponent),
  playerColor,
  scenarioName,
  x,
  y,
}: NewStandardGameWindowProps) {
  const [GameDifficultyInfoModal, gameDifficultyInfoModal] = useModal();
  const [ComputerOpponentSettingInfoModal, computerOpponentSettingInfoModal] = useModal();
  const [HumanOpponentSettingInfoModal, humanOpponentSettingInfoModal] = useModal();
  const [PlayerColorInfoModal, playerColorInfoModal] = useModal();
  const [KingOfTheHillInfoModal, kingOfTheHillInfoModal] = useModal();
  const [SelectScenarioInfoModal, selectScenarioInfoModal] = useModal();
  const [DifficultyRatingInfoModal, difficultyRatingInfoModal] = useModal();

  const [OkayInfoModal, okayInfoModal] = useModal();
  const [CancelInfoModal, cancelInfoModal] = useModal();

  const [NoOpponentsErrorModal, noOpponentsErrorModal] = useModal();

  const handleOkayClick = () => {
    if (opponentSettings.every((opponent) => opponent === noOpponent)) {
      noOpponentsErrorModal.open();

      return;
    }

    onOkayClick?.();
  };

  return (
    <Window
      background={background}
      height={NewStandardGameWindow.height}
      label="New Standard Game"
      open
      width={NewStandardGameWindow.width}
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
      <GameDifficultyInfoModal size={1}>
        Change the starting difficulty at which you will play.&nbsp;&nbsp;Higher difficulty levels start you off with
        fewer resources.
      </GameDifficultyInfoModal>
      <Text size="large" x={70} y={132}>
        Customize Opponents:
      </Text>
      <OpponentSettingsSelector
        humanOpponentsCount={humanOpponentsCount}
        onChange={onOpponentSettingsChange}
        onOptionMouseDown={(e, _setting, isHumanOpponent) =>
          (isHumanOpponent ? humanOpponentSettingInfoModal : computerOpponentSettingInfoModal).onMouseDown(e)
        }
        value={opponentSettings}
        x={55}
        y={149}
      />
      <ComputerOpponentSettingInfoModal size={1}>
        Change the difficulty of this opponent.&nbsp;&nbsp;Smarter computer players are more aggressive and think longer
        for each turn.
      </ComputerOpponentSettingInfoModal>
      <HumanOpponentSettingInfoModal size={1}>
        Change the starting difficulty of another human player.&nbsp;&nbsp;Higher difficulty levels start you off with
        fewer resources.
      </HumanOpponentSettingInfoModal>
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
      <PlayerColorInfoModal>Change your banner color.</PlayerColorInfoModal>
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
      <KingOfTheHillInfoModal size={2}>
        Challenge all computer players as 'King of the Hill'.&nbsp; Computer players will be offended by your
        boastfulness, and lay off each other in an attempt to beat you to a pulp.
      </KingOfTheHillInfoModal>
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
      <SelectScenarioInfoModal>Select which scenario to play.</SelectScenarioInfoModal>
      <Text onMouseDown={difficultyRatingInfoModal.onMouseDown} size="large" x={78} y={388}>
        <span aria-hidden id="difficultyRatingLabel">
          Difficulty Rating:
        </span>{' '}
        <span aria-labelledby="difficultyRatingLabel">{difficultyRating}%</span>
      </Text>
      <DifficultyRatingInfoModal size={1}>
        The difficulty rating reflects a combination of various settings for your game.&nbsp;&nbsp;This number will be
        applied to your final score.
      </DifficultyRatingInfoModal>
      <Button
        assets={okay}
        label="Okay"
        onClick={handleOkayClick}
        onMouseDown={okayInfoModal.onMouseDown}
        x={24}
        y={412}
      />
      <OkayInfoModal>Accept these settings and start a new game.</OkayInfoModal>
      <Button
        assets={cancel}
        label="Cancel"
        onClick={onCancelClick}
        onMouseDown={cancelInfoModal.onMouseDown}
        x={201}
        y={412}
      />
      <CancelInfoModal>Return to the main menu.</CancelInfoModal>
      <NoOpponentsErrorModal autoClose size={1} type="okay" y={61}>
        A game requires at least one opponent.
      </NoOpponentsErrorModal>
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
