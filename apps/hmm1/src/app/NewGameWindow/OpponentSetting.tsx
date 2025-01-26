import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import { opponentDifficulties, OpponentDifficulty } from '@heroesjs/hmm1-core';

import average from './assets/opponentSetting/average.jpg';
import dumb from './assets/opponentSetting/dumb.jpg';
import genius from './assets/opponentSetting/genius.jpg';
import none from './assets/opponentSetting/none.jpg';
import smart from './assets/opponentSetting/smart.jpg';

const assets: Record<OpponentDifficulty, string> = {
  [OpponentDifficulty.Average]: average,
  [OpponentDifficulty.Dumb]: dumb,
  [OpponentDifficulty.Genius]: genius,
  [OpponentDifficulty.None]: none,
  [OpponentDifficulty.Smart]: smart,
};

interface Props extends PositionProps {
  readonly index: number;
  readonly onClick?: (index: number, value: OpponentDifficulty) => void;
  readonly value: OpponentDifficulty;
}

export const OpponentSetting = ({ index, onClick, value, x, y }: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'newGameWindow' });
  const { t: tCore } = useTranslation('core', { keyPrefix: 'opponentDifficulty' });

  const handleClick = () => onClick?.(index, value);

  return (
    <Root x={x} y={y}>
      <span aria-label={t('opponentSettingHeading', { index: index + 1 })} role="radiogroup">
        {opponentDifficulties.map((difficulty) => (
          <span aria-checked={difficulty === value} key={difficulty} role="radio">
            {tCore(difficulty)}
          </span>
        ))}
      </span>
      <button aria-label={t('changeOpponentSettingLabel', { index: index + 1 })} onClick={handleClick}>
        <img alt="" src={assets[value]} />
        <Text align="center" size="small" width={66} x={0} y={64}>
          {tCore(value)}
        </Text>
      </button>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  fontSize: 0,
});
