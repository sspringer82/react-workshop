import React from 'react';
import { Book } from './books/types/Book';

const BooksContext = React.createContext<{
  error: string;
  items: Book[];
  isLoading: boolean;
}>({ error: '', items: [], isLoading: false });

export default BooksContext;
