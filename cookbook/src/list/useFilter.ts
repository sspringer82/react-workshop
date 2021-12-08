import { useState } from 'react';
import Recipe from '../shared/Recipe';

export default function useFilter() {
  const [filter, setFilter] = useState<string>('');

  function applyFilter(recipes: Recipe[]): Recipe[] {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  return { setFilter, applyFilter };
}
