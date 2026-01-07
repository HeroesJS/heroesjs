import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { NewStandardGameWindow } from './NewStandardGameWindow';

describe(NewStandardGameWindow, () => {
  it('should render', () => {
    renderWithProviders(<NewStandardGameWindow />);

    expect(screen.getByRole('region', { name: /new standard game/i })).toBeInTheDocument();
  });

  it('should render labels', () => {
    renderWithProviders(<NewStandardGameWindow />);

    expect(screen.getByText(/choose game difficulty:/i)).toBeInTheDocument();
    expect(screen.getByText(/customize opponents:/i)).toBeInTheDocument();
    expect(screen.getByText(/choose color:/i)).toBeInTheDocument();
    expect(screen.getByText(/king of the hill:/i)).toBeInTheDocument();
    expect(screen.getByText(/choose scenario:/i)).toBeInTheDocument();
    expect(screen.getByText(/claw \( easy \)/i)).toBeInTheDocument();
    expect(screen.getByText(/difficulty rating: 60%/i)).toBeInTheDocument();
  });
});
