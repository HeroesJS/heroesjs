import styled from 'styled-components';

import type { PositionProps } from '../../core';

interface CheckboxAssets {
  readonly checked: string;
  readonly unchecked: string;
}

interface Props extends PositionProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly onChange?: (checked: boolean) => void;
}

export const Checkbox = ({ assets, checked, onChange, x, y }: Props) => {
  const handleClick = () => onChange?.(!checked);

  return (
    <Root onClick={handleClick} x={x} y={y}>
      <img src={checked ? assets.checked : assets.unchecked} />
    </Root>
  );
};

const Root = styled.button<Pick<Props, 'x' | 'y'>>(({ x, y }) => ({
  border: 'none',
  fontSize: 0,
  left: x,
  padding: 0,
  position: 'absolute',
  top: y,
}));
