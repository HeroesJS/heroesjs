import { range } from 'lodash';
import styled from 'styled-components';

import { PositionedComponent } from '../PositionedComponent';
import { SystemButton } from '../SystemButton';

import * as assets from './assets';

type ModalType = 'yesNo' | 'okayCancel' | 'okay' | 'cancel';

interface Props {
  readonly onCancelClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly size?: number;
  readonly type?: ModalType;
}

export const Modal = ({ onCancelClick, onConfirmClick, size = 1, type }: Props) => (
  <Root>
    <Header />
    {range(0, size).map((i) => (
      <Body key={i} />
    ))}
    <Footer />
    <Actions onCancelClick={onCancelClick} onConfirmClick={onConfirmClick} type={type} />
  </Root>
);

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

type ActionsProps = Pick<Props, 'onCancelClick' | 'onConfirmClick' | 'type'>;

const Actions = ({ onCancelClick, onConfirmClick, type }: ActionsProps) => {
  if (!type) {
    return null;
  }

  if (type === 'yesNo' || type === 'okayCancel') {
    return (
      <>
        <SystemButton onClick={onConfirmClick} type={type === 'yesNo' ? 'yes' : 'okay'} x={20} y={80} />
        <SystemButton onClick={onCancelClick} type={type === 'yesNo' ? 'no' : 'cancel'} x={180} y={80} />
      </>
    );
  }

  return <SystemButton onClick={type === 'okay' ? onConfirmClick : onCancelClick} type={type} x={95} y={80} />;
};
