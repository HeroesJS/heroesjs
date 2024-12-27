import { Route, Routes, useNavigate } from 'react-router-dom';

import { Screen } from '../base';
import { Campaign, CampaignMenu, GameTypeMenu, MainMenu } from '../menu';

import background from './assets/background.jpg';

const MenuX = 400;
const MenuY = 35;

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
              x={MenuX}
              y={MenuY}
            />
          }
          index
        />
        <Route Component={GameTypeSelection} path="new" />
        <Route Component={CampaignSelection} path="new/campaign" />
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
      x={MenuX}
      y={MenuY}
    />
  );
};

const CampaignSelection = () => {
  const navigate = useNavigate();

  const handleCampaignClick = (campaign: Campaign) => navigate(campaign);

  const handleCancelClick = () => navigate('/');

  return <CampaignMenu onCampaignClick={handleCampaignClick} onCancelClick={handleCancelClick} x={MenuX} y={MenuY} />;
};
