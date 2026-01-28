import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { BaudMenu } from './BaudMenu';

describe(BaudMenu, () => {
  it('should render', () => {
    renderWithProviders(<BaudMenu />);

    expect(screen.getByRole('menu', { name: /baud menu/i }));
  });

  describe.each([2400, 9600, 19200, 38400].map((v) => [v]))('%i baud button', (value) => {
    it('should render', () => {
      renderWithProviders(<BaudMenu />);

      expect(screen.getByRole('button', { name: new RegExp(`${value} baud`, 'i') })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<BaudMenu onValueClick={handler} />);

      await user.click(screen.getByRole('button', { name: new RegExp(`${value} baud`, 'i') }));

      expect(handler).toHaveBeenCalledWith<[number]>(value);
    });
  });

  describe('cancel button', () => {
    it('should render', () => {
      renderWithProviders(<BaudMenu />);

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('should call click handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<BaudMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
