import { useNavigate } from 'react-router-dom';

import { Screen } from '../base';
import { MainMenu } from '../menu';

import background from './assets/background.jpg';

export const MainScreen = () => {
  const navigate = useNavigate();

  const handleViewCreditsClick = () => navigate('credits');

  return (
    <Screen background={background}>
      <MainMenu onViewCreditsClick={handleViewCreditsClick} x={400} y={35} />
    </Screen>
  );
};
