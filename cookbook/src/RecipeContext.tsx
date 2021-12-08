import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactElement,
  useState,
  useEffect,
} from 'react';
import Recipe from './shared/Recipe';

type ContextType = [Recipe[], Dispatch<SetStateAction<Recipe[]>>];

export const RecipesContext = createContext<ContextType>([[], () => {}]);

type Props = {
  children: ReactElement;
};

const RecipesProvider = ({ children }: Props): ReactElement => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/recipes');
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
        } else {
          // handle Error
        }
      } catch (error) {
        // handle Error
      }
    }
    fetchData();
    // fetch('http://localhost:3001/recipes')
    //   .then((response) => response.json())
    //   .then((data) => setRecipes(data));
  }, []);

  return (
    <RecipesContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
