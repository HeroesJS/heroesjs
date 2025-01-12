import styled from 'styled-components';

import { Button, Text, withPosition } from '../base';
import { ScenarioDifficulty, ScenarioSize } from '../core';

import background from './assets/background.jpg';
import cancelDisabled from './assets/cancel/disabled.png';
import cancelEnabled from './assets/cancel/enabled.png';
import inputBackground from './assets/input-background.jpg';
import okayDisabled from './assets/okay/disabled.png';
import okayEnabled from './assets/okay/enabled.png';
import scenarioInfoBackground from './assets/scenario-info-background.jpg';

const scenarioSizeLabels: Readonly<Record<ScenarioSize, string>> = {
  [ScenarioSize.Large]: 'Large',
  [ScenarioSize.Medium]: 'Medium',
  [ScenarioSize.Small]: 'Small',
};

const scenarioDifficultyLabels: Readonly<Record<ScenarioDifficulty, string>> = {
  [ScenarioDifficulty.Easy]: 'Easy',
  [ScenarioDifficulty.Hard]: 'Hard',
  [ScenarioDifficulty.Normal]: 'Normal',
  [ScenarioDifficulty.Tough]: 'Tough',
};

interface ScenarioInfo {
  readonly description: string;
  readonly difficulty: ScenarioDifficulty;
  readonly size: ScenarioSize;
}

interface Props {
  readonly className?: string;
  readonly items?: readonly string[];
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly scenarioInfo?: ScenarioInfo;
  readonly selectedItem?: string;
}

export const FileSelectorWindow = withPosition(
  ({ className, items = [], onCancelClick, onConfirmClick, scenarioInfo, selectedItem }: Props) => (
    <Root className={className}>
      <Text size="large" x={111} y={19}>
        File to Load:
      </Text>
      {items.map((item, i) => (
        <Text align="center" selected={item === selectedItem} size="large" width={200} x={59} y={42 + i * 20}>
          {item}
        </Text>
      ))}
      <Input x={48} y={253}>
        <Text size="large" x={59} y={1}>
          Claw ( Easy )
        </Text>
      </Input>
      <Button
        assets={{
          disabled: okayDisabled,
          enabled: okayEnabled,
        }}
        label="Okay"
        onClick={onConfirmClick}
        x={36}
        y={280}
      />
      <Button
        assets={{
          disabled: cancelDisabled,
          enabled: cancelEnabled,
        }}
        label="Cancel"
        onClick={onCancelClick}
        x={189}
        y={280}
      />
      {scenarioInfo && (
        <ScenarioInfoRoot y={318}>
          <Text size="large" x={47} y={36}>
            {scenarioSizeLabels[scenarioInfo.size]}
          </Text>
          <Text size="large" x={207} y={36}>
            {scenarioDifficultyLabels[scenarioInfo.difficulty]}
          </Text>
          <Text align="center" size="large" width={269} x={24} y={66}>
            {scenarioInfo.description}
          </Text>
        </ScenarioInfoRoot>
      )}
    </Root>
  ),
);

const Root = styled.div<Pick<Props, 'scenarioInfo'>>(({ scenarioInfo }) => ({
  background: `url(${background})`,
  height: scenarioInfo ? 380 : 331,
  width: 320,
}));

const Input = withPosition(
  styled.div({
    background: `url(${inputBackground})`,
    height: 19,
    width: 225,
  }),
);

const ScenarioInfoRoot = withPosition(
  styled.div({
    background: `url(${scenarioInfoBackground})`,
    height: 141,
    width: 320,
  }),
);
