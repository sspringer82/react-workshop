import { useState } from 'react';
import A from './A';
import B from './B';
import Context from './Context';

const Base = () => {
  const stateGetterAndSetter = useState('hallo');
  return (
    <>
      <Context.Provider value={stateGetterAndSetter}>
        <A />
        <B />
      </Context.Provider>
    </>
  );
};
export default Base;
