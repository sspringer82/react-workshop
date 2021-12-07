import { ReactElement } from 'react';
import { Content, Title, Container } from './Dialog.style';

type Props = {
  headline: string;
  children: ReactElement;
  onOk: () => void;
  onCancel: () => void;
  show: boolean;
};

const Dialog = ({
  headline,
  children,
  onOk,
  onCancel,
  show,
}: Props): ReactElement => {
  return (
    <Container style={{ display: show ? 'block' : 'none' }}>
      <Title>{headline}</Title>
      <Content>{children}</Content>
      <button onClick={() => onOk()}>OK</button>
      <button onClick={() => onCancel()}>Cancel</button>
    </Container>
  );
};

export default Dialog;
