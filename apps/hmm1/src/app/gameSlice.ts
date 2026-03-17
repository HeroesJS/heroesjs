import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { difference } from 'lodash';

import {
  GameDifficulty,
  isHumanOpponent,
  MapDifficulty,
  MapSize,
  noOpponent,
  OpponentDifficulty,
  OpponentSetting,
  OpponentSettings,
  PlayerColor,
  playerColors,
  Scenario,
} from '@heroesjs/hmm1-core';

import { RootState } from './store';

interface MapState {
  readonly description: string;
  readonly difficulty: MapDifficulty;
  readonly name: string;
  readonly size: MapSize;
}

interface PlayerState {
  readonly color: PlayerColor;
  readonly human: boolean;
  readonly name: string;
  readonly skillLevel: OpponentSetting;
}

export interface GameState {
  readonly activePlayer: number;
  readonly difficultyRating: number;
  readonly gameDifficulty: GameDifficulty;
  readonly kingOfTheHill: boolean;
  readonly map: MapState;
  readonly players: readonly PlayerState[];
}

const initialState: GameState = {
  activePlayer: 0,
  difficultyRating: 0,
  gameDifficulty: GameDifficulty.Easy,
  kingOfTheHill: false,
  map: {
    description: '',
    difficulty: MapDifficulty.Easy,
    name: '',
    size: MapSize.Small,
  },
  players: playerColors.map((color, index) => ({
    color,
    human: false,
    name: `Player ${index}`,
    skillLevel: noOpponent,
  })),
};

interface StartGamePayload {
  readonly difficultyRating: number;
  readonly gameDifficulty: GameDifficulty;
  readonly humanOpponentsCount: number;
  readonly kingOfTheHill: boolean;
  readonly opponents: OpponentSettings;
  readonly playerColor: PlayerColor;
  readonly scenario: Scenario;
}

export const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    startGame: (
      _state,
      {
        payload: {
          difficultyRating,
          gameDifficulty,
          humanOpponentsCount,
          kingOfTheHill,
          opponents,
          playerColor,
          scenario,
        },
      }: PayloadAction<StartGamePayload>
    ) => {
      return {
        activePlayer: 0,
        difficultyRating,
        gameDifficulty,
        kingOfTheHill,
        map: {
          description: scenario.description,
          difficulty: scenario.difficulty,
          name: scenario.name,
          size: scenario.size,
        },
        players: [
          {
            color: playerColor,
            name: 'Player 1',
            human: true,
            skillLevel: OpponentDifficulty.Average,
          },
          ...opponents.map(
            (opponent, index): PlayerState => ({
              color: difference<PlayerColor>(playerColors, [playerColor])[index],
              human: isHumanOpponent(index, humanOpponentsCount),
              name: `Player ${index + 2}`,
              skillLevel: opponent,
            })
          ),
        ],
      };
    },
  },
});

export const { startGame } = gameSlice.actions;

interface ScenarioInfo {
  readonly difficultyRating: number;
  readonly gameDifficulty: GameDifficulty;
  readonly humanPlayersCount: number;
  readonly kingOfTheHill: boolean;
  readonly map: Pick<Scenario, 'description' | 'difficulty' | 'name' | 'size'>;
  readonly opponents: OpponentSettings;
  readonly playerColor: PlayerColor;
}

export const selectScenarioInfo = ({ game }: RootState): ScenarioInfo => ({
  difficultyRating: game.difficultyRating,
  gameDifficulty: game.gameDifficulty,
  humanPlayersCount: game.players.filter((player) => player.human).length - 1,
  kingOfTheHill: game.kingOfTheHill,
  map: game.map,
  opponents: game.players.filter((_player, index) => index !== game.activePlayer).map((player) => player.skillLevel),
  playerColor: game.players[game.activePlayer].color,
});

export const gameReducer = gameSlice.reducer;
