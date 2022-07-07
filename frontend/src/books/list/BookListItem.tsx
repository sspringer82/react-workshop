import { ReactElement } from 'react';
import { Book } from '../types/Book';
type Props = {
  book: Book;
  remove: (book: Book) => void;
};

function BookListItem({ book, remove }: Props): ReactElement {
  return (
    <tr>
      <td data-testid="title">{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td>
        <button
          onClick={() => {
            remove(book);
          }}
          data-testid="delete-btn"
        >
          löschen
        </button>
      </td>
    </tr>
  );
}

export default BookListItem;
