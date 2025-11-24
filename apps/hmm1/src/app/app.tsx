import { createGlobalStyle } from 'styled-components';
import { MainScreen } from './MainScreen';

const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
  },
});

export function App() {
  return (
    <>
      <GlobalStyle />
      <MainScreen />
    </>
  );
}
