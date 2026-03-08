import { useTranslation } from 'react-i18next';

import { PlayerColor } from '@heroesjs/hmm1-core';

import { Text } from '../Text';
import { PositionedComponent } from '../PositionedComponent';
import { jewels } from './assets';

interface PlayerColorJewelProps {
  readonly label?: string;
  readonly labelId?: string;
  readonly value?: PlayerColor;
  readonly x?: number;
  readonly y?: number;
}

export function PlayerColorJewel({ label, labelId, value = PlayerColor.Blue, x, y }: PlayerColorJewelProps) {
  const { t } = useTranslation('core');

  return (
    <PositionedComponent aria-label={label} aria-labelledby={labelId} x={x} y={y}>
      <Text invisible x={0} y={0}>
        {t(`playerColor.${value}`)}
      </Text>
      <img alt={t(`playerColor.${value}`)} role="presentation" src={jewels[value]} />
    </PositionedComponent>
  );
}
