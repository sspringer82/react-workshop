import { useContext } from 'react';
import { RecipesContext } from '../RecipeContext';
import Recipe, { InputRecipe } from '../shared/Recipe';

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

  async function handleSave(recipe: InputRecipe) {
    const response = await fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(recipe),
    });
    if (response.ok) {
      const createdRecipe = await response.json();
      setRecipes((prevRecipes) => [...prevRecipes, createdRecipe]);
    }
  }

  function getById(id: number): Recipe | undefined {
    return recipes.find((recipe) => recipe.id === id);
  }

  return {
    recipes,
    handleDelete,
    getById,
    handleSave,
  };
}
