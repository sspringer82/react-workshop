import { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchData, selectBooks } from '../bookSlice';
import BookListItem from './BookListItem';

function BookList(): ReactElement {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const books = useAppSelector(selectBooks);
  return (
    <>
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
