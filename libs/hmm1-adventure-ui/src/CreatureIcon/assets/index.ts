import type {CreatureId} from '@heroesjs/hmm1-core';

import {archer} from './archer';
import {cavalry} from './cavalry';
import {centaur} from './centaur';
import {cyclops} from './cyclops';
import {dragon} from './dragon';
import {druid} from './druid';
import {dwarf} from './dwarf';
import {elf} from './elf';
import {gargoyle} from './gargoyle';
import {genie} from './genie';
import {ghost} from './ghost';
import {goblin} from './goblin';
import {griffin} from './griffin';
import {hydra} from './hydra';
import {minotaur} from './minotaur';
import {nomad} from './nomad';
import {ogre} from './ogre';
import {orc} from './orc';
import {paladin} from './paladin';
import {peasant} from './peasant';
import {phoenix} from './phoenix';
import {pikeman} from './pikeman';
import {rogue} from './rogue';
import {sprite} from './sprite';
import {swordsman} from './swordsman';
import {troll} from './troll';
import {unicorn} from './unicorn';
import {wolf} from './wolf';

export const icons = [
  peasant,
  archer,
  pikeman,
  swordsman,
  cavalry,
  paladin,
  goblin,
  orc,
  wolf,
  ogre,
  troll,
  cyclops,
  sprite,
  dwarf,
  elf,
  druid,
  unicorn,
  phoenix,
  centaur,
  gargoyle,
  griffin,
  minotaur,
  hydra,
  dragon,
  rogue,
  nomad,
  ghost,
  genie,
] satisfies Record<CreatureId, Record<'large' | 'medium', string>>;
