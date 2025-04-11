import {screen} from '@testing-library/react';
import {range} from 'lodash';

import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {ComPortMenu} from './ComPortMenu';

describe(ComPortMenu, () => {
  it('renders', async () => {
    renderWithProviders(<ComPortMenu />);

    expect(screen.getByRole('menu', {name: /com port menu/i})).toBeInTheDocument();
  });

  describe.each(range(1, 5))('com-%i', (port) => {
    const portName = new RegExp(`com-${port}`, 'i');

    it('renders port button', async () => {
      renderWithProviders(<ComPortMenu />);

      expect(screen.getByRole('button', {name: portName})).toBeInTheDocument();
    });

    it('calls handler when port button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<ComPortMenu onPortClick={handler} />);

      await user.click(screen.getByRole('button', {name: portName}));

      expect(handler).toHaveBeenCalledWith(port);
    });
  });

  describe('cancel button', () => {
    it('renders button', async () => {
      renderWithProviders(<ComPortMenu />);

      expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<ComPortMenu onCancelClick={handler} />);

      await user.click(screen.getByRole('button', {name: /cancel/i}));

      expect(handler).toHaveBeenCalled();
    });
  });
});
