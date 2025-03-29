import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { chain, sample } from 'lodash';

import {
  type CampaignScenarioData,
  type Hero,
  heroClassHeroes,
  heroClassToTownMap,
  heroIds,
  Luck,
  Morale,
  playerColorIdToPlayerColorMap,
  playerColorToHeroClassMap,
  type ScenarioData,
  Skill,
  type Town,
  townTypes,
} from '@heroesjs/hmm1-core';

import type { RootState } from './store';

interface GameState {
  readonly heroes: readonly Hero[];
  readonly selectedHeroIndex: number | undefined;
  readonly selectedTownIndex: number | undefined;
  readonly towns: readonly Town[];
}

const initialState: GameState = {
  heroes: [],
  selectedHeroIndex: undefined,
  selectedTownIndex: undefined,
  towns: [],
};

export const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    loadGame: (_state, _action: PayloadAction<GameState>) => {
      // TODO
    },
    selectHero: (state, action: PayloadAction<number>) => {
      state.selectedTownIndex = undefined;

      state.selectedHeroIndex = action.payload;
    },
    selectTown: (state, action: PayloadAction<number>) => {
      state.selectedHeroIndex = undefined;

      state.selectedTownIndex = action.payload;
    },
    startGame: (_state, action: PayloadAction<ScenarioData | CampaignScenarioData>) => {
      const { map } = action.payload;

      const heroes = map.objectInfo
        .filter((o) => o.type === 75)
        .reduce<Hero[]>((heroes, info, _i, infos) => {
          const availableHeroes = chain(heroIds)
            .omit(infos.map((i) => i.id))
            .omit(heroes.map((h) => h.id))
            .value();

          const heroId = heroes.some((h) => h.id === info.id) ? sample(availableHeroes)! : info.id; // TODO: how exactly is this resolved?

          const heroClass = Number(Object.entries(heroClassHeroes).find(([, ids]) => ids.includes(heroId))![0]);

          const hero: Hero = {
            army: info.army, // TODO: or default
            artifacts: info.startArtifact,
            experience: info.experience, // TODO: or default?
            heroClass,
            id: heroId,
            level: 1, // TODO: resolve from exp?
            luck: Luck.Normal,
            mobility: 0,
            morale: Morale.Normal,
            player: playerColorIdToPlayerColorMap[info.owner],
            skills: {
              [Skill.Attack]: 0,
              [Skill.Defense]: 0,
              [Skill.Knowledge]: 0,
              [Skill.SpellPower]: 0,
            }, // TODO: use hero class defaults + bonuses from level
          };

          return [...heroes, hero];
        }, []);

      const towns = map.objectInfo
        .filter((o) => o.type === 70)
        .map<Town>((info, i) => {
          return {
            id: i,
            type:
              info.owner !== undefined ? heroClassToTownMap[playerColorToHeroClassMap[info.owner]] : sample(townTypes)!,
          };
        });

      return {
        heroes,
        selectedHeroIndex: undefined,
        selectedTownIndex: undefined,
        towns,
      };
    },
  },
});

export const { loadGame, selectHero, selectTown, startGame } = gameSlice.actions;

export const getHeroes = (state: RootState) => state.game.heroes;

export const getSelectedHeroIndex = (state: RootState) => state.game.selectedHeroIndex;

export const getSelectedHero = ({ game: { heroes, selectedHeroIndex } }: RootState) =>
  selectedHeroIndex !== undefined ? heroes[selectedHeroIndex] : undefined;

export const getTowns = (state: RootState) => state.game.towns;

export const getSelectedTownIndex = (state: RootState) => state.game.selectedTownIndex;
