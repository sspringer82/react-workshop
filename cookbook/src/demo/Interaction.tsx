import { ReactElement, useState } from 'react';

const Interaction = (): ReactElement => {
  console.log('render');
  const [name, setName] = useState('Klaus');
  return (
    <div>
      <div>{name}</div>
      <button onClick={handleClick} onMouseMove={handleClick}>
        click me
      </button>
    </div>
  );

  function handleClick() {
    setName((prevName) => {
      if (prevName === 'Klaus') {
        return 'Maria';
      } else {
        return 'Klaus';
      }
    });
  }
};

export default Interaction;
