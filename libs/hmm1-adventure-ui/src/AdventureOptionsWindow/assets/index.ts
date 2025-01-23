import type { ButtonAssets } from '@heroesjs/hmm1-base-ui';

import background from './background.jpg';
import castSpellDisabled from './cast-spell/disabled.png';
import castSpellEnabled from './cast-spell/enabled.png';
import digDisabled from './dig/disabled.png';
import digEnabled from './dig/enabled.png';
import okayDisabled from './okay/disabled.png';
import okayEnabled from './okay/enabled.png';
import viewPuzzleDisabled from './view-puzzle/disabled.png';
import viewPuzzleEnabled from './view-puzzle/enabled.png';
import viewWorldDisabled from './view-world/disabled.png';
import viewWorldEnabled from './view-world/enabled.png';

const viewWorld: ButtonAssets = {
  disabled: viewWorldDisabled,
  enabled: viewWorldEnabled,
};

const viewPuzzle: ButtonAssets = {
  disabled: viewPuzzleDisabled,
  enabled: viewPuzzleEnabled,
};

const castSpell: ButtonAssets = {
  disabled: castSpellDisabled,
  enabled: castSpellEnabled,
};

const dig: ButtonAssets = {
  disabled: digDisabled,
  enabled: digEnabled,
};

const okay: ButtonAssets = {
  disabled: okayDisabled,
  enabled: okayEnabled,
};

export { background, castSpell, dig, okay, viewPuzzle, viewWorld };
