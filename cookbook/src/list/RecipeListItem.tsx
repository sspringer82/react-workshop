import { ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import './RecipeListItem.scss';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

const RecipeListItem = ({ recipe, onDelete }: Props): ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="ListRecipeListItem">
      {recipe.title}
      <button onClick={() => onDelete(recipe.id)}>löschen</button>
      {/* <Link to={`/detail/${recipe.id}`}>details</Link> */}
      <button onClick={() => navigate(`/detail/${recipe.id}`)}>details</button>
    </div>
  );
};

export default RecipeListItem;
