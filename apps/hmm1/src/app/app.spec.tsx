import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a heading', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /heroesjs/i })).toBeInTheDocument();
  });
});
