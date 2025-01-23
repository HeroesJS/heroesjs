import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GlobalStyle } from '@heroesjs/hmm1-base-ui';
import { ScreenHeight, ScreenWidth } from '@heroesjs/hmm1-core';

import { AdventureScreen } from './AdventureScreen';
import { CreditsScreen } from './CreditsScreen';
import { MainScreen } from './MainScreen';

export function App() {
  const navigate = useNavigate();

  const handleCreditsClick = () => navigate('/');

  return (
    <>
      <GlobalStyle />
      <Root id="app">
        <Routes>
          <Route element={<MainScreen />} path="game/*" />
          <Route element={<AdventureScreen />} path="adventure/*" />
          <Route element={<CreditsScreen onClick={handleCreditsClick} />} path="credits" />
          <Route element={<Navigate to="game" />} path="*" />
        </Routes>
      </Root>
    </>
  );
}

const Root = styled.div({
  height: ScreenHeight,
  imageRendering: 'pixelated',
  width: ScreenWidth,
});
