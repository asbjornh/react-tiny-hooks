import React from 'react';

/** Attach an event listener to `window`.

```js
const [width, setWidth] = useState(0);
useEvent("resize", () => setWidth(window.innerWidth));
```

```js
// With dependency
const onKeyDown = useCallback(e => setSomething(e));
useEvent("keydown", onKeydown, [onKeyDown]);
```
*/
export default function useEvent(eventName, eventHandler, dependencies = []) {
  React.useEffect(() => {
    if (eventName && eventHandler) {
      window.addEventListener(eventName, eventHandler);
      return () => window.removeEventListener(eventName, eventHandler);
    }
  }, dependencies);
}
