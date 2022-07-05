import { ReactElement, useContext } from 'react';
import BooksContext from '../BooksContext';

function Navigation(): ReactElement {
  const { items } = useContext(BooksContext);
  return (
    <div className="navigation">
      <div>{items && items.length}</div>
    </div>
  );
}

export default Navigation;
