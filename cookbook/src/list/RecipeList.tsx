import { ReactElement, useEffect, useState } from 'react';
import Recipe from './Recipe';
import RecipeListItem from './RecipeListItem';

const RecipeList = (): ReactElement => {
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

  let recipeList: ReactElement = <div>Aktuell gibt es keine Rezepte</div>;

  function handleDelete(id: number) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Bist du dir wirklich sicher?')) {
      setRecipes((prevRecipes) => {
        return prevRecipes.filter((recipe) => recipe.id !== id);
      });
    }
  }

  if (recipes.length > 0) {
    recipeList = (
      <>
        {recipes.map((recipe) => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <h1>Kochbuch</h1>
      {recipeList}
    </>
  );
};

export default RecipeList;
