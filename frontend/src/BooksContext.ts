import React from 'react';
import { Book } from './books/types/Book';

const BooksContext = React.createContext<{
  error: string;
  items: Book[];
  isLoading: boolean;
  remove: (book: Book) => Promise<void>;
}>({
  error: '',
  items: [],
  isLoading: false,
  remove: (book: Book) => Promise.resolve(),
});

export default BooksContext;
