import { useContext } from 'react';
import { RecipesContext } from '../RecipeContext';

export default function useRecipe() {
  const [recipes, setRecipes] = useContext(RecipesContext);

  function handleDelete(id: number) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Bist du dir wirklich sicher?')) {
      setRecipes((prevRecipes) => {
        return prevRecipes.filter((recipe) => recipe.id !== id);
      });
    }
  }

  return {
    recipes,
    handleDelete,
  };
}
