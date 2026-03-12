import { zip } from 'lodash';
import { useId, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { PositionedComponent, Screen, Text } from '@heroesjs/hmm1-core-ui';

import { background } from './assets';

interface CreditsScreenProps {
  readonly onClick?: () => void;
}

export function CreditsScreen({ onClick }: CreditsScreenProps) {
  const { t } = useTranslation('main', { keyPrefix: 'component.creditsScreen' });

  return (
    <Screen background={background} label={t(($) => $.title)} onClick={onClick}>
      <List label={t(($) => $.designedAndDirected.title)} width={210} x={55} y={47}>
        {zip(
          t(($) => $.designedAndDirected.entries, { returnObjects: true }),
          []
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.additionalDesign.title)} width={210} x={54} y={96}>
        {zip(
          t(($) => $.additionalDesign.entries, { returnObjects: true }),
          [0, 2]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.leadProgramming.title)} width={210} x={55} y={159}>
        {zip(
          t(($) => $.leadProgramming.entries, { returnObjects: true }),
          [-2]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.programming.title)} width={210} x={53} y={208}>
        {zip(
          t(($) => $.programming.entries, { returnObjects: true }),
          [2, 3, 3, 3, 5]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.artDirector.title)} width={210} x={54} y={313}>
        {zip(
          t(($) => $.artDirector.entries, { returnObjects: true }),
          [1]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.artists.title)} width={210} x={54} y={362}>
        {zip(
          t(($) => $.artists.entries, { returnObjects: true }),
          [3, 1, 3]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.musicAndSoundDesign.title)} width={300} x={274} y={39}>
        {zip(
          t(($) => $.musicAndSoundDesign.entries, { returnObjects: true }),
          []
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.orchestralArranegments.title)} width={300} x={273} y={83}>
        {zip(
          t(($) => $.orchestralArranegments.entries, { returnObjects: true }),
          []
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.writingAndManual.title)} width={300} x={273} y={127}>
        {zip(
          t(($) => $.writingAndManual.entries, { returnObjects: true }),
          [0, 0, 1]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.scenarios.title)} width={300} x={273} y={199}>
        {zip(
          t(($) => $.scenarios.entries, { returnObjects: true }),
          [0, 0, -1]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List label={t(($) => $.qaManager.title)} width={300} x={272} y={285}>
        {zip(
          t(($) => $.qaManager.entries, { returnObjects: true }),
          [1]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
      <List height={100} label={t(($) => $.testing.title)} width={300} x={272} y={329}>
        {zip(
          t(($) => $.testing.entries, { returnObjects: true }),
          [0, 0, 0, 1, 0, 1]
        ).map(([entry, shift]) => (
          <ListItem key={entry} shift={shift}>
            {entry!}
          </ListItem>
        ))}
      </List>
    </Screen>
  );
}

interface ListProps {
  readonly label: string;
  readonly width: number;
  readonly height?: number;
  readonly x?: number;
  readonly y?: number;
}

function List({ children, height, label, width, x, y }: PropsWithChildren<ListProps>) {
  const labelId = useId();

  return (
    <Root width={width} x={x} y={y}>
      <ListLabel id={labelId}>
        <Text size="large">{label}</Text>
      </ListLabel>
      <ListRoot aria-labelledby={labelId} height={height}>
        {children}
      </ListRoot>
    </Root>
  );
}

const Root = styled(PositionedComponent)<Pick<ListProps, 'width'>>(({ width }) => ({
  width,
}));

const ListLabel = styled('h2')({
  marginBottom: 4,
  textAlign: 'center',
  '& *': {
    color: 'transparent',
  },
});

const ListRoot = styled('ul')<Pick<ListProps, 'height'>>(({ height }) => ({
  columnGap: 4,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  height,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  ...(height !== undefined
    ? {
        paddingLeft: 11,
      }
    : undefined),
}));

interface ListItemProps {
  readonly children: string;
  readonly shift?: number;
}

function ListItem({ children, shift }: ListItemProps) {
  return (
    <ListItemRoot aria-label={children} shift={shift}>
      <Text size="large">{children}</Text>
    </ListItemRoot>
  );
}

const ListItemRoot = styled('li')<Pick<ListItemProps, 'shift'>>(({ shift }) => ({
  marginLeft: shift,
  marginTop: -2,
  textAlign: 'center',
}));
