import { ReactElement, useState } from 'react';
import './App.css';
import CustomHook from './demo/CustomHook/CustomHook';
import Dialog from './Dialog/Dialog';
import List from './list/RecipeList';

const App = (): ReactElement => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <List /> */}

      <CustomHook />

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
