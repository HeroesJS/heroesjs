import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { HighScores, HighScoresGameType } from '@heroesjs/hmm1-core';
import { defaultHighScores, defaultHighScoresGameType } from '@heroesjs/hmm1-core';

import type { RootState } from './store';

export interface HighScoresState {
  readonly gameType: HighScoresGameType;
  readonly scores: HighScores;
}

const initialState: HighScoresState = {
  gameType: defaultHighScoresGameType,
  scores: defaultHighScores,
};

export const highScoresSlice = createSlice({
  initialState,
  name: 'highScores',
  reducers: {
    setGameType: (state, action: PayloadAction<HighScoresGameType>) => {
      state.gameType = action.payload;
    },
  },
});

export const { setGameType } = highScoresSlice.actions;

export const selectHighScores = ({ highScores }: RootState) => ({
  gameType: highScores.gameType,
  scores: highScores.scores,
});

export const highScoresReducer = highScoresSlice.reducer;
