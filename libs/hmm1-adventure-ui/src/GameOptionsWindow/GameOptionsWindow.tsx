import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, type PositionProps, Window } from '@heroesjs/hmm1-base-ui';
import {
  isSoundEnabled,
  type MovementSpeed,
  movementSpeeds,
  nextOption,
  previousOption,
  type SoundVolume,
  soundVolumes,
} from '@heroesjs/hmm1-core';

import * as assets from './assets';
import { Option } from './Option';

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
  effectsVolume = soundVolumes[0],
  movementSpeed = movementSpeeds[0],
  musicVolume = soundVolumes[0],
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
      <Option
        assets={assets.musicToggle}
        checked={isSoundEnabled(musicVolume)}
        heading={t('musicHeading')}
        onClick={handleMusicVolumeClick}
        valueLabel={shouldRenderVolume(musicVolume) ? t('volume', { value: musicVolume }) : undefined}
        x={36}
        y={194}
      />
      <Option
        assets={assets.effectsToggle}
        checked={isSoundEnabled(effectsVolume)}
        heading={t('effectsHeading')}
        onClick={handleEffectsVolumeClick}
        valueLabel={shouldRenderVolume(effectsVolume) ? t('volume', { value: effectsVolume }) : undefined}
        x={128}
        y={194}
      />
      <Option
        assets={{ checked: assets.movementSpeedMap[movementSpeed], unchecked: '' }}
        checked
        heading={t('movementSpeed')}
        onClick={handleMovementSpeedClick}
        valueLabel={t(`core:movementSpeed.${movementSpeed}`)}
        x={220}
        y={194}
      />
      <Option
        assets={assets.autoSaveToggle}
        checked={autoSave}
        heading={t('autoSaveHeading')}
        onChange={onAutoSaveChange}
        x={36}
        y={314}
      />
      <Option
        assets={assets.showPathToggle}
        checked={showPath}
        heading={t('showPathHeading')}
        onChange={onShowPathChange}
        x={128}
        y={314}
      />
      <Option
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
