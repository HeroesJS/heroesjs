import type { MouseEvent, ReactNode } from 'react';
import { useId } from 'react';
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
  const [NewGameInfoModal, newGameInfoModal] = useModal();
  const [NewGameConfirmationModal, newGameConfirmationModal] = useModal();

  const [LoadGameInfoModal, loadGameInfoModal] = useModal();
  const [LoadGameConfirmationModal, loadGameConfirmationModal] = useModal();

  const [SaveGameInfoModal, saveGameInfoModal] = useModal();

  const [QuitInfoModal, quitInfoModal] = useModal();
  const [QuitConfirmationModal, quitConfirmationModal] = useModal();

  const [MusicVolumeInfoModal, musicVolumeInfoModal] = useModal();
  const [EffectsVolumeInfoModal, effectsVolumeInfoModal] = useModal();
  const [MovementSpeedInfoModal, movementSpeedInfoModal] = useModal();
  const [AutoSaveInfoModal, autoSaveInfoModal] = useModal();
  const [ShowPathInfoModal, showPathInfoModal] = useModal();
  const [ViewEnemyMovementInfoModal, viewEnemyMovementInfoModal] = useModal();

  const [OkayInfoModal, okayInfoModal] = useModal();
  const [InfoInfoModal, infoInfoModal] = useModal();

  return (
    <Window background={background} label="Game Options Window" height={459} open={open} width={322} x={x} y={y}>
      <Button
        assets={newGame}
        label="New Game"
        onClick={newGameConfirmationModal.open}
        onMouseDown={newGameInfoModal.onMouseDown}
        x={46}
        y={31}
      />
      <NewGameInfoModal>Start a single or multi&#8209;player game.</NewGameInfoModal>
      <NewGameConfirmationModal
        onCancelClick={newGameConfirmationModal.close}
        onConfirmClick={onNewGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to restart?&nbsp;&nbsp;(Your current game will be lost)
      </NewGameConfirmationModal>
      <Button
        assets={loadGame}
        label="Load Game"
        onClick={loadGameConfirmationModal.open}
        onMouseDown={loadGameInfoModal.onMouseDown}
        x={179}
        y={31}
      />
      <LoadGameInfoModal>Load a previously saved game.</LoadGameInfoModal>
      <LoadGameConfirmationModal
        onCancelClick={loadGameConfirmationModal.close}
        onConfirmClick={onLoadGameClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to load a new game?&nbsp;&nbsp;(Your current game will be lost)
      </LoadGameConfirmationModal>
      <Button
        assets={saveGame}
        label="Save Game"
        onClick={onSaveGameClick}
        onMouseDown={saveGameInfoModal.onMouseDown}
        x={46}
        y={107}
      />
      <SaveGameInfoModal>Save the current game.</SaveGameInfoModal>
      <Button
        assets={quit}
        label="Quit"
        onClick={quitConfirmationModal.open}
        onMouseDown={quitInfoModal.onMouseDown}
        x={179}
        y={107}
      />
      <QuitInfoModal>Quit Heroes of Might and Magic and return to the DOS prompt.</QuitInfoModal>
      <QuitConfirmationModal
        onCancelClick={quitConfirmationModal.close}
        onConfirmClick={onQuitClick}
        size={1}
        type="yesNo"
        y={81}
      >
        Are you sure you want to quit?&nbsp;&nbsp;(Your current game will be lost)
      </QuitConfirmationModal>
      <VolumeSetting
        assets={music}
        label="Music"
        onChange={onMusicVolumeChange}
        onMouseDown={musicVolumeInfoModal.onMouseDown}
        value={musicVolume}
        x={25}
        y={181}
      />
      <MusicVolumeInfoModal>Toggle ambient music on/off</MusicVolumeInfoModal>
      <VolumeSetting
        assets={effects}
        label="Effects"
        onChange={onEffectsVolumeChange}
        onMouseDown={effectsVolumeInfoModal.onMouseDown}
        value={effectsVolume}
        x={117}
        y={181}
      />
      <EffectsVolumeInfoModal>Toggle foreground sounds on/off</EffectsVolumeInfoModal>
      <CycleToggleSetting
        assets={movementSpeedAssets}
        label="Speed"
        onChange={onMovementSpeedChange}
        onMouseDown={movementSpeedInfoModal.onMouseDown}
        options={movementSpeeds}
        value={movementSpeed}
        valueLabels={movementSpeedLabel}
        x={209}
        y={181}
      />
      <MovementSpeedInfoModal>Change the speed at which Heroes move on the main screen.</MovementSpeedInfoModal>
      <CheckboxSetting
        assets={autoSaveAssets}
        label="Auto Save"
        onChange={onAutoSaveChange}
        onMouseDown={autoSaveInfoModal.onMouseDown}
        value={autoSave}
        x={25}
        y={301}
      />
      <AutoSaveInfoModal size={1}>
        Toggle 'Autosave' on/off.&nbsp; 'Autosave' saves your game automatically at the end of each turn to a special
        file, called 'AUTOSAVE'.
      </AutoSaveInfoModal>
      <CheckboxSetting
        assets={showPathAssets}
        label="Show Path"
        onChange={onShowPathChange}
        onMouseDown={showPathInfoModal.onMouseDown}
        value={showPath}
        x={117}
        y={301}
      />
      <ShowPathInfoModal size={2}>
        Toggle 'Show Path' on/off.&nbsp; If 'Show Path' is on, your first click on a map location will show the path to
        get there, your second will start you moving. If this option is off, one click starts you moving immediately.
      </ShowPathInfoModal>
      <CheckboxSetting
        assets={viewEnemyMovementAssets}
        label="View Enemy Movement"
        onChange={onViewEnemyMovementChange}
        onMouseDown={viewEnemyMovementInfoModal.onMouseDown}
        value={viewEnemyMovement}
        x={209}
        y={289}
      />
      <ViewEnemyMovementInfoModal size={2}>
        Toggle 'Show Enemy Moves' on/off.&nbsp; If on, all enemies moving within your visible area will be shown.&nbsp;
        If off, no computer movement will be shown.&nbsp; Note that this option is automatically set to off during
        network and modem play.
      </ViewEnemyMovementInfoModal>
      <Button assets={okay} label="Okay" onClick={onOkayClick} onMouseDown={okayInfoModal.onMouseDown} x={24} y={407} />
      <OkayInfoModal>Exit this menu without doing anything.</OkayInfoModal>
      <Button
        assets={info}
        label="Info"
        onClick={onInfoClick}
        onMouseDown={infoInfoModal.onMouseDown}
        x={201}
        y={407}
      />
      <InfoInfoModal>View information on the scenario you are currently playing.</InfoInfoModal>
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
  return (
    <Setting label={label} valueLabel={value ? 'On' : 'Off'} x={x} y={y}>
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
  readonly valueLabels: Readonly<Record<T, string>>;
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
  valueLabels,
  x,
  y,
}: CycleToggleSettingProps<T>) {
  return (
    <Setting label={label} valueLabel={valueLabels[value]} x={x} y={y}>
      {(labelId) => (
        <CycleToggle labelId={labelId} onChange={onChange} onMouseDown={onMouseDown} options={options} value={value}>
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
