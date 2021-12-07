import { ReactElement, useRef } from 'react';
import { ButtonContainer, Form } from './Filter.style';

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
    <Form
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
      <ButtonContainer>
        <button type="submit">suchen</button>
        <button onClick={handleClear}>clear</button>
      </ButtonContainer>
    </Form>
  );
};

export default Filter;
