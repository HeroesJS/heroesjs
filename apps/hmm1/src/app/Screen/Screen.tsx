import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const ScreenWidth = 640;
export const ScreenHeight = 480;

interface ScreenProps {
  readonly background: string;
  readonly label: string;
}

export function Screen({ background, children, label }: PropsWithChildren<ScreenProps>) {
  return (
    <Root aria-label={label} background={background}>
      {children}
    </Root>
  );
}

const Root = styled('main')<Pick<ScreenProps, 'background'>>(({ background }) => ({
  backgroundImage: `url(${background})`,
  fontSize: 0,
  height: ScreenHeight,
  position: 'relative',
  width: ScreenWidth,
}));
