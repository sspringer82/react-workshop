import { useState, useEffect } from 'react';

function useAPI<T>(url: string): { error: string; items: T[] } {
  const [items, setItems] = useState<T[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          setError('response not ok');
        }
      } catch (e) {
        setError('fetch failed');
      }
    })();
  }, [url]);

  return { error, items };
}

export default useAPI;
