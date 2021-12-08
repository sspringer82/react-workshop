import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipe from '../list/useRecipe';
import { InputRecipe } from '../shared/Recipe';

const initialRecipe: InputRecipe = {
  title: '',
  steps: [],
  ingredients: [],
};

const Form = (): ReactElement => {
  const { handleSave } = useRecipe();
  const [recipe, setRecipe] = useState<InputRecipe>(initialRecipe);
  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setRecipe((prevRecipe) => {
      return { ...prevRecipe, [name]: value };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(recipe);
    await handleSave(recipe);
    setRecipe(initialRecipe);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titel:{' '}
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={handleChange}
        />
      </label>
      <button>speichern</button>
    </form>
  );
};

export default Form;
