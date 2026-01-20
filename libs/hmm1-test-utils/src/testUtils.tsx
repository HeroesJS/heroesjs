import { render, type RenderResult } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import type { PropsWithChildren, ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

interface ExtendedUserEvent extends UserEvent {
  mouseRightDown(target: Element): Promise<void>;
  mouseRightUp(): Promise<void>;
}

interface ExtendedRenderResult extends RenderResult {
  readonly user: ExtendedUserEvent;
}

export function renderWithProviders(ui: ReactNode): ExtendedRenderResult {
  const user = userEvent.setup();

  const renderResult = render(ui, {
    wrapper: ProvidersWrapper,
  });

  return {
    ...renderResult,
    user: {
      ...user,
      mouseRightDown(target: Element) {
        return this.pointer({ keys: '[MouseRight>]', target });
      },
      mouseRightUp() {
        return this.pointer({ keys: '[/MouseRight]' });
      },
    },
  };
}

function ProvidersWrapper({ children }: PropsWithChildren) {
  return <MemoryRouter>{children}</MemoryRouter>;
}
