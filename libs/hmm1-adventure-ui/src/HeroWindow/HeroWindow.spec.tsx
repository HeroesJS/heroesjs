import { screen, within } from '@testing-library/react';

import { renderWithProviders } from '@heroesjs/hmm1-test-utils';

import { HeroWindow } from './HeroWindow';

describe(HeroWindow, () => {
  it('renders window', () => {
    renderWithProviders(<HeroWindow />);

    expect(screen.getByRole('dialog', { name: /hero window/i })).toBeInTheDocument();
  });

  it('renders title', () => {
    renderWithProviders(<HeroWindow />);

    expect(screen.getByRole('heading', { name: /falgar the warlock/i })).toBeInTheDocument();
  });

  it('renders status text', () => {
    renderWithProviders(<HeroWindow />);

    expect(screen.getByText(/hero screen/i)).toBeInTheDocument();
  });

  describe.each([
    {
      infoText: /attack skill your attack skill is a bonus added to each creature's attack skill\./i,
      name: 'attack skill',
      statusText: /view attack skill info/i,
      title: /attack skill/i,
      value: 0,
    },
    {
      infoText: /defense skill your defense skill is a bonus added to each creature's defense skill\./i,
      name: 'defense skill',
      statusText: /view defense skill info/i,
      title: /defense skill/i,
      value: 0,
    },
    {
      infoText: /spell power your spell power determines the length or power of a spell\./i,
      name: 'spell power',
      statusText: /view spell power info/i,
      title: /spell power/i,
      value: 3,
    },
    {
      infoText: /knowledge your knowledge is the number of each spell you are able to memorize\./i,
      name: 'knowledge',
      statusText: /view knowledge info/i,
      title: /knowledge/i,
      value: 2,
    },
  ])('$name', ({ infoText, statusText, title, value }) => {
    it('renders skill', () => {
      renderWithProviders(<HeroWindow />);

      expect(screen.getByLabelText(title)).toBeInTheDocument();
    });

    it('renders skill value', () => {
      renderWithProviders(<HeroWindow />);

      expect(within(screen.getByLabelText(title)).getByText(value)).toBeInTheDocument();
    });

    it('renders status text when mouse over', async () => {
      const { user } = renderWithProviders(<HeroWindow />);

      await user.hover(screen.getByLabelText(title));

      expect(screen.getByText(statusText)).toBeInTheDocument();
    });

    it('renders modal when clicked', async () => {
      const { user } = renderWithProviders(<HeroWindow />);

      await user.click(screen.getByLabelText(title));

      expect(screen.getByRole('dialog', { name: infoText })).toBeInTheDocument();

      expect(screen.getByRole('button', { name: /okay/i })).toBeInTheDocument();
    });

    it('hides modal when confirm clicked', async () => {
      const { user } = renderWithProviders(<HeroWindow />);

      await user.click(screen.getByLabelText(title));

      await user.click(screen.getByRole('button', { name: /okay/i }));

      expect(screen.queryByRole('dialog', { name: infoText })).not.toBeInTheDocument();
    });

    it('renders info modal when right-clicked', async () => {
      const { user } = renderWithProviders(<HeroWindow />);

      await user.rightDown(screen.getByLabelText(title));

      expect(screen.getByRole('dialog', { name: infoText })).toBeInTheDocument();
    });
  });

  describe('dismiss button', () => {
    it('does not render button by default', () => {
      renderWithProviders(<HeroWindow />);

      expect(screen.queryByRole('button', { name: /dismiss/i })).not.toBeInTheDocument();
    });

    it('renders button when dismiss is allowed', () => {
      renderWithProviders(<HeroWindow allowDismiss />);

      expect(screen.getByRole('button', { name: /dismiss/i })).toBeInTheDocument();
    });

    it('renders status text when mouse over', async () => {
      const { user } = renderWithProviders(<HeroWindow allowDismiss />);

      await user.hover(screen.getByRole('button', { name: /dismiss/i }));

      expect(screen.getByText(/dismiss falgar the warlock/i)).toBeInTheDocument();
    });

    it('renders confirm modal when button is clicked', async () => {
      const { user } = renderWithProviders(<HeroWindow allowDismiss />);

      await user.click(screen.getByRole('button', { name: /dismiss/i }));

      expect(screen.getByRole('dialog', { name: /are you sure you want to dismiss this hero\?/i })).toBeInTheDocument();
    });

    it('calls handler when confirm is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<HeroWindow allowDismiss onDismissClick={handler} />);

      await user.click(screen.getByRole('button', { name: /dismiss/i }));

      await user.click(screen.getByRole('button', { name: /yes/i }));

      expect(handler).toHaveBeenCalled();
    });

    it('hides confirm modal when cancel is clicked', async () => {
      const { user } = renderWithProviders(<HeroWindow allowDismiss />);

      await user.click(screen.getByRole('button', { name: /dismiss/i }));

      await user.click(screen.getByRole('button', { name: /no/i }));

      expect(
        screen.queryByRole('dialog', { name: /are you sure you want to dismiss this hero\?/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('exit button', () => {
    it('renders button', () => {
      renderWithProviders(<HeroWindow />);

      expect(screen.getByRole('button', { name: /exit/i })).toBeInTheDocument();
    });

    it('renders status text when mouse over', async () => {
      const { user } = renderWithProviders(<HeroWindow />);

      await user.hover(screen.getByRole('button', { name: /exit/i }));

      expect(screen.getByText(/exit hero screen/i)).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const { user } = renderWithProviders(<HeroWindow onExitClick={handler} />);

      await user.click(screen.getByRole('button', { name: /exit/i }));

      expect(handler).toHaveBeenCalled();
    });
  });
});
