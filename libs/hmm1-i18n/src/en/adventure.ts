export default {
  component: {
    adventureButtons: {
      adventureOptions: {
        info: 'Adventure Options\n\nBring up the adventure options menu.',
        label: 'Adventure Options',
      },
      endTurn: {
        info: 'End Turn\n\nEnd your turn and let the computer take its turn.',
        label: 'End Turn',
      },
      gameOptions: {
        info: 'Game Options\n\nBring up the game options menu.',
        label: 'Game Options',
      },
      kingdomOverview: {
        info: 'Kingdom Summary\n\nView a summary of your kingdom.',
        label: 'Kingdom Overview',
      },
      move: {
        info: "Continue Movement\n\nContinue the Hero's movement along his current path.",
        label: 'Move',
      },
      nextHero: {
        info: 'Next Hero\n\nSelect the next hero.',
        label: 'Next Hero',
      },
    },
    adventureOptions: {
      castSpell: {
        info: 'Cast an adventure spell.',
        label: 'Cast Spell',
      },
      confirm: {
        info: 'Dig for the Ultimate Artifact.',
        label: 'Okay',
      },
      dig: {
        info: 'Dig for the Ultimate Artifact.',
        label: 'Dig',
      },
      title: 'Adventure Options Window',
      viewPuzzle: {
        info: 'View the obelisk puzzle.',
        label: 'View Puzzle',
      },
      viewWorld: {
        info: 'View the entire world.',
        label: 'View World',
      },
    },
    adventureScreen: {
      title: 'Adventure Screen',
    },
    gameOptionsWindow: {
      autoSave: {
        info: "Toggle 'Autosave' on/off.  'Autosave' saves your game automatically at the end of each turn to a special file, called 'AUTOSAVE'.",
        label: 'Auto Save',
      },
      confirm: {
        info: 'Exit this menu without doing anything.',
        label: 'Okay',
      },
      effectsVolume: {
        info: 'Toggle foreground sounds on/off',
        label: 'Effects',
      },
      info: {
        info: 'View information on the scenario you are currently playing.',
        label: 'Info',
      },
      loadGame: {
        confirmation: 'Are you sure you want to load a new game?  (Your current game will be lost)',
        info: 'Load a previously saved game.',
        label: 'Load Game',
      },
      movementSpeed: {
        info: 'Change the speed at which Heroes move on the main screen.',
        label: 'Speed',
      },
      musicVolume: {
        info: 'Toggle ambient music on/off',
        label: 'Music',
      },
      newGame: {
        confirmation: 'Are you sure you want to restart?  (Your current game will be lost)',
        info: 'Start a single or multi‑player game.',
        label: 'New Game',
      },
      quit: {
        confirmation: 'Are you sure you want to quit?  (Your current game will be lost)',
        info: 'Quit Heroes of Might and Magic and return to the DOS prompt.',
        label: 'Quit',
      },
      saveGame: {
        info: 'Save the current game.',
        label: 'Save Game',
      },
      showPath: {
        info: "Toggle 'Show Path' on/off.  If 'Show Path' is on, your first click on a map location will show the path to get there, your second will start you moving. If this option is off, one click starts you moving immediately.",
        label: 'Show Path',
      },
      soundVolume: {
        max: 'On',
        min: 'Off',
        volume: 'Volume {{value}}',
      },
      title: 'Game Options Window',
      toggle: {
        off: 'Off',
        on: 'On',
      },
      viewEnemyMovement: {
        info: "Toggle 'Show Enemy Moves' on/off.  If on, all enemies moving within your visible area will be shown.  If off, no computer movement will be shown.  Note that this option is automatically set to off during network and modem play.",
        label: 'View Enemy Movement',
      },
    },
    scenarioInfoWindow: {
      confirm: {
        label: 'Okay',
      },
      difficultyRating: {
        label: 'Rating:',
        value: '{{value}}%',
      },
      gameDifficulty: 'Game Setting:',
      kingOfTheHill: {
        disabled: 'No',
        enabled: 'Yes',
        label: 'King of the Hill:',
      },
      opponent: 'Opponent {{opponentNumber}}:',
      opponents: 'Opponents:',
      playerColor: 'Color:',
      scenario: 'Scenario:',
      scenarioDescription: 'Description:',
      scenarioDifficulty: 'Difficulty:',
      scenarioSize: 'Size:',
      title: 'Scenario Info',
    },
  },
} as const;
