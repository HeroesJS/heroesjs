import {useTranslation} from 'react-i18next';

import {List, Screen, Text} from '@heroesjs/hmm1-base-ui';

import * as assets from './assets';

const x = 55;
const width = 210;

const designAndDirectionBy = ['Jon Van Caneghem'];
const additionalDesignBy = ['Phil Steinmeyer', 'Debbie Van Caneghem'];
const leadProgrammingBy = ['Phil Steinmeyer'];
const programmingBy = ['Mark Caldwell', 'George Ruof', 'Todd Hendrix', 'Bob Rakosky', 'Michael Sean Clement'];
const artDirectionBy = ['Julia Ulano'];
const artBy = ['Bonita Long-Hemsath', 'Joel Payne', 'Mike Winterbauer'];
const musicAndSoundDesignBy = ['Rob King'];
const orchestralArrangementsBy = ['Paul Romero'];
const writingAndManualBy = ['Rozita Tolouey', 'Deane Rettig', 'Bruce Schlickbernd'];
const scenariosBy = ['Jon Van Caneghem', 'Christian Vanover', 'Clayton Retzer', 'Mark Palczynski'];
const qaManagementBy = ['Peter Ryu'];
const testingBy = [
  'Bryan Farina',
  'Douglas Rothman',
  'Pavel Vesely',
  'Walter Johnson',
  'Scott White',
  'Mark Caldwell',
  'George Ruof',
  'Scott McDaniel',
  'Benjamin Bent',
  'Deane Rettig',
  'Clayton Retzer',
  'Craig Konas',
  'Mark Palczynski',
  'Christian Vanover',
];

interface Props {
  readonly onClick?: () => void;
}

export const CreditsScreen = ({onClick}: Props) => {
  const {t} = useTranslation('main', {keyPrefix: 'component.creditsScreen'});

  return (
    <Screen background={assets.background} label={t('title')} onClick={onClick}>
      <Text component="h2" hidden shadow size="large" x={71} y={47}>
        {t('designAndDirection')}
      </Text>
      <List items={designAndDirectionBy} label={t('designAndDirection')} width={width} x={x} y={65} />
      <Text component="h2" hidden shadow size="large" x={89} y={96}>
        {t('additionalDesign')}
      </Text>
      <List items={additionalDesignBy} label={t('additionalDesign')} width={width} x={x - 1} y={114} />
      <Text component="h2" hidden shadow size="large" x={83} y={159}>
        {t('leadProgramming')}
      </Text>
      <List items={leadProgrammingBy} label={t('leadProgramming')} width={width} x={x - 1} y={177} />
      <Text component="h2" hidden shadow size="large" x={103} y={208}>
        {t('programming')}
      </Text>
      <List items={programmingBy} label={t('programming')} width={width} x={x} y={226} />
      <Text component="h2" hidden shadow size="large" x={107} y={313}>
        {t('artDirection')}
      </Text>
      <List items={artDirectionBy} label={t('artDirection')} width={width} x={x} y={331} />
      <Text component="h2" hidden shadow size="large" x={130} y={362}>
        {t('art')}
      </Text>
      <List items={artBy} label={t('art')} width={width} x={x} y={380} />
      <Text component="h2" hidden shadow size="large" x={328} y={39}>
        {t('musicAndSound')}
      </Text>
      <List items={musicAndSoundDesignBy} label={t('musicAndSound')} width={width} x={319} y={57} />
      <Text component="h2" hidden shadow size="large" x={317} y={83}>
        {t('orchestralArrangements')}
      </Text>
      <List items={orchestralArrangementsBy} label={t('orchestralArrangements')} width={width} x={318} y={101} />
      <Text component="h2" hidden shadow size="large" x={342} y={127}>
        {t('writingAndManual')}
      </Text>
      <List items={writingAndManualBy} label={t('writingAndManual')} width={width} x={318} y={145} />
      <Text component="h2" hidden shadow size="large" x={383} y={199}>
        {t('scenarios')}
      </Text>
      <List items={scenariosBy} label={t('scenarios')} width={width} x={318} y={217} />
      <Text component="h2" hidden shadow size="large" x={369} y={285}>
        {t('testingLead')}
      </Text>
      <List items={qaManagementBy} label={t('testingLead')} width={width} x={318} y={303} />
      <Text component="h2" hidden shadow size="large" x={392} y={329}>
        {t('testing')}
      </Text>
      <List items={testingBy} itemsPerColumn={7} label={t('testing')} width={150} x={283} y={347} />
    </Screen>
  );
};
