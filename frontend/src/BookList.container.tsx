import { ReactElement } from 'react';
import { Book } from './Book';
import BookList from './BookList';
import useAPI from './useAPI';

function BookListContainer(): ReactElement {
  const {
    error,
    items: books,
    isLoading,
  } = useAPI<Book>('http://localhost:3001/books');
  return <BookList error={error} books={books} isLoading={isLoading} />;
}

export default BookListContainer;
