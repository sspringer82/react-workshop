import { useState, useEffect } from 'react';
import { Book } from './Book';

function useBooks(): { error: string; books: Book[] } {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/books');

        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else {
          setError('response not ok');
        }
      } catch (e) {
        setError('fetch failed');
      }
    })();

    //   fetch('http://localhost:3001/books')
    //     .then((response) => response.json())
    //     .then((data) => setBooks(data));
  }, []);

  return { error, books };
}

export default useBooks;
