import { ReactElement } from 'react';
import Recipe from './Recipe';

const recipes: Recipe[] = [
  { id: 1, title: 'Schnitzel', steps: [], ingredients: [] },
  { id: 2, title: 'Tomatensuppe', steps: [], ingredients: [] },
  { id: 3, title: 'Currywurst', steps: [], ingredients: [] },
];

const RecipeList = (): ReactElement => {
  let recipeList: ReactElement = <div>Aktuell gibt es keine Rezepte</div>;

  if (recipes.length > 0) {
    recipeList = (
      <>
        {recipes.map((recipe) => (
          <div key={recipe.id}>{recipe.title}</div>
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
