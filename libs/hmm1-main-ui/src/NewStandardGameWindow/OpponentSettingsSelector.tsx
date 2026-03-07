import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import {
  computerOpponentSettings,
  getOpponentGameDifficulty,
  humanOpponentSettings,
  isHumanOpponent,
  noOpponent,
  OpponentSetting,
  OpponentSettings,
} from '@heroesjs/hmm1-core';
import { CycleToggle, PositionedComponent, Text } from '@heroesjs/hmm1-core-ui';

import { opponentSetting } from './assets';

interface OpponentSettingsSelectorProps {
  readonly humanOpponentsCount?: number;
  readonly value: OpponentSettings;
  readonly onChange?: (value: OpponentSettings) => void;
  readonly onOptionMouseDown?: (e: MouseEvent, setting: OpponentSetting, isHumanOpponent: boolean) => void;
  readonly x?: number;
  readonly y?: number;
}

export function OpponentSettingsSelector({
  humanOpponentsCount = 0,
  onChange,
  onOptionMouseDown,
  value,
  x,
  y,
}: OpponentSettingsSelectorProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.newStandardGameWindow' });

  return (
    <Root x={x} y={y}>
      {value.map((setting, index) => (
        <Item
          human={isHumanOpponent(index, humanOpponentsCount)}
          key={index}
          label={t('opponents.opponentLabel', { number: index + 1 })}
          onChange={(newValue) => onChange?.(value.map((v, i) => (i === index ? newValue : v)))}
          onMouseDown={(e) => onOptionMouseDown?.(e, setting, isHumanOpponent(index, humanOpponentsCount))}
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
  readonly human?: boolean;
  readonly label: string;
  readonly onChange?: (value: OpponentSetting) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: OpponentSetting;
}

function Item({ human, label, onChange, onMouseDown, value }: ItemProps) {
  const { t } = useTranslation('core');

  return (
    <ItemRoot
      label={label}
      onChange={onChange}
      onMouseDown={onMouseDown}
      options={human ? humanOpponentSettings : computerOpponentSettings}
      value={value}
    >
      {(value) => (
        <>
          <img
            alt=""
            src={
              human
                ? opponentSetting.human
                : value !== noOpponent
                ? opponentSetting.computer[value]
                : opponentSetting.none
            }
          />
          <Text align="center" size="small" width={Item.width - 1} x={1} y={66}>
            {human ? (
              <>
                {t('opponentDifficulty.human')}
                {value && (
                  <>
                    <br />
                    {t(`gameDifficulty.${getOpponentGameDifficulty(value)}`)}
                  </>
                )}
              </>
            ) : value !== noOpponent ? (
              t(`opponentDifficulty.computer.${value}`)
            ) : (
              t('opponentDifficulty.none')
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
