import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { PropsWithChildren, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

const ProvidersWrapper = (props: PropsWithChildren) => <MemoryRouter {...props} />;

export const renderWithProviders = (ui: ReactNode) => ({
  ...render(ui, {
    wrapper: ProvidersWrapper,
  }),
  user: userEvent.setup(),
});
