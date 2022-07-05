import { ReactElement, ReactNode } from 'react';
import { Book } from './books/types/Book';
import BooksContext from './BooksContext';
import useAPI from './shared/hooks/useAPI';

type Props = {
  children: ReactNode;
};

function BooksProvider({ children }: Props): ReactElement {
  const { error, items, isLoading } = useAPI<Book>(
    `${process.env.REACT_APP_BACKEND_URL}books`
  );
  return (
    <BooksContext.Provider value={{ error, items, isLoading }}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;
