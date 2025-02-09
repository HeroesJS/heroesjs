import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, Input, PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onClick?: () => void;
  readonly value: string;
}

export const ScenarioSelection = ({ onClick, value, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.newGameWindow' });

  return (
    <Root onClick={onClick} x={x} y={y}>
      <Input
        background={assets.scenarioSelectionBackground}
        label={t('scenarioInputLabel')}
        value={value}
        width={246}
      />
      <Button assets={assets.selectButton} label={t('selectScenarioLabel')} onClick={onClick} x={248} y={0} />
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  background: `url(${assets.scenarioSelectionBackground})`,
});
