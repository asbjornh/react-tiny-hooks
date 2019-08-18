import React from 'react';

/** Returns the value of `value` from the previous render.

```js
const [value, setValue] = useState();
const previousValue = usePrevious(value);
```
 */
export default function usePrevious(value, initialValue) {
  const state = React.useRef(initialValue);

  React.useEffect(() => {
    state.current = value;
  }, [value]);

  return state.current;
}
