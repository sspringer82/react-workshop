import { useState, useEffect } from 'react';

type ReturnValue = {
  name: string;
};

export default function useProvideName(): ReturnValue {
  const [name, setName] = useState<string>('');

  function handleTheTimeout() {
    setTimeout(() => {
      setName('Lisa');
    }, 1000);
  }

  useEffect(() => {
    handleTheTimeout();
  }, []);

  return { name };
}
