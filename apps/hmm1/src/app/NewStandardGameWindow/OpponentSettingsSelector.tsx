import styled from 'styled-components';

import { computerOpponentSettings, OpponentSetting, opponentSettingLabel } from '../core';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { nextOption } from '../util';
import { opponentSetting } from './assets';

interface OpponentSettingsSelectorProps extends PositionProps {
  readonly value: readonly OpponentSetting[];
  readonly onChange?: (value: readonly OpponentSetting[]) => void;
}

export function OpponentSettingsSelector({ onChange, value, x, y }: OpponentSettingsSelectorProps) {
  return (
    <Root x={x} y={y}>
      {value.map((setting, index) => (
        <Item
          index={index}
          key={index}
          onClick={() =>
            onChange?.(value.map((v, i) => (i === index ? nextOption(computerOpponentSettings, setting) : v)))
          }
          value={setting}
        />
      ))}
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  columnGap: 7,
  display: 'inline-flex',
  flexDirection: 'row',
});

interface ItemProps {
  readonly index: number;
  readonly onClick?: () => void;
  readonly value: OpponentSetting;
}

function Item({ index, onClick, value }: ItemProps) {
  return (
    <ItemRoot aria-label={`Opponent ${index + 1} Setting`} onClick={onClick} role="radiogroup">
      <img alt="" src={opponentSetting[value]} />
      <Text align="center" size="small" width={Item.width + 1} x={0} y={66}>
        <span aria-checked role="radio">
          {opponentSettingLabel[value]}
        </span>
      </Text>
    </ItemRoot>
  );
}

Item.width = 65;
Item.height = 78;

const ItemRoot = styled('div')({
  height: Item.height,
  position: 'relative',
  width: Item.width,
});
