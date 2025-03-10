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

  const newGameInfoModal = useModal();
  const newGameConfirm = useModal();
  const loadGameInfo = useModal();
  const loadGameConfirm = useModal();
  const saveGameInfo = useModal();
  const quitInfo = useModal();
  const quitConfirm = useModal();

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
        assets={assets.newGameButton}
        label={t('newGameLabel')}
        onClick={newGameConfirm.open}
        onMouseDown={newGameInfoModal.onMouseDown}
        x={46}
        y={31}
      />
      <Modal open={newGameInfoModal.isOpen} x={177} y={29}>
        {t('newGameInfo')}
      </Modal>
      <Modal
        onCancelClick={newGameConfirm.close}
        onConfirmClick={onNewGameClick}
        open={newGameConfirm.isOpen}
        size={1}
        type="yesNo"
        x={177}
        y={81}
      >
        {t('newGameConfirm')}
      </Modal>
      <Button
        assets={assets.loadGameButton}
        label={t('loadGameLabel')}
        onClick={loadGameConfirm.open}
        onMouseDown={loadGameInfo.onMouseDown}
        x={179}
        y={31}
      />
      <Modal open={loadGameInfo.isOpen} x={177} y={29}>
        {t('loadGameInfo')}
      </Modal>
      <Modal
        onCancelClick={loadGameConfirm.close}
        onConfirmClick={onLoadGameClick}
        open={loadGameConfirm.isOpen}
        size={1}
        type="yesNo"
        x={177}
        y={81}
      >
        {t('loadGameConfirm')}
      </Modal>
      <Button
        assets={assets.saveGameButton}
        label={t('saveGameLabel')}
        onClick={onSaveGameClick}
        onMouseDown={saveGameInfo.onMouseDown}
        x={46}
        y={107}
      />
      <Modal open={saveGameInfo.isOpen} x={177} y={29}>
        {t('saveGameInfo')}
      </Modal>
      <Button
        assets={assets.quitButton}
        label={t('quitLabel')}
        onClick={quitConfirm.open}
        onMouseDown={quitInfo.onMouseDown}
        x={179}
        y={107}
      />
      <Modal open={quitInfo.isOpen} x={177} y={29}>
        {t('quitInfo')}
      </Modal>
      <Modal
        onCancelClick={quitConfirm.close}
        onConfirmClick={onQuitClick}
        open={quitConfirm.isOpen}
        size={1}
        type="yesNo"
        x={177}
        y={81}
      >
        {t('quitConfirm')}
      </Modal>
      <Option
        assets={assets.musicToggle}
        checked={isSoundEnabled(musicVolume)}
        heading={t('musicHeading')}
        onClick={handleMusicVolumeClick}
        onMouseDown={musicInfo.onMouseDown}
        valueLabel={shouldRenderVolume(musicVolume) ? t('volume', { value: musicVolume }) : undefined}
        x={36}
        y={194}
      />
      <Modal open={musicInfo.isOpen} x={177} y={29}>
        {t('musicInfo')}
      </Modal>
      <Option
        assets={assets.effectsToggle}
        checked={isSoundEnabled(effectsVolume)}
        heading={t('effectsHeading')}
        onClick={handleEffectsVolumeClick}
        onMouseDown={effectsInfo.onMouseDown}
        valueLabel={shouldRenderVolume(effectsVolume) ? t('volume', { value: effectsVolume }) : undefined}
        x={128}
        y={194}
      />
      <Modal open={effectsInfo.isOpen} x={177} y={29}>
        {t('effectsInfo')}
      </Modal>
      <Option
        assets={{ checked: assets.movementSpeedMap[movementSpeed], unchecked: '' }}
        checked
        heading={t('movementSpeed')}
        onClick={handleMovementSpeedClick}
        onMouseDown={movementSpeedInfo.onMouseDown}
        valueLabel={t(`core:movementSpeed.${movementSpeed}`)}
        x={220}
        y={194}
      />
      <Modal open={movementSpeedInfo.isOpen} x={177} y={29}>
        {t('movementSpeedInfo')}
      </Modal>
      <Option
        assets={assets.autoSaveToggle}
        checked={autoSave}
        heading={t('autoSaveHeading')}
        onChange={onAutoSaveChange}
        onMouseDown={autoSaveInfo.onMouseDown}
        x={36}
        y={314}
      />
      <Modal open={autoSaveInfo.isOpen} size={1} x={177} y={29}>
        {t('autoSaveInfo')}
      </Modal>
      <Option
        assets={assets.showPathToggle}
        checked={showPath}
        heading={t('showPathHeading')}
        onChange={onShowPathChange}
        onMouseDown={showPathInfo.onMouseDown}
        x={128}
        y={314}
      />
      <Modal open={showPathInfo.isOpen} size={2} x={177} y={29}>
        {t('showPathInfo')}
      </Modal>
      <Option
        assets={assets.viewEnemyMovementToggle}
        checked={viewEnemyMovement}
        heading={t('viewEnemyMovementHeading')}
        onChange={onViewEnemyMovementChange}
        onMouseDown={viewEnemyMovementInfo.onMouseDown}
        x={220}
        y={314}
      />
      <Modal open={viewEnemyMovementInfo.isOpen} size={2} x={177} y={29}>
        {t('viewEnemyMovementInfo')}
      </Modal>
      <Button
        assets={assets.okayButton}
        label={t('confirmLabel')}
        onClick={onConfirmClick}
        onMouseDown={confirmInfo.onMouseDown}
        x={24}
        y={407}
      />
      <Modal open={confirmInfo.isOpen} x={177} y={29}>
        {t('confirmInfo')}
      </Modal>
      <Button
        assets={assets.infoButton}
        label={t('infoLabel')}
        onClick={onInfoClick}
        onMouseDown={infoInfo.onMouseDown}
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
