import type { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

import { PositionedComponent, Screen } from '@heroesjs/hmm1-base-ui';
import { ScreenHeight } from '@heroesjs/hmm1-core';

import { background } from './assets';

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
}: PropsWithChildren<Props>) => (
  <Screen background={background}>
    <AdventureMap aria-label="Adventure Map" role="main" x={16} y={16}>
      {renderAdventureMap?.()}
    </AdventureMap>
    <WorldMap aria-label="World Map" role="note" x={ScreenHeight} y={16}>
      {renderWorldMap?.()}
    </WorldMap>
    <HeroLocators x={ScreenHeight} y={176}>
      {renderHeroLocators?.()}
    </HeroLocators>
    <TownLocators x={553} y={177}>
      {renderTownLocators?.()}
    </TownLocators>
    <ActionButtons x={ScreenHeight} y={320}>
      {renderActionButtons?.()}
    </ActionButtons>
    <StatusWindow aria-label="Status Window" role="note" x={ScreenHeight} y={392}>
      {renderStatusWindow?.()}
    </StatusWindow>
    {children}
  </Screen>
);

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
