import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { AdventureOptionsWindow } from './AdventureOptionsWindow';

describe(AdventureOptionsWindow, () => {
  it('should render', () => {
    renderWithProviders(<AdventureOptionsWindow open />);

    expect(screen.getByRole('region', { name: /^adventure options window$/i }));
  });
});
