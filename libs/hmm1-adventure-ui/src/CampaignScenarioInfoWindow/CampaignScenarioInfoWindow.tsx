import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';

import { background, numbers, okay, restart } from './assets';

interface ScenarioInfo {
  readonly description: string;
  readonly name: string;
  readonly number: number;
}

interface Props extends PositionProps {
  readonly allowRestart?: boolean;
  readonly onConfirmClick?: () => void;
  readonly onRestartClick?: () => void;
  readonly scenario: ScenarioInfo;
}

export const CampaignScenarioInfoWindow = ({ allowRestart, onConfirmClick, onRestartClick, scenario, x, y }: Props) => {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.campaignScenarioInfoWindow' });

  return (
    <Root aria-label={t('title')} role="dialog" x={x} y={y}>
      <ScenarioNumber
        aria-label={t('scenarioNumber', { number: scenario.number })}
        as="img"
        src={numbers[scenario.number - 1]}
        x={150}
        y={49}
      />
      <Text label={t('scenarioName')} size="large" x={185} y={50}>
        {scenario.name}
      </Text>
      <Text align="center" label={t('scenarioDescription')} size="large" width={374} x={23} y={80}>
        {scenario.description}
      </Text>
      <Button assets={okay} label={t('confirmLabel')} onClick={onConfirmClick} x={allowRestart ? 27 : 163} y={234} />
      {allowRestart && <Button assets={restart} label={t('restartLabel')} onClick={onRestartClick} x={180} y={234} />}
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
  boxShadow: '17px 16px rgba(0 0 0 / 30%), 1px 0 #000',
  height: 287,
  width: 426,
});

const ScenarioNumber = styled(PositionedComponent)({});
