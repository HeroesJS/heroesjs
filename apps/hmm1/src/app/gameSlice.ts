import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { chain, sample } from 'lodash';

import {
  type CampaignScenarioData,
  type Hero,
  heroClassHeroes,
  heroIds,
  Luck,
  Morale,
  nextOption,
  Player,
  players,
  RandomTownType,
  type ScenarioData,
  Skill,
  type Town,
  townTypes,
} from '@heroesjs/hmm1-core';

import type { RootState } from './store';

interface GameState {
  readonly activePlayer: Player;
  readonly heroes: readonly Hero[];
  readonly selectedHeroIndex: number | undefined;
  readonly selectedTownIndex: number | undefined;
  readonly towns: readonly Town[];
}

const initialState: GameState = {
  activePlayer: Player.Player1,
  heroes: [],
  selectedHeroIndex: undefined,
  selectedTownIndex: undefined,
  towns: [],
};

export const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    endTurn: (state) => ({
      ...state,
      activePlayer: nextOption(players, state.activePlayer),
    }),
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
            owner: info.owner,
            skills: {
              [Skill.Attack]: 0,
              [Skill.Defense]: 0,
              [Skill.Knowledge]: 0,
              [Skill.SpellPower]: 0,
            }, // TODO: use hero class defaults + bonuses from level
          };

          return [...heroes, hero];
        }, []);

      const townObjectInfos = map.objectInfo.filter((o) => o.type === 70);

      const towns = townObjectInfos.map<Town>((info, i) => {
        const townInfo = map.townInfo[i];

        return {
          id: i,
          owner: info.owner,
          type: townInfo.type === RandomTownType ? sample(townTypes)! : townInfo.type,
        };
      });

      return {
        ...initialState,
        heroes,
        towns,
      };
    },
  },
});

export const { endTurn, loadGame, selectHero, selectTown, startGame } = gameSlice.actions;

export const getHeroes = (state: RootState) => state.game.heroes.filter((h) => h.owner === state.game.activePlayer);

export const getSelectedHeroIndex = (state: RootState) => state.game.selectedHeroIndex;

export const getSelectedHero = (state: RootState) =>
  state.game.selectedHeroIndex !== undefined ? getHeroes(state)[state.game.selectedHeroIndex] : undefined;

export const getTowns = (state: RootState) => state.game.towns.filter((t) => t.owner === state.game.activePlayer);

export const getSelectedTownIndex = (state: RootState) => state.game.selectedTownIndex;
