import { ReactElement } from 'react';
import { ClipLoader } from 'react-spinners';
import { Book } from '../types/Book';
import BookListItem from './BookListItem';

type Props = {
  error: string;
  books: Book[];
  isLoading: boolean;
};

function BookList({ error, books, isLoading }: Props): ReactElement {
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && (
        <div>
          <ClipLoader loading={true} size={150} />
        </div>
      )}
      {books && (
        <table>
          <thead>
            <tr>
              <th>Titel</th>
              <th>Autor</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookListItem key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default BookList;
