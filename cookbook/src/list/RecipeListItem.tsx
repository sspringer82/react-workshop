import { ReactElement } from 'react';
import Recipe from './Recipe';
import './RecipeListItem.scss';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

const RecipeListItem = ({ recipe, onDelete }: Props): ReactElement => {
  return (
    <div className="ListRecipeListItem">
      {recipe.title}
      <button onClick={() => onDelete(recipe.id)}>löschen</button>
    </div>
  );
};

export default RecipeListItem;
