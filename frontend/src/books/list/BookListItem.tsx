import { ReactElement, useContext } from 'react';
import BooksContext from '../../BooksContext';
import { Book } from '../types/Book';
type Props = {
  book: Book;
};

function BookListItem({ book }: Props): ReactElement {
  const { remove } = useContext(BooksContext);
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td>
        <button
          onClick={() => {
            remove(book);
          }}
        >
          löschen
        </button>
      </td>
    </tr>
  );
}

export default BookListItem;
