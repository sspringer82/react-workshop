import styled from 'styled-components';

const bgColor = 'maroon';

type Props = {
  disabled?: boolean;
};

export const Container = styled.div<Props>`
  border: 3px solid limegreen;
  background-color: ${(props) => (props.disabled ? 'grey' : bgColor)};
  color: yellow;
`;

export const Headline = styled.h1`
  background-color: yellow;
  color: black;
`;
