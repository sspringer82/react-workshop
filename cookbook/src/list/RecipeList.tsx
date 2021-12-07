import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Filter from './Filter';
import RecipeListItem from './RecipeListItem';
import useFilter from './useFilter';
import useRecipe from './useRecipe';

const RecipeList = (): ReactElement => {
  const { recipes, handleDelete } = useRecipe();
  const { setFilter, applyFilter } = useFilter();

  const history = useLocation();

  let recipeList: ReactElement = <div>Aktuell gibt es keine Rezepte</div>;

  if (recipes.length > 0) {
    recipeList = (
      <>
        <Filter onFilter={setFilter} />
        {applyFilter(recipes).map((recipe) => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
        <Link to="/dummy/42">go to dummy</Link>
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
