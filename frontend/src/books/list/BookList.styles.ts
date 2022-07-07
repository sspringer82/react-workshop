import styled from '@emotion/styled';

type Props = {
  pink?: boolean;
};

export const TH = styled.th<Props>`
  color: ${(props: Props) => {
    return props.pink ? 'hotpink' : 'white';
  }};
  background-color: black;
  font-weight: bold;

  & span {
    background-color: green;
  }
`;
