import { screen, within } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { CreditsScreen } from './CreditsScreen';

describe(CreditsScreen, () => {
  it('should render', () => {
    renderWithProviders(<CreditsScreen />);

    expect(screen.getByRole('main', { name: /credits/i })).toBeInTheDocument();
  });

  it.each([
    ['designed and directed', ['jon van caneghem']],
    ['additional design', ['phil steinmeyer', 'debbie van caneghem']],
    ['lead programming', ['phil steinmeyer']],
    ['programming', ['mark caldwell', 'george ruof', 'todd hendrix', 'bob rakosky', 'michael sean clement']],
    ['art director', ['julia ulano']],
    ['artists', ['bonita long-hemsath', 'joel payne', 'mike winterbauer']],
    ['music and sound design', ['rob king']],
    ['orchestral arrangements', ['paul romero']],
    ['writing and manual', ['rozita tolouey', 'deane rettig', 'bruce schlickbernd']],
    ['scenarios', ['jon van caneghem', 'christian vanover', 'clayton retzer', 'mark palczynski']],
    ['qa manager', ['peter ryu']],
    [
      'testing',
      [
        'bryan farina',
        'douglas rothman',
        'pavel vesely',
        'walter johnson',
        'scott white',
        'mark caldwell',
        'george ruof',
        'scott mcdaniel',
        'benjamin bent',
        'deane rettig',
        'clayton retzer',
        'craig konas',
        'mark palczynski',
        'christian vanover',
      ],
    ],
  ])('should render entries for %s', (listName, items) => {
    renderWithProviders(<CreditsScreen />);

    const list = screen.getByRole('list', { name: new RegExp(`^${listName}$`, 'i') });

    items.forEach((itemName) => {
      expect(within(list).getByRole('listitem', { name: new RegExp(itemName, 'i') })).toBeInTheDocument();
    });
  });
});
