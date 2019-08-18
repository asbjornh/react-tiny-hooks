import React from 'react';

import useEvent from './use-event';

const scrollEl =
  typeof document !== 'undefined'
    ? document.scrollingElement || document.documentElement || document.body
    : undefined;

/** Returns the current scroll position.

```js
const scrollPosition = useScrollPosition();
```
 */
export default function useScrollPosition() {
  const [pos, setPos] = React.useState(scrollEl ? scrollEl.scrollTop : 0);
  useEvent('scroll', () => scrollEl && setPos(scrollEl.scrollTop));
  return pos;
}
