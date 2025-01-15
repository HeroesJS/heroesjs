import { useCallback, useEffect, useState } from 'react';
import { createSearchParams, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';

import { Screen } from '../base';
import { scenarios } from '../core';
import { FileSelectorWindow } from '../FileSelectorWindow';
import {
  type Campaign,
  CampaignMenu,
  GameTypeMenu,
  HostGuestMenu,
  MainMenu,
  MultiPlayerGameTypeMenu,
  PlayerCountMenu,
} from '../menu';
import { NewGameWindow } from '../NewGameWindow';

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
        <Route Component={NewGameSelection} path="new/standard" />
        <Route Component={ScenarioSelection} path="new/standard/scenario" />
        <Route Component={CampaignSelection} path="new/campaign" />
        <Route element="Scenario Info" path="new/campaign/*" />
        <Route Component={MultiPlayerGameTypeSelection} path="new/multi-player" />
        <Route Component={PlayerCountSelection} path="new/multi-player/hot-seat" />
        <Route Component={NewGameSelection} path="new/multi-player/hot-seat/:count" />
        <Route Component={HostGuestSelection} path="new/multi-player/network" />
        <Route element={<HostGuestSelection detailed />} path="new/multi-player/modem" />
        <Route element={<HostGuestSelection detailed />} path="new/multi-player/direct-connect" />
        <Route Component={GameTypeSelection} path="load" />
        <Route element="File Selector" path="load/standard" />
        <Route element="File Selector" path="load/campaign" />
        <Route Component={MultiPlayerGameTypeSelection} path="load/multi-player" />
        <Route Component={PlayerCountSelection} path="load/multi-player/hot-seat" />
        <Route element="File Selector" path="load/multi-player/hot-seat/:count" />
        <Route Component={HostGuestSelection} path="load/multi-player/network" />
        <Route element={<HostGuestSelection detailed />} path="load/multi-player/modem" />
        <Route element={<HostGuestSelection detailed />} path="load/multi-player/direct-connect" />
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

const MultiPlayerGameTypeSelection = () => {
  const navigate = useNavigate();

  const handleHotSeatClick = () => navigate('hot-seat');

  const handleNetworkClick = () => navigate('network');

  const handleModemClick = () => navigate('modem');

  const handleDirectConnectClick = () => navigate('direct-connect');

  const handleCancelClick = () => navigate('/');

  return (
    <MultiPlayerGameTypeMenu
      onCancelClick={handleCancelClick}
      onDirectConnectClick={handleDirectConnectClick}
      onHotSeatClick={handleHotSeatClick}
      onModemClick={handleModemClick}
      onNetworkClick={handleNetworkClick}
      x={MenuX}
      y={MenuY}
    />
  );
};

const PlayerCountSelection = () => {
  const navigate = useNavigate();

  const handleCountClick = (value: number) => navigate(`${value}`);

  const handleCancelClick = () => navigate('/');

  return <PlayerCountMenu onCancelClick={handleCancelClick} onCountClick={handleCountClick} x={MenuX} y={MenuY} />;
};

interface HostGuestSelectionProps {
  readonly detailed?: boolean;
}

const HostGuestSelection = ({ detailed }: HostGuestSelectionProps) => {
  const navigate = useNavigate();

  const handleHostClick = () => navigate('host');

  const handleGuestClick = () => navigate('guest');

  const handleCancelClick = () => navigate('/');

  return (
    <HostGuestMenu
      detailed={detailed}
      onCancelClick={handleCancelClick}
      onGuestClick={handleGuestClick}
      onHostClick={handleHostClick}
      x={MenuX}
      y={MenuY}
    />
  );
};

const NewGameSelection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedScenario = searchParams.get('scenario') ?? undefined;

  const scenario = scenarios.find((s) => s.name === selectedScenario);

  useEffect(() => {
    if (scenario || !scenarios.length) {
      return;
    }

    setSearchParams({
      scenario: scenarios[0]?.name ?? '',
    });
  }, [scenario, setSearchParams]);

  const navigate = useNavigate();

  const handleSelectScenario = useCallback(
    () =>
      navigate({
        pathname: 'scenario',
        search: createSearchParams({
          selected: selectedScenario ?? '',
        }).toString(),
      }),
    [navigate, selectedScenario],
  );

  const handleCancelClick = useCallback(() => navigate('/'), [navigate]);

  return (
    <NewGameWindow
      onCancelClick={handleCancelClick}
      onSelectScenarioClick={handleSelectScenario}
      scenario={scenario}
      x={310}
      y={14}
    />
  );
};

const ScenarioSelection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedScenario = searchParams.get('selected') ?? undefined;

  const scenario = scenarios.find((s) => s.name === selectedScenario);

  const [initialScenario] = useState(scenario?.name);

  useEffect(() => {
    if (scenario || !scenarios.length) {
      return;
    }

    setSearchParams({
      selected: scenarios[0]?.name ?? '',
    });
  }, [scenario, setSearchParams]);

  const navigate = useNavigate();

  const handleScenarioClick = useCallback(
    (name: string) =>
      setSearchParams({
        selected: name,
      }),
    [setSearchParams],
  );

  const handleConfirmClick = useCallback(
    () =>
      navigate(
        {
          pathname: '..',
          search: createSearchParams({
            scenario: selectedScenario ?? '',
          }).toString(),
        },
        {
          relative: 'path',
        },
      ),
    [navigate, selectedScenario],
  );

  const handleCancelClick = useCallback(
    () =>
      navigate(
        {
          pathname: '..',
          search: createSearchParams({
            scenario: initialScenario ?? '',
          }).toString(),
        },
        {
          relative: 'path',
        },
      ),
    [initialScenario, navigate],
  );

  return (
    <FileSelectorWindow
      items={scenarios.slice(0, 10).map((s) => s.name)}
      onCancelClick={handleCancelClick}
      onConfirmClick={handleConfirmClick}
      onItemClick={handleScenarioClick}
      scenarioInfo={scenario}
      selectedItem={selectedScenario}
      showScenarioInfo
      x={310}
      y={14}
    />
  );
};
