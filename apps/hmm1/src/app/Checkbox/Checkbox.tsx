import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

export interface CheckboxAssets {
  readonly checked: string;
  readonly unchecked: string;
}

interface CheckboxProps extends PositionProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly label: string;
  readonly onChange?: (checked: boolean) => void;
}

export function Checkbox({ assets, checked = false, label, onChange, x, y }: CheckboxProps) {
  return (
    <Root aria-label={label} aria-checked={checked} onClick={() => onChange?.(!checked)} role="checkbox" x={x} y={y}>
      <img alt={label} src={checked ? assets.checked : assets.unchecked} />
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  display: 'inline-block',
});
