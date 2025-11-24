import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Screen } from './Screen';

describe(Screen, () => {
  it('should render label', () => {
    render(<Screen background="" label="Label" />);

    expect(screen.getByRole('main', { name: /label/i })).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <Screen background="" label="">
        CHILDREN
      </Screen>
    );

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
