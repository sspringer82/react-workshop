import { ReactElement } from 'react';
import Recipe from './Recipe';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

const RecipeListItem = ({ recipe, onDelete }: Props): ReactElement => {
  return (
    <div>
      {recipe.title}
      <button onClick={() => onDelete(recipe.id)}>löschen</button>
    </div>
  );
};

export default RecipeListItem;
