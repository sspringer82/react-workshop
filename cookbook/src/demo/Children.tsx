import { HTMLAttributes, ReactElement } from 'react';

const names = ['Tick', 'Trick', 'Track'];

type Props = {
  name: string;
};

const Child = ({ name }: Props): ReactElement => {
  return <li>{name}</li>;
};

type InputProps = {
  label: string;
  disabled?: boolean;
};
const CustomInput = (
  props: InputProps & HTMLAttributes<HTMLInputElement>,
): ReactElement => {
  const inputProps: any = {};
  if (props.disabled) {
    inputProps.disabled = true;
  }

  return (
    <label>
      {props.label}
      <input type="text" {...inputProps} />
    </label>
  );
};

const Parent = (): ReactElement => {
  return (
    <>
      <ul>
        {names.map((name) => (
          <Child name={name} key={name} />
        ))}
      </ul>
      <CustomInput label="myCustomInput" disabled />
      <CustomInput label="myCustomInput" />
    </>
  );
};

export default Parent;
