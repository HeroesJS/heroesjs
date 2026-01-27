import { type ReactNode, useId } from 'react';
import styled from 'styled-components';

import { MovementSpeed, movementSpeedLabel, movementSpeeds, SoundVolume, soundVolumes } from '@heroesjs/hmm1-core';
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

interface GameOptionsWindowProps {
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
  readonly open: boolean;
  readonly showPath?: boolean;
  readonly viewEnemyMovement?: boolean;
  readonly x?: number;
  readonly y?: number;
}

export function GameOptionsWindow({
  autoSave,
  effectsVolume = SoundVolume.Off,
  movementSpeed = MovementSpeed.Walk,
  musicVolume = SoundVolume.Off,
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
  open,
  showPath,
  viewEnemyMovement,
  x,
  y,
}: GameOptionsWindowProps) {
  const [NewGameConfirmationModal, newGameConfirmationModal] = useModal();
  const [LoadGameConfirmationModal, loadGameConfirmationModal] = useModal();
  const [QuitConfirmationModal, quitConfirmationModal] = useModal();

  return (
    <Window background={background} label="Game Options Window" height={459} open={open} width={322} x={x} y={y}>
      <Button assets={newGame} label="New Game" onClick={newGameConfirmationModal.open} x={46} y={31} />
      <NewGameConfirmationModal
        onCancelClick={newGameConfirmationModal.close}
        onConfirmClick={onNewGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to restart?&nbsp;&nbsp;(Your current game will be lost)
      </NewGameConfirmationModal>
      <Button assets={loadGame} label="Load Game" onClick={loadGameConfirmationModal.open} x={179} y={31} />
      <LoadGameConfirmationModal
        onCancelClick={loadGameConfirmationModal.close}
        onConfirmClick={onLoadGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to load a new game?&nbsp;&nbsp;(Your current game will be lost)
      </LoadGameConfirmationModal>
      <Button assets={saveGame} label="Save Game" onClick={onSaveGameClick} x={46} y={107} />
      <Button assets={quit} label="Quit" onClick={quitConfirmationModal.open} x={179} y={107} />
      <QuitConfirmationModal
        onCancelClick={quitConfirmationModal.close}
        onConfirmClick={onQuitClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to quit?&nbsp;&nbsp;(Your current game will be lost)
      </QuitConfirmationModal>
      <VolumeSetting assets={music} label="Music" onChange={onMusicVolumeChange} value={musicVolume} x={25} y={181} />
      <VolumeSetting
        assets={effects}
        label="Effects"
        onChange={onEffectsVolumeChange}
        value={effectsVolume}
        x={117}
        y={181}
      />
      <CycleToggleSetting
        assets={movementSpeedAssets}
        label="Speed"
        onChange={onMovementSpeedChange}
        options={movementSpeeds}
        value={movementSpeed}
        valueLabels={movementSpeedLabel}
        x={209}
        y={181}
      />
      <CheckboxSetting
        assets={autoSaveAssets}
        label="Auto Save"
        onChange={onAutoSaveChange}
        value={autoSave}
        x={25}
        y={301}
      />
      <CheckboxSetting
        assets={showPathAssets}
        label="Show Path"
        onChange={onShowPathChange}
        value={showPath}
        x={117}
        y={301}
      />
      <CheckboxSetting
        assets={viewEnemyMovementAssets}
        label="View Enemy Movement"
        onChange={onViewEnemyMovementChange}
        value={viewEnemyMovement}
        x={209}
        y={289}
      />
      <Button assets={okay} label="Okay" onClick={onOkayClick} x={24} y={407} />
      <Button assets={info} label="Info" onClick={onInfoClick} x={201} y={407} />
    </Window>
  );
}

interface CheckboxSettingProps {
  readonly assets: CheckboxAssets;
  readonly label: string;
  readonly onChange?: (value: boolean) => void;
  readonly value?: boolean;
  readonly x?: number;
  readonly y?: number;
}

function CheckboxSetting({ assets, label, onChange, value, x, y }: CheckboxSettingProps) {
  return (
    <Setting label={label} valueLabel={value ? 'On' : 'Off'} x={x} y={y}>
      {(labelId) => <Checkbox assets={assets} checked={value} labelId={labelId} onChange={onChange} />}
    </Setting>
  );
}

interface VolumeSettingProps {
  readonly assets: CheckboxAssets;
  readonly label: string;
  readonly onChange?: (value: SoundVolume) => void;
  readonly value: SoundVolume;
  readonly x?: number;
  readonly y?: number;
}

function VolumeSetting({ assets, label, onChange, value, x, y }: VolumeSettingProps) {
  const enabledLabel = value !== SoundVolume.Off ? 'On' : 'Off';
  const volumeLabel = ![SoundVolume.Off, SoundVolume.On].includes(value) ? `Volume ${value}` : '';

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
        <CycleToggle labelId={labelId} onChange={onChange} options={soundVolumes} reverse value={value}>
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
  readonly options: readonly T[];
  readonly value: T;
  readonly valueLabels: Readonly<Record<T, string>>;
  readonly x?: number;
  readonly y?: number;
}

function CycleToggleSetting<T extends string>({
  assets,
  label,
  onChange,
  options,
  value,
  valueLabels,
  x,
  y,
}: CycleToggleSettingProps<T>) {
  return (
    <Setting label={label} valueLabel={valueLabels[value]} x={x} y={y}>
      {(labelId) => (
        <CycleToggle labelId={labelId} onChange={onChange} options={options} value={value}>
          {(value) => <img alt={valueLabels[value]} src={assets[value]} />}
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
      <SettingLabel align="center" hidden id={labelId} size="small" fullWidth>
        {label}
      </SettingLabel>
      <SettingControl>{children(labelId)}</SettingControl>
      <Text align="center" hidden size="small" fullWidth>
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
