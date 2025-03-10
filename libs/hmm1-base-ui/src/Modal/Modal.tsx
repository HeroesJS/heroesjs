import { range } from 'lodash';
import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Backdrop } from '../Backdrop';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { SystemButton } from '../SystemButton';
import { Text } from '../Text';

import * as assets from './assets';

type ModalType = 'yesNo' | 'okayCancel' | 'okay' | 'cancel';

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly open?: boolean;
  readonly size?: number;
  readonly type?: ModalType;
}

export const Modal = ({
  children,
  onCancelClick,
  onConfirmClick,
  open = false,
  size = 0,
  type,
  x,
  y,
}: PropsWithChildren<Props>) => {
  if (!open) {
    return null;
  }

  return createPortal(
    <Backdrop>
      <Root aria-labelledby="modalLabel" role="dialog" x={x} y={y}>
        <Header />
        {range(0, size).map((i) => (
          <Body key={i} />
        ))}
        <Footer />
        <Shadow />
        <Text align="center" id="modalLabel" size="large" width={239} x={23} y={53}>
          {children}
        </Text>
        <Actions onCancelClick={onCancelClick} onConfirmClick={onConfirmClick} type={type} y={77 + size * 45} />
      </Root>
    </Backdrop>,
    document.body,
  );
};

const Root = styled(PositionedComponent)({
  width: 2 * 143,
});

const MirroredBackground = styled.div({
  '&::after': {
    right: 0,
  },
  '&::before': {
    left: 0,
    transform: 'scaleX(-1)',
  },
  '&:before,&:after': {
    backgroundImage: 'inherit',
    backgroundRepeat: 'no-repeat',
    content: '""',
    height: '100%',
    position: 'absolute',
    width: '50%',
  },
  backgroundSize: 0,
  position: 'relative',
});

const Header = styled(MirroredBackground)({
  backgroundImage: `url(${assets.header})`,
  height: 77,
});

const Body = styled(MirroredBackground)({
  backgroundImage: `url(${assets.body})`,
  height: 45,
});

const Footer = styled(MirroredBackground)({
  backgroundImage: `url(${assets.footer})`,
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

type ActionsProps = Pick<Props, 'onCancelClick' | 'onConfirmClick' | 'type' | 'y'>;

const Actions = ({ onCancelClick, onConfirmClick, type, y }: ActionsProps) => {
  if (!type) {
    return null;
  }

  if (type === 'yesNo' || type === 'okayCancel') {
    return (
      <>
        <SystemButton onClick={onConfirmClick} type={type === 'yesNo' ? 'yes' : 'okay'} x={23} y={y} />
        <SystemButton onClick={onCancelClick} type={type === 'yesNo' ? 'no' : 'cancel'} x={165} y={y} />
      </>
    );
  }

  return <SystemButton onClick={type === 'okay' ? onConfirmClick : onCancelClick} type={type} x={94} y={y} />;
};
