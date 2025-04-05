import type { TownClassId } from '@heroesjs/hmm1-core';

import { locators } from './assets';

interface Props {
  readonly castle?: boolean;
  readonly town: TownClassId;
}

export const TownLocator = ({ castle, town }: Props) => (
  <img alt="" src={castle ? locators[town].castle : locators[town].town} />
);
