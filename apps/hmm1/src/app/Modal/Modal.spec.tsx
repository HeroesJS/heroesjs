import { screen } from '@testing-library/react';

import { renderWithProviders } from '../testUtils';
import { Modal } from './Modal';

describe(Modal, () => {
  it('should render', () => {
    renderWithProviders(<Modal open>CONTENT</Modal>);

    expect(screen.getByRole('dialog', { name: /content/i })).toBeInTheDocument();
  });

  it('should not render when not open', () => {
    renderWithProviders(<Modal open={false}>CONTENT</Modal>);

    expect(screen.queryByRole('dialog', { name: /content/i })).toBeNull();
  });
});
