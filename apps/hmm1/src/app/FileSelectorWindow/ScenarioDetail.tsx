import styled from 'styled-components';

import { Text, withPosition } from '../base';
import { ScenarioDifficulty, ScenarioSize } from '../core';

import scenarioInfoBackground from './assets/scenario-info-background.jpg';

const scenarioSizeLabels: Readonly<Record<ScenarioSize, string>> = {
  [ScenarioSize.Large]: 'Large',
  [ScenarioSize.Medium]: 'Medium',
  [ScenarioSize.Small]: 'Small',
};

const scenarioDifficultyLabels: Readonly<Record<ScenarioDifficulty, string>> = {
  [ScenarioDifficulty.Easy]: 'Easy',
  [ScenarioDifficulty.Impossible]: 'Impossible',
  [ScenarioDifficulty.Normal]: 'Normal',
  [ScenarioDifficulty.Tough]: 'Tough',
};

export interface ScenarioInfo {
  readonly description: string;
  readonly difficulty: ScenarioDifficulty;
  readonly size: ScenarioSize;
}

interface Props extends Partial<ScenarioInfo> {
  readonly className?: string;
}

export const ScenarioDetail = withPosition(({ className, description, difficulty, size }: Props) => (
  <ScenarioDetailRoot className={className}>
    <Text align="center" size="large" width={90} x={25} y={35}>
      {size && scenarioSizeLabels[size]}
    </Text>
    <Text align="center" size="large" width={90} x={182} y={35}>
      {difficulty && scenarioDifficultyLabels[difficulty]}
    </Text>
    <Text align="center" size="large" width={245} x={36} y={65}>
      {description}
    </Text>
  </ScenarioDetailRoot>
));

const ScenarioDetailRoot = styled.div({
  background: `url(${scenarioInfoBackground})`,
  height: 141,
  width: 320,
});
