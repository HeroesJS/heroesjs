import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {chain, isEmpty, random, range, sample} from 'lodash';

import {
  type CampaignScenarioData,
  getHeroLevel,
  getHeroSkillsForLevel,
  type Hero,
  heroClassDataById,
  heroClassHeroes,
  type HeroClassId,
  heroIds,
  heroLevelExperienceThresholds,
  Luck,
  MapHeroObjectType,
  MapTownObjectType,
  Morale,
  nextOption,
  PlayerColor,
  PlayerId,
  players,
  RandomTownClassId,
  type ScenarioData,
  type Town,
  townClasses,
} from '@heroesjs/hmm1-core';

import type {RootState} from './store';

interface Player {
  readonly color: PlayerColor;
  readonly name: string;
}

export interface GameState {
  readonly activePlayer: PlayerId;
  readonly heroes: readonly Hero[];
  readonly players: Record<PlayerId, Player>;
  readonly selectedHeroIndex: number | undefined;
  readonly selectedTownIndex: number | undefined;
  readonly towns: readonly Town[];
}

const initialState: GameState = {
  activePlayer: PlayerId.Player1,
  heroes: [],
  players: {
    [PlayerId.Player1]: {
      color: PlayerColor.Blue,
      name: 'Player 1',
    },
    [PlayerId.Player2]: {
      color: PlayerColor.Green,
      name: 'Player 2',
    },
    [PlayerId.Player3]: {
      color: PlayerColor.Red,
      name: 'Player 3',
    },
    [PlayerId.Player4]: {
      color: PlayerColor.Yellow,
      name: 'Player 4',
    },
  },
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
      const map = action.payload;

      const heroes = map.objectInfo
        .filter((o) => o.type === MapHeroObjectType)
        .reduce<Hero[]>((heroes, info, _i, infos) => {
          const availableHeroes = chain(heroIds)
            .omit(infos.map((i) => i.id))
            .omit(heroes.map((h) => h.id))
            .value();

          const heroId = heroes.some((h) => h.id === info.id) ? sample(availableHeroes)! : info.id; // TODO: how exactly is this resolved?

          const heroClass = Number(
            Object.entries(heroClassHeroes).find(([, ids]) => ids.includes(heroId))![0],
          ) as HeroClassId;

          const heroClassData = heroClassDataById[heroClass];

          const experience = info.experience || random(40, 90);

          const level = getHeroLevel(experience, heroLevelExperienceThresholds);

          const hero: Hero = {
            // NOTE: editor allows to create scenarios where heroes have no army
            army: isEmpty(info.army)
              ? heroClassData.army
                  .map((a) => ({
                    count: sample((a.optional ? [0] : []).concat(range(a.min, a.max + 1)))!,
                    creatureId: a.creatureId,
                  }))
                  .filter((a) => a.count)
              : info.army,
            artifacts: info.startArtifact,
            experience,
            heroClass,
            id: heroId,
            level,
            luck: Luck.Normal,
            mobility: 0,
            morale: Morale.Normal,
            owner: info.owner,
            skills: getHeroSkillsForLevel(level, heroClass),
          };

          return [...heroes, hero];
        }, []);

      const townObjectInfos = map.objectInfo.filter((o) => o.type === MapTownObjectType);

      const towns = townObjectInfos.map<Town>((info, i) => {
        const townInfo = map.townInfo[i];

        return {
          class: townInfo.class === RandomTownClassId ? sample(townClasses)! : townInfo.class,
          id: i,
          owner: info.owner,
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

export const {endTurn, loadGame, selectHero, selectTown, startGame} = gameSlice.actions;

export const getPlayer = (value: PlayerId) => (state: RootState) => state.game.players[value];

export const getHeroes = (state: RootState) => state.game.heroes.filter((h) => h.owner === state.game.activePlayer);

export const getSelectedHeroIndex = (state: RootState) => state.game.selectedHeroIndex;

export const getSelectedHero = (state: RootState) =>
  state.game.selectedHeroIndex !== undefined ? getHeroes(state)[state.game.selectedHeroIndex] : undefined;

export const getTowns = (state: RootState) => state.game.towns.filter((t) => t.owner === state.game.activePlayer);

export const getSelectedTownIndex = (state: RootState) => state.game.selectedTownIndex;
