import type { MouseEvent, ReactNode } from 'react';
import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import type { GameSettings } from '@heroesjs/hmm1-core';
import { MovementSpeed, movementSpeeds, SoundVolume, soundVolumes } from '@heroesjs/hmm1-core';
import {
  Button,
  Checkbox,
  CheckboxAssets,
  CycleToggle,
  PositionedComponent,
  Text,
  useModal,
  Window,
} from '@heroesjs/hmm1-core-ui';

import {
  autoSaveAssets,
  background,
  effects,
  info,
  loadGame,
  movementSpeedAssets,
  music,
  newGame,
  okay,
  quit,
  saveGame,
  showPathAssets,
  viewEnemyMovementAssets,
} from './assets';

const defaultSettings: GameSettings = {
  autoSave: false,
  effectsVolume: SoundVolume.Off,
  movementSpeed: MovementSpeed.Walk,
  musicVolume: SoundVolume.Off,
  showPath: false,
  viewEnemyMovement: false,
};

interface GameOptionsWindowProps {
  readonly onInfoClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onNewGameClick?: () => void;
  readonly onOkayClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly onSaveGameClick?: () => void;
  readonly onSettingsChange?: (value: GameSettings) => void;
  readonly open: boolean;
  readonly settings?: Partial<GameSettings>;
  readonly x?: number;
  readonly y?: number;
}

