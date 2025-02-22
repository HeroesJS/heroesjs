import { useTranslation } from 'react-i18next';

import { Button, Modal, type PositionProps, useModal, Window } from '@heroesjs/hmm1-base-ui';

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

  const viewWorldInfo = useModal();
  const viewPuzzleInfo = useModal();
  const castSpellInfo = useModal();
  const digInfo = useModal();
  const okayInfo = useModal();

  return (
    <Window background={background} height={236} label={t('title')} shadow width={322} x={x} y={y}>
      <Button
        {...viewWorldInfo.handlers}
        assets={viewWorld}
        label={t('viewWorld')}
        onClick={onViewWorldClick}
        x={46}
        y={31}
      />
      <Modal open={viewWorldInfo.isOpen} x={177} y={29}>
        {t('viewWorldInfo')}
      </Modal>
      <Button
        {...viewPuzzleInfo.handlers}
        assets={viewPuzzle}
        label={t('viewPuzzle')}
        onClick={onViewPuzzleClick}
        x={179}
        y={31}
      />
      <Modal open={viewPuzzleInfo.isOpen} x={177} y={29}>
        {t('viewPuzzleInfo')}
      </Modal>
      <Button
        {...castSpellInfo.handlers}
        assets={castSpell}
        label={t('castSpell')}
        onClick={onCastSpellClick}
        x={46}
        y={107}
      />
      <Modal open={castSpellInfo.isOpen} x={177} y={29}>
        {t('castSpellInfo')}
      </Modal>
      <Button {...digInfo.handlers} assets={dig} label={t('dig')} onClick={onDigClick} x={179} y={107} />
      <Modal open={digInfo.isOpen} x={177} y={29}>
        {t('digInfo')}
      </Modal>
      <Button {...okayInfo.handlers} assets={okay} label={t('okay')} onClick={onConfirmClick} x={112} y={184} />
      <Modal open={okayInfo.isOpen} x={177} y={29}>
        {t('okayInfo')}
      </Modal>
    </Window>
  );
};
