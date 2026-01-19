import type { CampaignGameScore, HighScores, HighScoresGameType, StandardGameScore } from '@heroesjs/hmm1-core';
import { GameType } from '@heroesjs/hmm1-core';

import { Button } from '../Button';
import { PositionedComponent } from '../PositionedComponent';
import { Screen } from '../Screen';
import { Text } from '../Text';
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
              <PositionedComponent as="img" src={player} alt="Player" x={17} y={0} />
            </th>
            {showCampaignGameScores ? (
              <>
                <th scope="col" style={{ width: 146 }}>
                  <PositionedComponent as="img" src={leader} alt="Leader" x={187} y={0} />
                </th>
                <th scope="col" style={{ width: 36 }}>
                  <PositionedComponent as="img" src={days} alt="Days" x={291} y={0} />
                </th>
              </>
            ) : (
              <>
                <th scope="col" style={{ width: 146 }}>
                  <PositionedComponent as="img" src={land} alt="Land" x={187} y={0} />
                </th>
                <th scope="col" style={{ width: 36 }}>
                  <PositionedComponent as="img" src={score} alt="Score" x={291} y={0} />
                </th>
              </>
            )}
            <th scope="col" style={{ width: 140 }}>
              <PositionedComponent as="img" src={title} alt="Title" x={379} y={0} />
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
