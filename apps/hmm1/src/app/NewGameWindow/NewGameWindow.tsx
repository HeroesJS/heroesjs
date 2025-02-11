import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PlayerColorJewel } from '@heroesjs/hmm1-adventure-ui';
import { Button, Checkbox, Modal, Text, useModal, useToggle, Window } from '@heroesjs/hmm1-base-ui';
import {
  calculateRating,
  formatRating,
  GameDifficulty,
  nextOption,
  opponentDifficulties,
  OpponentDifficulty,
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
  readonly onSelectScenarioClick?: () => void;
  readonly scenario?: ScenarioInfo;
  readonly x?: number;
  readonly y?: number;
}

export const NewGameWindow = ({ onCancelClick, onConfirmClick, onSelectScenarioClick, scenario, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.newGameWindow' });

  const { closeGameDifficultyInfo, gameDifficultyInfoIsOpen, openGameDifficultyInfo } = useModal('gameDifficultyInfo');
  const { closeOpponentSettingInfo, openOpponentSettingInfo, opponentSettingInfoIsOpen } =
    useModal('opponentSettingInfo');
  const { closePlayerColorInfo, openPlayerColorInfo, playerColorInfoIsOpen } = useModal('playerColorInfo');
  const { closeKingOfTheHillInfo, kingOfTheHillInfoIsOpen, openKingOfTheHillInfo } = useModal('kingOfTheHillInfo');
  const { closeScenarioSelectionInfo, openScenarioSelectionInfo, scenarioSelectionInfoIsOpen } =
    useModal('scenarioSelectionInfo');
  const { closeRatingInfo, openRatingInfo, ratingInfoIsOpen } = useModal('ratingInfo');
  const { closeConfirmInfo, confirmInfoIsOpen, openConfirmInfo } = useModal('confirmInfo');
  const { cancelInfoIsOpen, closeCancelInfo, openCancelInfo } = useModal('cancelInfo');

  const [selectedDifficulty, setSelectedDifficulty] = useState(GameDifficulty.Normal);
  const [opponentSettings, setOpponentSettings] = useState(new Array(3).fill(OpponentDifficulty.Average));
  const [color, setColor] = useState(PlayerColor.Blue);
  const { toggle: toggleKingOfTheHill, value: kingOfTheHill } = useToggle();

  const handleOpponentSettingClick = (index: number, value: OpponentDifficulty) =>
    setOpponentSettings(opponentSettings.map((v, i) => (i === index ? nextOption(opponentDifficulties, value) : v)));

  const handleColorClick = () => setColor(nextOption(playerColors, color));

  const rating = calculateRating({
    kingOfTheHill,
    opponentSettings,
    scenarioDifficulty: scenario?.difficulty ?? ScenarioDifficulty.Easy,
    scenarioSize: scenario?.size ?? ScenarioSize.Small,
  });

  return (
    <>
      <Window background={assets.background} height={459} label={t('title')} width={320} x={x} y={y}>
        <Text heading size="large" x={60} y={22}>
          {t('gameDifficultyHeading')}:
        </Text>
        <DifficultyMenu
          onChange={setSelectedDifficulty}
          onInfoClose={closeGameDifficultyInfo}
          onInfoOpen={openGameDifficultyInfo}
          selectedOption={selectedDifficulty}
          x={19}
          y={36}
        />
        <Text heading size="large" x={70} y={132}>
          {t('opponentSettingsHeading')}:
        </Text>
        {opponentSettings.map((setting, i) => (
          <OpponentSetting
            index={i}
            key={i}
            onClick={handleOpponentSettingClick}
            onRightButtonDown={openOpponentSettingInfo}
            onRightButtonUp={closeOpponentSettingInfo}
            value={setting}
            x={55 + i * 72}
            y={149}
          />
        ))}
        <Text heading size="large" x={26} y={254}>
          {t('playerColorHeading')}:
        </Text>
        <PlayerColorJewel
          onClick={handleColorClick}
          onRightButtonDown={openPlayerColorInfo}
          onRightButtonUp={closePlayerColorInfo}
          value={color}
          x={51}
          y={270}
        />
        <Text heading size="large" x={169} y={254}>
          {t('kingOfTheHillHeading')}:
        </Text>
        <Checkbox
          assets={assets.checkbox}
          checked={kingOfTheHill}
          label={t('kingOfTheHillHeading')}
          onChange={toggleKingOfTheHill}
          onRightButtonDown={openKingOfTheHillInfo}
          onRightButtonUp={closeKingOfTheHillInfo}
          x={210}
          y={272}
        />
        <Text heading size="large" x={91} y={338}>
          {t('scenarioSelectionHeading')}:
        </Text>
        <ScenarioSelection
          onClick={onSelectScenarioClick}
          onRightButtonDown={openScenarioSelectionInfo}
          onRightButtonUp={closeScenarioSelectionInfo}
          value={scenario?.name ?? ''}
          x={25}
          y={354}
        />
        <Text onRightButtonDown={openRatingInfo} onRightButtonUp={closeRatingInfo} size="large" x={78} y={388}>
          {t('ratingHeading')}: {formatRating(rating)}
        </Text>
        <Button
          assets={assets.okayButton}
          disabled={!scenario}
          label={t('confirmLabel')}
          onClick={onConfirmClick}
          onRightButtonDown={openConfirmInfo}
          onRightButtonUp={closeConfirmInfo}
          x={24}
          y={412}
        />
        <Button
          assets={assets.cancelButton}
          label={t('cancelLabel')}
          onClick={onCancelClick}
          onRightButtonDown={openCancelInfo}
          onRightButtonUp={closeCancelInfo}
          x={201}
          y={412}
        />
      </Window>
      <Modal open={gameDifficultyInfoIsOpen} size={1} x={177} y={29}>
        {t('gameDifficultyInfo')}
      </Modal>
      <Modal open={opponentSettingInfoIsOpen} size={1} x={177} y={29}>
        {t('opponentSettingInfo')}
      </Modal>
      <Modal open={playerColorInfoIsOpen} x={177} y={29}>
        {t('playerColorInfo')}
      </Modal>
      <Modal open={kingOfTheHillInfoIsOpen} size={2} x={177} y={29}>
        {t('kingOfTheHillInfo')}
      </Modal>
      <Modal open={scenarioSelectionInfoIsOpen} x={177} y={29}>
        {t('scenarioSelectionInfo')}
      </Modal>
      <Modal open={ratingInfoIsOpen} size={1} x={177} y={29}>
        {t('ratingInfo')}
      </Modal>
      <Modal open={confirmInfoIsOpen} x={177} y={29}>
        {t('confirmInfo')}
      </Modal>
      <Modal open={cancelInfoIsOpen} x={177} y={29}>
        {t('cancelInfo')}
      </Modal>
    </>
  );
};
