import { type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';
import { type PlayerColor, playerColors } from '@heroesjs/hmm1-core';

import { gems } from './assets';

interface Props extends PositionProps {
  readonly onClick?: () => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: PlayerColor;
}

export const PlayerColorJewel = ({ onClick, onMouseDown, value, x, y }: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.playerColorJewel' });

  return (
    <Root x={x} y={y}>
      <span aria-label={t('label')} role="radiogroup">
        {playerColors.map((color) => (
          <span aria-checked={color === value} key={color} role="radio">
            {t(`core:playerColor.${color}`)}
          </span>
        ))}
      </span>
      <button aria-label={t('changeLabel')} onClick={onClick} onMouseDown={onMouseDown}>
        <img alt="" src={gems[value]} />
      </button>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  fontSize: 0,
});
