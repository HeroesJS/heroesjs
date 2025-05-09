import {type PropsWithChildren, type ReactNode} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {Modal, PositionedComponent, Screen, useModal} from '@heroesjs/hmm1-base-ui';
import {ScreenHeight} from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props {
  readonly renderActionButtons?: () => ReactNode;
  readonly renderAdventureMap?: () => ReactNode;
  readonly renderHeroLocators?: () => ReactNode;
  readonly renderStatusWindow?: () => ReactNode;
  readonly renderTownLocators?: () => ReactNode;
  readonly renderWorldMap?: () => ReactNode;
}

export const AdventureWindow = ({
  children,
  renderActionButtons,
  renderAdventureMap,
  renderStatusWindow,
  renderHeroLocators,
  renderTownLocators,
  renderWorldMap,
}: PropsWithChildren<Props>) => {
  const {t} = useTranslation('adventure', {keyPrefix: 'component.adventureWindow'});

  const worldMapInfoModal = useModal();
  const statusWindowInfoModal = useModal();

  return (
    <Screen background={assets.background}>
      <AdventureMap aria-label={t('adventureMap')} role="main" x={16} y={16}>
        {renderAdventureMap?.()}
      </AdventureMap>
      <WorldMap
        aria-label={t('worldMap')}
        onMouseDown={worldMapInfoModal.onMouseDown}
        role="note"
        x={ScreenHeight}
        y={16}
      >
        {renderWorldMap?.()}
      </WorldMap>
      <Modal open={worldMapInfoModal.isOpen} x={97} y={29}>
        {t('worldMapInfo')}
      </Modal>
      <HeroLocators x={ScreenHeight} y={176}>
        {renderHeroLocators?.()}
      </HeroLocators>
      <TownLocators x={553} y={177}>
        {renderTownLocators?.()}
      </TownLocators>
      <ActionButtons x={ScreenHeight} y={320}>
        {renderActionButtons?.()}
      </ActionButtons>
      <StatusWindow
        aria-label={t('statusWindow')}
        onMouseDown={statusWindowInfoModal.onMouseDown}
        role="note"
        x={ScreenHeight}
        y={392}
      >
        {renderStatusWindow?.()}
      </StatusWindow>
      <Modal open={statusWindowInfoModal.isOpen} size={2} x={97} y={29}>
        {t('statusWindowInfo')}
      </Modal>
      {children}
    </Screen>
  );
};

const AdventureMap = styled(PositionedComponent)({
  height: 448,
  width: 448,
});

const WorldMap = styled(PositionedComponent)({
  height: 144,
  width: 144,
});

const HeroLocators = styled(PositionedComponent)({
  height: 128,
  width: 71,
});

const TownLocators = styled(PositionedComponent)({
  height: 128,
  width: 71,
});

const ActionButtons = styled(PositionedComponent)({
  height: 72,
  width: 144,
});

const StatusWindow = styled(PositionedComponent)({
  height: 72,
  width: 144,
});
