import { ReactElement } from 'react';
import { Book } from './Book';
import BookList from './BookList';
import useAPI from './useAPI';

function BookListContainer(): ReactElement {
  const {
    error,
    items: books,
    isLoading,
  } = useAPI<Book>(`${process.env.REACT_APP_BACKEND_URL}books`);
  return <BookList error={error} books={books} isLoading={isLoading} />;
}

export default BookListContainer;
