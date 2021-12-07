import { ReactElement } from 'react';
import './App.css';
import Base from './demo/Context/Components';
import List from './list/RecipeList';
import RecipesProvider from './RecipeContext';

const App = (): ReactElement => {
  // const [show, setShow] = useState(false);
  return (
    <RecipesProvider>
      <List />

      {/* <button onClick={() => setShow((prevShow) => !prevShow)}>
        toggle dialog
      </button>
      {show && (
        <Dialog
          show={show}
          headline="Dialog Titel"
          onOk={() => console.log('ok was clicked')}
          onCancel={() => console.log('cancel was clicked')}
        >
          <div>HIER IST DER INHALT</div>
        </Dialog>
      )} */}
    </RecipesProvider>
  );
};

export default App;
