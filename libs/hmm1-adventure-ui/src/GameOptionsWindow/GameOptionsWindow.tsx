import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import {
  Button,
  Checkbox,
  type CheckboxAssets,
  PositionedComponent,
  type PositionProps,
  Text,
  Window,
} from '@heroesjs/hmm1-base-ui';
import { isSoundEnabled, MovementSpeed, SoundVolume } from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly autoSave?: boolean;
  readonly effectsVolume?: number;
  readonly movementSpeed?: MovementSpeed;
  readonly musicVolume?: number;
  readonly onInfoClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onOkayClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onSaveGameClick?: () => void;
  readonly showPath?: boolean;
  readonly viewEnemyMovement?: boolean;
}

export const GameOptionsWindow = ({
  autoSave,
  effectsVolume = SoundVolume.Off,
  movementSpeed = MovementSpeed.Trot,
  musicVolume = SoundVolume.Off,
  onInfoClick,
  onLoadGameClick,
  onNewGameClick,
  onOkayClick,
  onQuitClick,
  onSaveGameClick,
  showPath,
  viewEnemyMovement,
  x,
  y,
}: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.gameOptionsWindow' });

  return (
    <Window background={assets.background} height={459} label={t('title')} width={322} x={x} y={y}>
      <Button assets={assets.newGameButton} label={t('newGameLabel')} onClick={onNewGameClick} x={46} y={31} />
      <Button assets={assets.loadGameButton} label={t('loadGameLabel')} onClick={onLoadGameClick} x={179} y={31} />
      <Button assets={assets.saveGameButton} label={t('saveGameLabel')} onClick={onSaveGameClick} x={46} y={107} />
      <Button assets={assets.quitButton} label={t('quitLabel')} onClick={onQuitClick} x={179} y={107} />
      <GameOption
        assets={assets.musicToggle}
        checked={isSoundEnabled(musicVolume)}
        heading={t('musicHeading')}
        x={36}
        y={194}
      />
      <GameOption
        assets={assets.effectsToggle}
        checked={isSoundEnabled(effectsVolume)}
        heading={t('effectsHeading')}
        valueLabel={effectsVolume !== 0 && effectsVolume !== 10 ? t('volume', { value: effectsVolume }) : undefined}
        x={128}
        y={194}
      />
      <GameOption
        assets={{ checked: assets.movementSpeedMap[movementSpeed], unchecked: '' }}
        checked
        heading={t('movementSpeed')}
        valueLabel={t(`core:movementSpeed.${movementSpeed}`)}
        x={220}
        y={194}
      />
      <GameOption assets={assets.autoSaveToggle} checked={autoSave} heading={t('autoSaveHeading')} x={36} y={314} />
      <GameOption assets={assets.showPathToggle} checked={showPath} heading={t('showPathHeading')} x={128} y={314} />
      <GameOption
        assets={assets.viewEnemyMovementToggle}
        checked={viewEnemyMovement}
        heading={t('viewEnemyMovementHeading')}
        x={220}
        y={314}
      />
      <Button assets={assets.okayButton} label={t('okayLabel')} onClick={onOkayClick} x={24} y={407} />
      <Button assets={assets.infoButton} label={t('infoLabel')} onClick={onInfoClick} x={201} y={407} />
    </Window>
  );
};

interface GameOptionProps extends PositionProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly heading: string;
  readonly valueLabel?: string;
}

const GameOption = ({ assets, checked = false, heading, valueLabel, x, y }: GameOptionProps) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.gameOptionsWindow' });

  return (
    <GameOptionRoot x={x} y={y}>
      <GameOptionHeading align="center" size="small" width={80} y={0}>
        {heading}
      </GameOptionHeading>
      <Checkbox assets={assets} checked={checked} label={heading} />
      <GameOptionValueLabel align="center" size="small" width={66} y={0}>
        {valueLabel || t(`core:onOff.${checked}`)}
      </GameOptionValueLabel>
    </GameOptionRoot>
  );
};

const GameOptionRoot = styled(PositionedComponent)({
  height: 65,
  width: 65,
});

const GameOptionHeading = styled(Text)({
  transform: 'translateY(-100%) translateY(-1px) translateX(-8px)',
});

const GameOptionValueLabel = styled(Text)({
  bottom: 0,
  transform: 'translateY(100%) translateX(-1px)',
});