export function GameOptionsWindow({
  onInfoClick,
  onLoadGameClick,
  onNewGameClick,
  onOkayClick,
  onQuitClick,
  onSaveGameClick,
  onSettingsChange,
  open,
  settings: settingsOverride = defaultSettings,
  x,
  y,
}: GameOptionsWindowProps) {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.gameOptionsWindow' });
  const { t: tCore } = useTranslation('core');

  const [NewGameInfoModal, newGameInfoModal] = useModal();
  const [NewGameConfirmationModal, newGameConfirmationModal] = useModal();

  const [LoadGameInfoModal, loadGameInfoModal] = useModal();
  const [LoadGameConfirmationModal, loadGameConfirmationModal] = useModal();

  const [SaveGameInfoModal, saveGameInfoModal] = useModal();

  const [QuitInfoModal, quitInfoModal] = useModal();
  const [QuitConfirmationModal, quitConfirmationModal] = useModal();

  const settings = {
    ...defaultSettings,
    ...settingsOverride,
  };

  const handleSettingsChange = (value: Partial<GameSettings>) =>
    onSettingsChange?.({
      ...settings,
      ...value,
    });

  const [MusicVolumeInfoModal, musicVolumeInfoModal] = useModal();
  const [EffectsVolumeInfoModal, effectsVolumeInfoModal] = useModal();
  const [MovementSpeedInfoModal, movementSpeedInfoModal] = useModal();
  const [AutoSaveInfoModal, autoSaveInfoModal] = useModal();
  const [ShowPathInfoModal, showPathInfoModal] = useModal();
  const [ViewEnemyMovementInfoModal, viewEnemyMovementInfoModal] = useModal();

  const [OkayInfoModal, okayInfoModal] = useModal();
  const [InfoInfoModal, infoInfoModal] = useModal();

  return (
    <Window background={background} height={459} label={t(($) => $.title)} open={open} width={322} x={x} y={y}>
      <Button
        assets={newGame}
        label={t(($) => $.newGame.label)}
        onClick={newGameConfirmationModal.open}
        onMouseDown={newGameInfoModal.onMouseDown}
        x={46}
        y={31}
      />
      <NewGameInfoModal>{t(($) => $.newGame.info)}</NewGameInfoModal>
      <NewGameConfirmationModal
        onCancelClick={newGameConfirmationModal.close}
        onConfirmClick={onNewGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        {t(($) => $.newGame.confirmation)}
      </NewGameConfirmationModal>
      <Button
        assets={loadGame}
        label={t(($) => $.loadGame.label)}
        onClick={loadGameConfirmationModal.open}
        onMouseDown={loadGameInfoModal.onMouseDown}
        x={179}
        y={31}
      />
      <LoadGameInfoModal>{t(($) => $.loadGame.info)}</LoadGameInfoModal>
      <LoadGameConfirmationModal
        onCancelClick={loadGameConfirmationModal.close}
        onConfirmClick={onLoadGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        {t(($) => $.loadGame.confirmation)}
      </LoadGameConfirmationModal>
      <Button
        assets={saveGame}
        label={t(($) => $.saveGame.label)}
        onClick={onSaveGameClick}
        onMouseDown={saveGameInfoModal.onMouseDown}
        x={46}
        y={107}
      />
      <SaveGameInfoModal>{t(($) => $.saveGame.info)}</SaveGameInfoModal>
      <Button
        assets={quit}
        label={t(($) => $.quit.label)}
        onClick={quitConfirmationModal.open}
        onMouseDown={quitInfoModal.onMouseDown}
        x={179}
        y={107}
      />
      <QuitInfoModal>{t(($) => $.quit.info)}</QuitInfoModal>
      <QuitConfirmationModal
        onCancelClick={quitConfirmationModal.close}
        onConfirmClick={onQuitClick}
        size={1}
        type="yesNo"
        y={81}
      >
        {t(($) => $.quit.confirmation)}
      </QuitConfirmationModal>
      <VolumeSetting
        assets={music}
        label={t(($) => $.musicVolume.label)}
        onChange={(value) => handleSettingsChange({ musicVolume: value })}
        onMouseDown={musicVolumeInfoModal.onMouseDown}
        value={settings.musicVolume}
        x={25}
        y={181}
      />
      <MusicVolumeInfoModal>{t(($) => $.musicVolume.info)}</MusicVolumeInfoModal>
      <VolumeSetting
        assets={effects}
        label={t(($) => $.effectsVolume.label)}
        onChange={(value) => handleSettingsChange({ effectsVolume: value })}
        onMouseDown={effectsVolumeInfoModal.onMouseDown}
        value={settings.effectsVolume}
        x={117}
        y={181}
      />
      <EffectsVolumeInfoModal>{t(($) => $.effectsVolume.info)}</EffectsVolumeInfoModal>
      <CycleToggleSetting
        assets={movementSpeedAssets}
        label={t(($) => $.movementSpeed.label)}
        onChange={(value) => handleSettingsChange({ movementSpeed: value })}
        onMouseDown={movementSpeedInfoModal.onMouseDown}
        options={movementSpeeds}
        value={settings.movementSpeed}
        valueLabel={tCore(($) => $.movementSpeed[settings.movementSpeed])}
        x={209}
        y={181}
      />
      <MovementSpeedInfoModal>{t(($) => $.movementSpeed.info)}</MovementSpeedInfoModal>
      <CheckboxSetting
        assets={autoSaveAssets}
        label={t(($) => $.autoSave.label)}
        onChange={(value) => handleSettingsChange({ autoSave: value })}
        onMouseDown={autoSaveInfoModal.onMouseDown}
        value={settings.autoSave}
        x={25}
        y={301}
      />
      <AutoSaveInfoModal size={1}>{t(($) => $.autoSave.info)}</AutoSaveInfoModal>
      <CheckboxSetting
        assets={showPathAssets}
        label={t(($) => $.showPath.label)}
        onChange={(value) => handleSettingsChange({ showPath: value })}
        onMouseDown={showPathInfoModal.onMouseDown}
        value={settings.showPath}
        x={117}
        y={301}
      />
      <ShowPathInfoModal size={2}>{t(($) => $.showPath.info)}</ShowPathInfoModal>
      <CheckboxSetting
        assets={viewEnemyMovementAssets}
        label={t(($) => $.viewEnemyMovement.label)}
        onChange={(value) => handleSettingsChange({ viewEnemyMovement: value })}
        onMouseDown={viewEnemyMovementInfoModal.onMouseDown}
        value={settings.viewEnemyMovement}
        x={209}
        y={289}
      />
      <ViewEnemyMovementInfoModal size={2}>{t(($) => $.viewEnemyMovement.info)}</ViewEnemyMovementInfoModal>
      <Button
        assets={okay}
        label={t(($) => $.confirm.label)}
        onClick={onOkayClick}
        onMouseDown={okayInfoModal.onMouseDown}
        x={24}
        y={407}
      />
      <OkayInfoModal>{t(($) => $.confirm.info)}</OkayInfoModal>
      <Button
        assets={info}
        label={t(($) => $.info.label)}
        onClick={onInfoClick}
        onMouseDown={infoInfoModal.onMouseDown}
        x={201}
        y={407}
      />
      <InfoInfoModal>{t(($) => $.info.info)}</InfoInfoModal>
    </Window>
  );
}

interface CheckboxSettingProps {
  readonly assets: CheckboxAssets;
  readonly label: string;
  readonly onChange?: (value: boolean) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value?: boolean;
  readonly x?: number;
  readonly y?: number;
}

function CheckboxSetting({ assets, label, onChange, onMouseDown, value, x, y }: CheckboxSettingProps) {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.gameOptionsWindow.toggle' });

  return (
    <Setting label={label} valueLabel={value ? t(($) => $.on) : t(($) => $.off)} x={x} y={y}>
      {(labelId) => (
        <Checkbox assets={assets} checked={value} labelId={labelId} onChange={onChange} onMouseDown={onMouseDown} />
      )}
    </Setting>
  );
}

interface VolumeSettingProps {
  readonly assets: CheckboxAssets;
  readonly label: string;
  readonly onChange?: (value: SoundVolume) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: SoundVolume;
  readonly x?: number;
  readonly y?: number;
}

function VolumeSetting({ assets, label, onChange, onMouseDown, value, x, y }: VolumeSettingProps) {
  const { t } = useTranslation('adventure', { keyPrefix: 'component.gameOptionsWindow.soundVolume' });

  const enabledLabel = value !== SoundVolume.Off ? t(($) => $.max) : t(($) => $.min);
  const volumeLabel = ![SoundVolume.Off, SoundVolume.On].includes(value) ? t(($) => $.volume, { value }) : '';

  return (
    <Setting
      label={label}
      valueLabel={
        <>
          {enabledLabel}
          {volumeLabel && (
            <>
              <br />
              {volumeLabel}
            </>
          )}
        </>
      }
      x={x}
      y={y}
    >
      {(labelId) => (
        <CycleToggle
          labelId={labelId}
          onChange={onChange}
          onMouseDown={onMouseDown}
          options={soundVolumes}
          reverse
          value={value}
        >
          {(value) => (
            <img
              alt={`${enabledLabel}${volumeLabel ? ` - ${volumeLabel}` : ''}`}
              src={value ? assets.checked : assets.unchecked}
            />
          )}
        </CycleToggle>
      )}
    </Setting>
  );
}

interface CycleToggleSettingProps<T extends string> {
  readonly assets: Readonly<Record<T, string>>;
  readonly label: string;
  readonly onChange?: (value: T) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly options: readonly T[];
  readonly value: T;
  readonly valueLabel: string;
  readonly x?: number;
  readonly y?: number;
}

function CycleToggleSetting<T extends string>({
  assets,
  label,
  onChange,
  onMouseDown,
  options,
  value,
  valueLabel,
  x,
  y,
}: CycleToggleSettingProps<T>) {
  return (
    <Setting label={label} valueLabel={valueLabel} x={x} y={y}>
      {(labelId) => (
        <CycleToggle labelId={labelId} onChange={onChange} onMouseDown={onMouseDown} options={options} value={value}>
          {(value) => <img alt={valueLabel} src={assets[value]} />}
        </CycleToggle>
      )}
    </Setting>
  );
}

interface SettingProps {
  readonly children: (labelId: string) => ReactNode;
  readonly label: string;
  readonly valueLabel: ReactNode;
  readonly x?: number;
  readonly y?: number;
}

function Setting({ children, label, valueLabel, x, y }: SettingProps) {
  const labelId = useId();

  return (
    <SettingRoot x={x} y={y}>
      <SettingLabel align="center" fullWidth hidden id={labelId} size="small">
        {label}
      </SettingLabel>
      <SettingControl>{children(labelId)}</SettingControl>
      <Text align="center" fullWidth hidden size="small">
        {valueLabel}
      </Text>
    </SettingRoot>
  );
}

const SettingRoot = styled(PositionedComponent)({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: 86,
});

const SettingLabel = styled(Text)({
  marginBottom: 1,
  paddingLeft: 1,
});

const SettingControl = styled('div')({
  paddingLeft: 1,
});
