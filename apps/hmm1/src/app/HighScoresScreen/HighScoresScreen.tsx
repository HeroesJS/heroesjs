import { Button } from '../Button';
import { StandardGameScore } from '../highScores';
import { PositionedComponent } from '../PositionedComponent';
import { Screen } from '../Screen';
import { Text } from '../Text';
import { background, exit, land, player, score, title } from './assets';

interface HighScoresScreenProps {
  readonly entries?: readonly StandardGameScore[];
  readonly onExitClick?: () => void;
}

export function HighScoresScreen({ entries = [], onExitClick }: HighScoresScreenProps) {
  return (
    <Screen background={background} label="High Scores">
      <PositionedComponent as="table" x={82} y={31}>
        <caption>Standard Game</caption>
        <thead>
          <tr style={{ height: 35 }}>
            <th scope="col" style={{ width: 166 }}>
              <PositionedComponent as="img" src={player} alt="Player" x={17} y={0} />
            </th>
            <th scope="col" style={{ width: 146 }}>
              <PositionedComponent as="img" src={land} alt="Land" x={187} y={0} />
            </th>
            <th scope="col" style={{ width: 36 }}>
              <PositionedComponent as="img" src={score} alt="Score" x={291} y={0} />
            </th>
            <th scope="col" style={{ width: 140 }}>
              <PositionedComponent as="img" src={title} alt="Title" x={379} y={0} />
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
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
      <Button assets={exit} label="Exit" onClick={onExitClick} x={604} y={315} />
    </Screen>
  );
}
