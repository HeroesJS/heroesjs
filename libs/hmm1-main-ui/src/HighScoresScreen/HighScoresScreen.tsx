import type { CampaignGameScore, HighScores, HighScoresGameType, StandardGameScore } from '@heroesjs/hmm1-core';
import { GameType } from '@heroesjs/hmm1-core';
import { Button, PositionedComponent, Screen, Text } from '@heroesjs/hmm1-core-ui';

import { background, campaign, days, exit, land, leader, player, score, standard, title } from './assets';

interface HighScoresScreenProps {
  readonly entries?: HighScores;
  readonly gameType?: HighScoresGameType;
  readonly onExitClick?: () => void;
  readonly onGameTypeChange?: (value: HighScoresGameType) => void;
}

export function HighScoresScreen({
  entries = {},
  gameType = GameType.Standard,
  onExitClick,
  onGameTypeChange,
}: HighScoresScreenProps) {
  const showCampaignGameScores = gameType === GameType.Campaign;

  const scores = entries[gameType] ?? [];

  return (
    <Screen background={background} label="High Scores">
      <PositionedComponent as="table" x={82} y={31}>
        <caption>{showCampaignGameScores ? 'Campaign Game' : 'Standard Game'}</caption>
        <thead>
          <tr style={{ height: 35 }}>
            <th scope="col" style={{ width: 166 }}>
              <PositionedComponent alt="Player" as="img" src={player} x={17} y={0} />
            </th>
            {showCampaignGameScores ? (
              <>
                <th scope="col" style={{ width: 146 }}>
                  <PositionedComponent alt="Leader" as="img" src={leader} x={187} y={0} />
                </th>
                <th scope="col" style={{ width: 36 }}>
                  <PositionedComponent alt="Days" as="img" src={days} x={291} y={0} />
                </th>
              </>
            ) : (
              <>
                <th scope="col" style={{ width: 146 }}>
                  <PositionedComponent alt="Land" as="img" src={land} x={187} y={0} />
                </th>
                <th scope="col" style={{ width: 36 }}>
                  <PositionedComponent alt="Score" as="img" src={score} x={291} y={0} />
                </th>
              </>
            )}
            <th scope="col" style={{ width: 140 }}>
              <PositionedComponent alt="Title" as="img" src={title} x={379} y={0} />
            </th>
          </tr>
        </thead>
        <tbody>
          {showCampaignGameScores
            ? (scores as readonly CampaignGameScore[]).map((entry, i) => (
                <tr key={i} style={{ height: 38, verticalAlign: 'top' }}>
                  <td>
                    <Text size="large">{entry.player}</Text>
                  </td>
                  <td>
                    <Text size="large">{entry.leader}</Text>
                  </td>
                  <td>
                    <Text size="large">{entry.days}</Text>
                  </td>
                  <td>
                    <Text size="large">{entry.title}</Text>
                  </td>
                </tr>
              ))
            : (scores as readonly StandardGameScore[]).map((entry, i) => (
                <tr key={i} style={{ height: 38, verticalAlign: 'top' }}>
                  <td>
                    <Text size="large">{entry.player}</Text>
                  </td>
                  <td>
                    <Text size="large">{entry.scenario}</Text>
                  </td>
                  <td>
                    <Text size="large">{entry.score}</Text>
                  </td>
                  <td>
                    <Text size="large">{entry.title}</Text>
                  </td>
                </tr>
              ))}
        </tbody>
      </PositionedComponent>
      {showCampaignGameScores ? (
        <Button
          assets={campaign}
          label="Campaign"
          onClick={() => onGameTypeChange?.(GameType.Standard)}
          x={8}
          y={315}
        />
      ) : (
        <Button
          assets={standard}
          label="Standard"
          onClick={() => onGameTypeChange?.(GameType.Campaign)}
          x={8}
          y={315}
        />
      )}
      <Button assets={exit} label="Exit" onClick={onExitClick} x={604} y={315} />
    </Screen>
  );
}
