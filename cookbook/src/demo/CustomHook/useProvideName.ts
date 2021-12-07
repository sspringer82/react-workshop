import { useState, useEffect } from 'react';

type ReturnValue = {
  name: string;
};

export default function useProvideName(): ReturnValue {
  const [name, setName] = useState<string>('');
  useEffect(() => {
    handleTheTimeout();
  }, []);
  function handleTheTimeout() {
    setTimeout(() => {
      setName('Lisa');
    }, 1000);
  }

  return { name };
}
