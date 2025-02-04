import { useTranslation } from 'react-i18next';

import { Button, type PositionProps, Window } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onInfoClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onOkayClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onSaveGameClick?: () => void;
}

export const GameOptionsWindow = ({
  onInfoClick,
  onLoadGameClick,
  onNewGameClick,
  onOkayClick,
  onQuitClick,
  onSaveGameClick,
  x,
  y,
}: Props) => {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.gameOptionsWindow' });

  return (
    <Window background={assets.background} height={459} label={t('title')} width={322} x={x} y={y}>
      <Button assets={assets.newGameButton} label={t('newGameLabel')} onClick={onNewGameClick} x={46} y={31} />
      <Button assets={assets.loadGameButton} label={t('loadGameLabel')} onClick={onLoadGameClick} x={179} y={31} />
      <Button assets={assets.saveGameButton} label={t('saveGameLabel')} onClick={onSaveGameClick} x={46} y={107} />
      <Button assets={assets.quitButton} label={t('quit')} onClick={onQuitClick} x={179} y={107} />
      <Button assets={assets.okayButton} label={t('okayLabel')} onClick={onOkayClick} x={24} y={407} />
      <Button assets={assets.infoButton} label={t('infoLabel')} onClick={onInfoClick} x={201} y={407} />
    </Window>
  );
};
