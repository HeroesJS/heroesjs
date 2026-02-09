import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { ScenarioInfoWindow } from './ScenarioInfoWindow';

describe(ScenarioInfoWindow, () => {
  it('should render', () => {
    renderWithProviders(<ScenarioInfoWindow open />);

    expect(screen.getByRole('region', { name: /^scenario info$/i })).toBeInTheDocument();
  });
});
