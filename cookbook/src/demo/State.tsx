import { ReactElement, useState } from 'react';

const State = (): ReactElement => {
  console.log('rerender');
  const [state, setState] = useState<string>('initialwert');

  // Keine gute Idee, weil Endlosschleife
  // setTimeout(() => {
  //   setState('nicht mehr initial' + Date.now());
  // }, 1000);
  return <div>{state}</div>;
};

export default State;
