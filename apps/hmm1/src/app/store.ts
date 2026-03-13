import { configureStore } from '@reduxjs/toolkit';

import { gameSettingsReducer } from './gameSettingsSlice';
import { gameReducer } from './gameSlice';
import { highScoresReducer } from './highScoresSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    gameSettings: gameSettingsReducer,
    highScores: highScoresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
