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
        {...newGameInfo.handlers}
        assets={assets.newGameButton}
        label={t('newGameLabel')}
        onClick={onNewGameClick}
      />
      <Modal open={newGameInfo.isOpen} x={177} y={29}>
        {t('newGameInfo')}
      </Modal>
      <MenuButton
        {...loadGameInfo.handlers}
        assets={assets.loadGameButton}
        label={t('loadGameLabel')}
        onClick={onLoadGameClick}
      />
      <Modal open={loadGameInfo.isOpen} x={177} y={29}>
        {t('loadGameInfo')}
      </Modal>
      <MenuButton
        {...viewHighScoresInfo.handlers}
        assets={assets.viewHighScoresButton}
        label={t('viewHighScoresLabel')}
        onClick={onViewHighScoresClick}
      />
      <Modal open={viewHighScoresInfo.isOpen} x={177} y={29}>
        {t('viewHighScoresInfo')}
      </Modal>
      <MenuButton
        {...viewCreditsInfo.handlers}
        assets={assets.viewCreditsButton}
        label={t('viewCreditsLabel')}
        onClick={onViewCreditsClick}
      />
      <Modal open={viewCreditsInfo.isOpen} x={177} y={29}>
        {t('viewCreditsInfo')}
      </Modal>
      <MenuButton {...quitInfo.handlers} assets={assets.quitButton} label={t('quitLabel')} onClick={onQuitClick} />
      <Modal open={quitInfo.isOpen} x={177} y={29}>
        {t('quitInfo')}
      </Modal>
    </Menu>
  );
};
