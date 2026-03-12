import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import {
  GameDifficulty,
  MaxPlayerCount,
  noOpponent,
  OpponentSetting,
  OpponentSettings,
  PlayerColor,
  playerColors,
} from '@heroesjs/hmm1-core';
import {
  Button,
  Checkbox,
  CycleToggle,
  PlayerColorJewel,
  PositionedComponent,
  Text,
  useModal,
  Window,
} from '@heroesjs/hmm1-core-ui';

import { background, cancel, kingOfTheHillAssets, okay, scenario } from './assets';
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
  const { t } = useTranslation('main', { keyPrefix: 'component.newStandardGameWindow' });

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
      label={t(($) => $.title)}
      open
      width={NewStandardGameWindow.width}
      x={x}
      y={y}
    >
      <Text hidden id="gameDifficultyLabel" size="large" x={60} y={22}>
        {t(($) => $.gameDifficulty.label)}
      </Text>
      <GameDifficultySelector
        labelId="gameDifficultyLabel"
        onChange={onGameDifficultyChange}
        onMouseDown={gameDifficultyInfoModal.onMouseDown}
        value={gameDifficulty}
        x={19}
        y={36}
      />
      <GameDifficultyInfoModal size={1}>{t(($) => $.gameDifficulty.info)}</GameDifficultyInfoModal>
      <Text size="large" x={70} y={132}>
        {t(($) => $.opponents.label)}
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
        {t(($) => $.opponents.computerOpponentInfo)}
      </ComputerOpponentSettingInfoModal>
      <HumanOpponentSettingInfoModal size={1}>{t(($) => $.opponents.humanOpponentInfo)}</HumanOpponentSettingInfoModal>
      <Text hidden id="playerColorLabel" size="large" x={26} y={254}>
        {t(($) => $.playerColor.label)}
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
        {(value) => <PlayerColorJewel value={value} />}
      </CycleToggle>
      <PlayerColorInfoModal>{t(($) => $.playerColor.info)}</PlayerColorInfoModal>
      <Text hidden id="kingOfTheHillLabel" size="large" x={169} y={254}>
        {t(($) => $.kingOfTheHill.label)}
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
      <KingOfTheHillInfoModal size={2}>{t(($) => $.kingOfTheHill.info)}</KingOfTheHillInfoModal>
      <Text size="large" x={91} y={338}>
        {t(($) => $.scenario.label)}
      </Text>
      <Input
        aria-label={t(($) => $.scenario.nameLabel)}
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
        label={t(($) => $.scenario.select)}
        onClick={onSelectScenarioClick}
        onMouseDown={selectScenarioInfoModal.onMouseDown}
        x={273}
        y={354}
      />
      <SelectScenarioInfoModal>{t(($) => $.scenario.info)}</SelectScenarioInfoModal>
      <Text onMouseDown={difficultyRatingInfoModal.onMouseDown} size="large" x={78} y={388}>
        <span aria-hidden id="difficultyRatingLabel">
          {t(($) => $.difficultyRating.label)}
        </span>{' '}
        <span aria-labelledby="difficultyRatingLabel">
          {t(($) => $.difficultyRating.value, { value: difficultyRating })}
        </span>
      </Text>
      <DifficultyRatingInfoModal size={1}>{t(($) => $.difficultyRating.info)}</DifficultyRatingInfoModal>
      <Button
        assets={okay}
        label={t(($) => $.confirm.label)}
        onClick={handleOkayClick}
        onMouseDown={okayInfoModal.onMouseDown}
        x={24}
        y={412}
      />
      <OkayInfoModal>{t(($) => $.confirm.info)}</OkayInfoModal>
      <Button
        assets={cancel}
        label={t(($) => $.cancel.label)}
        onClick={onCancelClick}
        onMouseDown={cancelInfoModal.onMouseDown}
        x={201}
        y={412}
      />
      <CancelInfoModal>{t(($) => $.cancel.info)}</CancelInfoModal>
      <NoOpponentsErrorModal autoClose size={1} type="okay" y={61}>
        {t(($) => $.opponents.noOpponentsError)}
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
