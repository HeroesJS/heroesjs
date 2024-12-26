import background from './assets/background.jpg';
import styled from 'styled-components';
import { ScreenHeight, ScreenWidth } from '../core';
import { MainMenu } from '../MainMenu';
import { useNavigate } from 'react-router-dom';

export const MainScreen = () => {
  const navigate = useNavigate();

  const handleViewCreditsClick = () => navigate('credits');

  return (
    <Root>
      <MainMenu onViewCreditsClick={handleViewCreditsClick} x={400} y={35} />
    </Root>
  );
};

const Root = styled.div({
  backgroundImage: `url(${background})`,
  height: ScreenHeight,
  position: 'relative',
  width: ScreenWidth,
});
