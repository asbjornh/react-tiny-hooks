import React from 'react';

const cb = React.useCallback;

/** This hook counts things. Useful for things like slideshows/carousels.

```js
const [count, increase, decrease, setCount] = useCounter(0, 0, 10, 1);

// Or a slideshow version:
const [current, next, previous, goTo] = useCounter(0, 0, slides.length);
```
 */
export default function useCounter(
  initialValue = 0,
  min = 0,
  max = Infinity,
  step = 1
) {
  const [count, set] = React.useState(initialValue);

  const increase = cb(() => set(c => Math.min(max, c + step)), [min, step]);
  const decrease = cb(() => set(c => Math.max(min, c - step)), [max, step]);

  return [count, increase, decrease, set];
}
