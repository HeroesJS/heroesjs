import type {ButtonAssets} from '@heroesjs/hmm1-base-ui';

import background from './background.jpg';
import num1 from './number/1.png';
import num10 from './number/10.png';
import num2 from './number/2.png';
import num3 from './number/3.png';
import num4 from './number/4.png';
import num5 from './number/5.png';
import num6 from './number/6.png';
import num7 from './number/7.png';
import num8 from './number/8.png';
import num9 from './number/9.png';
import okayDisabled from './okay/disabled.png';
import okayEnabled from './okay/enabled.png';
import restartDisabled from './restart/disabled.png';
import restartEnabled from './restart/enabled.png';

export {background};

export const numbers: readonly string[] = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];

export const okay: ButtonAssets = {
  disabled: okayDisabled,
  enabled: okayEnabled,
};

export const restart: ButtonAssets = {
  disabled: restartDisabled,
  enabled: restartEnabled,
};
