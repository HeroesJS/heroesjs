import { range } from 'lodash';
import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Backdrop } from '../Backdrop';
import { Button } from '../Button';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { body, cancel, footer, header, inputBackground, okay, okayCancel, yesNo } from './assets';

type ModalType = 'okay' | 'cancel' | 'yesNo' | 'okayCancel';

interface ModalProps extends PositionProps {
  readonly inputLabel?: string;
  readonly inputValue?: string;
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onInputValueChange?: (value: string) => void;
  readonly open: boolean;
  readonly showInput?: boolean;
  readonly size?: number;
  readonly type?: ModalType;
}

export function Modal({
  children,
  inputLabel,
  inputValue,
  onCancelClick,
  onConfirmClick,
  onInputValueChange,
  open,
  showInput,
  size = 0,
  type,
  x,
  y,
}: PropsWithChildren<ModalProps>) {
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
        {showInput && (
          <Input
            autoFocus
            label={inputLabel}
            onChange={onInputValueChange}
            value={inputValue}
            x={17}
            y={42 + size * 45}
          />
        )}
        <Actions onCancelClick={onCancelClick} onConfirmClick={onConfirmClick} type={type} y={77 + size * 45} />
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

const Input = styled(TextInput)({
  backgroundImage: `url(${inputBackground})`,
  height: 20,
  paddingLeft: 15,
  paddingRight: 15,
  width: 251,
});

type ActionsProps = Pick<ModalProps, 'onCancelClick' | 'onConfirmClick' | 'type' | 'y'>;

function Actions({ onCancelClick, onConfirmClick, type, y }: ActionsProps) {
  if (!type) {
    return null;
  }

  if (type === 'yesNo' || type === 'okayCancel') {
    return (
      <>
        <Button
          assets={type === 'yesNo' ? yesNo.yes : okayCancel.okay}
          label={type === 'yesNo' ? 'Yes' : 'Okay'}
          onClick={onConfirmClick}
          x={23}
          y={y}
        />
        <Button
          assets={type === 'yesNo' ? yesNo.no : okayCancel.cancel}
          label={type === 'yesNo' ? 'No' : 'Cancel'}
          onClick={onCancelClick}
          x={165}
          y={y}
        />
      </>
    );
  }

  return (
    <Button
      assets={type === 'okay' ? okay : cancel}
      label={type === 'okay' ? 'Okay' : 'Cancel'}
      onClick={type === 'okay' ? onConfirmClick : onCancelClick}
      x={94}
      y={y}
    />
  );
}
