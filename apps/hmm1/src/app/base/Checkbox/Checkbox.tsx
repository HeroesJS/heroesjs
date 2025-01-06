import styled from 'styled-components';

import { withPosition } from '../withPosition';

interface CheckboxAssets {
  readonly checked: string;
  readonly unchecked: string;
}

interface Props {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly className?: string;
  readonly onChange?: (checked: boolean) => void;
}

export const Checkbox = withPosition(({ assets, checked, className, onChange }: Props) => {
  const handleClick = () => onChange?.(!checked);

  return (
    <Root className={className} onClick={handleClick}>
      <img src={checked ? assets.checked : assets.unchecked} />
    </Root>
  );
});

const Root = styled.button({
  border: 'none',
  fontSize: 0,
  padding: 0,
});
