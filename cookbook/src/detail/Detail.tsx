import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import useRecipe from '../list/useRecipe';

const Detail = (): ReactElement => {
  const { id } = useParams();
  const { getById } = useRecipe();
  // @todo FIXME
  const recipe = getById(parseInt(id as string, 10));
  if (recipe) {
    return <h1>{recipe.title}</h1>;
  }
  return <div>Das Rezept gibt's nicht!</div>;
};

export default Detail;
