import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { NewStandardGameScreen } from './NewStandardGameScreen';

describe(NewStandardGameScreen, () => {
  it('should render screen', () => {
    renderWithProviders(<NewStandardGameScreen />);

    expect(screen.getByRole('main', { name: /new standard game/i })).toBeInTheDocument();
  });
});
