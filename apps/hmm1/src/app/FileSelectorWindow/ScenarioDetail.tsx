import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import { ScenarioDifficulty, ScenarioSize } from '@heroesjs/hmm1-core';

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

interface Props extends PositionProps, Partial<ScenarioInfo> {}

export const ScenarioDetail = ({ description, difficulty, size, x, y }: Props) => (
  <ScenarioDetailRoot aria-label="Scenario Info" role="note" x={x} y={y}>
    <Text align="center" label="Size" size="large" width={90} x={25} y={35}>
      {size && scenarioSizeLabels[size]}
    </Text>
    <Text align="center" label="Difficulty" size="large" width={90} x={182} y={35}>
      {difficulty && scenarioDifficultyLabels[difficulty]}
    </Text>
    <Text align="center" label="Description" size="large" width={245} x={36} y={65}>
      {description}
    </Text>
  </ScenarioDetailRoot>
);

const ScenarioDetailRoot = styled(PositionedComponent)({
  background: `url(${scenarioInfoBackground})`,
  height: 141,
  width: 320,
});
