import background from './assets/background.jpg';
import { MainMenu } from '../MainMenu';
import { useNavigate } from 'react-router-dom';
import { Screen } from '../Screen';

export const MainScreen = () => {
  const navigate = useNavigate();

  const handleViewCreditsClick = () => navigate('credits');

  return (
    <Screen background={background}>
      <MainMenu onViewCreditsClick={handleViewCreditsClick} x={400} y={35} />
    </Screen>
  );
};
