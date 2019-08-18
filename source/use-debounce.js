import React from 'react';

/** Returns a debounced version of `value`. Useful for stuff like autosuggest.

```js
const [state, setState] = useState();

const debouncedState = useDebounce(state, 200);
```
*/
export default function useDebounce(value, wait = 0) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(timerId);
  }, [value, wait]);

  return debouncedValue;
}
