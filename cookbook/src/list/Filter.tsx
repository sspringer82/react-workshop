import { ReactElement, useRef } from 'react';

type Props = {
  onFilter: (filter: string) => void;
};

const Filter = ({ onFilter }: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current?.value !== undefined) {
          onFilter(inputRef.current?.value);
        }
      }}
    >
      <label>
        Suche: <input type="text" ref={inputRef} />
      </label>
      <button type="submit">suchen</button>
    </form>
  );
};

export default Filter;
