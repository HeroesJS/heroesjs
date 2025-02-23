import { useCallback, useEffect, useState } from 'react';
import { createSearchParams, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';

import { CampaignScenarioInfoWindow } from '@heroesjs/hmm1-adventure-ui';
import { Screen } from '@heroesjs/hmm1-base-ui';
import { type Campaign, campaignScenarios, OpponentDifficulty, scenarios } from '@heroesjs/hmm1-core';

import { FileSelectorWindow } from '../FileSelectorWindow';
import { CampaignMenu, GameTypeMenu, HostGuestMenu, MainMenu, MultiPlayerGameTypeMenu, PlayerCountMenu } from '../Menu';
import { NewGameWindow } from '../NewGameWindow';

import * as assets from './assets';

const MenuX = 400;
const MenuY = 35;

export const MainScreen = () => {
  const navigate = useNavigate();

  const handleNewGameClick = () => navigate('new');

  const handleLoadGameClick = () => navigate('load');

  const handleViewCreditsClick = () => navigate('/credits');

  return (
    <Screen background={assets.background}>
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
        <Route
          element={
            <CampaignScenarioInfoWindow
              onConfirmClick={() => navigate('/adventure')}
              scenario={campaignScenarios[0]}
              x={105}
              y={96}
            />
          }
          path="new/campaign/:leader"
        />
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

  const [opponentSettings, setOpponentSettings] = useState<readonly OpponentDifficulty[]>(
    new Array(3).fill(OpponentDifficulty.Average),
  );

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

  const handleSelectScenarioClick = useCallback(
    () =>
      navigate({
        pathname: 'scenario',
        search: createSearchParams({
          selected: selectedScenario ?? '',
        }).toString(),
      }),
    [navigate, selectedScenario],
  );

  const handleConfirmClick = useCallback(() => navigate('/adventure'), [navigate]);

  const handleCancelClick = useCallback(() => navigate('/'), [navigate]);

  return (
    <NewGameWindow
      onCancelClick={handleCancelClick}
      onConfirmClick={handleConfirmClick}
      onOpponentSettingsChange={setOpponentSettings}
      onSelectScenarioClick={handleSelectScenarioClick}
      opponentSettings={opponentSettings}
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
