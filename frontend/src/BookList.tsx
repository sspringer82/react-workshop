import { ReactElement } from 'react';
import { Book } from './Book';

type Props = {
  error: string;
  books: Book[];
};

function BookList({ error, books }: Props): ReactElement {
  return (
    <>
      {error && <div>{error}</div>}
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
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default BookList;
