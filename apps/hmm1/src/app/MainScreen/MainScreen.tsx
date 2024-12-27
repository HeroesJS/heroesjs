import { Route, Routes, useNavigate } from 'react-router-dom';

import { Screen } from '../base';
import { GameTypeMenu, MainMenu } from '../menu';

import background from './assets/background.jpg';

export const MainScreen = () => {
  const navigate = useNavigate();

  const handleNewGameClick = () => navigate('new');

  const handleLoadGameClick = () => navigate('load');

  const handleViewCreditsClick = () => navigate('/credits');

  return (
    <Screen background={background}>
      <Routes>
        <Route
          element={
            <MainMenu
              onLoadGameClick={handleLoadGameClick}
              onNewGameClick={handleNewGameClick}
              onViewCreditsClick={handleViewCreditsClick}
              x={400}
              y={35}
            />
          }
          index
        />
        <Route Component={GameTypeSelection} path="new" />
        <Route Component={GameTypeSelection} path="load" />
      </Routes>
    </Screen>
  );
};

const GameTypeSelection = () => {
  const navigate = useNavigate();

  const handleStandardGameClick = () => navigate('standard');

  const handleCampaignGameClick = () => navigate('campaign');

  const handleMultiPlayerGameClick = () => navigate('multi-player');

  const handleCancelClick = () => navigate('/');

  return (
    <GameTypeMenu
      onCampaignGameClick={handleCampaignGameClick}
      onCancelClick={handleCancelClick}
      onMultiPlayerGameClick={handleMultiPlayerGameClick}
      onStandardGameClick={handleStandardGameClick}
      x={400}
      y={35}
    />
  );
};
