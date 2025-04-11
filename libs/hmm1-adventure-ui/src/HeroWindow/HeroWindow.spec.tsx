import {screen, within} from '@testing-library/react';

import {HeroClassId, HeroId, Luck, Morale, PlayerColor, Skill} from '@heroesjs/hmm1-core';
import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {type HeroInfo, HeroWindow} from './HeroWindow';

describe(HeroWindow, () => {
  const hero: HeroInfo = {
    army: [],
    artifacts: [],
    experience: 0,
    heroClass: HeroClassId.Warlock,
    id: HeroId.Falagar,
    level: 1,
    luck: Luck.Normal,
    morale: Morale.Normal,
    ownerColor: PlayerColor.Blue,
    skills: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
      [Skill.Knowledge]: 2,
      [Skill.SpellPower]: 3,
    },
  };

  it('renders window', () => {
    renderWithProviders(<HeroWindow hero={hero} />);

    expect(screen.getByRole('dialog', {name: /hero window/i})).toBeInTheDocument();
  });

  it('renders title', () => {
    renderWithProviders(<HeroWindow hero={hero} />);

    expect(screen.getByRole('heading', {name: /falagar the warlock/i})).toBeInTheDocument();
  });

  it('renders status text', () => {
    renderWithProviders(<HeroWindow hero={hero} />);

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
  ])('$name', ({infoText, statusText, title, value}) => {
    it('renders skill', () => {
      renderWithProviders(<HeroWindow hero={hero} />);

      expect(screen.getByLabelText(title)).toBeInTheDocument();
    });

    it('renders skill value', () => {
      renderWithProviders(<HeroWindow hero={hero} />);

      expect(within(screen.getByLabelText(title)).getByText(value)).toBeInTheDocument();
    });

    it('renders status text when mouse over', async () => {
      const {user} = renderWithProviders(<HeroWindow hero={hero} />);

      await user.hover(screen.getByLabelText(title));

      expect(screen.getByText(statusText)).toBeInTheDocument();
    });

    it('renders modal when clicked', async () => {
      const {user} = renderWithProviders(<HeroWindow hero={hero} />);

      await user.click(screen.getByLabelText(title));

      expect(screen.getByRole('dialog', {name: infoText})).toBeInTheDocument();

      expect(screen.getByRole('button', {name: /okay/i})).toBeInTheDocument();
    });

    it('hides modal when confirm clicked', async () => {
      const {user} = renderWithProviders(<HeroWindow hero={hero} />);

      await user.click(screen.getByLabelText(title));

      await user.click(screen.getByRole('button', {name: /okay/i}));

      expect(screen.queryByRole('dialog', {name: infoText})).not.toBeInTheDocument();
    });

    it('renders info modal when right-clicked', async () => {
      const {user} = renderWithProviders(<HeroWindow hero={hero} />);

      await user.rightDown(screen.getByLabelText(title));

      expect(screen.getByRole('dialog', {name: infoText})).toBeInTheDocument();
    });
  });

  describe('dismiss button', () => {
    it('does not render button by default', () => {
      renderWithProviders(<HeroWindow hero={hero} />);

      expect(screen.queryByRole('button', {name: /dismiss/i})).not.toBeInTheDocument();
    });

    it('renders button when dismiss is allowed', () => {
      renderWithProviders(<HeroWindow allowDismiss hero={hero} />);

      expect(screen.getByRole('button', {name: /dismiss/i})).toBeInTheDocument();
    });

    it('renders status text when mouse over', async () => {
      const {user} = renderWithProviders(<HeroWindow allowDismiss hero={hero} />);

      await user.hover(screen.getByRole('button', {name: /dismiss/i}));

      expect(screen.getByText(/dismiss falagar the warlock/i)).toBeInTheDocument();
    });

    it('renders confirm modal when button is clicked', async () => {
      const {user} = renderWithProviders(<HeroWindow allowDismiss hero={hero} />);

      await user.click(screen.getByRole('button', {name: /dismiss/i}));

      expect(screen.getByRole('dialog', {name: /are you sure you want to dismiss this hero\?/i})).toBeInTheDocument();
    });

    it('calls handler when confirm is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<HeroWindow allowDismiss hero={hero} onDismissClick={handler} />);

      await user.click(screen.getByRole('button', {name: /dismiss/i}));

      await user.click(screen.getByRole('button', {name: /yes/i}));

      expect(handler).toHaveBeenCalled();
    });

    it('hides confirm modal when cancel is clicked', async () => {
      const {user} = renderWithProviders(<HeroWindow allowDismiss hero={hero} />);

      await user.click(screen.getByRole('button', {name: /dismiss/i}));

      await user.click(screen.getByRole('button', {name: /no/i}));

      expect(
        screen.queryByRole('dialog', {name: /are you sure you want to dismiss this hero\?/i}),
      ).not.toBeInTheDocument();
    });
  });

  describe('exit button', () => {
    it('renders button', () => {
      renderWithProviders(<HeroWindow hero={hero} />);

      expect(screen.getByRole('button', {name: /exit/i})).toBeInTheDocument();
    });

    it('renders status text when mouse over', async () => {
      const {user} = renderWithProviders(<HeroWindow hero={hero} />);

      await user.hover(screen.getByRole('button', {name: /exit/i}));

      expect(screen.getByText(/exit hero screen/i)).toBeInTheDocument();
    });

    it('calls handler when button is clicked', async () => {
      const handler = vitest.fn();

      const {user} = renderWithProviders(<HeroWindow hero={hero} onExitClick={handler} />);

      await user.click(screen.getByRole('button', {name: /exit/i}));

      expect(handler).toHaveBeenCalled();
    });
  });
});
