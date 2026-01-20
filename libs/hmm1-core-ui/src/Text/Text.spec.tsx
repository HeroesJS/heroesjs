import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { Text } from './Text';

describe(Text, () => {
  it('should render children', () => {
    renderWithProviders(<Text>CHILDREN</Text>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
