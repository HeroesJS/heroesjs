import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {PlayerColorJewel} from '@heroesjs/hmm1-adventure-ui';
import {Button, Checkbox, Modal, Text, useModal, useToggle, Window} from '@heroesjs/hmm1-base-ui';
import {
  calculateRating,
  formatRating,
  GameDifficulty,
  getOpponentCount,
  nextOption,
  opponentDifficulties,
  OpponentDifficulty,
  type OpponentSettings,
  PlayerColor,
  playerColors,
  ScenarioDifficulty,
  ScenarioSize,
} from '@heroesjs/hmm1-core';

import * as assets from './assets';
import {DifficultyMenu} from './DifficultyMenu';
import {OpponentSetting} from './OpponentSetting';
import {ScenarioSelection} from './ScenarioSelection';

interface ScenarioInfo {
  readonly difficulty: ScenarioDifficulty;
  readonly name: string;
  readonly size: ScenarioSize;
}

interface Props {
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onOpponentSettingsChange?: (value: OpponentSettings) => void;
  readonly onSelectScenarioClick?: () => void;
  readonly opponentSettings?: OpponentSettings;
  readonly scenario?: ScenarioInfo;
  readonly x?: number;
  readonly y?: number;
}

export const NewGameWindow = ({
  onCancelClick,
  onConfirmClick,
  onOpponentSettingsChange,
  onSelectScenarioClick,
  opponentSettings = [OpponentDifficulty.None, OpponentDifficulty.None, OpponentDifficulty.None],
  scenario,
  x,
  y,
}: Props) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.newGameWindow'});

  const gameDifficultyInfoModal = useModal();
  const opponentSettingInfoModal = useModal();
  const playerColorInfoModal = useModal();
  const kingOfTheHillInfoModal = useModal();
  const scenarioSelectionInfoModal = useModal();
  const ratingInfoModal = useModal();
  const confirmInfoModal = useModal();
  const cancelInfoModal = useModal();

  const [selectedDifficulty, setSelectedDifficulty] = useState(GameDifficulty.Normal);
  const [color, setColor] = useState(PlayerColor.Blue);
  const {toggle: toggleKingOfTheHill, value: kingOfTheHill} = useToggle();

  const handleOpponentSettingClick = (index: number, value: OpponentDifficulty) =>
    onOpponentSettingsChange?.(
      opponentSettings.map((v, i) => (i === index ? nextOption(opponentDifficulties, value) : v)),
    );

  const handleColorClick = () => setColor(nextOption(playerColors, color));

  const rating = calculateRating({
    kingOfTheHill,
    opponentSettings,
    scenarioDifficulty: scenario?.difficulty ?? ScenarioDifficulty.Easy,
    scenarioSize: scenario?.size ?? ScenarioSize.Small,
  });

  const noOpponentsErrorModal = useModal();

  const handleConfirmClick = useCallback(() => {
    if (!getOpponentCount(opponentSettings)) {
      noOpponentsErrorModal.open();

      return;
    }

    onConfirmClick?.();
  }, [noOpponentsErrorModal, onConfirmClick, opponentSettings]);

  return (
    <Window background={assets.background} height={459} label={t('title')} width={320} x={x} y={y}>
      <Text heading size="large" x={60} y={22}>
        {t('gameDifficultyHeading')}:
      </Text>
      <DifficultyMenu
        onChange={setSelectedDifficulty}
        onMouseDown={gameDifficultyInfoModal.onMouseDown}
        selectedOption={selectedDifficulty}
        x={19}
        y={36}
      />
      <Modal open={gameDifficultyInfoModal.isOpen} size={1} x={177} y={29}>
        {t('gameDifficultyInfo')}
      </Modal>
      <Text heading size="large" x={70} y={132}>
        {t('opponentSettingsHeading')}:
      </Text>
      {opponentSettings.map((setting, i) => (
        <OpponentSetting
          index={i}
          key={i}
          onClick={handleOpponentSettingClick}
          onMouseDown={opponentSettingInfoModal.onMouseDown}
          value={setting}
          x={55 + i * 72}
          y={149}
        />
      ))}
      <Modal open={opponentSettingInfoModal.isOpen} size={1} x={177} y={29}>
        {t('opponentSettingInfo')}
      </Modal>
      <Text heading size="large" x={26} y={254}>
        {t('playerColorHeading')}:
      </Text>
      <PlayerColorJewel
        onClick={handleColorClick}
        onMouseDown={playerColorInfoModal.onMouseDown}
        value={color}
        x={51}
        y={270}
      />
      <Modal open={playerColorInfoModal.isOpen} x={177} y={29}>
        {t('playerColorInfo')}
      </Modal>
      <Text heading size="large" x={169} y={254}>
        {t('kingOfTheHillHeading')}:
      </Text>
      <Checkbox
        assets={assets.checkbox}
        checked={kingOfTheHill}
        label={t('kingOfTheHillHeading')}
        onChange={toggleKingOfTheHill}
        onMouseDown={kingOfTheHillInfoModal.onMouseDown}
        x={210}
        y={272}
      />
      <Modal open={kingOfTheHillInfoModal.isOpen} size={2} x={177} y={29}>
        {t('kingOfTheHillInfo')}
      </Modal>
      <Text heading size="large" x={91} y={338}>
        {t('scenarioSelectionHeading')}:
      </Text>
      <ScenarioSelection
        onClick={onSelectScenarioClick}
        onMouseDown={scenarioSelectionInfoModal.onMouseDown}
        value={scenario?.name ?? ''}
        x={25}
        y={354}
      />
      <Modal open={scenarioSelectionInfoModal.isOpen} x={177} y={29}>
        {t('scenarioSelectionInfo')}
      </Modal>
      <Text onMouseDown={ratingInfoModal.onMouseDown} size="large" x={78} y={388}>
        {t('ratingHeading')}: {formatRating(rating)}
      </Text>
      <Modal open={ratingInfoModal.isOpen} size={1} x={177} y={29}>
        {t('ratingInfo')}
      </Modal>
      <Button
        assets={assets.okayButton}
        disabled={!scenario}
        label={t('confirmLabel')}
        onClick={handleConfirmClick}
        onMouseDown={confirmInfoModal.onMouseDown}
        x={24}
        y={412}
      />
      <Modal open={confirmInfoModal.isOpen} x={177} y={29}>
        {t('confirmInfo')}
      </Modal>
      <Modal
        onConfirmClick={noOpponentsErrorModal.close}
        open={noOpponentsErrorModal.isOpen}
        size={1}
        type="okay"
        x={177}
        y={61}
      >
        {t('noOpponentsError')}
      </Modal>
      <Button
        assets={assets.cancelButton}
        label={t('cancelLabel')}
        onClick={onCancelClick}
        onMouseDown={cancelInfoModal.onMouseDown}
        x={201}
        y={412}
      />
      <Modal open={cancelInfoModal.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </Window>
  );
};
