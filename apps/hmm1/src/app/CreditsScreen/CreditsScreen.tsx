import { useId, type PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { Screen } from '../Screen';
import { Text } from '../Text';
import { background } from './assets';

interface CreditsScreenProps {
  readonly onClick?: () => void;
}

export function CreditsScreen({ onClick }: CreditsScreenProps) {
  return (
    <Screen background={background} label="Credits" onClick={onClick}>
      <List label="Designed and Directed" width={210} x={55} y={47}>
        <ListItem>Jon Van Caneghem</ListItem>
      </List>
      <List label="Additional Design" width={210} x={54} y={96}>
        <ListItem>Phil Steinmeyer</ListItem>
        <ListItem shift={2}>Debbie Van Caneghem</ListItem>
      </List>
      <List label="Lead Programming" width={210} x={55} y={159}>
        <ListItem shift={-2}>Phil Steinmeyer</ListItem>
      </List>
      <List label="Programming" width={210} x={53} y={208}>
        <ListItem shift={2}>Mark Caldwell</ListItem>
        <ListItem shift={3}>George Ruof</ListItem>
        <ListItem shift={3}>Todd Hendrix</ListItem>
        <ListItem shift={3}>Bob Rakosky</ListItem>
        <ListItem shift={5}>Michael Sean Clement</ListItem>
      </List>
      <List label="Art Director" width={210} x={54} y={313}>
        <ListItem shift={1}>Julia Ulano</ListItem>
      </List>
      <List label="Artists" width={210} x={54} y={362}>
        <ListItem shift={3}>Bonita Long-Hemsath</ListItem>
        <ListItem shift={1}>Joel Payne</ListItem>
        <ListItem shift={3}>Mike Winterbauer</ListItem>
      </List>
      <List label="Music and Sound Design" width={300} x={274} y={39}>
        <ListItem>Rob King</ListItem>
      </List>
      <List label="Orchestral Arrangements" width={300} x={273} y={83}>
        <ListItem>Paul Romero</ListItem>
      </List>
      <List label="Writing and Manual" width={300} x={273} y={127}>
        <ListItem>Rozita Tolouey</ListItem>
        <ListItem>Deane Rettig</ListItem>
        <ListItem shift={1}>Bruce Schlickbernd</ListItem>
      </List>
      <List label="Scenarios" width={300} x={273} y={199}>
        <ListItem>Jon Van Caneghem</ListItem>
        <ListItem>Christian Vanover</ListItem>
        <ListItem shift={-1}>Clayton Retzer</ListItem>
        <ListItem>Mark Palczynski</ListItem>
      </List>
      <List label="QA Manager" width={300} x={272} y={285}>
        <ListItem shift={1}>Peter Ryu</ListItem>
      </List>
      <List height={100} label="Testing" width={300} x={272} y={329}>
        <ListItem>Bryan Farina</ListItem>
        <ListItem>Douglas Rothman</ListItem>
        <ListItem>Pavel Vesely</ListItem>
        <ListItem shift={1}>Walter Johnson</ListItem>
        <ListItem>Scott White</ListItem>
        <ListItem shift={1}>Mark Caldwell</ListItem>
        <ListItem>George Ruof</ListItem>
        <ListItem>Scott McDaniel</ListItem>
        <ListItem>Benjamin Bent</ListItem>
        <ListItem>Deane Rettig</ListItem>
        <ListItem>Clayton Retzer</ListItem>
        <ListItem>Craig Konas</ListItem>
        <ListItem>Mark Palczynski</ListItem>
        <ListItem>Christian Vanover</ListItem>
      </List>
    </Screen>
  );
}

interface ListProps extends PositionProps {
  readonly label: string;
  readonly width: number;
  readonly height?: number;
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
