import { useState } from 'react';
import styled from 'styled-components';

import {
  calculateRating,
  GameDifficulty,
  opponentDifficulties,
  OpponentDifficulty,
  ScenarioDifficulty,
  ScenarioSize,
} from '@heroesjs/hmm1-core';

import { Button, type ButtonAssets, Checkbox, type CheckboxAssets, Text, useToggle } from '../base';

import background from './assets/background.jpg';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import checkboxChecked from './assets/checkbox/checked.jpg';
import checkboxUnchecked from './assets/checkbox/unchecked.jpg';
import okayDisabled from './assets/okay/disabled.png';
import okayEnabled from './assets/okay/enabled.png';
import { BannerColor, PlayerColor, playerColors } from './BannerColor';
import { DifficultyMenu } from './DifficultyMenu';
import { OpponentSetting } from './OpponentSetting';
import { ScenarioSelection } from './ScenarioSelection';

function nextOption<T>(values: readonly T[], currentValue: T): T {
  return values[(values.indexOf(currentValue) + 1) % values.length] ?? currentValue;
}

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
    <Root aria-label="New Game Window" role="dialog" x={x} y={y}>
      <Text heading size="large" x={60} y={22}>
        Choose Game Difficulty:
      </Text>
      <DifficultyMenu onChange={setSelectedDifficulty} selectedOption={selectedDifficulty} x={19} y={36} />
      <Text heading size="large" x={70} y={132}>
        Customize Opponents:
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
        Choose Color:
      </Text>
      <BannerColor onClick={handleColorClick} value={color} x={51} y={270} />
      <Text heading size="large" x={169} y={254}>
        King of the Hill:
      </Text>
      <Checkbox
        assets={kingOfTheHillCheckboxAssets}
        checked={kingOfTheHill}
        label="King of the Hill"
        onChange={toggleKingOfTheHill}
        x={210}
        y={272}
      />
      <Text heading size="large" x={91} y={338}>
        Choose Scenario:
      </Text>
      <ScenarioSelection onClick={onSelectScenarioClick} value={scenario?.name ?? ''} x={25} y={354} />
      <Text size="large" x={78} y={388}>
        Difficulty Rating: {rating}%
      </Text>
      <Button assets={okayButtonAssets} disabled={!scenario} label="Okay" onClick={onConfirmClick} x={24} y={412} />
      <Button assets={cancelButtonAssets} label="Cancel" onClick={onCancelClick} x={201} y={412} />
    </Root>
  );
};

const Root = styled.div<Pick<Props, 'x' | 'y'>>(({ x, y }) => ({
  background: `url(${background})`,
  height: 459,
  left: x,
  position: 'absolute',
  top: y,
  width: 320,
}));
