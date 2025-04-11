import {screen} from '@testing-library/react';

import {CreatureId} from '@heroesjs/hmm1-core';
import {renderWithProviders} from '@heroesjs/hmm1-test-utils';

import {TroopSlot} from './TroopSlot';

describe(TroopSlot, () => {
  it('renders index', () => {
    renderWithProviders(<TroopSlot index={0} />);

    expect(screen.getByLabelText(/troop 0/i)).toBeInTheDocument();
  });

  it('renders empty by default', () => {
    renderWithProviders(<TroopSlot index={0} />);

    expect(screen.getByLabelText(/troop 0 - empty/i)).toBeInTheDocument();
  });

  it('renders creature', () => {
    renderWithProviders(<TroopSlot creatureId={CreatureId.Peasant} index={0} />);

    expect(screen.getByLabelText(/troop 0 - peasant/i)).toBeInTheDocument();
  });

  it('renders neutral creature', () => {
    renderWithProviders(<TroopSlot creatureId={CreatureId.Rogue} index={0} />);

    expect(screen.getByLabelText(/troop 0 - rogue/i)).toBeInTheDocument();
  });

  it('renders as not selected by default', () => {
    renderWithProviders(<TroopSlot index={0} />);

    expect(screen.getByLabelText(/troop 0 - empty/i)).toHaveAttribute('aria-selected', 'false');
  });

  it('renders as selected', () => {
    renderWithProviders(<TroopSlot index={0} selected />);

    expect(screen.getByLabelText(/troop 0 - empty/i)).toHaveAttribute('aria-selected', 'true');
  });

  it('renders count 0 by default', () => {
    renderWithProviders(<TroopSlot creatureId={CreatureId.Peasant} index={0} />);

    expect(screen.getByLabelText(/count/i)).toHaveTextContent('0');
  });

  it('renders count', () => {
    renderWithProviders(<TroopSlot count={1} creatureId={CreatureId.Peasant} index={0} />);

    expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');
  });

  it('calls handler when mouse over', async () => {
    const handler = vitest.fn();

    const {user} = renderWithProviders(<TroopSlot index={0} onMouseOver={handler} />);

    await user.hover(screen.getByLabelText(/troop 0 - empty/i));

    expect(handler).toHaveBeenCalledWith(0);
  });

  it('calls handler when mouse leave', async () => {
    const handler = vitest.fn();

    const {user} = renderWithProviders(<TroopSlot index={0} onMouseLeave={handler} />);

    await user.hover(screen.getByLabelText(/troop 0 - empty/i));

    await user.unhover(screen.getByLabelText(/troop 0 - empty/i));

    expect(handler).toHaveBeenCalled();
  });

  it('calls handler when mouse down', async () => {
    const handler = vitest.fn();

    const {user} = renderWithProviders(<TroopSlot index={0} onMouseDown={handler} />);

    await user.rightDown(screen.getByLabelText(/troop 0 - empty/i));

    expect(handler).toHaveBeenCalledWith(expect.anything(), 0);
  });

  it('calls handler when clicked', async () => {
    const handler = vitest.fn();

    const {user} = renderWithProviders(<TroopSlot index={0} onClick={handler} />);

    await user.click(screen.getByLabelText(/troop 0 - empty/i));

    expect(handler).toHaveBeenCalledWith(0);
  });
});
