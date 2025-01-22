import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';
import type { HeroId } from '@heroesjs/hmm1-core';

import { background, mobility as mobilityAssets, portraits } from './assets';

interface Props extends PositionProps {
  readonly hero: HeroId;
  readonly mobility?: number;
}

export const HeroLocator = ({ hero, mobility = 0, x, y }: Props) => (
  <Root x={x} y={y}>
    <PositionedComponent alt="" as="img" src={mobilityAssets[mobility]} />
    <PositionedComponent alt="" as="img" src={portraits[hero]} x={8} />
  </Root>
);

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
  height: 22,
  position: 'relative',
  width: 46,
});
