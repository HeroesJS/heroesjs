import { render, screen } from '@testing-library/react';
import { MainScreen } from './MainScreen';

describe(MainScreen, () => {
  it('should render main menu', async () => {
    render(<MainScreen />);

    expect(screen.getByRole('menu', { name: /main menu/i })).toBeDefined();
  });
});
