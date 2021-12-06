import { ReactElement, useEffect, useState } from 'react';

// Mount (1x) - mit leerem Abhängigkeitsarray
// Update (Nx)
// Unmount (1x)

// State update, Props update, context update

const Lifecycle = (): ReactElement => {
  console.log('RENDER');

  const [, setState] = useState('Klaus');
  const [state2, setState2] = useState('Karin');

  useEffect(() => {
    console.log('Mount');
    setState('Norbert' + Math.random());
    setState2('Olga' + Math.random());

    // websocket connect
    return () => {
      // websocket disconnect
    };
  }, []);

  useEffect(() => {
    setState('Hugo' + Math.random());
    console.log('Update Frauen');
    return () => {
      console.log('UNMOUNT state2');
    };
  }, [state2]);

  useEffect(() => {
    console.log('general update');
    return () => {
      console.log('UNMOUNT');
    };
  });

  return <div>Lifecylce works</div>;
};

const LifecycleProxy = (): ReactElement => {
  const [hide, setHide] = useState(false);
  if (hide) {
    return <></>;
  } else {
    return (
      <>
        <Lifecycle />
        <button onClick={() => setHide(true)}>versteck dich</button>
      </>
    );
  }
};

export default LifecycleProxy;
