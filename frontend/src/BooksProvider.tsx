import { ReactElement, ReactNode } from 'react';
import { Book } from './books/types/Book';
import BooksContext from './BooksContext';
import useAPI from './shared/hooks/useAPI';

type Props = {
  children: ReactNode;
};

function BooksProvider({ children }: Props): ReactElement {
  const value = useAPI<Book>(`${process.env.REACT_APP_BACKEND_URL}books`);
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export default BooksProvider;
