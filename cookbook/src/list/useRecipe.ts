import { useState, useEffect } from 'react';
import Recipe from './Recipe';

export default function useRecipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch('http://localhost:3001/recipes');
    //   const data = await response.json();
    //   setRecipes(data);
    // }
    // fetchData();
    fetch('http://localhost:3001/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

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
