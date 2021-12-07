import { ReactElement, useRef } from 'react';

type Props = {
  onFilter: (filter: string) => void;
};

const Filter = ({ onFilter }: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClear() {
    // reset filter
    onFilter('');
    // reset input
    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
  }

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
      <button onClick={handleClear}>clear</button>
    </form>
  );
};

export default Filter;
