import type { TownType } from '@heroesjs/hmm1-core';

import { locators } from './assets';

interface Props {
  readonly castle?: boolean;
  readonly town: TownType;
}

export const TownLocator = ({ castle, town }: Props) => (
  <img alt="" src={castle ? locators[town].castle : locators[town].town} />
);
