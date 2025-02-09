import { range } from 'lodash';

import { Menu, MenuButton, MenuSeparator, type PositionProps } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onCancelClick?: () => void;
  readonly onCountClick?: (value: number) => void;
}

export const PlayerCountMenu = ({ onCancelClick, onCountClick, x, y }: Props) => {
  return (
    <Menu label="Player Count Menu" x={x} y={y}>
      {range(2, 5).map((count) => (
        <Item key={count} onClick={onCountClick} value={count} />
      ))}
      <MenuSeparator />
      <MenuButton assets={assets.cancelButton} label="Cancel" onClick={onCancelClick} />
    </Menu>
  );
};

interface ItemProps {
  readonly onClick?: (value: number) => void;
  readonly value: number;
}

const Item = ({ onClick, value }: ItemProps) => {
  const handleClick = () => onClick?.(value);

  return <MenuButton assets={assets.playerCountButtons[value]} label={`${value} Players`} onClick={handleClick} />;
};
