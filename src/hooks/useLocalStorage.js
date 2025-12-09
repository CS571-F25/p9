import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue, isJSON = true) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? (isJSON ? JSON.parse(stored) : stored) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, isJSON ? JSON.stringify(state) : state);
  }, [key, state, isJSON]);

  return [state, setState];
}
