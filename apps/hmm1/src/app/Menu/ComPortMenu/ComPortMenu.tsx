import { range } from 'lodash';

import { Menu, MenuButton, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onPortClick?: (value: number) => void;
}

export const ComPortMenu = ({ onCancelClick, onPortClick, x, y }: Props) => {
  return (
    <Menu label="Com Port Menu" x={x} y={y}>
      {range(1, 5).map((i) => (
        <Item key={i} onClick={onPortClick} value={i} />
      ))}
      <MenuButton assets={assets.cancelButton} label="Cancel" onClick={onCancelClick} />
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: number) => void;
  readonly value: number;
}

const Item = ({ value, onClick }: ItemProps) => {
  const handleClick = () => onClick?.(value);

  return <MenuButton assets={assets.comPortButtons[value]} label={`Com-${value}`} onClick={handleClick} />;
};
