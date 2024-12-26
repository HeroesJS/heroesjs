import { Screen } from '../Screen';

import background from './assets/background.jpg';

interface Props {
  readonly onClick?: () => void;
}

export const CreditsScreen = ({ onClick }: Props) => (
  <Screen background={background} onClick={onClick}>
    <h1>Credits</h1>
    <h2>Designed and Directed</h2>
    <ul>
      <li>Jon Van Caneghem</li>
    </ul>
    <h2>Additional Design</h2>
    <ul>
      <li>Phil Steinmeyer</li>
      <li>Debbie Van Caneghem</li>
    </ul>
    <h2>Lead Programming</h2>
    <li>Phil Steinmeyer</li>
    <h2>Programming</h2>
    <ul>
      <li>Mark Caldwell</li>
      <li>George Ruof</li>
      <li>Todd Hendrix</li>
      <li>Bob Rakosky</li>
      <li>Michael Sean Clement</li>
    </ul>
    <h2>Art Direction</h2>
    <ul>
      <li>Julia Ulano</li>
    </ul>
    <h2>Artists</h2>
    <ul>
      <li>Bonita Long-Hemsath</li>
      <li>Joel Payne</li>
      <li>Mike Winterbauer</li>
    </ul>
    <h2>Music and Sound Design</h2>
    <ul>
      <li>Rob King</li>
    </ul>
    <h2>Orchestral Arrangements</h2>
    <ul>
      <li>Paul Romero</li>
    </ul>
    <h2>Writing and Manual</h2>
    <ul>
      <li>Rozita Tolouey</li>
      <li>Deane Rettig</li>
      <li>Bruce Schlickbernd</li>
    </ul>
    <h2>Scenarios</h2>
    <ul>
      <li>Jon Van Caneghem</li>
      <li>Christian Vanover</li>
      <li>Clayton Retzer</li>
      <li>Mark Palczynski</li>
    </ul>
    <h2>QA Manager</h2>
    <ul>
      <li>Peter Ryu</li>
    </ul>
    <h2>Testing</h2>
    <ul>
      <li>Bryan Farina</li>
      <li>Douglas Rothman</li>
      <li>Pavel Vesely</li>
      <li>Walter Johnson</li>
      <li>Scott White</li>
      <li>Mark Caldwell</li>
      <li>George Ruof</li>
      <li>Scott McDaniel</li>
      <li>Benjamin Bent</li>
      <li>Deane Rettig</li>
      <li>Clayton Retzer</li>
      <li>Craig Konas</li>
      <li>Mark Palczynski</li>
      <li>Christian Vanover</li>
    </ul>
  </Screen>
);
