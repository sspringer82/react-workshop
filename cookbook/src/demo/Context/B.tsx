import { ReactElement, useContext, useEffect } from 'react';
import Context from './Context';

const B = (props: any): ReactElement => {
  const [value, setState] = useContext(Context);
  useEffect(() => {
    setTimeout(() => {
      setState('Hallo Welt!');
    }, 1000);
  }, []);
  return <div>{value}</div>;
};

export default B;
