import { useState } from 'react';
import styled from 'styled-components';

import { Button, Checkbox, Text, useToggle } from '../base';

import background from './assets/background.jpg';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import checkboxChecked from './assets/checkbox/checked.jpg';
import checkboxUnchecked from './assets/checkbox/unchecked.jpg';
import okayDisabled from './assets/okay/disabled.png';
import okayEnabled from './assets/okay/enabled.png';
import { BannerColor, PlayerColor, playerColors } from './BannerColor';
import { DifficultyOption, difficultyOptions, GameDifficulty } from './DifficultyOption';
import { opponentDifficulties, OpponentDifficulty, OpponentSetting } from './OpponentSetting';
import { ScenarioSelection } from './ScenarioSelection';

function nextOption<T>(values: readonly T[], currentValue: T): T {
  return values[(values.indexOf(currentValue) + 1) % values.length] ?? currentValue;
}

interface Props {
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onSelectScenarioClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export const NewGameWindow = ({ onCancelClick, onConfirmClick, onSelectScenarioClick, x, y }: Props) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(GameDifficulty.Normal);
  const [opponentSettings, setOpponentSettings] = useState(new Array(3).fill(OpponentDifficulty.Average));
  const [color, setColor] = useState(PlayerColor.Blue);
  const { toggle: toggleKingOfTheHill, value: kingOfTheHill } = useToggle();

  const handleOpponentSettingClick = (index: number, value: OpponentDifficulty) =>
    setOpponentSettings(opponentSettings.map((v, i) => (i === index ? nextOption(opponentDifficulties, value) : v)));

  const handleColorClick = () => setColor(nextOption(playerColors, color));

  return (
    <Root aria-label="New Game Window" role="dialog" x={x} y={y}>
      <Text size="large" x={60} y={23}>
        Choose Game Difficulty:
      </Text>
      {difficultyOptions.map((difficulty, i) => (
        <DifficultyOption
          key={difficulty}
          onClick={setSelectedDifficulty}
          selected={difficulty === selectedDifficulty}
          value={difficulty}
          x={19 + i * 71}
          y={36}
        />
      ))}
      <Text size="large" x={70} y={133}>
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
      <Text size="large" x={26} y={255}>
        Choose Color:
      </Text>
      <BannerColor onClick={handleColorClick} value={color} x={51} y={270} />
      <Text size="large" x={169} y={255}>
        King of the Hill:
      </Text>
      <Checkbox
        assets={{
          checked: checkboxChecked,
          unchecked: checkboxUnchecked,
        }}
        checked={kingOfTheHill}
        onChange={toggleKingOfTheHill}
        x={210}
        y={272}
      />
      <Text size="large" x={91} y={339}>
        Choose Scenario:
      </Text>
      <ScenarioSelection onClick={onSelectScenarioClick} value="Claw ( Easy )" x={25} y={354} />
      <Text size="large" x={78} y={389}>
        Difficulty Rating: 60%
      </Text>
      <Button
        assets={{
          disabled: okayDisabled,
          enabled: okayEnabled,
        }}
        label="Okay"
        onClick={onConfirmClick}
        x={24}
        y={412}
      />
      <Button
        assets={{
          disabled: cancelDisabled,
          enabled: cancelEnabled,
        }}
        label="Cancel"
        onClick={onCancelClick}
        x={201}
        y={412}
      />
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
