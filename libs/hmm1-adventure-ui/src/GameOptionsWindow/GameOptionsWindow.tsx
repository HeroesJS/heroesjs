import { useCallback } from 'react';
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
import {
  isSoundEnabled,
  MovementSpeed,
  movementSpeeds,
  nextOption,
  previousOption,
  type SoundVolume,
  soundVolumes,
} from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly autoSave?: boolean;
  readonly effectsVolume?: SoundVolume;
  readonly movementSpeed?: MovementSpeed;
  readonly musicVolume?: SoundVolume;
  readonly onAutoSaveChange?: (value: boolean) => void;
  readonly onEffectsVolumeChange?: (value: SoundVolume) => void;
  readonly onInfoClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onMovementSpeedChange?: (value: MovementSpeed) => void;
  readonly onMusicVolumeChange?: (value: SoundVolume) => void;
  readonly onNewGameClick?: () => void;
  readonly onOkayClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onSaveGameClick?: () => void;
  readonly onShowPathChange?: (value: boolean) => void;
  readonly onViewEnemyMovementChange?: (value: boolean) => void;
  readonly showPath?: boolean;
  readonly viewEnemyMovement?: boolean;
}

export const GameOptionsWindow = ({
  autoSave,
  effectsVolume = 0,
  movementSpeed = MovementSpeed.Trot,
  musicVolume = 0,
  onAutoSaveChange,
  onEffectsVolumeChange,
  onInfoClick,
  onLoadGameClick,
  onMovementSpeedChange,
  onMusicVolumeChange,
  onNewGameClick,
  onOkayClick,
  onQuitClick,
  onSaveGameClick,
  onShowPathChange,
  onViewEnemyMovementChange,
  showPath,
  viewEnemyMovement,
  x,
  y,
}: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.gameOptionsWindow' });

  const handleMusicVolumeClick = useCallback(
    () => onMusicVolumeChange?.(previousOption(soundVolumes, musicVolume)),
    [musicVolume, onMusicVolumeChange],
  );

  const handleEffectsVolumeClick = useCallback(
    () => onEffectsVolumeChange?.(previousOption(soundVolumes, effectsVolume)),
    [effectsVolume, onEffectsVolumeChange],
  );

  const handleMovementSpeedClick = useCallback(
    () => onMovementSpeedChange?.(nextOption(movementSpeeds, movementSpeed)),
    [movementSpeed, onMovementSpeedChange],
  );

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
        onClick={handleMusicVolumeClick}
        valueLabel={shouldRenderVolume(musicVolume) ? t('volume', { value: musicVolume }) : undefined}
        x={36}
        y={194}
      />
      <GameOption
        assets={assets.effectsToggle}
        checked={isSoundEnabled(effectsVolume)}
        heading={t('effectsHeading')}
        onClick={handleEffectsVolumeClick}
        valueLabel={shouldRenderVolume(effectsVolume) ? t('volume', { value: effectsVolume }) : undefined}
        x={128}
        y={194}
      />
      <GameOption
        assets={{ checked: assets.movementSpeedMap[movementSpeed], unchecked: '' }}
        checked
        heading={t('movementSpeed')}
        onClick={handleMovementSpeedClick}
        valueLabel={t(`core:movementSpeed.${movementSpeed}`)}
        x={220}
        y={194}
      />
      <GameOption
        assets={assets.autoSaveToggle}
        checked={autoSave}
        heading={t('autoSaveHeading')}
        onChange={onAutoSaveChange}
        x={36}
        y={314}
      />
      <GameOption
        assets={assets.showPathToggle}
        checked={showPath}
        heading={t('showPathHeading')}
        onChange={onShowPathChange}
        x={128}
        y={314}
      />
      <GameOption
        assets={assets.viewEnemyMovementToggle}
        checked={viewEnemyMovement}
        heading={t('viewEnemyMovementHeading')}
        onChange={onViewEnemyMovementChange}
        x={220}
        y={314}
      />
      <Button assets={assets.okayButton} label={t('okayLabel')} onClick={onOkayClick} x={24} y={407} />
      <Button assets={assets.infoButton} label={t('infoLabel')} onClick={onInfoClick} x={201} y={407} />
    </Window>
  );
};

const shouldRenderVolume = (value: SoundVolume) => soundVolumes.slice(1, -1).includes(value);

interface GameOptionProps extends PositionProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly heading: string;
  readonly onChange?: (checked: boolean) => void;
  readonly onClick?: () => void;
  readonly valueLabel?: string;
}

const GameOption = ({ assets, checked = false, heading, onChange, onClick, valueLabel, x, y }: GameOptionProps) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.gameOptionsWindow' });

  return (
    <GameOptionRoot x={x} y={y}>
      <GameOptionHeading align="center" size="small" width={80} y={0}>
        {heading}
      </GameOptionHeading>
      <Checkbox assets={assets} checked={checked} label={heading} onChange={onChange} onClick={onClick} />
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
