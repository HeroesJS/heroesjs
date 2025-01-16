import styled from 'styled-components';

import { Button, PositionedComponent, type PositionProps, Text } from '../base';

import background from './assets/scenario-selection-background.jpg';
import selectDisabled from './assets/select/disabled.png';
import selectEnabled from './assets/select/enabled.png';

interface Props extends PositionProps {
  readonly onClick?: () => void;
  readonly value: string;
}

export const ScenarioSelection = ({ onClick, value, x, y }: Props) => (
  <Root onClick={onClick} x={x} y={y}>
    <Text align="center" size="large" width={246} x={0} y={1}>
      {value}
    </Text>
    <Button
      assets={{
        disabled: selectDisabled,
        enabled: selectEnabled,
      }}
      label="Select Scenario"
      onClick={onClick}
      x={248}
      y={0}
    />
  </Root>
);

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
});
