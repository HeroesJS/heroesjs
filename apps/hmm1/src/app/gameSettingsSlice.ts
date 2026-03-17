import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { defaultGameSettings, GameSettings } from '@heroesjs/hmm1-core';

import { RootState } from './store';

export const gameSettingsSlice = createSlice({
  initialState: defaultGameSettings,
  name: 'gameSettings',
  reducers: {
    changeGameSettings: (_state, action: PayloadAction<GameSettings>) => action.payload,
  },
});

export const { changeGameSettings } = gameSettingsSlice.actions;

export const selectGameSettings = ({ gameSettings }: RootState): GameSettings => gameSettings;

export const gameSettingsReducer = gameSettingsSlice.reducer;
