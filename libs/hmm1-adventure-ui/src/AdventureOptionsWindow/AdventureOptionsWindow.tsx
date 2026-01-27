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
  const [ViewWorldInfoModal, viewWorldInfoModal] = useModal();
  const [ViewPuzzleInfoModal, viewPuzzleInfoModal] = useModal();
  const [CastSpellInfoModal, castSpellInfoModal] = useModal();
  const [DigInfoModal, digInfoModal] = useModal();

  const [OkayInfoModal, okayInfoModal] = useModal();

  return (
    <Window background={background} height={236} label="Adventure Options Window" open={open} width={322} x={x} y={y}>
      <Button
        assets={viewWorldAssets}
        label="View World"
        onClick={onViewWorldClick}
        onMouseDown={viewWorldInfoModal.onMouseDown}
        x={46}
        y={31}
      />
      <ViewWorldInfoModal>View the entire world.</ViewWorldInfoModal>
      <Button
        assets={viewPuzzleAssets}
        label="View Puzzle"
        onClick={onViewPuzzleClick}
        onMouseDown={viewPuzzleInfoModal.onMouseDown}
        x={179}
        y={31}
      />
      <ViewPuzzleInfoModal>View the obelisk puzzle.</ViewPuzzleInfoModal>
      <Button
        assets={castSpellAssets}
        label="Cast Spell"
        onClick={onCastSpellClick}
        onMouseDown={castSpellInfoModal.onMouseDown}
        x={46}
        y={107}
      />
      <CastSpellInfoModal>Cast an adventure spell.</CastSpellInfoModal>
      <Button
        assets={digAssets}
        label="Dig"
        onClick={onDigClick}
        onMouseDown={digInfoModal.onMouseDown}
        x={179}
        y={107}
      />
      <DigInfoModal>Dig for the Ultimate Artifact.</DigInfoModal>
      <Button
        assets={okayAssets}
        label="Okay"
        onClick={onOkayClick}
        onMouseDown={okayInfoModal.onMouseDown}
        x={112}
        y={184}
      />
      <OkayInfoModal>Dig for the Ultimate Artifact.{/* TODO: ? */}</OkayInfoModal>
    </Window>
  );
}
