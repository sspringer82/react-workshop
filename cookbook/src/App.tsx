import { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import './App.css';
import Base from './demo/Context/Components';
import Detail from './detail/Detail';
import List from './list/RecipeList';
import RecipesProvider from './RecipeContext';

function Dummy() {
  const { id } = useParams();
  return <div>Hallo Welt {id}</div>;
}

const App = (): ReactElement => {
  // const [show, setShow] = useState(false);
  return (
    <Router>
      <RecipesProvider>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </RecipesProvider>
    </Router>
  );
};

export default App;

{
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
