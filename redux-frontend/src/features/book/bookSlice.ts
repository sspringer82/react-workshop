import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Book } from './Book';
import { loadData, removeData } from './booksAPI';

export interface BookState {
  books: Book[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BookState = {
  books: [],
  status: 'idle',
};

export const fetchData = createAsyncThunk('books/fetch', loadData);

export const removeBook = createAsyncThunk('books/remove', removeData);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.books = action.payload;
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.books = state.books.filter((b) => b.id !== action.payload);
    });
  },
});

export const selectBooks = (state: RootState) => state.book.books;

export default bookSlice.reducer;
