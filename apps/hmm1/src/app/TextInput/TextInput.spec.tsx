import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { TextInput } from './TextInput';

describe(TextInput, () => {
  it('should render', () => {
    renderWithProviders(<TextInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with custom label', () => {
    renderWithProviders(<TextInput label="Label" />);

    expect(screen.getByRole('textbox', { name: /label/i })).toBeInTheDocument();
  });
});
