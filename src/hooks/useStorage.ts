import { useState, useCallback } from 'react';

export function useStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = useCallback((updater: T | ((prev: T) => T)) => {
    setValue(prev => {
      const next = typeof updater === 'function' ? (updater as (prev: T) => T)(prev) : updater;
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  }, [key]);

  return [value, setStoredValue] as const;
}
