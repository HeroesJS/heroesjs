import styled from 'styled-components';

interface Props {
  readonly label?: string;
}

export const Placeholder = ({ label }: Props) => <Root>{label}</Root>;

const Root = styled.div({
  alignItems: 'center',
  backgroundColor: 'rgba(200, 200, 200, 0.5)',
  color: 'black',
  display: 'flex',
  fontSize: 14,
  height: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
});
