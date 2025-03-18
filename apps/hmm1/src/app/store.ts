import { configureStore } from '@reduxjs/toolkit';

import { gameOptionsSlice } from './gameOptionsSlice';
import { gameSlice } from './gameSlice';

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    gameOptions: gameOptionsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
