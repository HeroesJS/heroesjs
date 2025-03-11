import { type MouseEventHandler, type PropsWithChildren, useCallback } from 'react';
import styled from 'styled-components';

export const Backdrop = ({ children }: PropsWithChildren) => {
  const handleMouseEvent = useCallback<MouseEventHandler>((e) => {
    e.stopPropagation();
  }, []);

  return (
    <Root id="backdrop" onClick={handleMouseEvent} onMouseDown={handleMouseEvent}>
      {children}
    </Root>
  );
};

const Root = styled.div({
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
});
