import { type MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import { opponentDifficulties, type OpponentDifficulty } from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly index: number;
  readonly onClick?: (index: number, value: OpponentDifficulty) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: OpponentDifficulty;
}

export const OpponentSetting = ({ index, onClick, onMouseDown, value, x, y }: Props) => {
  const { t } = useTranslation(['main', 'core'], { keyPrefix: 'component.newGameWindow' });

  const handleClick = useCallback(() => onClick?.(index, value), [index, onClick, value]);

  return (
    <Root x={x} y={y}>
      <span aria-label={t('opponentSettingHeading', { index: index + 1 })} role="radiogroup">
        {opponentDifficulties.map((difficulty) => (
          <span aria-checked={difficulty === value} key={difficulty} role="radio">
            {t(`core:opponentDifficulty.${difficulty}`)}
          </span>
        ))}
      </span>
      <button
        aria-label={t('changeOpponentSettingLabel', { index: index + 1 })}
        onClick={handleClick}
        onMouseDown={onMouseDown}
      >
        <img alt="" src={assets.opponentDifficultyImages[value]} />
        <Text align="center" size="small" width={66} x={0} y={64}>
          {t(`core:opponentDifficulty.${value}`)}
        </Text>
      </button>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  fontSize: 0,
});
