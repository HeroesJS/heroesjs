import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { AdventureWindow } from './AdventureWindow';

describe(AdventureWindow, () => {
  it('renders adventure map', async () => {
    renderWithProviders(<AdventureWindow renderAdventureMap={() => 'ADVENTURE MAP'} />);

    expect(screen.getByRole('main', { name: /adventure map/i })).toHaveTextContent(/adventure map/i);
  });

  it('renders world map', async () => {
    renderWithProviders(<AdventureWindow renderWorldMap={() => 'WORLD MAP'} />);

    expect(screen.getByRole('note', { name: /world map/i })).toHaveTextContent(/world map/i);
  });

  it('renders world map info', async () => {
    const { user } = renderWithProviders(<AdventureWindow />);

    await user.rightDown(screen.getByRole('note', { name: /world map/i }));

    expect(screen.getByText(/world map \(left click to move viewing area\)\./i)).toBeInTheDocument();
  });

  it('renders hero locators', async () => {
    renderWithProviders(<AdventureWindow renderHeroLocators={() => 'HERO LOCATORS'} />);

    expect(screen.getByText(/hero locators/i)).toBeInTheDocument();
  });

  it('renders town locators', async () => {
    renderWithProviders(<AdventureWindow renderTownLocators={() => 'TOWN LOCATORS'} />);

    expect(screen.getByText(/town locators/i)).toBeInTheDocument();
  });

  it('renders action buttons', async () => {
    renderWithProviders(<AdventureWindow renderActionButtons={() => 'ACTION BUTTONS'} />);

    expect(screen.getByText(/action buttons/i)).toBeInTheDocument();
  });

  it('renders status window', async () => {
    renderWithProviders(<AdventureWindow renderStatusWindow={() => 'STATUS WINDOW'} />);

    expect(screen.getByRole('note', { name: /status window/i })).toHaveTextContent(/status window/i);
  });

  it('renders status window info', async () => {
    const { user } = renderWithProviders(<AdventureWindow />);

    await user.rightDown(screen.getByRole('note', { name: /status window/i }));

    expect(
      screen.getByText(
        /status window this window provides information on the status of your hero or kingdom, and shows the date\. left click here to cycle through these windows\./i,
      ),
    ).toBeInTheDocument();
  });
});
