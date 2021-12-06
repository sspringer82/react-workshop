import { ReactElement } from 'react';
import './App.css';
import Interaction from './demo/Interaction';
import State from './demo/State';
import RecipeList from './list/RecipeList';

const App = (): ReactElement => {
  return <Interaction />;
  // return <RecipeList />;
};

export default App;
