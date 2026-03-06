import { render, type RenderResult } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import type { PropsWithChildren, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';

import { i18n } from '@heroesjs/hmm1-i18n';

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
  return (
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </MemoryRouter>
  );
}
