import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { ScreenHeight, ScreenWidth } from '@heroesjs/hmm1-core';

import { CreditsScreen } from './CreditsScreen';
import { MainScreen } from './MainScreen';

export function App() {
  const navigate = useNavigate();

  const handleCreditsClick = () => navigate('/');

  return (
    <>
      <AppStyle />
      <Root id="app">
        <Routes>
          <Route element={<MainScreen />} path="game/*" />
          <Route element={<CreditsScreen onClick={handleCreditsClick} />} path="credits" />
          <Route element={<Navigate to="game" />} path="*" />
        </Routes>
      </Root>
    </>
  );
}

const AppStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
  }
`;

const Root = styled.div({
  height: ScreenHeight,
  imageRendering: 'pixelated',
  width: ScreenWidth,
});
