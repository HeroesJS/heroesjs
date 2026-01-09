import styled from 'styled-components';

import { computerOpponentSettings, OpponentSetting, opponentSettingLabel } from '../core';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { opponentSetting } from './assets';
import { CycleToggle } from '../CycleToggle';

interface OpponentSettingsSelectorProps extends PositionProps {
  readonly value: readonly OpponentSetting[];
  readonly onChange?: (value: readonly OpponentSetting[]) => void;
}

export function OpponentSettingsSelector({ onChange, value, x, y }: OpponentSettingsSelectorProps) {
  return (
    <Root x={x} y={y}>
      {value.map((setting, index) => (
        <Item
          key={index}
          label={`Opponent ${index + 1} Setting`}
          onChange={(newValue) => onChange?.(value.map((v, i) => (i === index ? newValue : v)))}
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
  readonly label: string;
  readonly onChange?: (value: OpponentSetting) => void;
  readonly value: OpponentSetting;
}

function Item({ label, onChange, value }: ItemProps) {
  return (
    <ItemRoot label={label} onChange={onChange} options={computerOpponentSettings} value={value}>
      {(value) => (
        <>
          <img alt="" src={opponentSetting[value]} />
          <Text align="center" size="small" width={Item.width - 1} x={1} y={66}>
            {opponentSettingLabel[value]}
          </Text>
        </>
      )}
    </ItemRoot>
  );
}

Item.width = 65;
Item.height = 78;

const ItemRoot = styled(CycleToggle<OpponentSetting>)({
  height: Item.height,
  width: Item.width,
});
