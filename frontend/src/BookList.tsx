import { ReactElement, useEffect, useState } from 'react';
import { Book } from './Book';

function BookList(): ReactElement {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/books');

        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else {
          setError('response not ok');
        }
      } catch (e) {
        setError('fetch failed');
      }
    })();

    //   fetch('http://localhost:3001/books')
    //     .then((response) => response.json())
    //     .then((data) => setBooks(data));
  }, []);

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
