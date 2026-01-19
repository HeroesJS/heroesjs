import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

export function Backdrop({ children }: PropsWithChildren) {
  return <Root>{children}</Root>;
}

const Root = styled('div')({
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
});
