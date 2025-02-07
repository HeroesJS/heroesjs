import { useTranslation } from 'react-i18next';

import { type ButtonAssets, Menu, MenuButton, Modal, type PositionProps, useModal } from '@heroesjs/hmm1-base-ui';

import loadGameDisabled from './assets/load-game/disabled.png';
import loadGameEnabled from './assets/load-game/enabled.png';
import newGameDisabled from './assets/new-game/disabled.png';
import newGameEnabled from './assets/new-game/enabled.png';
import quitDisabled from './assets/quit/disabled.png';
import quitEnabled from './assets/quit/enabled.png';
import viewCreditsDisabled from './assets/view-credits/disabled.png';
import viewCreditsEnabled from './assets/view-credits/enabled.png';
import viewHighScoresDisabled from './assets/view-high-scores/disabled.png';
import viewHighScoresEnabled from './assets/view-high-scores/enabled.png';

const newGameButtonAssets: ButtonAssets = {
  disabled: newGameDisabled,
  enabled: newGameEnabled,
};

const loadGameButtonAssets: ButtonAssets = {
  disabled: loadGameDisabled,
  enabled: loadGameEnabled,
};

const viewHighScoresButtonAssets: ButtonAssets = {
  disabled: viewHighScoresDisabled,
  enabled: viewHighScoresEnabled,
};

const viewCreditsButtonAssets: ButtonAssets = {
  disabled: viewCreditsDisabled,
  enabled: viewCreditsEnabled,
};

const quitButtonAssets: ButtonAssets = {
  disabled: quitDisabled,
  enabled: quitEnabled,
};

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
          assets={newGameButtonAssets}
          label={t('newGameLabel')}
          onClick={onNewGameClick}
          onRightDown={openNewGameInfo}
          onRightUp={closeNewGameInfo}
        />
        <MenuButton
          assets={loadGameButtonAssets}
          label={t('loadGameLabel')}
          onClick={onLoadGameClick}
          onRightDown={openLoadGameInfo}
          onRightUp={closeLoadGameInfo}
        />
        <MenuButton
          assets={viewHighScoresButtonAssets}
          label={t('viewHighScoresLabel')}
          onClick={onViewHighScoresClick}
          onRightDown={openViewHighScoresInfo}
          onRightUp={closeViewHighScoresInfo}
        />
        <MenuButton
          assets={viewCreditsButtonAssets}
          label={t('viewCreditsLabel')}
          onClick={onViewCreditsClick}
          onRightDown={openViewCreditsInfo}
          onRightUp={closeViewCreditsInfo}
        />
        <MenuButton
          assets={quitButtonAssets}
          label={t('quitLabel')}
          onClick={onQuitClick}
          onRightDown={openQuitInfo}
          onRightUp={closeQuitInfo}
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
