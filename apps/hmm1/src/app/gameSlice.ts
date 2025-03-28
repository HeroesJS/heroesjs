import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Hero, Town } from '@heroesjs/hmm1-core';

import type { RootState } from './store';

interface GameState {
  readonly heroes: readonly Hero[];
  readonly selectedHeroIndex?: number;
  readonly selectedTownIndex?: number;
  readonly towns: readonly Town[];
}

const initialState: GameState = {
  heroes: [],
  towns: [],
};

export const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    selectHero: (state, action: PayloadAction<number>) => {
      state.selectedTownIndex = undefined;

      state.selectedHeroIndex = action.payload;
    },
    selectTown: (state, action: PayloadAction<number>) => {
      state.selectedHeroIndex = undefined;

      state.selectedTownIndex = action.payload;
    },
  },
});

export const { selectHero, selectTown } = gameSlice.actions;

export const getHeroes = (state: RootState) => state.game.heroes;

export const getSelectedHeroIndex = (state: RootState) => state.game.selectedHeroIndex;

export const getSelectedHero = ({ game: { heroes, selectedHeroIndex } }: RootState) =>
  selectedHeroIndex !== undefined ? heroes[selectedHeroIndex] : undefined;

export const getTowns = (state: RootState) => state.game.towns;

export const getSelectedTownIndex = (state: RootState) => state.game.selectedTownIndex;
