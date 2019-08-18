import React from 'react';
import useEvent from './use-event';

/** Returns a ref to be attached to a React element. Whenever a click event occurs outside of that ref, `callback` is called.

```jsx
const ref = useOnClickOutside(() => console.log("yay"));

return <div ref={ref} />;
```
*/
export default function useOnClickOutside(callback, dependencies = []) {
  const [node, setNode] = React.useState();

  useEvent(
    'click',
    e => node && node !== e.target && !node.contains(e.target) && callback(),
    dependencies.concat(node)
  );

  return setNode;
}
