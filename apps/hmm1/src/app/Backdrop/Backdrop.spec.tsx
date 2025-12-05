import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Backdrop } from './Backdrop';

describe(Backdrop, () => {
  it('should render children', () => {
    render(<Backdrop>CHILDREN</Backdrop>);

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
