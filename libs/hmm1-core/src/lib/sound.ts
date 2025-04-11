import {range} from 'lodash';

export type SoundVolume = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const MinVolume = 0 satisfies SoundVolume;
export const MaxVolume = 10 satisfies SoundVolume;

export const soundVolumes = range(MinVolume, MaxVolume + 1) as readonly SoundVolume[];

export const isSoundEnabled = (value: SoundVolume) => value !== MinVolume;
