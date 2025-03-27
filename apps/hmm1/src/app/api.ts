import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface SaveGame {
  readonly id: number;
  readonly name: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  endpoints: (build) => ({
    getSavedGames: build.query<SaveGame[], void>({
      query: () => 'saved-games',
    }),
  }),
  reducerPath: 'api',
});

export const { useGetSavedGamesQuery, useLazyGetSavedGamesQuery } = api;
