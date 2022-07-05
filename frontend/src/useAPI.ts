import { useState, useEffect } from 'react';

function useAPI<T>(url: string): {
  error: string;
  items: T[];
  isLoading: boolean;
} {
  const [items, setItems] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setItems(data);
          setIsLoading(false);
        } else {
          setError('response not ok');
        }
      } catch (e) {
        setError('fetch failed');
      }
    })();
  }, [url]);

  return { error, items, isLoading };
}

export default useAPI;
