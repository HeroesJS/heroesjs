import { render, screen } from '@testing-library/react';

import { Text } from './Text';

describe(Text, () => {
  it('should render children', () => {
    render(<Text>CHILDREN</Text>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
