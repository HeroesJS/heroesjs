import styled, { createGlobalStyle } from 'styled-components';
import { MainScreen } from './MainScreen';
import { ScreenHeight, ScreenWidth } from './core';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CreditsScreen } from './CreditsScreen';

export function App() {
  const navigate = useNavigate();

  const handleCreditsClick = () => navigate('/');

  return (
    <>
      <AppStyle />
      <Root id="app">
        <Routes>
          <Route index element={<MainScreen />} />
          <Route element={<CreditsScreen onClick={handleCreditsClick} />} path="credits" />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Root>
    </>
  );
}

const AppStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Root = styled.div({
  height: ScreenHeight,
  imageRendering: 'pixelated',
  width: ScreenWidth,
});
