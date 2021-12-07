import { useContext } from 'react';
import { RecipesContext } from '../RecipeContext';
import Recipe from './Recipe';

export default function useRecipe() {
  const [recipes, setRecipes] = useContext(RecipesContext);

  async function handleDelete(id: number) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Bist du dir wirklich sicher?')) {
      const response = await fetch('http://localhost:3001/recipes/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'Application/JSON' },
      });
      if (response.ok) {
        setRecipes((prevRecipes) => {
          return prevRecipes.filter((recipe) => recipe.id !== id);
        });
      }
    }
  }

  function getById(id: number): Recipe | undefined {
    return recipes.find((recipe) => recipe.id === id);
  }

  return {
    recipes,
    handleDelete,
    getById,
  };
}
