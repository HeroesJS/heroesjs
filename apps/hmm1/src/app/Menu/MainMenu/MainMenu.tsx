import { useTranslation } from 'react-i18next';

import { Menu, MenuButton, Modal, type PositionProps, useModal } from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onViewCreditsClick?: () => void;
  readonly onViewHighScoresClick?: () => void;
}

export const MainMenu = ({
  onLoadGameClick,
  onNewGameClick,
  onQuitClick,
  onViewCreditsClick,
  onViewHighScoresClick,
  x,
  y,
}: Props) => {
  const { t } = useTranslation('main', { keyPrefix: 'component.mainMenu' });

  const newGameInfo = useModal();
  const loadGameInfo = useModal();
  const viewHighScoresInfo = useModal();
  const viewCreditsInfo = useModal();
  const quitInfo = useModal();

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton
        assets={assets.newGameButton}
        label={t('newGameLabel')}
        onClick={onNewGameClick}
        onMouseDown={newGameInfo.onMouseDown}
      />
      <Modal open={newGameInfo.isOpen} x={177} y={29}>
        {t('newGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.loadGameButton}
        label={t('loadGameLabel')}
        onClick={onLoadGameClick}
        onMouseDown={loadGameInfo.onMouseDown}
      />
      <Modal open={loadGameInfo.isOpen} x={177} y={29}>
        {t('loadGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.viewHighScoresButton}
        label={t('viewHighScoresLabel')}
        onClick={onViewHighScoresClick}
        onMouseDown={viewHighScoresInfo.onMouseDown}
      />
      <Modal open={viewHighScoresInfo.isOpen} x={177} y={29}>
        {t('viewHighScoresInfo')}
      </Modal>
      <MenuButton
        assets={assets.viewCreditsButton}
        label={t('viewCreditsLabel')}
        onClick={onViewCreditsClick}
        onMouseDown={viewCreditsInfo.onMouseDown}
      />
      <Modal open={viewCreditsInfo.isOpen} x={177} y={29}>
        {t('viewCreditsInfo')}
      </Modal>
      <MenuButton
        assets={assets.quitButton}
        label={t('quitLabel')}
        onClick={onQuitClick}
        onMouseDown={quitInfo.onMouseDown}
      />
      <Modal open={quitInfo.isOpen} x={177} y={29}>
        {t('quitInfo')}
      </Modal>
    </Menu>
  );
};
