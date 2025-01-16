import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

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
      <img alt="" src={checked ? assets.checked : assets.unchecked} />
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  border: 'none',
  fontSize: 0,
  padding: 0,
});
