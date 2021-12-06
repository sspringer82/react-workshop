import { ReactElement } from 'react';
import './App.css';
import Parent from './demo/Children';
import Interaction from './demo/Interaction';
import State from './demo/State';
import RecipeList from './list/RecipeList';

const App = (): ReactElement => {
  return <Parent />;
};

export default App;
