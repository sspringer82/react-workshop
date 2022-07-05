import { useState, useEffect } from 'react';

function useAPI<T extends { id: number }>(
  url: string
): {
  error: string;
  items: T[];
  isLoading: boolean;
  remove: (item: T) => Promise<void>;
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
        } else {
          setError('response not ok');
        }
      } catch (e) {
        setError('fetch failed');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  async function remove(item: T) {
    const response = await fetch(`${url}/${item.id}`, { method: 'DELETE' });
    if (response.ok) {
      setItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.id !== item.id)
      );
    }
  }

  return { error, items, isLoading, remove };
}

export default useAPI;
