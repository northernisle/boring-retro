import { useRef, useEffect, useCallback, ChangeEvent } from 'react';

const useDebounceInput = (delay = 500) => {
  const timer = useRef(0);

  useEffect(() => {
    return clearTimeout(timer.current);
  }, []);

  const onChange = useCallback(
    (setState: (value: string) => void, callback: (value: string) => void) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;

        clearTimeout(timer.current);

        setState(value);
        timer.current = window.setTimeout(() => {
          callback(value);
        }, delay);
      },
    [delay]
  );

  return onChange;
};

export default useDebounceInput;
