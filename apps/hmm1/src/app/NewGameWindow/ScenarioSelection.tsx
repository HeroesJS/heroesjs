import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, type ButtonAssets, Input, PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';

import background from './assets/scenario-selection-background.jpg';
import selectDisabled from './assets/select/disabled.png';
import selectEnabled from './assets/select/enabled.png';

const selectButtonAssets: ButtonAssets = {
  disabled: selectDisabled,
  enabled: selectEnabled,
};

interface Props extends PositionProps {
  readonly onClick?: () => void;
  readonly value: string;
}

export const ScenarioSelection = ({ onClick, value, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.newGameWindow' });

  return (
    <Root onClick={onClick} x={x} y={y}>
      <Input background={background} label={t('scenarioInputLabel')} value={value} width={246} />
      <Button assets={selectButtonAssets} label={t('selectScenarioLabel')} onClick={onClick} x={248} y={0} />
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
});
