import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { MovementSpeed, type SoundVolume } from '@heroesjs/hmm1-core';

import type { RootState } from './store';

interface GameOptionsState {
  readonly autoSave: boolean;
  readonly effectsVolume: SoundVolume;
  readonly movementSpeed: MovementSpeed;
  readonly musicVolume: SoundVolume;
  readonly showPath: boolean;
  readonly viewEnemyMovement: boolean;
}

const initialState: GameOptionsState = {
  autoSave: true,
  effectsVolume: 10,
  movementSpeed: MovementSpeed.Trot,
  musicVolume: 10,
  showPath: true,
  viewEnemyMovement: true,
};

export const gameOptionsSlice = createSlice({
  initialState,
  name: 'gameOptions',
  reducers: {
    setAutoSave: (state, action: PayloadAction<boolean>) => {
      state.autoSave = action.payload;
    },
    setEffectsVolume: (state, action: PayloadAction<SoundVolume>) => {
      state.effectsVolume = action.payload;
    },
    setMovementSpeed: (state, action: PayloadAction<MovementSpeed>) => {
      state.movementSpeed = action.payload;
    },
    setMusicVolume: (state, action: PayloadAction<SoundVolume>) => {
      state.musicVolume = action.payload;
    },
    setShowPath: (state, action: PayloadAction<boolean>) => {
      state.showPath = action.payload;
    },
    setViewEnemyMovement: (state, action: PayloadAction<boolean>) => {
      state.viewEnemyMovement = action.payload;
    },
  },
});

export const { setAutoSave, setEffectsVolume, setMovementSpeed, setMusicVolume, setShowPath, setViewEnemyMovement } =
  gameOptionsSlice.actions;

export const selectGameOptions = (state: RootState) => state.gameOptions;
