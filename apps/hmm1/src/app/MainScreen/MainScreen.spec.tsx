import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MainScreen } from './MainScreen';

describe(MainScreen, () => {
  it('should render main menu', async () => {
    render(
      <MemoryRouter>
        <MainScreen />
      </MemoryRouter>,
    );

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeDefined();
  });
});
