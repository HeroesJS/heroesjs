import {screen} from '@testing-library/react';
import {range} from 'lodash';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {PlayerCountMenu} from './PlayerCountMenu';

describe(PlayerCountMenu, () => {
  it('renders', async () => {
    renderWithProviders(<PlayerCountMenu />);

    expect(screen.getByRole('menu', {name: /player count menu/i})).toBeInTheDocument();
  });

  describe.each(range(2, 5))('%i players button', (count) => {
    const countName = new RegExp(`${count} players`, 'i');

    it('renders button', async () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', {name: countName})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<PlayerCountMenu onCountClick={handler} />);

      await user.click(screen.getByRole('button', {name: countName}));

      expect(handler).toHaveBeenCalledWith(count);
    });
  });

  it('renders info when 2 players button is right-clicked', async () => {
    const {user} = renderWithProviders(<PlayerCountMenu />);

    await user.rightDown(
      screen.getByRole('button', {
        name: /2 players/i,
      }),
    );

    expect(
      screen.getByText(/play with 2 human players, and optionally, up to 2 additional computer players\./i),
    ).toBeInTheDocument();
  });

  it('renders info when 3 players button is right-clicked', async () => {
    const {user} = renderWithProviders(<PlayerCountMenu />);

    await user.rightDown(
      screen.getByRole('button', {
        name: /3 players/i,
      }),
    );

    expect(screen.getByText(/play with 3 human players, and optionally 1 computer player\./i)).toBeInTheDocument();
  });

  it('renders info when 4 players button is right-clicked', async () => {
    const {user} = renderWithProviders(<PlayerCountMenu />);

    await user.rightDown(
      screen.getByRole('button', {
        name: /4 players/i,
      }),
    );

    expect(screen.getByText(/play with 4 human players\./i)).toBeInTheDocument();
  });

  describe('cancel button', () => {
    it('renders button', async () => {
      renderWithProviders(<PlayerCountMenu />);

      expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<PlayerCountMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', {name: /cancel/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('renders info when button is right-clicked', async () => {
      const {user} = renderWithProviders(<PlayerCountMenu />);

      await user.rightDown(
        screen.getByRole('button', {
          name: /cancel/i,
        }),
      );

      expect(screen.getByText(/cancel back to the main menu\./i)).toBeInTheDocument();
    });
  });
});
