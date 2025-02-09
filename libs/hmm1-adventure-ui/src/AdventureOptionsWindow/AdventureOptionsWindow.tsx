import { useTranslation } from 'react-i18next';

import { Button, type PositionProps, Window } from '@heroesjs/hmm1-base-ui';

import { background, castSpell, dig, okay, viewPuzzle, viewWorld } from './assets';

interface Props extends PositionProps {
  readonly onCastSpellClick?: () => void;
  readonly onConfirmClick?: () => void;
  readonly onDigClick?: () => void;
  readonly onViewPuzzleClick?: () => void;
  readonly onViewWorldClick?: () => void;
}

export const AdventureOptionsWindow = ({
  onCastSpellClick,
  onConfirmClick,
  onDigClick,
  onViewPuzzleClick,
  onViewWorldClick,
  x,
  y,
}: Props) => {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.adventureOptionsWindow' });

  return (
    <Window background={background} height={236} label={t('title')} shadow width={322} x={x} y={y}>
      <Button assets={viewWorld} label={t('viewWorld')} onClick={onViewWorldClick} x={46} y={31} />
      <Button assets={viewPuzzle} label={t('viewPuzzle')} onClick={onViewPuzzleClick} x={179} y={31} />
      <Button assets={castSpell} label={t('castSpell')} onClick={onCastSpellClick} x={46} y={107} />
      <Button assets={dig} label={t('dig')} onClick={onDigClick} x={179} y={107} />
      <Button assets={okay} label={t('okay')} onClick={onConfirmClick} x={112} y={184} />
    </Window>
  );
};
