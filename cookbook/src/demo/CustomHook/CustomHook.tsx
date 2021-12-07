import { ReactElement } from 'react';
import useProvideName from './useProvideName';

const CustomHook = (): ReactElement => {
  const { name } = useProvideName();
  return <div>Hallo {name}!</div>;
};

export default CustomHook;
