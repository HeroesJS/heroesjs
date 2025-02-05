import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

export interface CheckboxAssets {
  readonly checked: string;
  readonly unchecked: string;
}

interface Props extends PositionProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly label?: string;
  readonly onChange?: (checked: boolean) => void;
  readonly onClick?: () => void;
}

export const Checkbox = ({ assets, checked, label, onChange, onClick, x, y }: Props) => {
  const handleClick = () => {
    onClick?.();
    onChange?.(!checked);
  };

  return (
    <Root aria-label={label} onClick={handleClick} role="checkbox" x={x} y={y}>
      <img alt="" src={checked ? assets.checked : assets.unchecked} />
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  border: 'none',
  fontSize: 0,
  padding: 0,
});
