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

  const viewWorldInfoModal = useModal();
  const viewPuzzleInfoModal = useModal();
  const castSpellInfoModal = useModal();
  const digInfoModal = useModal();
  const okayInfoModal = useModal();

  return (
    <Window background={background} height={236} label={t('title')} shadow width={322} x={x} y={y}>
      <Button
        assets={viewWorld}
        label={t('viewWorld')}
        onClick={onViewWorldClick}
        onMouseDown={viewWorldInfoModal.onMouseDown}
        x={46}
        y={31}
      />
      <Modal open={viewWorldInfoModal.isOpen} x={177} y={29}>
        {t('viewWorldInfo')}
      </Modal>
      <Button
        assets={viewPuzzle}
        label={t('viewPuzzle')}
        onClick={onViewPuzzleClick}
        onMouseDown={viewPuzzleInfoModal.onMouseDown}
        x={179}
        y={31}
      />
      <Modal open={viewPuzzleInfoModal.isOpen} x={177} y={29}>
        {t('viewPuzzleInfo')}
      </Modal>
      <Button
        assets={castSpell}
        label={t('castSpell')}
        onClick={onCastSpellClick}
        onMouseDown={castSpellInfoModal.onMouseDown}
        x={46}
        y={107}
      />
      <Modal open={castSpellInfoModal.isOpen} x={177} y={29}>
        {t('castSpellInfo')}
      </Modal>
      <Button
        assets={dig}
        label={t('dig')}
        onClick={onDigClick}
        onMouseDown={digInfoModal.onMouseDown}
        x={179}
        y={107}
      />
      <Modal open={digInfoModal.isOpen} x={177} y={29}>
        {t('digInfo')}
      </Modal>
      <Button
        assets={okay}
        label={t('okay')}
        onClick={onConfirmClick}
        onMouseDown={okayInfoModal.onMouseDown}
        x={112}
        y={184}
      />
      <Modal open={okayInfoModal.isOpen} x={177} y={29}>
        {t('okayInfo')}
      </Modal>
    </Window>
  );
};
