import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PlayerColorJewel } from '@heroesjs/hmm1-adventure-ui';
import {
  Button,
  type ButtonAssets,
  Checkbox,
  type CheckboxAssets,
  Text,
  useToggle,
  Window,
} from '@heroesjs/hmm1-base-ui';
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

import background from './assets/background.jpg';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import checkboxChecked from './assets/checkbox/checked.jpg';
import checkboxUnchecked from './assets/checkbox/unchecked.jpg';
import okayDisabled from './assets/okay/disabled.png';
import okayEnabled from './assets/okay/enabled.png';
import { DifficultyMenu } from './DifficultyMenu';
import { OpponentSetting } from './OpponentSetting';
import { ScenarioSelection } from './ScenarioSelection';

const kingOfTheHillCheckboxAssets: CheckboxAssets = {
  checked: checkboxChecked,
  unchecked: checkboxUnchecked,
};

const okayButtonAssets: ButtonAssets = {
  disabled: okayDisabled,
  enabled: okayEnabled,
};

const cancelButtonAssets: ButtonAssets = {
  disabled: cancelDisabled,
  enabled: cancelEnabled,
};

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
    <Window background={background} height={459} label={t('title')} width={320} x={x} y={y}>
      <Text heading size="large" x={60} y={22}>
        {t('gameDifficultyHeading')}:
      </Text>
      <DifficultyMenu onChange={setSelectedDifficulty} selectedOption={selectedDifficulty} x={19} y={36} />
      <Text heading size="large" x={70} y={132}>
        {t('opponentSettingsHeading')}:
      </Text>
      {opponentSettings.map((setting, i) => (
        <OpponentSetting
          index={i}
          key={i}
          onClick={handleOpponentSettingClick}
          value={setting}
          x={55 + i * 72}
          y={149}
        />
      ))}
      <Text heading size="large" x={26} y={254}>
        {t('playerColorHeading')}:
      </Text>
      <PlayerColorJewel onClick={handleColorClick} value={color} x={51} y={270} />
      <Text heading size="large" x={169} y={254}>
        {t('kingOfTheHillHeading')}:
      </Text>
      <Checkbox
        assets={kingOfTheHillCheckboxAssets}
        checked={kingOfTheHill}
        label={t('kingOfTheHillHeading')}
        onChange={toggleKingOfTheHill}
        x={210}
        y={272}
      />
      <Text heading size="large" x={91} y={338}>
        {t('scenarioSelectionHeading')}:
      </Text>
      <ScenarioSelection onClick={onSelectScenarioClick} value={scenario?.name ?? ''} x={25} y={354} />
      <Text size="large" x={78} y={388}>
        {t('ratingHeading')}: {formatRating(rating)}
      </Text>
      <Button
        assets={okayButtonAssets}
        disabled={!scenario}
        label={t('confirmLabel')}
        onClick={onConfirmClick}
        x={24}
        y={412}
      />
      <Button assets={cancelButtonAssets} label={t('cancelLabel')} onClick={onCancelClick} x={201} y={412} />
    </Window>
  );
};
