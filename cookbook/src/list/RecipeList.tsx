import { ReactElement, useState } from 'react';
import Recipe from './Recipe';

const initialRecipes: Recipe[] = [
  { id: 1, title: 'Schnitzel', steps: [], ingredients: [] },
  { id: 2, title: 'Tomatensuppe', steps: [], ingredients: [] },
  { id: 3, title: 'Currywurst', steps: [], ingredients: [] },
];

const RecipeList = (): ReactElement => {
  console.log('render!');
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

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
          <div key={recipe.id}>
            {recipe.title}
            <button onClick={() => handleDelete(recipe.id)}>löschen</button>
          </div>
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
