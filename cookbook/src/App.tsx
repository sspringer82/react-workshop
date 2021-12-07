import { ReactElement } from 'react';
import './App.css';
import List from './list/RecipeList';

const App = (): ReactElement => {
  // const [show, setShow] = useState(false);
  return (
    <>
      {/* <List /> */}

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
    </>
  );
};

export default App;
