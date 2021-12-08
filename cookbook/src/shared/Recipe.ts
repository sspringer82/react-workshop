type Recipe = {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
};

export default Recipe;

export type InputRecipe = Omit<Recipe, 'id'> & { id?: number };
