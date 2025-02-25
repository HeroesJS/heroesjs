import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PlayerColorJewel } from '@heroesjs/hmm1-adventure-ui';
import { Button, Checkbox, Modal, Text, useModal, useToggle, Window } from '@heroesjs/hmm1-base-ui';
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
import { DifficultyMenu } from './DifficultyMenu';
import { OpponentSetting } from './OpponentSetting';
import { ScenarioSelection } from './ScenarioSelection';

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
  const { t } = useTranslation('main', { keyPrefix: 'component.newGameWindow' });

  const gameDifficultyInfo = useModal();
  const opponentSettingInfo = useModal();
  const playerColorInfo = useModal();
  const kingOfTheHillInfo = useModal();
  const scenarioSelectionInfo = useModal();
  const ratingInfo = useModal();
  const confirmInfo = useModal();
  const cancelInfo = useModal();

  const [selectedDifficulty, setSelectedDifficulty] = useState(GameDifficulty.Normal);
  const [color, setColor] = useState(PlayerColor.Blue);
  const { toggle: toggleKingOfTheHill, value: kingOfTheHill } = useToggle();

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

  const noOpponentsError = useModal();

  const handleConfirmClick = useCallback(() => {
    if (!getOpponentCount(opponentSettings)) {
      noOpponentsError.open();

      return;
    }

    onConfirmClick?.();
  }, [noOpponentsError, onConfirmClick, opponentSettings]);

  return (
    <Window background={assets.background} height={459} label={t('title')} width={320} x={x} y={y}>
      <Text heading size="large" x={60} y={22}>
        {t('gameDifficultyHeading')}:
      </Text>
      <DifficultyMenu
        {...gameDifficultyInfo.handlers}
        onChange={setSelectedDifficulty}
        selectedOption={selectedDifficulty}
        x={19}
        y={36}
      />
      <Modal open={gameDifficultyInfo.isOpen} size={1} x={177} y={29}>
        {t('gameDifficultyInfo')}
      </Modal>
      <Text heading size="large" x={70} y={132}>
        {t('opponentSettingsHeading')}:
      </Text>
      {opponentSettings.map((setting, i) => (
        <OpponentSetting
          {...opponentSettingInfo.handlers}
          index={i}
          key={i}
          onClick={handleOpponentSettingClick}
          value={setting}
          x={55 + i * 72}
          y={149}
        />
      ))}
      <Modal open={opponentSettingInfo.isOpen} size={1} x={177} y={29}>
        {t('opponentSettingInfo')}
      </Modal>
      <Text heading size="large" x={26} y={254}>
        {t('playerColorHeading')}:
      </Text>
      <PlayerColorJewel {...playerColorInfo.handlers} onClick={handleColorClick} value={color} x={51} y={270} />
      <Modal open={playerColorInfo.isOpen} x={177} y={29}>
        {t('playerColorInfo')}
      </Modal>
      <Text heading size="large" x={169} y={254}>
        {t('kingOfTheHillHeading')}:
      </Text>
      <Checkbox
        {...kingOfTheHillInfo.handlers}
        assets={assets.checkbox}
        checked={kingOfTheHill}
        label={t('kingOfTheHillHeading')}
        onChange={toggleKingOfTheHill}
        x={210}
        y={272}
      />
      <Modal open={kingOfTheHillInfo.isOpen} size={2} x={177} y={29}>
        {t('kingOfTheHillInfo')}
      </Modal>
      <Text heading size="large" x={91} y={338}>
        {t('scenarioSelectionHeading')}:
      </Text>
      <ScenarioSelection
        {...scenarioSelectionInfo.handlers}
        onClick={onSelectScenarioClick}
        value={scenario?.name ?? ''}
        x={25}
        y={354}
      />
      <Modal open={scenarioSelectionInfo.isOpen} x={177} y={29}>
        {t('scenarioSelectionInfo')}
      </Modal>
      <Text {...ratingInfo.handlers} size="large" x={78} y={388}>
        {t('ratingHeading')}: {formatRating(rating)}
      </Text>
      <Modal open={ratingInfo.isOpen} size={1} x={177} y={29}>
        {t('ratingInfo')}
      </Modal>
      <Button
        {...confirmInfo.handlers}
        assets={assets.okayButton}
        disabled={!scenario}
        label={t('confirmLabel')}
        onClick={handleConfirmClick}
        x={24}
        y={412}
      />
      <Modal open={confirmInfo.isOpen} x={177} y={29}>
        {t('confirmInfo')}
      </Modal>
      <Modal onConfirmClick={noOpponentsError.close} open={noOpponentsError.isOpen} size={1} type="okay" x={177} y={61}>
        {t('noOpponentsError')}
      </Modal>
      <Button
        {...cancelInfo.handlers}
        assets={assets.cancelButton}
        label={t('cancelLabel')}
        onClick={onCancelClick}
        x={201}
        y={412}
      />
      <Modal open={cancelInfo.isOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </Window>
  );
};
