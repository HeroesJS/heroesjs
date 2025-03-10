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

  const newGameInfoModal = useModal();
  const loadGameInfoModal = useModal();
  const viewHighScoresInfoModal = useModal();
  const viewCreditsInfoModal = useModal();
  const quitInfoModal = useModal();

  return (
    <Menu label={t('title')} x={x} y={y}>
      <MenuButton
        assets={assets.newGameButton}
        label={t('newGameLabel')}
        onClick={onNewGameClick}
        onMouseDown={newGameInfoModal.onMouseDown}
      />
      <Modal open={newGameInfoModal.isOpen} x={177} y={29}>
        {t('newGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.loadGameButton}
        label={t('loadGameLabel')}
        onClick={onLoadGameClick}
        onMouseDown={loadGameInfoModal.onMouseDown}
      />
      <Modal open={loadGameInfoModal.isOpen} x={177} y={29}>
        {t('loadGameInfo')}
      </Modal>
      <MenuButton
        assets={assets.viewHighScoresButton}
        label={t('viewHighScoresLabel')}
        onClick={onViewHighScoresClick}
        onMouseDown={viewHighScoresInfoModal.onMouseDown}
      />
      <Modal open={viewHighScoresInfoModal.isOpen} x={177} y={29}>
        {t('viewHighScoresInfo')}
      </Modal>
      <MenuButton
        assets={assets.viewCreditsButton}
        label={t('viewCreditsLabel')}
        onClick={onViewCreditsClick}
        onMouseDown={viewCreditsInfoModal.onMouseDown}
      />
      <Modal open={viewCreditsInfoModal.isOpen} x={177} y={29}>
        {t('viewCreditsInfo')}
      </Modal>
      <MenuButton
        assets={assets.quitButton}
        label={t('quitLabel')}
        onClick={onQuitClick}
        onMouseDown={quitInfoModal.onMouseDown}
      />
      <Modal open={quitInfoModal.isOpen} x={177} y={29}>
        {t('quitInfo')}
      </Modal>
    </Menu>
  );
};
