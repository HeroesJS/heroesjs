import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import type { ScenarioDifficulty, ScenarioSize } from '@heroesjs/hmm1-core';

import scenarioInfoBackground from './assets/scenario-info-background.jpg';

export interface ScenarioInfo {
  readonly description: string;
  readonly difficulty: ScenarioDifficulty;
  readonly size: ScenarioSize;
}

interface Props extends PositionProps, Partial<ScenarioInfo> {}

export const ScenarioDetail = ({ description, difficulty, size, x, y }: Props) => {
  const { t } = useTranslation(['main', 'core'], { keyPrefix: 'fileSelectorWindow' });

  return (
    <ScenarioDetailRoot aria-label={t('scenarioInfo')} role="note" x={x} y={y}>
      <Text align="center" label={t('scenarioSize')} size="large" width={90} x={25} y={35}>
        {size && t(`core:scenarioSize.${size}`)}
      </Text>
      <Text align="center" label={t('scenarioDifficulty')} size="large" width={90} x={182} y={35}>
        {difficulty && t(`core:scenarioDifficulty.${difficulty}`)}
      </Text>
      <Text align="center" label={t('scenarioDescription')} size="large" width={245} x={36} y={65}>
        {description}
      </Text>
    </ScenarioDetailRoot>
  );
};

const ScenarioDetailRoot = styled(PositionedComponent)({
  background: `url(${scenarioInfoBackground})`,
  height: 141,
  width: 320,
});
