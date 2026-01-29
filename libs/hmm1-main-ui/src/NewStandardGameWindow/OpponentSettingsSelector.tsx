import type { MouseEvent } from 'react';
import styled from 'styled-components';

import {
  computerOpponentSettingLabel,
  computerOpponentSettings,
  gameDifficulties,
  gameDifficultyLabel,
  isHumanOpponentSetting,
  OpponentSetting,
  OpponentSettings,
} from '@heroesjs/hmm1-core';
import { CycleToggle, PositionedComponent, Text } from '@heroesjs/hmm1-core-ui';

import { opponentSetting } from './assets';

interface OpponentSettingsSelectorProps {
  readonly value: OpponentSettings;
  readonly onChange?: (value: OpponentSettings) => void;
  readonly onOptionMouseDown?: (e: MouseEvent, setting: OpponentSetting) => void;
  readonly x?: number;
  readonly y?: number;
}

export function OpponentSettingsSelector({ onChange, onOptionMouseDown, value, x, y }: OpponentSettingsSelectorProps) {
  return (
    <Root x={x} y={y}>
      {value.map((setting, index) => (
        <Item
          key={index}
          label={`Opponent ${index + 1} Setting`}
          onChange={(newValue) => onChange?.(value.map((v, i) => (i === index ? newValue : v)))}
          onMouseDown={(e) => onOptionMouseDown?.(e, setting)}
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
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: OpponentSetting;
}

function Item({ label, onChange, onMouseDown, value }: ItemProps) {
  return (
    <ItemRoot
      label={label}
      onChange={onChange}
      onMouseDown={onMouseDown}
      options={isHumanOpponentSetting(value) ? gameDifficulties : computerOpponentSettings}
      value={value}
    >
      {(value) => (
        <>
          <img
            alt=""
            src={
              value
                ? isHumanOpponentSetting(value)
                  ? opponentSetting.human
                  : opponentSetting.computer[value]
                : opponentSetting.none
            }
          />
          <Text align="center" size="small" width={Item.width - 1} x={1} y={66}>
            {value ? (
              isHumanOpponentSetting(value) ? (
                <>
                  Human
                  <br />
                  {gameDifficultyLabel[value]}
                </>
              ) : (
                computerOpponentSettingLabel[value]
              )
            ) : (
              'None'
            )}
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
