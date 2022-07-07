import { ReactElement } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { Book } from '../Book';
import { removeBook } from '../bookSlice';
type Props = {
  book: Book;
};

function BookListItem({ book }: Props): ReactElement {
  const dispatch = useAppDispatch();
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td>
        <button
          onClick={() => {
            dispatch(removeBook(book.id));
          }}
        >
          löschen
        </button>
      </td>
    </tr>
  );
}

export default BookListItem;
