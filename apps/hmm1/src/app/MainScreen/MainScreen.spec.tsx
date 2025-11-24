import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MainScreen } from './MainScreen';

describe(MainScreen, () => {
  it('should render label', () => {
    render(<MainScreen />);

    expect(screen.getByRole('main', { name: /main screen/i })).toBeInTheDocument();
  });
});
