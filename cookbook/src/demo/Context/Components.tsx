import { useState } from 'react';
import A from './A';
import B from './B';
import Context from './Context';

const Base = () => {
  const state = useState('hallo');
  return (
    <>
      <Context.Provider value={state}>
        <A />
        <B />
      </Context.Provider>
    </>
  );
};
export default Base;
