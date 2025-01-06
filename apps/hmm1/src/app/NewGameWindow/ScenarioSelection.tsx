import styled from 'styled-components';

import { Button, Text, withPosition } from '../base';

import background from './assets/scenario-selection-background.jpg';
import selectDisabled from './assets/select/disabled.png';
import selectEnabled from './assets/select/enabled.png';

interface Props {
  readonly className?: string;
  readonly onClick?: () => void;
  readonly value: string;
}

export const ScenarioSelection = withPosition(({ className, onClick, value }: Props) => (
  <Root className={className}>
    <Text align="center" size="large" width={246} x={0} y={2}>
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
));

const Root = styled.div({
  background: `url(${background})`,
});
