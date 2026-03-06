import { useTranslation } from 'react-i18next';

import { Button, Menu, MenuItem, useModal } from '@heroesjs/hmm1-core-ui';

import { loadGame, newGame, quit, viewCredits, viewHighScores } from './assets';

interface MainMenuProps {
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onViewCreditsClick?: () => void;
  readonly onViewHighScoresClick?: () => void;
  readonly x?: number;
  readonly y?: number;
}

export function MainMenu({
  onLoadGameClick,
  onNewGameClick,
  onQuitClick,
  onViewCreditsClick,
  onViewHighScoresClick,
  x,
  y,
}: MainMenuProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.mainMenu' });

  const [NewGameInfoModal, newGameInfoModal] = useModal();
  const [LoadGameInfoModal, loadGameInfoModal] = useModal();
  const [ViewHighScoresInfoModal, viewHighScoresInfoModal] = useModal();
  const [ViewCreditsInfoModal, viewCreditsInfoModal] = useModal();
  const [QuitInfoModal, quitInfoModal] = useModal();

  return (
    <Menu label={t('label')} x={x} y={y}>
      <MenuItem>
        <Button
          assets={newGame}
          label={t('newGame.label')}
          onClick={onNewGameClick}
          onMouseDown={newGameInfoModal.onMouseDown}
        />
        <NewGameInfoModal>{t('newGame.info')}</NewGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={loadGame}
          label={t('loadGame.label')}
          onClick={onLoadGameClick}
          onMouseDown={loadGameInfoModal.onMouseDown}
        />
        <LoadGameInfoModal>{t('loadGame.info')}</LoadGameInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewHighScores}
          label={t('viewHighScores.label')}
          onClick={onViewHighScoresClick}
          onMouseDown={viewHighScoresInfoModal.onMouseDown}
        />
        <ViewHighScoresInfoModal>{t('viewHighScores.info')}</ViewHighScoresInfoModal>
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewCredits}
          label={t('viewCredits.label')}
          onClick={onViewCreditsClick}
          onMouseDown={viewCreditsInfoModal.onMouseDown}
        />
        <ViewCreditsInfoModal>{t('viewCredits.info')}</ViewCreditsInfoModal>
      </MenuItem>
      <MenuItem>
        <Button assets={quit} label={t('quit.label')} onClick={onQuitClick} onMouseDown={quitInfoModal.onMouseDown} />
        <QuitInfoModal>{t('quit.info')}</QuitInfoModal>
      </MenuItem>
    </Menu>
  );
}
