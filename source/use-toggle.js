import React from 'react';

const cb = React.useCallback;

/** Returns a boolean flag (`value`) and functions for updating it.

```js
const [value, toggle, activate, deactivate] = useToggle();
```
*/
export default function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = cb(() => setValue(a => !a));
  const activate = cb(() => setValue(true));
  const deactivate = cb(() => setValue(false));
  return [value, toggle, activate, deactivate];
}
