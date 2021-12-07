import { ReactElement } from 'react';
import './App.css';
import Styling from './demo/Styling/Styling';
import RecipeList from './list/RecipeList';

const App = (): ReactElement => {
  return (
    <>
      <Styling />
      <div className="border">Hallo Welt</div>
    </>
  );
};

export default App;
