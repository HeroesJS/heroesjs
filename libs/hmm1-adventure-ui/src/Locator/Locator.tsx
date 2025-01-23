import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';

import { backgrounds, selection } from './assets';

interface Props extends PositionProps {
  readonly index?: number;
  readonly onClick?: () => void;
  readonly selected?: boolean;
}

export const Locator = ({ children, index = 0, onClick, selected, x, y }: PropsWithChildren<Props>) => (
  <Root background={backgrounds[index % backgrounds.length]} onClick={onClick} x={x} y={y}>
    {children}
    {selected && <PositionedComponent alt="" as="img" src={selection} x={0} y={0} />}
  </Root>
);

interface RootProps {
  readonly background: string;
}

const Root = styled(PositionedComponent)<RootProps>(({ background }) => ({
  background: `url(${background})`,
  backgroundPosition: '1px 1px',
  backgroundRepeat: 'no-repeat',
  height: 32,
  width: 56,
}));
