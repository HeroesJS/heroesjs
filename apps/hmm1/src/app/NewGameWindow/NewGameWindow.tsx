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
import selectDisabled from './assets/select/disabled.png';
import selectEnabled from './assets/select/enabled.png';
import { DifficultyOption, difficultyOptions, GameDifficulty } from './DifficultyOption';

interface Props {
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onSelectScenarioClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export const NewGameWindow = ({ onCancelClick, onConfirmClick, onSelectScenarioClick, x, y }: Props) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(GameDifficulty.Normal);
  const { toggle: toggleKingOfTheHill, value: kingOfTheHill } = useToggle();

  return (
    <Root aria-label="New Game Window" role="dialog" x={x} y={y}>
      <Text size="large" x={60} y={23}>
        Choose Game Difficulty:
      </Text>
      {difficultyOptions.map((difficulty, i) => (
        <DifficultyOption
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
      <Text size="large" x={26} y={255}>
        Choose Color:
      </Text>
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
      <Text size="large" x={95} y={356}>
        Claw ( Easy )
      </Text>
      <Button
        assets={{
          disabled: selectDisabled,
          enabled: selectEnabled,
        }}
        label="Select Scenario"
        onClick={onSelectScenarioClick}
        x={273}
        y={354}
      />
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
