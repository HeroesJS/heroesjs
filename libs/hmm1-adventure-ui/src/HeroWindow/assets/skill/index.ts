import { Skill } from '@heroesjs/hmm1-core';

import attack from './attack.jpg';
import defense from './defense.jpg';
import knowledge from './knowledge.jpg';
import spellPower from './spellPower.jpg';

export const skillBackground: Record<Skill, string> = {
  [Skill.Attack]: attack,
  [Skill.Defense]: defense,
  [Skill.Knowledge]: knowledge,
  [Skill.SpellPower]: spellPower,
};
