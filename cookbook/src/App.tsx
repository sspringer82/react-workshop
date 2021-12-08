import { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import './App.css';
import Base from './demo/Context/Components';
import Form from './demo/Form';
import Detail from './detail/Detail';
import List from './list/RecipeList';
import NotFound from './NotFound';
import RecipesProvider from './RecipeContext';

function Dummy() {
  const { id } = useParams();
  return <div>Hallo Welt {id}</div>;
}

const App = (): ReactElement => {
  return <Form />;
  // return (
  //   <Router>
  //     <RecipesProvider>
  //       <Routes>
  //         <Route path="/" element={<List />} />
  //         <Route path="/detail/:id" element={<Detail />} />
  //         <Route path="/notfound" element={<NotFound />} />
  //       </Routes>
  //     </RecipesProvider>
  //   </Router>
  // );
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
