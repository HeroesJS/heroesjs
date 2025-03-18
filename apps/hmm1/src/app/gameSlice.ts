import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import {
  ArtifactId,
  campaignScenarios,
  CreatureId,
  GameDifficulty,
  type Hero,
  HeroClassId,
  HeroId,
  Luck,
  Morale,
  OpponentDifficulty,
  type OpponentSettings,
  PlayerColor,
  scenarios,
  Skill,
} from '@heroesjs/hmm1-core';

import type { RootState } from './store';

interface GameState {
  readonly gameDifficulty: GameDifficulty;
  readonly heroes: readonly Hero[];
  readonly kingOfTheHill: boolean;
  readonly opponentSettings: OpponentSettings;
  readonly playerColor: PlayerColor;
  readonly scenarioName: string;
  readonly selectedHeroIndex?: number;
}

const initialState: GameState = {
  gameDifficulty: GameDifficulty.Normal,
  heroes: [
    {
      army: [
        {
          count: 7,
          creatureId: CreatureId.Centaur,
        },
        {
          count: 2,
          creatureId: CreatureId.Gargoyle,
        },
      ],
      artifacts: [ArtifactId.Spellbook, ArtifactId.DragonSwordOfDominion, ArtifactId.UltimateBookOfKnowledge],
      experience: 65,
      heroClass: HeroClassId.Warlock,
      id: HeroId.Falagar,
      level: 1,
      luck: Luck.Normal,
      mobility: 14,
      morale: Morale.Good,
      player: PlayerColor.Red,
      skills: {
        [Skill.Attack]: 0,
        [Skill.Defense]: 0,
        [Skill.Knowledge]: 2,
        [Skill.SpellPower]: 3,
      },
    },
    {
      army: [
        {
          count: 13,
          creatureId: CreatureId.Peasant,
        },
      ],
      artifacts: [],
      experience: 86,
      heroClass: HeroClassId.Knight,
      id: HeroId.Ambrose,
      level: 1,
      luck: Luck.Normal,
      mobility: 0,
      morale: Morale.Good,
      player: PlayerColor.Red,
      skills: {
        [Skill.Attack]: 2,
        [Skill.Defense]: 3,
        [Skill.Knowledge]: 0,
        [Skill.SpellPower]: 0,
      },
    },
  ],
  kingOfTheHill: false,
  opponentSettings: [OpponentDifficulty.Average, OpponentDifficulty.Average, OpponentDifficulty.Average],
  playerColor: PlayerColor.Blue,
  scenarioName: 'Claw ( Easy )',
};

export const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    selectHero: (state, action: PayloadAction<number>) => {
      state.selectedHeroIndex = action.payload;
    },
  },
});

export const { selectHero } = gameSlice.actions;

export const selectCurrentGame = (state: RootState) => state.game;

export const selectCurrentStandardScenario = (state: RootState) =>
  scenarios.find((s) => s.name === state.game.scenarioName);

export const selectCurrentCampaignScenario = () => campaignScenarios[0];
