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
      <Text align="center" hidden id="musicVolumeLabel" size="small" width={66} x={35} y={181}>
        Music
      </Text>
      <CycleToggle
        labelId="musicVolumeLabel"
        onChange={onMusicVolumeChange}
        options={soundVolumes}
        reverse
        value={musicVolume}
        x={36}
        y={194}
      >
        {(value) => (
          <img
            alt={musicVolume ? `On${musicVolume !== SoundVolume.On ? ` - Volume ${musicVolume}` : ''}` : 'Off'}
            src={value ? music.checked : music.unchecked}
          />
        )}
      </CycleToggle>
      <Text align="center" hidden size="small" width={64} x={36} y={259}>
        {musicVolume ? 'On' : 'Off'}
        {![SoundVolume.On, SoundVolume.Off].includes(musicVolume) && (
          <>
            <br />
            {`Volume ${musicVolume}`}
          </>
        )}
      </Text>
      <Text align="center" hidden id="effectsVolumeLabel" size="small" width={67} x={127} y={181}>
        Effects
      </Text>
      <CycleToggle
        labelId="effectsVolumeLabel"
        onChange={onEffectsVolumeChange}
        options={soundVolumes}
        reverse
        value={effectsVolume}
        x={128}
        y={194}
      >
        {(value) => (
          <img
            alt={effectsVolume ? `On${effectsVolume !== SoundVolume.On ? ` - Volume ${effectsVolume}` : ''}` : 'Off'}
            src={value ? effects.checked : effects.unchecked}
          />
        )}
      </CycleToggle>
      <Text align="center" hidden size="small" width={64} x={128} y={259}>
        {effectsVolume ? 'On' : 'Off'}
        {![SoundVolume.On, SoundVolume.Off].includes(effectsVolume) && (
          <>
            <br />
            {`Volume ${effectsVolume}`}
          </>
        )}
      </Text>
      <Text align="center" hidden id="movementSpeedLabel" size="small" width={67} x={219} y={181}>
        Speed
      </Text>
      <CycleToggle
        options={movementSpeeds}
        labelId="movementSpeedLabel"
        onChange={onMovementSpeedChange}
        value={movementSpeed}
        x={220}
        y={194}
      >
        {(value) => <img alt={movementSpeedLabel[value]} src={movementSpeedAssets[value]} />}
      </CycleToggle>
      <Text align="center" hidden size="small" width={64} x={220} y={259}>
        {movementSpeedLabel[movementSpeed]}
      </Text>
      <Setting assets={autoSaveAssets} label="Auto Save" onChange={onAutoSaveChange} value={autoSave} x={26} y={301} />
      <Setting assets={showPathAssets} label="Show Path" onChange={onShowPathChange} value={showPath} x={117} y={301} />
      <Setting
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

interface SettingProps {
  readonly assets: CheckboxAssets;
  readonly label: string;
  readonly onChange?: (value: boolean) => void;
  readonly value?: boolean;
  readonly x?: number;
  readonly y?: number;
}

function Setting({ assets, label, onChange, value, x, y }: SettingProps) {
  const id = useId();

  return (
    <SettingRoot x={x} y={y}>
      <SettingLabel align="center" hidden id={id} size="small">
        {label}
      </SettingLabel>
      <Checkbox assets={assets} checked={value} labelId={id} onChange={onChange} />
      <SettingValue align="center" hidden size="small" fullWidth>
        {value ? 'On' : 'Off'}
      </SettingValue>
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
});

const SettingValue = styled(Text)({
  textIndent: -1,
});
