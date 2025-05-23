import type {MouseEvent} from 'react';
import {useTranslation} from 'react-i18next';

import {PositionedComponent, type PositionProps} from '@heroesjs/hmm1-base-ui';
import {gameDifficulties, type GameDifficulty} from '@heroesjs/hmm1-core';

import {DifficultyOption} from './DifficultyOption';

interface Props extends PositionProps {
  readonly onChange?: (value: GameDifficulty) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly selectedOption?: GameDifficulty;
}

export const DifficultyMenu = ({onChange, onMouseDown, selectedOption, x, y}: Props) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.newGameWindow'});

  return (
    <PositionedComponent aria-label={t('gameDifficulty')} role="menu" x={x} y={y}>
      {gameDifficulties.map((difficulty, i) => (
        <DifficultyOption
          key={difficulty}
          onClick={onChange}
          onMouseDown={onMouseDown}
          selected={difficulty === selectedOption}
          value={difficulty}
          x={i * 71}
        />
      ))}
    </PositionedComponent>
  );
};
