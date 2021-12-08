import { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Component from './demo/Test/Component';
import Detail from './detail/Detail';
import Form from './Form/Form';
import RecipeList from './list/RecipeList';
import NotFound from './NotFound';
import RecipesProvider from './RecipeContext';

const App = (): ReactElement => {
  return (
    <Router>
      <Component />
      <RecipesProvider>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </RecipesProvider>
    </Router>
  );
};

export default App;

{
  // const [show, setShow] = useState(false);
  /* <button onClick={() => setShow((prevShow) => !prevShow)}>
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
      )} */
}
