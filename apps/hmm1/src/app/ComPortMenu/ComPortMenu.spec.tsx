import { screen } from '@testing-library/react';
import { range } from 'lodash';

import { renderWithProviders } from '../testUtils';
import { ComPortMenu } from './ComPortMenu';

describe(ComPortMenu, () => {
  it('should render', () => {
    renderWithProviders(<ComPortMenu />);

    expect(screen.getByRole('menu', { name: /com port menu/i }));
  });

  describe.each(range(1, 5).map((v) => [v]))('com %i button', (port) => {
    it('should render', () => {
      renderWithProviders(<ComPortMenu />);

      expect(screen.getByRole('button', { name: new RegExp(`com ${port}`, 'i') })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<ComPortMenu onValueClick={handler} />);

      await user.click(screen.getByRole('button', { name: new RegExp(`com ${port}`, 'i') }));

      expect(handler).toHaveBeenCalledWith<[number]>(port);
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<ComPortMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<ComPortMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
