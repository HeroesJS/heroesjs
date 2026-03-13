import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { MovementSpeed, SoundVolume } from '@heroesjs/hmm1-core';

import { RootState } from './store';

export interface GameSettingsState {
  readonly autoSave: boolean;
  readonly effectsVolume: SoundVolume;
  readonly movementSpeed: MovementSpeed;
  readonly musicVolume: SoundVolume;
  readonly showPath: boolean;
  readonly viewEnemyMovement: boolean;
}

const initialState: GameSettingsState = {
  autoSave: true,
  effectsVolume: SoundVolume.On,
  movementSpeed: MovementSpeed.Gallop,
  musicVolume: SoundVolume.On,
  showPath: true,
  viewEnemyMovement: true,
};

export const gameSettingsSlice = createSlice({
  initialState,
  name: 'gameSettings',
  reducers: {
    updateGameSettings: (state, action: PayloadAction<Partial<GameSettingsState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateGameSettings } = gameSettingsSlice.actions;

export const selectGameSettings = ({ gameSettings }: RootState): GameSettingsState => gameSettings;

export const gameSettingsReducer = gameSettingsSlice.reducer;
