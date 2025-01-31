import { GlobalStyle } from './globalStyle';

export const withGlobalStyle = (Story: any) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);
