import { ReactElement, useEffect, useState } from 'react';

const Form = (): ReactElement => {
  console.log('RENDER');
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <form>
      <label>
        Name:{' '}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
    </form>
  );
};

export default Form;
