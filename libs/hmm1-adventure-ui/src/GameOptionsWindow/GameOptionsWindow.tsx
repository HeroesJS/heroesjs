import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, type PositionProps, useModal, Window } from '@heroesjs/hmm1-base-ui';
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
  readonly onConfirmClick?: () => void;
  readonly onEffectsVolumeChange?: (value: SoundVolume) => void;
  readonly onInfoClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onMovementSpeedChange?: (value: MovementSpeed) => void;
  readonly onMusicVolumeChange?: (value: SoundVolume) => void;
  readonly onNewGameClick?: () => void;
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
  onConfirmClick,
  onEffectsVolumeChange,
  onInfoClick,
  onLoadGameClick,
  onMovementSpeedChange,
  onMusicVolumeChange,
  onNewGameClick,
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

  const newGameInfo = useModal();
  const loadGameInfo = useModal();
  const saveGameInfo = useModal();
  const quitInfo = useModal();

  const musicInfo = useModal();
  const effectsInfo = useModal();
  const movementSpeedInfo = useModal();
  const autoSaveInfo = useModal();
  const showPathInfo = useModal();
  const viewEnemyMovementInfo = useModal();

  const confirmInfo = useModal();
  const infoInfo = useModal();

  return (
    <Window background={assets.background} height={459} label={t('title')} width={322} x={x} y={y}>
      <Button
        {...newGameInfo.handlers}
        assets={assets.newGameButton}
        label={t('newGameLabel')}
        onClick={onNewGameClick}
        x={46}
        y={31}
      />
      <Modal open={newGameInfo.isOpen} x={177} y={29}>
        {t('newGameInfo')}
      </Modal>
      <Button
        {...loadGameInfo.handlers}
        assets={assets.loadGameButton}
        label={t('loadGameLabel')}
        onClick={onLoadGameClick}
        x={179}
        y={31}
      />
      <Modal open={loadGameInfo.isOpen} x={177} y={29}>
        {t('loadGameInfo')}
      </Modal>
      <Button
        {...saveGameInfo.handlers}
        assets={assets.saveGameButton}
        label={t('saveGameLabel')}
        onClick={onSaveGameClick}
        x={46}
        y={107}
      />
      <Modal open={saveGameInfo.isOpen} x={177} y={29}>
        {t('saveGameInfo')}
      </Modal>
      <Button
        {...quitInfo.handlers}
        assets={assets.quitButton}
        label={t('quitLabel')}
        onClick={onQuitClick}
        x={179}
        y={107}
      />
      <Modal open={quitInfo.isOpen} x={177} y={29}>
        {t('quitInfo')}
      </Modal>
      <Option
        {...musicInfo.handlers}
        assets={assets.musicToggle}
        checked={isSoundEnabled(musicVolume)}
        heading={t('musicHeading')}
        onClick={handleMusicVolumeClick}
        valueLabel={shouldRenderVolume(musicVolume) ? t('volume', { value: musicVolume }) : undefined}
        x={36}
        y={194}
      />
      <Modal open={musicInfo.isOpen} x={177} y={29}>
        {t('musicInfo')}
      </Modal>
      <Option
        {...effectsInfo.handlers}
        assets={assets.effectsToggle}
        checked={isSoundEnabled(effectsVolume)}
        heading={t('effectsHeading')}
        onClick={handleEffectsVolumeClick}
        valueLabel={shouldRenderVolume(effectsVolume) ? t('volume', { value: effectsVolume }) : undefined}
        x={128}
        y={194}
      />
      <Modal open={effectsInfo.isOpen} x={177} y={29}>
        {t('effectsInfo')}
      </Modal>
      <Option
        {...movementSpeedInfo.handlers}
        assets={{ checked: assets.movementSpeedMap[movementSpeed], unchecked: '' }}
        checked
        heading={t('movementSpeed')}
        onClick={handleMovementSpeedClick}
        valueLabel={t(`core:movementSpeed.${movementSpeed}`)}
        x={220}
        y={194}
      />
      <Modal open={movementSpeedInfo.isOpen} x={177} y={29}>
        {t('movementSpeedInfo')}
      </Modal>
      <Option
        {...autoSaveInfo.handlers}
        assets={assets.autoSaveToggle}
        checked={autoSave}
        heading={t('autoSaveHeading')}
        onChange={onAutoSaveChange}
        x={36}
        y={314}
      />
      <Modal open={autoSaveInfo.isOpen} size={1} x={177} y={29}>
        {t('autoSaveInfo')}
      </Modal>
      <Option
        {...showPathInfo.handlers}
        assets={assets.showPathToggle}
        checked={showPath}
        heading={t('showPathHeading')}
        onChange={onShowPathChange}
        x={128}
        y={314}
      />
      <Modal open={showPathInfo.isOpen} size={2} x={177} y={29}>
        {t('showPathInfo')}
      </Modal>
      <Option
        {...viewEnemyMovementInfo.handlers}
        assets={assets.viewEnemyMovementToggle}
        checked={viewEnemyMovement}
        heading={t('viewEnemyMovementHeading')}
        onChange={onViewEnemyMovementChange}
        x={220}
        y={314}
      />
      <Modal open={viewEnemyMovementInfo.isOpen} size={2} x={177} y={29}>
        {t('viewEnemyMovementInfo')}
      </Modal>
      <Button
        {...confirmInfo.handlers}
        assets={assets.okayButton}
        label={t('confirmLabel')}
        onClick={onConfirmClick}
        x={24}
        y={407}
      />
      <Modal open={confirmInfo.isOpen} x={177} y={29}>
        {t('confirmInfo')}
      </Modal>
      <Button
        {...infoInfo.handlers}
        assets={assets.infoButton}
        label={t('infoLabel')}
        onClick={onInfoClick}
        x={201}
        y={407}
      />
      <Modal open={infoInfo.isOpen} x={177} y={29}>
        {t('infoInfo')}
      </Modal>
    </Window>
  );
};

const shouldRenderVolume = (value: SoundVolume) => soundVolumes.slice(1, -1).includes(value);
