import { ReactElement, useState } from 'react';

const State = (): ReactElement => {
  console.log('rerender');
  const [state, setState] = useState<string>('initialwert');

  // überschreibt
  setState('neuer Wert');

  // arbeitet mit dem alten state und produziert den neuen
  setState((oldState) => {
    let newState = oldState;
    newState += '!';
    return newState;
  });

  // Keine gute Idee, weil Endlosschleife
  // setTimeout(() => {
  //   setState('nicht mehr initial' + Date.now());
  // }, 1000);
  return <div>{state}</div>;
};

export default State;
