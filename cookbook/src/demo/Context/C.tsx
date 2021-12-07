import { ReactElement, useContext } from 'react';
import Context from './Context';

const C = (props: any): ReactElement => {
  const [value] = useContext(Context);
  return <div>{value}</div>;
};

export default C;
