import { ReactElement } from 'react';
import { Book } from './Book';
type Props = {
  book: Book;
};

function BookListItem({ book }: Props): ReactElement {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
    </tr>
  );
}

export default BookListItem;
