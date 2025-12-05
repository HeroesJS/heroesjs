import { range } from 'lodash';
import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Backdrop } from '../Backdrop';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { body, footer, header } from './assets';

interface ModalProps extends PositionProps {
  readonly open: boolean;
  readonly size?: number;
}

export function Modal({ children, open, size = 0, x, y }: PropsWithChildren<ModalProps>) {
  if (!open) {
    return null;
  }

  return createPortal(
    <Backdrop>
      <Root aria-labelledby="modalContent" role="dialog" x={x} y={y}>
        <Shadow />
        <Header />
        {range(0, size).map((i) => (
          <Body key={i} />
        ))}
        <Footer />
        <Text align="center" id="modalContent" size="large" width={239} x={23} y={53}>
          {children}
        </Text>
      </Root>
    </Backdrop>,
    document.body
  );
}

const Root = styled(PositionedComponent)({
  width: 2 * 143,
});

const MirroredBackground = styled('div')({
  backgroundSize: 0,
  position: 'relative',
  '&:before, &:after': {
    backgroundImage: 'inherit',
    backgroundRepeat: 'no-repeat',
    content: '""',
    height: '100%',
    position: 'absolute',
    width: '50%',
  },
  '&::before': {
    left: 0,
    transform: 'scaleX(-1)',
  },
  '&::after': {
    right: 0,
  },
});

const Header = styled(MirroredBackground)({
  backgroundImage: `url(${header})`,
  height: 77,
});

const Body = styled(MirroredBackground)({
  backgroundImage: `url(${body})`,
  height: 45,
});

const Footer = styled(MirroredBackground)({
  backgroundImage: `url(${footer})`,
  height: 48,
});

const Shadow = styled.div({
  bottom: 2,
  boxShadow: '17px 16px rgba(0 0 0 / 30%)',
  left: 3,
  position: 'absolute',
  right: 5,
  top: 27,
});
