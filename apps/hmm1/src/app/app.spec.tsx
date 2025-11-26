import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { App } from './app';

describe(App, () => {
  it('should have a heading', () => {
    render(<App />);

    expect(screen.getByRole('main', { name: /main screen/i })).toBeInTheDocument();
  });
});
