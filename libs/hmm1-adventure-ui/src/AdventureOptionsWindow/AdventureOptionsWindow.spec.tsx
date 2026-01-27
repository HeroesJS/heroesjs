import { screen } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { AdventureOptionsWindow } from './AdventureOptionsWindow';

describe(AdventureOptionsWindow, () => {
  it('should render', () => {
    renderWithProviders(<AdventureOptionsWindow open />);

    expect(screen.getByRole('region', { name: /^adventure options window$/i }));
  });

  describe('view world', () => {
    it('should render', () => {
      renderWithProviders(<AdventureOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^view world$/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<AdventureOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^view world$/i }));

      expect(screen.getByRole('dialog', { name: /^view the entire world\.$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureOptionsWindow onViewWorldClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^view world$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('view puzzle', () => {
    it('should render', () => {
      renderWithProviders(<AdventureOptionsWindow open />);

      expect(screen.getByRole('button', { name: /^view puzzle$/i })).toBeInTheDocument();
    });

    it('should render info when right-clicked', async () => {
      const { user } = renderWithProviders(<AdventureOptionsWindow open />);

      await user.mouseRightDown(screen.getByRole('button', { name: /^view puzzle$/i }));

      expect(screen.getByRole('dialog', { name: /^view the obelisk puzzle\.$/i })).toBeInTheDocument();
    });

    it('should call handler when clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<AdventureOptionsWindow onViewPuzzleClick={handler} open />);

      await user.click(screen.getByRole('button', { name: /^view puzzle$/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
