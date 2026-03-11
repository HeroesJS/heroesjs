import { useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button } from '../Button';
import { PositionedComponent } from '../PositionedComponent';
import { down, thumb, up } from './assets';

interface ScrollbarProps {
  readonly height: number;
  readonly onDownClick?: () => void;
  readonly onUpClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function Scrollbar({ height, onDownClick, onUpClick, x, y }: ScrollbarProps) {
  const { t } = useTranslation('ui', { keyPrefix: 'component.scrollbar' });

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.scrollTo({
      behavior: 'instant',
      top: ref.current.scrollHeight / 2,
    });
  }, [ref]);

  return (
    <Root height={height} x={x} y={y}>
      <Button assets={up} label={t('scrollUp')} onClick={onUpClick} />
      <Track aria-valuenow={0} height={height - 2 * 14 + 1}>
        <InnerTrack height={height - 2 * (14 + 3) - 3} ref={ref} role="scrollbar">
          <Content />
        </InnerTrack>
      </Track>
      <Button assets={down} label={t('scrollDown')} onClick={onDownClick} />
    </Root>
  );
}

const Root = styled(PositionedComponent)<Pick<ScrollbarProps, 'height'>>(({ height }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 3,
  height,
}));

const Track = styled('div')<Pick<ScrollbarProps, 'height'>>(({ height }) => ({
  boxSizing: 'border-box',
  height,
  padding: 2,
  width: 14,
}));

const InnerTrack = styled('div')<Pick<ScrollbarProps, 'height'>>(({ height }) => ({
  background: 'black',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  height,
  overflowX: 'hidden',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 8,
  },
  '::-webkit-scrollbar-thumb': {
    backgroundImage: `url(${thumb})`,
    height: 17,
  },
}));

const Content = styled('div')({
  height: 2000,
  width: 8,
});
