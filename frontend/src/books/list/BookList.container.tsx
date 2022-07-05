import { ReactElement, useContext } from 'react';
import BookList from './BookList';
import BooksContext from '../../BooksContext';

function BookListContainer(): ReactElement {
  const { error, items: books, isLoading } = useContext(BooksContext);
  return <BookList error={error} books={books} isLoading={isLoading} />;
}

export default BookListContainer;
