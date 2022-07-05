import { ReactElement } from 'react';
import BookList from './BookList';
import useBooks from './useBooks';

function BookListContainer(): ReactElement {
  const { error, books } = useBooks();
  return <BookList error={error} books={books} />;
}

export default BookListContainer;
