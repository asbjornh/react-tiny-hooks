import React from 'react';

/** Returns a boolean indicating whether the component is currently mounted. Useful for server side rendering.

```js
const isMounted = useIsMounted();
```
*/
export default function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  return isMounted;
}
