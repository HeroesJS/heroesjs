import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { MainScreen } from './MainScreen';

describe(MainScreen, () => {
  it('should render', () => {
    render(<MainScreen />);

    expect(screen.getByRole('main', { name: /main screen/i })).toBeInTheDocument();
  });
});
