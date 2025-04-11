import {configureStore} from '@reduxjs/toolkit';

import {api} from './api';
import {gameSlice} from './gameSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  reducer: {
    [api.reducerPath]: api.reducer,
    [gameSlice.reducerPath]: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
