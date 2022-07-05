import BookListComponent from './books/list/BookList.container';
import './App.css';
import BooksProvider from './BooksProvider';
import Navigation from './nav/Navigation';

function App() {
  return (
    <BooksProvider>
      <Navigation />
      <BookListComponent />
    </BooksProvider>
  );
}

export default App;
