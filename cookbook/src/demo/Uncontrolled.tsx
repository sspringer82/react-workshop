import { ReactElement, useRef, useState } from 'react';

const Uncontrolled = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(inputRef.current?.value);

        if (inputRef.current?.value) {
          setName(inputRef.current?.value);
        }
      }}
    >
      <h1>Hello {name}</h1>
      <label>
        Name: <input type="text" ref={inputRef} />
      </label>
      <button type="submit">speichern</button>
    </form>
  );
};

export default Uncontrolled;
