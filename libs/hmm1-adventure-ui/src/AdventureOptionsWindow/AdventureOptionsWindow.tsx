import { useTranslation } from 'react-i18next';

import { Button, useModal, Window } from '@heroesjs/hmm1-core-ui';

import { background, castSpellAssets, digAssets, okayAssets, viewPuzzleAssets, viewWorldAssets } from './assets';

interface AdventureOptionsWindowProps {
  readonly onCastSpellClick?: () => void;
  readonly onDigClick?: () => void;
  readonly onOkayClick?: () => void;
  readonly onViewPuzzleClick?: () => void;
  readonly onViewWorldClick?: () => void;
  readonly open: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function AdventureOptionsWindow({
  onCastSpellClick,
  onDigClick,
  onOkayClick,
  onViewPuzzleClick,
  onViewWorldClick,
  open,
  x,
  y,
}: AdventureOptionsWindowProps) {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.adventureOptions' });

  const [ViewWorldInfoModal, viewWorldInfoModal] = useModal();
  const [ViewPuzzleInfoModal, viewPuzzleInfoModal] = useModal();
  const [CastSpellInfoModal, castSpellInfoModal] = useModal();
  const [DigInfoModal, digInfoModal] = useModal();

  const [OkayInfoModal, okayInfoModal] = useModal();

  return (
    <Window background={background} height={236} label={t(($) => $.title)} open={open} width={322} x={x} y={y}>
      <Button
        assets={viewWorldAssets}
        label={t(($) => $.viewWorld.label)}
        onClick={onViewWorldClick}
        onMouseDown={viewWorldInfoModal.onMouseDown}
        x={46}
        y={31}
      />
      <ViewWorldInfoModal>{t(($) => $.viewWorld.info)}</ViewWorldInfoModal>
      <Button
        assets={viewPuzzleAssets}
        label={t(($) => $.viewPuzzle.label)}
        onClick={onViewPuzzleClick}
        onMouseDown={viewPuzzleInfoModal.onMouseDown}
        x={179}
        y={31}
      />
      <ViewPuzzleInfoModal>{t(($) => $.viewPuzzle.info)}</ViewPuzzleInfoModal>
      <Button
        assets={castSpellAssets}
        label={t(($) => $.castSpell.label)}
        onClick={onCastSpellClick}
        onMouseDown={castSpellInfoModal.onMouseDown}
        x={46}
        y={107}
      />
      <CastSpellInfoModal>{t(($) => $.castSpell.info)}</CastSpellInfoModal>
      <Button
        assets={digAssets}
        label={t(($) => $.dig.label)}
        onClick={onDigClick}
        onMouseDown={digInfoModal.onMouseDown}
        x={179}
        y={107}
      />
      <DigInfoModal>{t(($) => $.dig.info)}</DigInfoModal>
      <Button
        assets={okayAssets}
        label={t(($) => $.confirm.label)}
        onClick={onOkayClick}
        onMouseDown={okayInfoModal.onMouseDown}
        x={112}
        y={184}
      />
      <OkayInfoModal>{t(($) => $.confirm.info)}</OkayInfoModal>
    </Window>
  );
}
