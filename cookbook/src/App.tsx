import { ReactElement } from 'react';
import './App.css';
import Interaction from './demo/Interaction';
import State from './demo/State';
import RecipeList from './list/RecipeList';

const App = (): ReactElement => {
  // eslint-disable-next-line no-restricted-globals
  confirm('foo');
  return <Interaction />;
  // return <RecipeList />;
};

export default App;
