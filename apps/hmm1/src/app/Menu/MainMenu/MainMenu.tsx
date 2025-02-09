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

  const { closeNewGameInfo, newGameInfoIsOpen, openNewGameInfo } = useModal('newGameInfo');
  const { closeLoadGameInfo, loadGameInfoIsOpen, openLoadGameInfo } = useModal('loadGameInfo');
  const { closeViewHighScoresInfo, openViewHighScoresInfo, viewHighScoresInfoIsOpen } = useModal('viewHighScoresInfo');
  const { closeViewCreditsInfo, openViewCreditsInfo, viewCreditsInfoIsOpen } = useModal('viewCreditsInfo');
  const { closeQuitInfo, openQuitInfo, quitInfoIsOpen } = useModal('quitInfo');

  return (
    <>
      <Menu label={t('title')} x={x} y={y}>
        <MenuButton
          assets={assets.newGameButton}
          label={t('newGameLabel')}
          onClick={onNewGameClick}
          onRightButtonDown={openNewGameInfo}
          onRightButtonUp={closeNewGameInfo}
        />
        <MenuButton
          assets={assets.loadGameButton}
          label={t('loadGameLabel')}
          onClick={onLoadGameClick}
          onRightButtonDown={openLoadGameInfo}
          onRightButtonUp={closeLoadGameInfo}
        />
        <MenuButton
          assets={assets.viewHighScoresButton}
          label={t('viewHighScoresLabel')}
          onClick={onViewHighScoresClick}
          onRightButtonDown={openViewHighScoresInfo}
          onRightButtonUp={closeViewHighScoresInfo}
        />
        <MenuButton
          assets={assets.viewCreditsButton}
          label={t('viewCreditsLabel')}
          onClick={onViewCreditsClick}
          onRightButtonDown={openViewCreditsInfo}
          onRightButtonUp={closeViewCreditsInfo}
        />
        <MenuButton
          assets={assets.quitButton}
          label={t('quitLabel')}
          onClick={onQuitClick}
          onRightButtonDown={openQuitInfo}
          onRightButtonUp={closeQuitInfo}
        />
      </Menu>
      <Modal open={newGameInfoIsOpen} x={177} y={29}>
        {t('newGameInfo')}
      </Modal>
      <Modal open={loadGameInfoIsOpen} x={177} y={29}>
        {t('loadGameInfo')}
      </Modal>
      <Modal open={viewHighScoresInfoIsOpen} x={177} y={29}>
        {t('viewHighScoresInfo')}
      </Modal>
      <Modal open={viewCreditsInfoIsOpen} x={177} y={29}>
        {t('viewCreditsInfo')}
      </Modal>
      <Modal open={quitInfoIsOpen} x={177} y={29}>
        {t('quitInfo')}
      </Modal>
    </>
  );
};
