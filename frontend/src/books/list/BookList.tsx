import { ReactElement, useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { Book } from '../types/Book';
import { TH } from './BookList.styles';
import BookListItem from './BookListItem';
import './BookList.css';
import BooksContext from '../../BooksContext';

type Props = {
  error: string;
  books: Book[];
  isLoading: boolean;
};

function BookList({ error, books, isLoading }: Props): ReactElement {
  const { remove } = useContext(BooksContext);
  return (
    <div className="BookList">
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
              <TH pink>
                <span>Titel</span>
              </TH>
              <TH>Autor</TH>
              <TH pink>ISBN</TH>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookListItem key={book.id} book={book} remove={remove} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookList;
