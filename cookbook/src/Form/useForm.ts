import { useNavigate } from 'react-router-dom';
import useRecipe from '../list/useRecipe';
import { InputRecipe } from '../shared/Recipe';

export default function useForm() {
  const { handleSave } = useRecipe();
  const navigate = useNavigate();

  async function handleSubmit(recipe: InputRecipe) {
    await handleSave(recipe);
    navigate('/');
  }

  return handleSubmit;
}
