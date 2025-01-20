import { List, Screen, Text } from '../base';

import background from './assets/background.jpg';

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

export const CreditsScreen = ({ onClick }: Props) => (
  <Screen background={background} label="Credits" onClick={onClick}>
    <Text component="h2" shadow size="large" x={71} y={47}>
      Designed and Directed
    </Text>
    <List items={designAndDirectionBy} label="Designed and Directed" width={width} x={x} y={65} />
    <Text component="h2" hidden shadow size="large" x={89} y={96}>
      Additional Design
    </Text>
    <List items={additionalDesignBy} label="Additional Design" width={width} x={x - 1} y={114} />
    <Text component="h2" hidden shadow size="large" x={83} y={159}>
      Lead Programming
    </Text>
    <List items={leadProgrammingBy} label="Lead Programming" width={width} x={x - 1} y={177} />
    <Text component="h2" hidden shadow size="large" x={103} y={208}>
      Programming
    </Text>
    <List items={programmingBy} label="Programming" width={width} x={x} y={226} />
    <Text component="h2" hidden shadow size="large" x={107} y={313}>
      Art Director
    </Text>
    <List items={artDirectionBy} label="Art Director" width={width} x={x} y={331} />
    <Text component="h2" hidden shadow size="large" x={130} y={362}>
      Artists
    </Text>
    <List items={artBy} label="Artists" width={width} x={x} y={380} />
    <Text component="h2" hidden shadow size="large" x={328} y={39}>
      Music and Sound Design
    </Text>
    <List items={musicAndSoundDesignBy} label="Music and Sound Design" width={width} x={319} y={57} />
    <Text component="h2" hidden shadow size="large" x={317} y={83}>
      Orchestral Arrangements
    </Text>
    <List items={orchestralArrangementsBy} label="Orchestral Arrangements" width={width} x={318} y={101} />
    <Text component="h2" hidden shadow size="large" x={342} y={127}>
      Writing and Manual
    </Text>
    <List items={writingAndManualBy} label="Writing and Manual" width={width} x={318} y={145} />
    <Text component="h2" hidden shadow size="large" x={383} y={199}>
      Scenarios
    </Text>
    <List items={scenariosBy} label="Scenarios" width={width} x={318} y={217} />
    <Text component="h2" hidden shadow size="large" x={369} y={285}>
      QA Manager
    </Text>
    <List items={qaManagementBy} label="QA Manager" width={width} x={318} y={303} />
    <Text component="h2" hidden shadow size="large" x={392} y={329}>
      Testing
    </Text>
    <List items={testingBy} itemsPerColumn={7} label="Testing" width={150} x={283} y={347} />
  </Screen>
);
