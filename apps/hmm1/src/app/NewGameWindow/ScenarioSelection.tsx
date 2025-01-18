import styled from 'styled-components';

import { Button, type ButtonAssets, Input, PositionedComponent, type PositionProps } from '../base';

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

export const ScenarioSelection = ({ onClick, value, x, y }: Props) => (
  <Root onClick={onClick} x={x} y={y}>
    <Input background={background} label="Scenario" value={value} width={246} />
    <Button assets={selectButtonAssets} label="Select Scenario" onClick={onClick} x={248} y={0} />
  </Root>
);

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
});
