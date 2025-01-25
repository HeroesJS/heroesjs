import styled from 'styled-components';

import { Button, PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import { PlayerColor } from '@heroesjs/hmm1-core';

import { PlayerColorGem } from '../PlayerColorGem';

import { background, okay } from './assets';

interface Props extends PositionProps {
  readonly onConfirmClick?: () => void;
}

export const StandardScenarioInfoWindow = ({ onConfirmClick, x, y }: Props) => (
  <Root aria-label="Scenario Info Window" role="dialog" x={x} y={y}>
    <Text align="right" size="large" width={150} x={145} y={38}>
      Claw ( Easy )
    </Text>
    <Text align="right" size="large" width={115} x={181} y={72}>
      Normal
    </Text>
    <Text align="right" size="large" width={115} x={180} y={106}>
      Average
    </Text>
    <Text align="right" size="large" width={115} x={180} y={122}>
      Average
    </Text>
    <Text align="right" size="large" width={115} x={180} y={138}>
      Average
    </Text>
    <PlayerColorGem value={PlayerColor.Blue} x={124} y={153} />
    <Text align="right" size="large" width={115} x={180} y={208}>
      No
    </Text>
    <Text align="right" size="large" width={115} x={180} y={240}>
      60%
    </Text>
    <Text align="center" label="Size" size="large" width={90} x={25} y={315}>
      Small
    </Text>
    <Text align="center" label="Difficulty" size="large" width={90} x={182} y={315}>
      Easy
    </Text>
    <Text align="center" label="Description" size="large" width={245} x={36} y={345}>
      The Griffons will protect you until you are ready to make your move.
    </Text>
    <Button assets={okay} label="Okay" onClick={onConfirmClick} x={112} y={407} />
  </Root>
);

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
  height: 459,
  width: 322,
});
